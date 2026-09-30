---
layout: api_page
title: "AirlineMarketShareAnalysisSearch"
description: ""
assembly_version: "1.8.2.6"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `airlineMarketShareAnalysis` | 
| `summaryCount` | `int` |  | `airlineMarketShareAnalysis` | 
| `createDateTime` | `DateTimeOffset` |  | `airlineMarketShareAnalysis` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `airlineMarketShareAnalysis` | 
| `trip_recNo` | `long` |  | `airlineMarketShareAnalysis` | 
| `reservation_recNo` | `long` |  | `airlineMarketShareAnalysis` | 
| `provider` | `string` | 8 | `airlineMarketShareAnalysis` | 
| `cityPair` | `string` | 7 | `airlineMarketShareAnalysis` | 
| `fare` | `long` |  | `airlineMarketShareAnalysis` | 
| `fareBasis` | `string` | 16 | `airlineMarketShareAnalysis` | 
| `reservationConfirmationTicketNo` | `string` | 64 | `airlineMarketShareAnalysis` | 
| `supplierProfile_recNo` | `long` |  | `airlineMarketShareAnalysis` | 
| `travelerName` | `string` | 512 | `airlineMarketShareAnalysis` | 

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


