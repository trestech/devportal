---
layout: api_page
title: "MerchantTransactionSearch"
description: "Search merchant transactions based on filters"
assembly_version: "1.4.15.6"
---

Search merchant transactions based on filters.

See: [MerchantTransaction](MerchantTransaction.html)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `merchantTransaction` | 
| `summaryCount` | `int` |  | `merchantTransaction` | 
| `createDateTime` | `DateTimeOffset` |  | `merchantTransaction` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `merchantTransaction` | 
| `transactionType` | `short` |  | `merchantTransaction` | Sale = 1, Void = 2, Refund = 3
| `transactionId` | `string` | 32 | `merchantTransaction` | 
| `payment_recNo` | `long` |  | `merchantTransaction` | 
| `dateProcessed` | `DateTimeOffset` |  | `merchantTransaction` | 
| `processor` | `short` |  | `merchantTransaction` | WorldNet = 1, Payrix = 2
| `originalTransactionId` | `string` | 32 | `merchantTransaction` | 

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
| `transactionType` | `EnumSearchParam<TransactionType>` | `transactionType` | Sale = 1, Void = 2, Refund = 3
| `dateProcessedFrom` | `DateTimeUTCSearchParam` | `dateProcessed` | 
| `dateProcessedTo` | `DateTimeUTCSearchParam` | `dateProcessed` | 
| `paymentRecNo` | [`NumSearchParam`](NumSearchParam) | `payment_recNo` | 
| `processor` | `EnumSearchParam<Processor>` | `processor` | WorldNet = 1, Payrix = 2
| `transactionId` | [`StringSearchParam`](StringSearchParam) | `transactionId` | 
| `originalTransactionId` | [`StringSearchParam`](StringSearchParam) | `originalTransactionId` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


