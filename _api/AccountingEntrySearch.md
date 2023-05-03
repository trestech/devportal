---
layout: api_page
title: "AccountingEntrySearch"
description: ""
assembly_version: "1.0.13.6"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `accountingEntry` | 
| `summaryCount` | `int` |  | `accountingEntry` | 
| `createDateTime` | `DateTimeOffset` |  | `accountingEntry` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `accountingEntry` | 
| `createDate` | `Date` |  | `accountingEntry` | 
| `postDate` | `Date` |  | `accountingEntry` | 
| `description` | `string` | 512 | `accountingEntry` | 
| `journalEntry_recNo` | `long` |  | `accountingEntry` | 

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
| `posted` | `bool` | `postDate` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


