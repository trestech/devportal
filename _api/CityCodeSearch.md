---
layout: api_page
title: "CityCodeSearch"
description: "Search city codes based on filters"
assembly_version: "1.0.34.1"
---

Search city codes based on filters.

See: [CityCode](CityCode.html)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `cityCode` | 
| `summaryCount` | `int` |  | `cityCode` | 
| `createDateTime` | `DateTimeOffset` |  | `cityCode` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `cityCode` | 
| `code` | `string` | 4 | `cityCode` | 
| `codeType` | `short` |  | `cityCode` | Airport = 1, TrainStation = 2

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
| `codeType` | `EnumSearchParam<Type>` | `codeType` | Airport = 1, TrainStation = 2
| `code` | [`StringSearchParam`](StringSearchParam) | `code` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


