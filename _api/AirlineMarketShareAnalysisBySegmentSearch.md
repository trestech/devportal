---
layout: api_page
title: "AirlineMarketShareAnalysisBySegmentSearch"
description: ""
assembly_version: "1.8.4.7"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `airlineMarketShareAnalysisBySegment` | 
| `summaryCount` | `int` |  | `airlineMarketShareAnalysisBySegment` | 
| `createDateTime` | `DateTimeOffset` |  | `airlineMarketShareAnalysisBySegment` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `airlineMarketShareAnalysisBySegment` | 
| `trip_recNo` | `long` |  | `airlineMarketShareAnalysisBySegment` | 
| `reservation_recNo` | `long` |  | `airlineMarketShareAnalysisBySegment` | 
| `provider` | `string` | 8 | `airlineMarketShareAnalysisBySegment` | 
| `cityPair` | `string` | 7 | `airlineMarketShareAnalysisBySegment` | 
| `fare` | `long` |  | `airlineMarketShareAnalysisBySegment` | 
| `fareBasis` | `string` | 16 | `airlineMarketShareAnalysisBySegment` | 
| `reservationConfirmationTicketNo` | `string` | 64 | `airlineMarketShareAnalysisBySegment` | 
| `supplierProfile_recNo` | `long` |  | `airlineMarketShareAnalysisBySegment` | 
| `travelerName` | `string` | 512 | `airlineMarketShareAnalysisBySegment` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `skipLookup [inherited]` | `bool` |  | 
| `readOnlyIntent [inherited]` | `bool` |  | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `createDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `createDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
| `queryOptimizerFlags [inherited]` | [`int<int>`] |  | Recompile = 1
| `priority [inherited]` | `long` |  | 
| `airIndicator` | `EnumSearchParam<AirIndicator>` |  | Domestic = 1, International = 2, Transborder = 3
| `arcOnly` | `bool` |  | 
| `branchRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `clientProfileRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `cityPairDepartCityCode` | [`StringSearchParam`](StringSearchParam) |  | 
| `cityPairArriveCityCode` | [`StringSearchParam`](StringSearchParam) |  | 
| `cityPairDepartDateTimeFrom` | `DateSearchParam` |  | 
| `cityPairDepartDateTimeTo` | `DateSearchParam` |  | 
| `reservationBookingDateTimeFrom` | `DateSearchParam` |  | 
| `reservationBookingDateTimeTo` | `DateSearchParam` |  | 
| `reservationTags` | `TagsSearchParams[]` |  | 
| `reservationTravelSubCategoryRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `supplierProfileRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `tripClientProfileTags` | `TagsSearchParams[]` |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


