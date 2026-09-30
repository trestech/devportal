---
layout: post
title: "Migrating person cards to personCardLink"
date: 2026-09-30 09:15:00 -0700
description: "Update person load/save integrations for personCardLink, including nested card data, record IDs, masked numbers, and old/new save requests."
---

The 1.8.2 Person API contract replaces the person's flat `card` array with `personCardLink`. Each link contains the person ID, the card ID, and a nested `card` object. Update both response parsing and save payloads together.

This format has recorded staging QA on API 1.8.2.5. As of September 30, staging reports 1.8.2.6 and production reports 1.8.1.6. Check your target environment's [Version]({{ '/api/Version.html' | relative_url }}) before switching formats; the production version observed on that date predates this change.

## Move card data beneath the link

The load route remains `GET /person/{recNo}`. The property name is **`personCardLink`**, and its value is an array. Each link's **`card`** is a single object.

| Previous location | New location |
| --- | --- |
| `person.card[]` | `person.personCardLink[]` containing nested `card` objects |
| `card[].person_recNo` | `personCardLink[].person_recNo` |
| `card[].recNo` | `personCardLink[].card_recNo` and the nested `card.recNo` |
| `card[].cardNumber` and other card fields | `personCardLink[].card.cardNumber` and the other nested card fields |

Here is the new shape as an **abbreviated loaded person object**, using illustrative IDs and a fictional loyalty card:

```json
{
  "recNo": 1001,
  "personCardLink": [
    {
      "person_recNo": 1001,
      "card_recNo": 2001,
      "card": {
        "recNo": 2001,
        "type": 2,
        "cardNumber": "EXAMPLE-LOYALTY-001",
        "description": "Loyalty account"
      }
    }
  ]
}
```

For an existing card, preserve all three identifiers: the link's `person_recNo`, its `card_recNo`, and the nested card's `recNo`. The last two refer to the same card. The old `card.person_recNo` field is deprecated; the link now establishes the relationship.

This applies to all card types: `1` = Credit/Debit, `2` = Loyalty, and `3` = Travel Document. The restructure separates the card from its person relationship; it does not by itself introduce a client-profile card-sharing API.

## Create a person with a card

Send new person data to `POST /person`, or use `POST /person/refresh` to receive refreshed data with the assigned IDs. For a new person and a new card, the IDs start as null:

```json
{
  "recNo": null,
  "firstName": "Alex",
  "lastName": "Example",
  "activeStatus": 1,
  "personCardLink": [
    {
      "person_recNo": null,
      "card_recNo": null,
      "card": {
        "recNo": null,
        "type": 2,
        "cardNumber": "EXAMPLE-LOYALTY-001",
        "description": "Loyalty account"
      }
    }
  ]
}
```

This illustrative request uses a loyalty card so no payment-card number is needed. The server assigns the card ID and connects it to the person. Read the refreshed data or reload the person before editing the saved card.

## Update an existing card with old and new data

For an existing person, use `oldNewDataset` with arrays named `oldData` and `newData`. Start with the loaded person, copy it, and edit the copy. This **abbreviated update body** changes a loyalty card's description through `POST /person/refresh`:

```json
{
  "oldNewDataset": {
    "oldData": [
      {
        "recNo": 1001,
        "personCardLink": [
          {
            "person_recNo": 1001,
            "card_recNo": 2001,
            "card": {
              "recNo": 2001,
              "type": 2,
              "cardNumber": "EXAMPLE-LOYALTY-001",
              "description": "Loyalty account"
            }
          }
        ]
      }
    ],
    "newData": [
      {
        "recNo": 1001,
        "personCardLink": [
          {
            "person_recNo": 1001,
            "card_recNo": 2001,
            "card": {
              "recNo": 2001,
              "type": 2,
              "cardNumber": "EXAMPLE-LOYALTY-001",
              "description": "Preferred loyalty account"
            }
          }
        ]
      }
    ]
  }
}
```

The example omits unrelated data from both sides. Preserve unchanged fields and links when copying a full loaded person. A link present in `oldData` but absent from `newData` is treated as a deletion. Setting `personCardLink` to an empty array on the new side removes all links supplied on the old side; do this only when removal is intended.

To add a new card to an existing person, append a new link on the new side with the existing `person_recNo`, `card_recNo: null`, and a nested new card with `recNo: null`. Keep the existing links. Do not reset IDs on existing cards or rebuild the whole list as new cards on every save.

## Keep payment-card handling intact

Credit/debit card numbers are validated and tokenized when supplied as new or changed values. Loaded card data contains a masked `cardNumber` and can include a `cardNumberToken`. Keep these loaded values unchanged when editing unrelated fields such as `expirationDate` or `nameOnCard`; do not present a masked number as a new card number.

The card's `type` remains insert-only. To replace a loyalty card with a credit/debit card, create the appropriate new card rather than changing the existing card's type. `cvvCode` is deprecated; omit it from saved-person payloads and do not put it in descriptions or other text fields.

Existing cards are migrated to the link structure by the database upgrade. Integrations should read those links and retain their IDs, rather than creating replacement cards merely to adopt the new JSON shape.

The portal's [Person reference]({{ '/api/Person.html' | relative_url }}) documents the 1.8.2.6 contract, including `personCardLink`. Verify the version served by each environment you integrate with before adopting this structure.
