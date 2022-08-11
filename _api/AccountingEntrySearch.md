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

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| recNo [inherited] | [NumSearchParam](NumSearchParam) |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| createDateTimeFrom | DateTimeUTCSearchParam | createDate | 
| createDateTimeTo | DateTimeUTCSearchParam | createDate | 
| posted | bool | postDate | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


