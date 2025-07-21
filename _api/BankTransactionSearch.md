---
layout: api_page
title: "BankTransactionSearch"
description: "Search bank transactions based on filters"
assembly_version: "1.5.5.3"
---

Search bank transactions based on filters.

See: [Bank Transaction](BankTransaction.html)

Permission Areas: BankTransaction

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `bankTransaction` | 
| `summaryCount` | `int` |  | `bankTransaction` | 
| `createDateTime` | `DateTimeOffset` |  | `bankTransaction` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `bankTransaction` | 
| `transactionDate` | `Date` |  | `bankTransaction` | 
| `amount` | `long` |  | `bankTransaction` | 
| `bankRecNo` | `long` |  | `bankTransaction` | 
| `bankName` | `string` | 64 | `bankTransaction` | 
| `voided` | `bool` |  | `bankTransaction` | 
| `remarks` | `string` |  | `bankTransaction` | 
| `dateCleared` | `Date` |  | `bankTransaction` | 
| `payment_recNo` | `long` |  | `bankTransaction` | 

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
| `transactionDateFrom` | `DateSearchParam` | `transactionDate` | 
| `transactionDateTo` | `DateSearchParam` | `transactionDate` | 
| `bankRecNo` | [`NumSearchParam`](NumSearchParam) | `bankRecNo` | 
| `voided` | `bool` | `voided` | 
| `cleared` | `bool` | `dateCleared` | 
| `dateClearedFrom` | `DateSearchParam` | `dateCleared` | 
| `dateClearedTo` | `DateSearchParam` | `dateCleared` | 
| `paymentRecNo` | [`NumSearchParam`](NumSearchParam) | `payment_recNo` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


