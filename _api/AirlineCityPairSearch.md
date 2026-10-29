---
layout: api_page
title: "AirlineCityPairSearch"
description: ""
assembly_version: "1.8.4.7"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `airlineCityPair` | 
| `summaryCount` | `int` |  | `airlineCityPair` | 
| `createDateTime` | `DateTimeOffset` |  | `airlineCityPair` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `airlineCityPair` | 
| `trip_recNo` | `long` |  | `airlineCityPair` | 
| `reservation_recNo` | `long` |  | `airlineCityPair` | 
| `provider` | `string` | 8 | `airlineCityPair` | 
| `cityPair` | `string` | 7 | `airlineCityPair` | 
| `fare` | `long` |  | `airlineCityPair` | 
| `fareBasis` | `string` | 16 | `airlineCityPair` | 
| `reservationConfirmationTicketNo` | `string` | 64 | `airlineCityPair` | 
| `supplierProfile_recNo` | `long` |  | `airlineCityPair` | 
| `travelerName` | `string` | 512 | `airlineCityPair` | 

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


