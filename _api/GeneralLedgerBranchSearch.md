---
layout: api_page
title: "GeneralLedgerBranchSearch"
description: ""
assembly_version: "1.5.5.3"
---



Permission Areas: GeneralLedgerAccount

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `generalLedgerBranch` | 
| `summaryCount` | `int` |  | `generalLedgerBranch` | 
| `createDateTime` | `DateTimeOffset` |  | `generalLedgerBranch` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `generalLedgerBranch` | 
| `name` | `string` | 64 | `generalLedgerBranch` | 
| `activeStatus` | `bool` |  | `generalLedgerBranch` | 
| `description` | `string` | 128 | `generalLedgerBranch` | 

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
| `activeStatus` | [`short<short>`] | `activeStatus` | Inactive = 0, Active = 1, Pending = 2

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


