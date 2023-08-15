---
layout: api_page
title: "BranchSearch"
description: ""
assembly_version: "1.0.21.8"
---



Permission Areas: Branch

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `branch` | 
| `tagRecNo` | `long` |  | `branch` | 
| `tagName` | `string` | 64 | `branch` | 
| `tagValue` | `string` | 1024 | `branch` | 
| `summaryCount` | `int` |  | `branch` | 
| `createDateTime` | `DateTimeOffset` |  | `branch` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `branch` | 
| `name` | `string` | 64 | `branch` | 
| `description` | `string` | 128 | `branch` | 

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
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `name` | [`StringSearchParam`](StringSearchParam) | `name` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


