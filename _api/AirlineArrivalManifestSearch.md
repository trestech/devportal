---
layout: api_page
title: "AirlineArrivalManifestSearch"
description: ""
assembly_version: "1.7.7.1"
---



Permission Areas: Trip

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `airlineArrivalManifest` | 
| `summaryCount` | `int` |  | `airlineArrivalManifest` | 
| `createDateTime` | `DateTimeOffset` |  | `airlineArrivalManifest` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `airlineArrivalManifest` | 
| `trip_recNo` | `long` |  | `airlineArrivalManifest` | 
| `reservation_recNo` | `long` |  | `airlineArrivalManifest` | 
| `arriveDateTime` | `DateTime` |  | `airlineArrivalManifest` | 
| `arriveCityCode` | `string` | 3 | `airlineArrivalManifest` | 
| `provider` | `string` | 8 | `airlineArrivalManifest` | 
| `flightNo` | `short` |  | `airlineArrivalManifest` | 
| `recordLocator` | `string` | 32 | `airlineArrivalManifest` | 
| `travelerName` | `string` | 512 | `airlineArrivalManifest` | 

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
| `arriveDateTimeFrom` | `DateSearchParam` |  | 
| `arriveDateTimeTo` | `DateSearchParam` |  | 
| `arriveCityCode` | [`StringSearchParam`](StringSearchParam) |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


