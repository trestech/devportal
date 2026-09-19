---
layout: post
title: "Migrating TripSearch to reservation remarks"
date: 2026-09-18 09:00:00 -0700
description: "Prepare TripSearch integrations for reservationRemarks, including per-entry matching, internal remarks, and changes to the deprecated itinerary-remarks field."
---

If your integration filters or displays reservation itinerary remarks, the AppServer 1.8.1.5 development contract requires a migration to `reservationRemarks`. The change affects both the search parameter and the selected result column.

Recorded QA covers the new filter and column in version 1.8.1.5. This article describes that development milestone; it does not establish production availability. Check your target environment's [Version]({{ '/api/Version.html' | relative_url }}) before changing a deployed integration.

## Replace both uses of the old name

| Use | Old contract | New contract |
| --- | --- | --- |
| Search parameter | `reservationItineraryRemarks` is deprecated and no longer applies a filter | `reservationRemarks` filters individual reservation remark entries |
| Result column | `reservationItineraryRemarks` is deprecated and evaluates to null | `reservationRemarks` combines the reservation's remark entries |

Treat this as a behavior change, not just a label change. Sending the old filter does not constrain the results in this implementation. Update saved request templates and explicit column selections together.

The new filter and column include **internal and client-facing reservation remarks**, regardless of their Show On settings. Do not use the combined column as a substitute for selecting remarks intended for a client document.

## Match entries, then read the combined column

This partial parameter object for `TripSearch` searches for a remark containing `transfer` and requests the reservation identity and remarks:

```json
{
  "reservationRemarks": {
    "compareCondition": 6,
    "value": ["transfer"]
  },
  "includeCols": ["reservationRecNo", "reservationRemarks"]
}
```

Condition `6` is `Contains`. Add the trip, date, or other constraints appropriate to your query. The filter tests each stored remark separately. A reservation qualifies when an entry satisfies the comparison; the result column still contains all of that reservation's remarks.

For example, consider these illustrative entries on one reservation:

| Stored entry | Contains `transfer`? | Included in the combined column? |
| --- | --- | --- |
| `Airport transfer confirmed` | Yes | Yes |
| `Bring a passport` | No | Yes |

Negative comparisons also apply to individual entries. With these same entries, `NotContaining transfer` can match because `Bring a passport` satisfies it. It does **not** mean that no remark on the reservation contains `transfer`.

`Blank` and `NotBlank` test whether remark rows exist: `Blank` selects reservations with no remark entries, while `NotBlank` requires at least one. They do not test whether the rendered text looks empty.

## Account for stored HTML

The column joins entries with `<br>` and retains HTML already present in the remarks. It is not a plain-text-only result. Choose an appropriate HTML or plain-text conversion path for your output, and do not depend on a particular order of entries in the aggregation.

The filter also operates on the stored text, including HTML tags. For example, the stored value `<p>Airport transfer confirmed</p>` contains `transfer`, but an equality comparison against `Airport transfer confirmed` alone will not match that stored value. Recorded QA explicitly notes this distinction.

## Check the contract you are adopting

The portal's [TripSearch reference]({{ '/api/TripSearch.html' | relative_url }}) now describes the 1.8.1.5 contract. The [ReservationRemarks reference]({{ '/api/ReservationRemarks.html' | relative_url }}) documents the remark entries and their view options. A reference update does not establish that your target environment runs that version.

Before adopting the change, verify the target version, replace the old parameter and column names, and check representative positive, negative, and blank searches. Review any downstream client-facing output because the new column includes internal remarks as well.
