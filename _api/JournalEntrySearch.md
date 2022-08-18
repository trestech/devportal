---
layout: api_page
title: "JournalEntrySearch"
description: ""
---



Permission Areas: JournalEntry

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | journalEntry | 
| summaryCount | int |  | journalEntry | 
| journalEntryDate | Date |  | journalEntry | 
| journalEntryRemarks | string | 512 | journalEntry | 
| generalLedgerAccountRecNo | long |  | journalEntry | 
| generalLedgerAccountCategory | short |  | journalEntry | Assets = 1, Liabilities = 2, RetainedEarnings = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| generalLedgerAccountName | string | 64 | journalEntry | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| recNo [inherited] | [NumSearchParam](NumSearchParam) | recNo | 
| startingRow [inherited] | long |  | 
| rowCount [inherited] | long |  | 
| topRows [inherited] | long |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| journalEntryDateFrom | DateSearchParam | journalEntryDate | 
| journalEntryDateTo | DateSearchParam | journalEntryDate | 
| journalEntryRemarks | [StringSearchParam](StringSearchParam) | journalEntryRemarks | 
| generalLedgerAccountRecNo | [NumSearchParam](NumSearchParam) | generalLedgerAccountRecNo | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


