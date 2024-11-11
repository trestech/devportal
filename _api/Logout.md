---
layout: api_page
title: "Logout"
description: "The logout method takes an identityToken via an authorization header using Bearer Token and terminates the connection to the agency context"
assembly_version: "1.4.4.3"
---

The logout method takes an identityToken via an authorization header using Bearer Token and terminates the connection to the agency context.  After calling logout, the identityToken is no longer valid.  Identity tokens expire automatically, but it’s recommended to call logout when done.

Most error responses when calling logout are due to a missing, invalid, or expired identity token.

| Output Parameter | Description |
| ---------------- | ----------- |
| resultCode | Result code |
| resultDescription | Text that describes the result |

| Result code | Description |
| ----------- | ----------- |
| 0 | success |
| 300 | Invalid identity token |
| 301 | Identity token is expired |
| 302 | Identity token missing |
| 303 | Signature Mismatch |
| 304 | Missing Secret |
| 305 | Identity Token not found in store |

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |

#### Example request
```sh
GET https://api-dev.trestechnologies.com/logout
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example success response
```sh
Status: 200 Ok
{
    "resultCode": 0,
    "resultDescription": "Logout Successful"
}
```

#### Example error response
```sh
Status: 401 Unauthorized
{
    "resultCode": 302,
    "resultDescription": "Identity token is expired",
    "method": "identityToken"
}
```
