---
layout: api_page
title: "AccountingEntrySearch"
description: "Search accounting entries based on filters"
assembly_version: "1.0.24.6"
---

Search accounting entries based on filters.

See: [Accounting Entry](AccountingEntry.html)

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
| `journalEntryRecNo` | [`NumSearchParam`](NumSearchParam) | `journalEntry_recNo` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


