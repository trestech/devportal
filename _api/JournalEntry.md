---
layout: api_page
title: "JournalEntry"
description: ""
assembly_version: "1.4.8.2"
---



Permission Areas: JournalEntry

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `journalEntry` | 
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


