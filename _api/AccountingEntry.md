---
layout: api_page
title: "AccountingEntry"
description: ""
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | accountingEntry | 
| createDate | DateTimeOffset |  |  | accountingEntry | 
| postDate | DateTimeOffset |  |  | accountingEntry | 
| description | string | 512 |  | accountingEntry | 
| accountingReference | string | 64 |  | accountingEntry | 
| journalEntry_recNo | long |  | Auto-Assign | accountingEntry | 
| accountingEntryDetail  | table |  |  | accountingEntry | 
| recNo | long |  | PKey | accountingEntryDetail | 
| accountingEntry_recNo | long |  | FKey | accountingEntryDetail | 
| description | string | 512 |  | accountingEntryDetail | 
| accountCategory | short |  | Required | accountingEntryDetail | None = 0, ClientBalances = 1, SupplierBalances = 2, UndepositedFunds = 3, Undisbursedfunds = 4, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, CommissionIncome = 10, Other = 99
| accountNumber | long |  |  | accountingEntryDetail | 
| debitAmount | long |  |  | accountingEntryDetail | 
| creditAmount | long |  |  | accountingEntryDetail | 
| journalEntry  [shared] | table |  | Singleton | accountingEntry | 
| recNo | long |  | PKey,FKey | journalEntry | 
| remarks | string | 512 |  | journalEntry | 
| date | Date |  | Required | journalEntry | 
| journalEntryDetail  | table |  |  | journalEntry | 
| recNo | long |  | PKey | journalEntryDetail | 
| journalEntry_recNo | long |  | FKey | journalEntryDetail | 
| generalLedgerAccount_recNo | long |  | FKey | journalEntryDetail | 
| debitAmount | long |  |  | journalEntryDetail | 
| creditAmount | long |  |  | journalEntryDetail | 
| remarks | string | 256 |  | journalEntryDetail | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


