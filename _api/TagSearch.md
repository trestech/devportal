---
layout: api_page
title: "TagSearch"
description: "Search tags based on filters"
assembly_version: "1.4.10.5"
---

Search tags based on filters.

See: [Tag](Tag.html)

Permission Areas: Tag

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `tag` | 
| `summaryCount` | `int` |  | `tag` | 
| `createDateTime` | `DateTimeOffset` |  | `tag` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `tag` | 
| `name` | `string` | 64 | `tag` | 
| `referenced` | `bool` |  | `tag` | 
| `activeStatus` | `bool` |  | `tag` | 
| `valueFreeFlow` | `bool` |  | `tag` | 
| `valueRequired` | `bool` |  | `tag` | 
| `valueList` | `string` |  | `tag` | 
| `description` | `string` | 64 | `tag` | 
| `areaFlags` | `int` |  | `tag` | All = 0, Client = 1, Traveler = 2, Supplier = 4, Advisor = 8, Trip = 16, Reservation = 32, Payment = 64, Activity = 128, AdvisorAdjustment = 256, Destination = 512, Branch = 1024, OtherProfile = 2048
| `requirement` | `short` |  | `tag` | Optional = 1, Recommended = 2, Mandatory = 3

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
| `name` | [`StringSearchParam`](StringSearchParam) | `name` | 
| `activeStatus` | `bool` | `activeStatus` | 
| `areaFlags` | [`int<int>`] | `areaFlags` | All = 0, Client = 1, Traveler = 2, Supplier = 4, Advisor = 8, Trip = 16, Reservation = 32, Payment = 64, Activity = 128, AdvisorAdjustment = 256, Destination = 512, Branch = 1024, OtherProfile = 2048

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


