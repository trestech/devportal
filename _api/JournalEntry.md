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

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


