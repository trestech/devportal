---
layout: api_page
title: "AirlineDepartureManifestSearch"
description: ""
assembly_version: "1.8.1.5"
---



Permission Areas: Trip

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `airlineDepartureManifest` | 
| `summaryCount` | `int` |  | `airlineDepartureManifest` | 
| `createDateTime` | `DateTimeOffset` |  | `airlineDepartureManifest` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `airlineDepartureManifest` | 
| `trip_recNo` | `long` |  | `airlineDepartureManifest` | 
| `reservation_recNo` | `long` |  | `airlineDepartureManifest` | 
| `departDateTime` | `DateTime` |  | `airlineDepartureManifest` | 
| `departCityCode` | `string` | 3 | `airlineDepartureManifest` | 
| `provider` | `string` | 8 | `airlineDepartureManifest` | 
| `flightNo` | `short` |  | `airlineDepartureManifest` | 
| `recordLocator` | `string` | 32 | `airlineDepartureManifest` | 
| `travelerName` | `string` | 512 | `airlineDepartureManifest` | 

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
| `providerCode` | [`StringSearchParam`](StringSearchParam) |  | 
| `flightNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `tripTag` | `TagsSearchParams[]` |  | 
| `tripName` | [`StringSearchParam`](StringSearchParam) |  | 
| `departDateTimeFrom` | `DateSearchParam` |  | 
| `departDateTimeTo` | `DateSearchParam` |  | 
| `departCityCode` | [`StringSearchParam`](StringSearchParam) |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


