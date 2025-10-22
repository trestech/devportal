---
layout: api_page
title: "ItinerarySearch"
description: ""
assembly_version: "1.5.6.5"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `itinerary` | 
| `summaryCount` | `int` |  | `itinerary` | 
| `createDateTime` | `DateTimeOffset` |  | `itinerary` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `itinerary` | 
| `supplierName` | `string` | 256 | `itinerary` | 
| `supplierId` | `string` | 64 | `itinerary` | 
| `providerName` | `string` | 256 | `itinerary` | 
| `name` | `string` | 256 | `itinerary` | 
| `duration` | `short` |  | `itinerary` | 
| `startDate` | `Date` |  | `itinerary` | 
| `id` | `string` | 64 | `itinerary` | 
| `departDateTime` | `DateTime` |  | `itinerary` | 
| `departCityCode` | `string` | 3 | `itinerary` | 
| `departCityName` | `string` | 64 | `itinerary` | 
| `arriveDateTime` | `DateTime` |  | `itinerary` | 
| `arriveCityCode` | `string` | 3 | `itinerary` | 
| `arriveCityName` | `string` | 64 | `itinerary` | 
| `remarks` | `string` | 256 | `itinerary` | 
| `indexNo` | `short` |  | `itinerary` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
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
| `startDateFrom` | `DateSearchParam` |  | 
| `startDateTo` | `DateSearchParam` |  | 
| `supplierName` | [`StringSearchParam`](StringSearchParam) |  | 
| `supplierId` | [`StringSearchParam`](StringSearchParam) |  | 
| `providerName` | [`StringSearchParam`](StringSearchParam) |  | 
| `id` | [`StringSearchParam`](StringSearchParam) |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


