---
layout: api_page
title: "JournalEntry"
description: ""
---



Permission Areas: JournalEntry

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | journalEntry | 
| remarks | string | 512 |  | journalEntry | 
| date | Date |  | Required | journalEntry | 
| journalEntryDetail  | table |  |  | journalEntry | 
| recNo | long |  | PKey | journalEntryDetail | 
| journalEntry_recNo | long |  | FKey | journalEntryDetail | 
| generalLedgerAccount_recNo | long |  | FKey | journalEntryDetail | 
| debitAmount | long |  |  | journalEntryDetail | 
| creditAmount | long |  |  | journalEntryDetail | 
| remarks | string | 256 |  | journalEntryDetail | 
| generalLedgerAccountName_lookup | string | 64 | ReadOnly | journalEntryDetail | 
| generalLedgerAccountCategory_lookup | short |  | ReadOnly | journalEntryDetail | Assets = 1, Liabilities = 2, RetainedEarnings = 3, Sales = 4, CostOfSales = 5, Expenses = 6

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


