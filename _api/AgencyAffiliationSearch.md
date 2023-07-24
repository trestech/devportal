---
layout: api_page
title: "AgencyAffiliationSearch"
description: ""
assembly_version: "1.0.19.9"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `agency` | 
| `summaryCount` | `int` |  | `agency` | 
| `createDateTime` | `DateTimeOffset` |  | `agency` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `agency` | 
| `name` | `string` | 256 | `agency` | 
| `alias` | `string` | 64 | `agency` | 
| `id` | `string` | 32 | `agency` | 
| `affiliation_recNo` | `int` |  | `agency` | 
| `status` | `int` |  | `agency` | 

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
| `status` | [`StringSearchParam`](StringSearchParam) | `status` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


