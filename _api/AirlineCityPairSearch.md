---
layout: api_page
title: "AirlineCityPairSearch"
description: ""
assembly_version: "1.7.7.5"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `airlineCityPair` | 
| `summaryCount` | `int` |  | `airlineCityPair` | 
| `createDateTime` | `DateTimeOffset` |  | `airlineCityPair` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `airlineCityPair` | 
| `reservation_recNo` | `long` |  | `airlineCityPair` | 
| `reservationConfirmationTicketNo` | `string` | 64 | `airlineCityPair` | 
| `airline` | `string` | 8 | `airlineCityPair` | 
| `travelerName` | `string` | 512 | `airlineCityPair` | 
| `fare` | `long` |  | `airlineCityPair` | 
| `fareBasis` | `string` | 16 | `airlineCityPair` | 
| `cityPair` | `string` | 7 | `airlineCityPair` | 

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
| `supplierProfileRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `clientProfileRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `branchRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `reservationTravelSubCategoryRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `reservationBookingDateTimeFrom` | `DateSearchParam` |  | 
| `reservationBookingDateTimeTo` | `DateSearchParam` |  | 
| `cityPairDepartDateTimeFrom` | `DateSearchParam` |  | 
| `cityPairDepartDateTimeTo` | `DateSearchParam` |  | 
| `tripClientProfileTags` | `TagsSearchParams[]` |  | 
| `reservationTags` | `TagsSearchParams[]` |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


