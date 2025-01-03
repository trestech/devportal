---
layout: api_page
title: "AccountingEntry"
description: ""
assembly_version: "1.4.8.2"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `accountingEntry` | 
| `createDate` | `Date` |  | InsertOnly | `accountingEntry` | 
| `postDate` | `Date` |  |  | `accountingEntry` | 
| `description` | `string` | 512 |  | `accountingEntry` | 
| `accountingReference` | `string` | 64 |  | `accountingEntry` | 
| `journalEntry_recNo` | `long` |  | Auto-Assign | `accountingEntry` | 
| `accountingEntryDetail ` | table |  |  | `accountingEntry` | 
| `recNo` | `long` |  | PKey | `accountingEntryDetail` | 
| `accountingEntry_recNo` | `long` |  | InsertOnly, FKey | `accountingEntryDetail` | 
| `description` | `string` | 512 |  | `accountingEntryDetail` | 
| `accountCategory` | `short` |  | Required | `accountingEntryDetail` | None = 0, SupplierBalances = 2, UndepositedFunds = 3, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, RetainedEarnings = 10, Other = 99
| `accountNumber` | `long` |  |  | `accountingEntryDetail` | 
| `debitAmount` | `long` |  |  | `accountingEntryDetail` | 
| `creditAmount` | `long` |  |  | `accountingEntryDetail` | 
| `journalEntry  [shared]` | table |  | Singleton | `accountingEntry` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `journalEntry` | 
| `remarks` | `string` | 512 |  | `journalEntry` | 
| `date` | `Date` |  | Required | `journalEntry` | 
| `type` | `short` |  | Required, InsertOnly | `journalEntry` | Standard = 1, YearEnd = 2
| `journalEntryDetail ` | table |  |  | `journalEntry` | 
| `recNo` | `long` |  | PKey | `journalEntryDetail` | 
| `journalEntry_recNo` | `long` |  | InsertOnly, FKey | `journalEntryDetail` | 
| `generalLedgerAccount_recNo` | `long` |  | Required, FKey | `journalEntryDetail` | 
| `debitAmount` | `long` |  |  | `journalEntryDetail` | 
| `creditAmount` | `long` |  |  | `journalEntryDetail` | 
| `remarks` | `string` | 256 |  | `journalEntryDetail` | 
| `generalLedgerAccountName_lookup` | `string` | 64 | ReadOnly | `journalEntryDetail` | 
| `generalLedgerAccountCategory_lookup` | `short` |  | ReadOnly | `journalEntryDetail` | Assets = 1, Liabilities = 2, Capital = 3, Sales = 4, CostOfSales = 5, Expenses = 6

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


