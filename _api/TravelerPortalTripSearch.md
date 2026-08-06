---
layout: api_page
title: "TravelerPortalTripSearch"
description: "Search client trip itineraries based on filters"
assembly_version: "1.7.5.5"
---

Search client trip itineraries based on filters.

See: [ClientItinTrip](ClientItinTrip.html)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `trip` | 
| `summaryCount` | `int` |  | `trip` | 
| `createDateTime` | `DateTimeOffset` |  | `trip` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `trip` | 
| `name` | `string` | 256 | `trip` | 
| `startDateTime` | `DateTime` |  | `trip` | 
| `endDateTime` | `DateTime` |  | `trip` | 
| `imageUrl` | `string` | 256 | `trip` | 
| `imageData` | `byte[]` |  | `trip` | 
| `imageCredit` | `string` | 256 | `trip` | 
| `visibility` | `int` |  | `trip` | None = 0, ClientItin = 1, ClientTripProposal = 2, DestinationImages = 64

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
| `clientProfileRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `tripVisibility` | [`short<short>`] |  | None = 0, ClientItin = 1, ClientTripProposal = 2, DestinationImages = 64

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


