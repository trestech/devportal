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
| date | Date |  | journalEntry | 
| remarks | string | 512 | journalEntry | 

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
| dateFrom | Date | date |  | 
| dateTo | Date | date |  | 
| remarks | string | remarks |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


