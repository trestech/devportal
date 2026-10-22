---
layout: post
title: "Developer preview: Sign in with Tres for browser apps"
description: "Use the hosted Tres sign-in popup to obtain an AppServer identity token from a browser app, and what the dev-staging preview does not cover yet."
---

Browser apps can let Tres users sign in through a hosted Tres page instead of collecting Tres credentials themselves. Your app opens the hosted page in a popup, the user signs in with a Tres username and password, Google, or Microsoft, and the popup posts the result back to your page.

As of October 22, 2026, hosted sign-in is available on dev-staging only, at `https://auth-dev-staging.trestechnologies.com`. A static browser app has used it from both localhost and an Azure Static Web Apps origin, then called the dev-staging and dev APIs with the returned credential for a test agency. Cert and production hosts do not exist yet.

## How the handoff works

Hosted sign-in is a popup plus `postMessage`. It is not an OAuth authorization-code flow: there is no `/authorize` or `/token` endpoint, no client ID, no scopes, and no refresh token.

1. From a user's click, open `https://auth-dev-staging.trestechnologies.com/?redirect_uri=<your origin>` in a popup and keep the window handle. Always pass `redirect_uri`, URL-encoded; the hosted page sends its result only to that origin.
2. Listen for `message` events. Accept a message only when `event.origin` is the hosted sign-in origin, `event.source` is the popup you opened, and `event.data.type` is `"tres_auth"`.
3. Read `event.data.data.sessionId`. It is an AppServer identity token, the same kind of credential the [Login]({{ '/api/Login.html' | relative_url }}) method returns. Send it as `Authorization: Bearer <sessionId>` on API calls.
4. Handle a blocked popup, a popup the user closes, a timeout, and an unusable response. Remove your listener when the attempt ends.

The message also contains `jwtToken`. That token is for Tres's own web clients; do not send it to the API in place of `sessionId`.

## Example

```js
const AUTH_ORIGIN = "https://auth-dev-staging.trestechnologies.com";

function signInWithTres() {
  const url = new URL(AUTH_ORIGIN);
  url.searchParams.set("redirect_uri", window.location.origin);
  return new Promise((resolve, reject) => {
    const popup = window.open(url.href, "_blank", "popup,width=520,height=720");
    if (!popup) return reject(new Error("Allow popups to sign in with Tres."));

    let settled = false;
    let closedAt = 0;
    const finish = (sessionId, error) => {
      if (settled) return;
      settled = true;
      window.removeEventListener("message", receive);
      clearInterval(closedTimer);
      clearTimeout(timeout);
      popup.close();
      sessionId ? resolve(sessionId) : reject(new Error(error));
    };
    const receive = (event) => {
      if (event.origin !== AUTH_ORIGIN || event.source !== popup) return;
      if (event.data?.type !== "tres_auth") return;
      const sessionId = event.data.data?.sessionId;
      finish(typeof sessionId === "string" && sessionId, "Sign-in did not return a session.");
    };
    // The popup closes itself after posting; give that message time to arrive
    // before treating the closed window as a cancellation.
    const closedTimer = setInterval(() => {
      if (!popup.closed) return;
      closedAt ||= Date.now();
      if (Date.now() - closedAt >= 750) finish(null, "Sign-in window was closed.");
    }, 250);
    const timeout = setTimeout(() => finish(null, "Sign-in timed out."), 5 * 60 * 1000);
    window.addEventListener("message", receive);
  });
}

signInButton.addEventListener("click", async () => {
  const sessionId = await signInWithTres();
  const response = await fetch(`https://api-dev.trestechnologies.com/person/${personRecNo}`, {
    headers: { Authorization: `Bearer ${sessionId}` },
  });
  // ...
});
```

Confirm sign-in by completing an authenticated API call. Receiving the popup message alone does not prove your app can reach the API.

## Handling the credential

- The token payload is JSON and includes `alias`, `userName`, and `expireDate`. Reading those fields for display or expiry is fine; the API still validates the token on every call.
- There is no refresh. When the token expires, run the popup again. If your app stays open for long sessions, plan where the user re-authenticates.
- The message currently carries the full sign-in response, including user, agency, and permission data. Keep only the session information you need, and do not log or persist the full response or the token.
- The hosted page's help screen describes a `<tres-auth>` script component. Do not use it yet; use the popup contract above.

## Browser calls and CORS

If your app calls the Tres API directly from the browser, the API must allow your origin, methods, and headers, including `Authorization`, through CORS. That is configured per API environment. Ask Tres to confirm your origin for each environment you test against.

If your app calls the Tres API from its own backend, those server-to-server calls do not need CORS. Moving a hosted sign-in into a backend session has not been demonstrated yet. Contact Tres before building that path.

A local development proxy can hide CORS problems. Test from your deployed origin before relying on the integration.

## What remains

- **Cert and production.** Hosted sign-in exists only on dev-staging, and a dev-staging credential has been verified only against the dev-staging and dev APIs for a test agency.
- **Embedded hosts.** The flow requires your page to open a popup and receive `postMessage` from it. If your app runs inside another application's frame, that host may block popups, leave `window.opener` empty, or block the message through its content security policy. There is no redirect-based or device-code alternative yet.
- **Minimal handoff and refresh.** A token-only message and a refresh contract have not been built.

## Before you start

Tell Tres:

1. Your app's origins for development, testing, and production.
2. Whether your app runs inside a host application, and whether that host allows popups and `postMessage`. Mention any provider sign-in, such as Google or Microsoft, you have already done from inside it.
3. Which Tres API environments you plan to test against, and whether you call the API from the browser, your backend, or both.
4. What you need for a trial on dev: sample code, a test agency, or a test account.
5. What your app should do when the Tres token expires mid-session.
