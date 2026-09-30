---
layout: post
title: "Loading and saving reservation remarks with Trip"
date: 2026-09-30 09:00:00 -0700
description: "Migrate Trip integrations from itineraryRemarks and supplierRemarks to reservationRemarks entries, with rich text, display flags, and safe load/save examples."
---

Reservation remarks are now a collection of entries on each reservation. If your integration loads or saves trips, replace the reservation's `itineraryRemarks` and `supplierRemarks` strings with its `reservationRemarks` array. Each entry has its own text, record ID, and display settings.

This guide covers the reservation-remarks contract introduced in the 1.8.1 release family. Check your target environment's [Version]({{ '/api/Version.html' | relative_url }}) when migrating. The [TripSearch migration guide]({% post_url 2026-09-18-migrating-tripsearch-to-reservation-remarks %}) covers the separate search parameter and result-column changes.

## Read the entries inside each reservation

The load route remains `GET /trip/{recNo}`. Within each trip, follow `tripReservationLink[]` to its `reservation` object, then read `reservationRemarks[]`.

This is an **abbreviated loaded trip object**, with illustrative IDs and unrelated fields omitted:

```json
{
  "recNo": 1001,
  "tripReservationLink": [
    {
      "trip_recNo": 1001,
      "reservation_recNo": 2001,
      "reservation": {
        "recNo": 2001,
        "reservationRemarks": [
          {
            "recNo": 3001,
            "reservation_recNo": 2001,
            "remarks": "<p>Airport transfer confirmed.</p>",
            "viewOptions": 7
          },
          {
            "recNo": 3002,
            "reservation_recNo": 2001,
            "remarks": "<p>Ask the supplier to reconfirm pickup.</p>",
            "viewOptions": 0
          }
        ]
      }
    }
  ]
}
```

Keep each remark's `recNo` and `reservation_recNo` when editing it. The trip ID, reservation ID, and remark ID identify different records.

## Set display options on each remark

`viewOptions` on a remark is a bitmask. Combine the values for the documents where that entry should appear:

| Value | Display option |
| --- | --- |
| `0` | None; an internal remark with no document selected |
| `1` | Trip Proposal |
| `2` | Client Itinerary |
| `4` | Trip Statement |
| `7` | All three: `1 + 2 + 4` |

For example, `3` selects Trip Proposal and Client Itinerary. Set this value on the **remark entry**; it is separate from the reservation's own `viewOptions` and from the flags used by trip-level `tripRemarks`.

These flags control document display. They do not hide internal entries from an authorized trip load, and the TripSearch remarks column includes internal entries too. If your integration produces client-facing output, select the appropriate entries instead of printing the entire collection.

## Save changes through Trip

The save routes remain `POST /trip` and `POST /trip/refresh`. The latter returns refreshed data, including IDs assigned to new entries.

For an existing trip, keep the loaded data as `oldData`, copy it to `newData`, and change the copy. Send both arrays inside `oldNewDataset`. This **abbreviated update body** changes the text of one existing remark; its IDs and display options stay the same:

```json
{
  "oldNewDataset": {
    "oldData": [
      {
        "recNo": 1001,
        "tripReservationLink": [
          {
            "trip_recNo": 1001,
            "reservation_recNo": 2001,
            "reservation": {
              "recNo": 2001,
              "reservationRemarks": [
                {
                  "recNo": 3001,
                  "reservation_recNo": 2001,
                  "remarks": "<p>Airport transfer confirmed.</p>",
                  "viewOptions": 7
                }
              ]
            }
          }
        ]
      }
    ],
    "newData": [
      {
        "recNo": 1001,
        "tripReservationLink": [
          {
            "trip_recNo": 1001,
            "reservation_recNo": 2001,
            "reservation": {
              "recNo": 2001,
              "reservationRemarks": [
                {
                  "recNo": 3001,
                  "reservation_recNo": 2001,
                  "remarks": "<p>Airport transfer confirmed for 10:00 AM.</p>",
                  "viewOptions": 7
                }
              ]
            }
          }
        ]
      }
    ]
  }
}
```

The example omits unrelated data from **both** sides. In a load/edit/save flow, preserve unchanged fields and child entries in the copied data. An entry present in `oldData` but absent from `newData` is a deletion; this envelope is not a merge-patch request.

| Operation | Change in `newData` |
| --- | --- |
| Edit | Keep the existing IDs; change `remarks`, `viewOptions`, or both |
| Add | Append an entry with `recNo: null`, the owning `reservation_recNo`, text, and display flags |
| Delete | Remove the intended entry while retaining the others |

After saving, reload the trip with `GET /trip/{recNo}` and use that loaded data as the baseline for the next edit. Do not continue submitting null IDs for entries that have already been saved.

## Apply the same change to sub-reservations

Cruise and tour sub-reservations also have their own `reservationRemarks` collections. Within a parent reservation, follow:

- `cruiseReservation.cruiseSubReservationLink[]` to `cruiseSubReservation.reservationRemarks[]`.
- `tourReservation.tourSubReservationLink[]` to `tourSubReservation.reservationRemarks[]`.

Use the **sub-reservation's** ID as each entry's `reservation_recNo`. Keep the entry beneath that sub-reservation when saving the trip; moving it into the parent reservation changes where the remark belongs.

## Retire the old fields and preserve rich text

The upgrade migrates nonempty existing values into separate entries:

| Former field | Migrated entry |
| --- | --- |
| `itineraryRemarks` | Text converted to HTML; `viewOptions: 7` |
| `supplierRemarks` | Text converted to HTML; `viewOptions: 0` |

This is an upgrade migration, not ongoing synchronization between old and new fields. Do not recreate these entries on every load or continue writing the deprecated strings expecting the collection to change.

The `remarks` value supports rich text and can contain HTML. Preserve that markup when round-tripping data; use an appropriate safe renderer or text conversion when displaying it elsewhere. Saving a remark can also fail validation if it contains credit-card or CVV data, so keep payment data out of remark text.

See the [Trip reference]({{ '/api/Trip.html' | relative_url }}) for the surrounding model and the [ReservationRemarks reference]({{ '/api/ReservationRemarks.html' | relative_url }}) for the entry fields.
