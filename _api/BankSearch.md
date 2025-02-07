---
layout: api_page
title: "BankSearch"
description: "Search banks based on filters"
assembly_version: "1.4.10.5"
---

Search banks based on filters.

See: [Bank](Bank.html)

Permission Areas: Bank

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `bank` | 
| `summaryCount` | `int` |  | `bank` | 
| `createDateTime` | `DateTimeOffset` |  | `bank` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `bank` | 
| `name` | `string` | 64 | `bank` | 
| `description` | `string` | 128 | `bank` | 
| `generalLedgerAccount_recNo` | `long` |  | `bank` | 
| `activeStatus` | `short` |  | `bank` | Inactive = 0, Active = 1, Pending = 2

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
| `activeStatus` | [`short<short>`] | `activeStatus` | Inactive = 0, Active = 1, Pending = 2

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


