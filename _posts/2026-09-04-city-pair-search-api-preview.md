---
layout: post
date: 2026-09-04 09:00:00 -0700
title: "Developer preview: City Pair Search API"
description: "A first look at City Pair Search in AppServer 1.7.7.5, covering route results, segment fares, and the current preview scope."
---

The API documentation refresh for AppServer 1.7.7.5 includes [`AirlineCityPairSearch`]({{ '/api/AirlineCityPairSearch.html' | relative_url }}), which builds origin/destination results from confirmed air reservations. The base search and segment-calculation work has passed recorded API QA, giving integrators a useful preview of the data behind the planned City Pair Report.

As of September 4, 2026, the dev-staging API reports version 1.7.7.5; the dev and production APIs report 1.7.6.9. This preview describes the dev-staging implementation. The complete City Pair Report remains in development.

## What the search returns

Results include the reservation record number, ticket or confirmation number, traveler name, airline, fare, fare basis, and city pair. The city pair uses the form `LAX/JFK`.

Connections contribute to the route's total fare. The airline and fare basis come from the origin segment, even when a connecting segment uses another airline.

{% include city-pair-example.html %}

Blank airport codes are preserved, so consumers should handle results with an incomplete city pair.

## Filtering and contract changes

The base search supports supplier, client, branch, air travel subcategory, reservation booking dates, and city-pair departure dates. The departure-date filter applies to the origin segment of the city pair.

The supplier filter matches the **reservation supplier profile**. The returned `airline` identifies the **origin segment's airline**. These represent different data: filtering by supplier does not filter individual segments by carrier.

If you used the earlier development reference, update these names:

| Earlier reference | Current reference |
| --- | --- |
| `providerCode` | `airline` |
| `reservationDepartDateTimeFrom` | `cityPairDepartDateTimeFrom` |
| `reservationDepartDateTimeTo` | `cityPairDepartDateTimeTo` |

Consult the [API reference]({{ '/api/AirlineCityPairSearch.html' | relative_url }}) for parameter types and result columns. Check your target environment's [`Version`]({{ '/api/Version.html' | relative_url }}) before adopting the preview contract.

## What remains

Origin- and destination-airport filters are still in progress. The report screen, presentation and counting rules, email output, and PDF/CSV exports remain separate work. This milestone establishes the base API and segment calculations; production availability and the complete reporting workflow will need a later update.
