---
layout: api_page
title: "ClientSupplierBalancesReconciliationSearch"
description: ""
assembly_version: "1.5.5.3"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `reservation` | 
| `summaryCount` | `int` |  | `reservation` | 
| `createDateTime` | `DateTimeOffset` |  | `reservation` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `reservation` | 
| `paymentDate` | `Date` |  | `payment` | 
| `paymentRecNo` | `long` |  | `payment` | 
| `paymentProfileType` | `short` |  | `profile` | Client = 1, Supplier = 2, Advisor = 3, Other = 4
| `paymentProfileName` | `string` | 256 | `profile` | 
| `tripRecNo` | `long` |  | `trip` | 
| `tripName` | `string` | 256 | `trip` | 
| `reservationRecNo` | `long` |  | `reservation` | 
| `reservationTicketNo` | `long` |  | `reservation` | 
| `reservationConfirmationNo` | `string` | 64 | `reservation` | 
| `reservationConfirmationTicketNo` | `string` | 64 | `reservation` | 
| `appliedAmount` | `long` |  | `payment` | 
| `accountingEntryRecNo` | `long` |  | `reservation` | 
| `accountingEntryCreateDate` | `Date` |  | `accountingEntry` | 
| `accountingEntryJournalEntryRecNo` | `long` |  | `accountingEntry` | 

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
| `paymentDateFrom` | `DateSearchParam` | `paymentDate` | 
| `paymentDateTo` | `DateSearchParam` | `paymentDate` | 
| `glOnly` | `bool` |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


