---
layout: api_page
title: "AccountingEntrySearch"
description: ""
---



Referenced Table: [AccountingEntry]({{ '/api/AccountingEntry.html' | relative_url }})

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | accountingEntry | 
| summaryCount | int |  | accountingEntry | 
| createDate | Date |  | accountingEntry | 
| postDate | Date |  | accountingEntry | 
| description | string | 512 | accountingEntry | 

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
| createDateTimeFrom | DateTimeOffset | createDate |  | 
| createDateTimeTo | DateTimeOffset | createDate |  | 
| posted | bool | postDate |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


