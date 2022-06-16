---
layout: post
---

﻿# AccountingEntrySearch


Referenced Table: [accountingEntry](/accountingEntry)

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | accountingEntry | 
| summaryCount | int |  | accountingEntry | 
| createDate | Date |  | accountingEntry | 
| postDate | Date |  | accountingEntry | 
| description | string | 512 | accountingEntry | 

| Parameter | Type | Linked Parameter | Description |
| --------- | ---- | ---------------- | ----------- |
| recNo [inherited] | long |  | 
| recNoList [inherited] | long[] |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | [includeColsExtended[]](/includeColsExtended) |  | 
| baseUrl [inherited] | string |  | 
| createDateTimeFrom | DateTimeOffset |  | 
| createDateTimeTo | DateTimeOffset |  | 
| posted | bool |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/accountingEntrySearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```
