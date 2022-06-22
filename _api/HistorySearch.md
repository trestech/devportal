---
layout: api_page
title: "HistorySearch"
description: ""
---



Referenced Table: [history](/history)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | history | 
| summaryCount | int |  | history | 
| timestamp | DateTimeOffset |  | history | 
| appUser_recNo | long |  | history | 
| appUser_id | string | 64 | history | 
| action | string | 64 | history | 
| tableName | string | 64 | history | 
| tableRecNo | long |  | history | 
| columnName | string | 64 | history | 
| description | string | 256 | history | 
| oldValue | string | 256 | history | 
| newValue | string | 256 | history | 

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
| tableName | string |  | 
| tableRecNo | long |  | 
| action | string[] |  | 
| timeStampFrom | DateTimeOffset |  | 
| timeStampTo | DateTimeOffset |  | 
| appUser_recNo | string |  | 
| appUser_id | string |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/historySearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```

