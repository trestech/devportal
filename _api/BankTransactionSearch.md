---
layout: api_page
title: "BankTransactionSearch"
description: ""
---



Permission Areas: BankTransaction

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `bankTransaction` | 
| `summaryCount` | `int` |  | `bankTransaction` | 
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
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
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


