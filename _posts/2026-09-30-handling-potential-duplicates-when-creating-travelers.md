---
layout: post
title: "Handling potential duplicates when creating travelers"
date: 2026-09-30 09:30:00 -0700
description: "Use Person detectDuplicate on insert, handle candidate records, and understand the matching limits for incomplete traveler profiles."
---

When creating a traveler, an integration can ask the Person API to check for similar existing profiles before saving. Set `detectDuplicate` to `true` on the new person and handle potential matches as a decision for the caller.

This guide covers the 1.8.2 contract. Recorded dev-staging QA on September 28 verified the opt-in check, returned candidates, and matching behavior. Check your target environment's [Version]({{ '/api/Version.html' | relative_url }}) before adopting it; staging verification does not establish production availability.

## Request detection on insert

The check runs when the save action is an **insert** and `detectDuplicate` is explicitly `true`. Omitting the flag or setting it to `false` skips detection. Setting it on an update to an existing person does not run the check.

For example, this illustrative new-person body requests detection through `POST /person`:

```json
{
  "recNo": null,
  "firstName": "Alex",
  "lastName": "Example",
  "birthdayDay": 22,
  "birthdayMonth": 9,
  "birthdayYear": 1990,
  "activeStatus": 1,
  "detectDuplicate": true,
  "personCommunicationLink": [
    {
      "person_recNo": null,
      "communication_recNo": null,
      "communication": {
        "recNo": null,
        "type": 2,
        "value": "alex@example.com",
        "isPrimary": true
      }
    }
  ]
}
```

Communication type `2` is Email. Include the traveler's actual identity and contact details in your normal creation payload; detection does not replace other save validation. Physical address and primary phone information can also contribute to matching when supplied.

## Handle the duplicate result

If candidates are found, the attempted insert raises a duplicate-detection error instead of creating the traveler. The direct AppServer HTTP endpoint returns **HTTP 400** with **`resultCode: 960`**, plus `newRecord` and `duplicateRecords`.

Read the structured error body so your integration can distinguish this result from other save errors. An intermediary client API can map the HTTP status differently; recorded UI-path QA observed HTTP 409. Do not require HTTP 409 when calling AppServer directly.

This is an **abbreviated, illustrative error body**, not a captured response:

```json
{
  "resultCode": 960,
  "resultDescription": "person: Duplicate records found.",
  "method": "DuplicateDetection",
  "newRecord": {
    "type": "person",
    "firstName": "Alex",
    "lastName": "Example",
    "birthdayDay": 22,
    "birthdayMonth": 9,
    "birthdayYear": 1990,
    "primaryEmail": "alex@example.com"
  },
  "duplicateRecords": [
    {
      "recNo": 1001,
      "firstName": "Alex",
      "lastName": "Example",
      "birthdayDay": 22,
      "birthdayMonth": 9,
      "birthdayYear": 1990,
      "primaryEmail": "alex@example.com",
      "similarityScore": 100
    }
  ]
}
```

Candidate records include their `recNo`, name, birthday components, physical address, primary phone, primary email, and similarity score. Use the candidate's `recNo` to identify an existing traveler; it is not the ID of a newly created record.

| Save outcome | Integration behavior |
| --- | --- |
| Successful save | Continue with the returned person ID |
| `resultCode: 960` | Present candidates and let the caller choose an existing traveler, correct the input, or deliberately create a separate person |
| Another error | Handle the reported save or validation failure |

Do not automatically retry with detection disabled. If the caller confirms that this is a separate person, a deliberate retry with `detectDuplicate: false` skips the similarity check while retaining normal save validation. Detection does not merge records.

## Understand what contributes to a match

The server uses a weighted similarity comparison over the supplied identity fields:

| Field | Matching behavior |
| --- | --- |
| First and last names | Scored separately using fuzzy text matching |
| Birthday | Compared as `MMDDYYYY` text; missing components are zero-filled, such as `09220000` for September 22 with no year |
| Physical address | Street address 1, city, state/province, and postal code contribute separately |
| Primary phone | Compares phone components rather than display formatting, with a text fallback when the number cannot be parsed |
| Primary email | Uses the primary email value |

The default weights are equal and the default threshold is `90`. The server returns up to five qualifying candidates, highest score first. These scores measure similarity; they are not a probability that two records represent the same person. Do not depend on a stable order for tied scores.

Weights and the threshold can be configured by the server operator. They are not per-request options, so do not assume every environment uses the defaults.

## Account for incomplete existing profiles

Missing information is treated differently on the two sides of the comparison. A field omitted from the new person's data does not contribute to the score. When that field is supplied for the new person but absent from an existing profile, the existing profile receives zero for that component while its weight still counts.

Consequently, an existing traveler with only a matching first and last name can fall below the threshold when the new payload also includes birthday, address, phone, and email. Recorded staging QA demonstrated this behavior. A successful insert with detection enabled therefore does **not** prove that no duplicate exists.

Supply accurate data and retain an explicit search or review path when the caller already suspects that a traveler exists. Do not remove known fields merely to raise a similarity score.

## Check the integration before adopting it

In a test environment, verify a distinct traveler, a matching traveler that returns candidates, a partial birthday, and an existing profile with sparse data. Confirm that the candidate response does not trigger an automatic retry or appear as a successful creation.

The [Person reference]({{ '/api/Person.html' | relative_url }}) documents `detectDuplicate` in the 1.8.2.6 contract. The [supplier duplicate-detection article]({% post_url 2026-08-21-supplier-duplicate-detection %}) describes a similar caller decision, but its matching fields are not identical to Person's.
