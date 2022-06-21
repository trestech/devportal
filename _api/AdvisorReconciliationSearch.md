---
layout: page
title: "AdvisorReconciliationSearch"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




Referenced Table: [advisorReconciliation](/advisorReconciliation)

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | advisorReconciliation | 
| summaryCount | int |  | advisorReconciliation | 
| reconciliationDate | Date |  | advisorReconciliation | 
| description | string | 64 | advisorReconciliation | 

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

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/advisorReconciliationSearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```


<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
