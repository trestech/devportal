---
layout: api_page
title: "JournalEntrySearch"
description: ""
---



Referenced Table: [JournalEntry]({{ '/api/JournalEntry.html' | relative_url }})

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

| Parameter | Type | Linked Column | Linked Parameter | Description |
| --------- | ---- | ------------- | ---------------- | ----------- |
| recNo [inherited] | long |  |  | 
| recNoList [inherited] | long[] |  |  | 
| startingRow [inherited] | int |  |  | 
| rowCount [inherited] | int |  |  | 
| topRows [inherited] | int |  |  | 
| distinct [inherited] | bool |  |  | 
| includeCols [inherited] | string[] |  |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  |  | 
| baseUrl [inherited] | string |  |  | 
| dateFrom | Date | journalEntryDate |  | 
| dateTo | Date | journalEntryDate |  | 
| remarks | string | journalEntryRemarks |  | 
| generalLedgerAccountRecNo | long | generalLedgerAccountRecNo |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


