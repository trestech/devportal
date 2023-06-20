---
layout: api_page
title: "JournalEntrySearch"
description: ""
assembly_version: "1.0.17.8"
---



Permission Areas: JournalEntry

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `journalEntry` | 
| `summaryCount` | `int` |  | `journalEntry` | 
| `createDateTime` | `DateTimeOffset` |  | `journalEntry` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `journalEntry` | 
| `journalEntryDate` | `Date` |  | `journalEntry` | 
| `journalEntryRemarks` | `string` | 512 | `journalEntry` | 
| `clientPaymentRecNo` | `long` |  | `journalEntry` | 
| `supplierPaymentRecNo` | `long` |  | `journalEntry` | 
| `otherPaymentRecNo` | `long` |  | `journalEntry` | 
| `bankTransactionRecNo` | `long` |  | `journalEntry` | 
| `reervationRecNo` | `long` |  | `journalEntry` | 
| `tripRecNo` | `long` |  | `journalEntry` | 
| `profileRecNo` | `long` |  | `journalEntry` | 
| `profileName` | `string` | 256 | `journalEntry` | 
| `source` | `short` |  | `journalEntry` | ClientPayment = 1, SupplierPayment = 2, OtherPayment = 3, DepositWithdrawal = 4, Reservation = 5
| `generalLedgerAccountRecNo` | `long` |  | `journalEntry` | 
| `generalLedgerAccountCategory` | `short` |  | `journalEntry` | Assets = 1, Liabilities = 2, Capital = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| `generalLedgerAccountName` | `string` | 64 | `journalEntry` | 
| `journalEntryDetailDebitAmount` | `long` |  | `journalEntry` | 
| `journalEntryDetailCreditAmount` | `long` |  | `journalEntry` | 
| `journalEntryDetailAmount` | `long` |  | `journalEntry` | 

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
| `journalEntryDateFrom` | `DateSearchParam` | `journalEntryDate` | 
| `journalEntryDateTo` | `DateSearchParam` | `journalEntryDate` | 
| `journalEntryRemarks` | [`StringSearchParam`](StringSearchParam) | `journalEntryRemarks` | 
| `source` | `EnumSearchParam<Source>` | `source` | ClientPayment = 1, SupplierPayment = 2, OtherPayment = 3, DepositWithdrawal = 4, Reservation = 5
| `generalLedgerAccountRecNo` | [`NumSearchParam`](NumSearchParam) | `generalLedgerAccountRecNo` | 
| `generalLedgerAccountCategory` | `EnumSearchParam<Category>` | `generalLedgerAccountCategory` | Assets = 1, Liabilities = 2, Capital = 3, Sales = 4, CostOfSales = 5, Expenses = 6

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


