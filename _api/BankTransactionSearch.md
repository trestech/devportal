---
layout: page
title: "BankTransactionSearch"
description: ""
---



Referenced Table: [bankTransaction](/bankTransaction)

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | bankTransaction | 
| summaryCount | int |  | bankTransaction | 
| transactionDate | Date |  | bankTransaction | 
| amount | long |  | bankTransaction | 
| bankRecNo | long |  | bankTransaction | 
| bankName | string | 64 | bankTransaction | 
| voided | bool |  | bankTransaction | 
| remarks | string |  | bankTransaction | 

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
| transactionDateFrom | Date |  | 
| transactionDateTo | Date |  | 
| bankRecNo | long |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/bankTransactionSearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```

