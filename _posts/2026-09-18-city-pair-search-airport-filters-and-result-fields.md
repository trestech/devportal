---
layout: post
title: "City Pair Search: airport filters and updated result fields"
date: 2026-09-18 09:00:00 -0700
description: "An updated City Pair API preview covering origin and destination airport filters, trip identifiers, and the provider result field."
---

The [September 4 preview]({{ '/2026/09/04/city-pair-search-api-preview.html' | relative_url }}) introduced the City Pair Search API. The development contract now adds origin and destination airport filters, a trip identifier, and an updated carrier field name.

Recorded dev-staging QA covers the airport filters in AppServer 1.8.1.4 and a subsequent connection-handling fix in 1.8.1.5. This remains an API preview: production availability and completion of the broader City Pair Report are not established by those checks.

## Select the endpoints of a city pair

Use `cityPairDepartCityCode` for the origin and `cityPairArriveCityCode` for the destination. These filters evaluate the endpoints of the constructed city pair, rather than requiring every connecting segment to use the specified airport.

This partial parameter object for `AirlineCityPairSearch` selects city pairs from `LAX` to `JFK`:

```json
{
  "cityPairDepartCityCode": {
    "compareCondition": 1,
    "value": ["LAX"]
  },
  "cityPairArriveCityCode": {
    "compareCondition": 1,
    "value": ["JFK"]
  },
  "includeCols": [
    "trip_recNo",
    "reservation_recNo",
    "provider",
    "cityPair",
    "fare"
  ]
}
```

Condition `1` is `Equal`. Add booking-date, client, supplier, or other constraints to bound the search for your integration.

For an illustrative outbound journey through Chicago, with `ORD` marked as a connection, the comparison works like this:

| Journey | Constructed city pair | Matches LAX to JFK? |
| --- | --- | --- |
| LAX → ORD → JFK | `LAX/JFK` | Yes |
| JFK → ORD → LAX | `JFK/LAX` | No |

The two airport filters are directional. To include return journeys, choose filter values that cover the intended return endpoints too.

Each filter can accept multiple airport codes. With condition `1`, an endpoint can match any code in its corresponding array. Both the origin and destination filters must pass. Two arrays are independent sets; they do not describe paired routes by array position.

## Update selected fields and response readers

| Earlier preview | Updated development contract |
| --- | --- |
| `airline` | `provider` |
| No trip identifier in the preview's result list | `trip_recNo` identifies the trip |
| `reservation_recNo` | Remains the reservation identifier |

Update both `includeCols` and the code that reads returned carrier values. The `provider` field comes from the origin segment. The supplier filter still refers to the reservation's supplier profile, which is a separate concept.

The new `trip_recNo` field lets an integration associate a route result with its trip without treating a reservation identifier as a trip identifier.

## Keep connection rules and availability explicit

The 1.8.1.5 fix addresses a connecting segment incorrectly becoming a city-pair origin. Recorded staging QA verifies origins marked `O` and the single-segment reservation case. Keep connection indicators accurate when preparing source air segments; they affect where a journey starts and ends.

The [AirlineCityPairSearch reference]({{ '/api/AirlineCityPairSearch.html' | relative_url }}) now documents these additions in the 1.8.1.5 contract. Check the [Version endpoint]({{ '/api/Version.html' | relative_url }}) in your target environment and validate its contract before adopting this preview.

These API milestones do not establish completion of the report screen, email workflow, or PDF and CSV exports. Use this update to prepare integrations for the changed search contract.
