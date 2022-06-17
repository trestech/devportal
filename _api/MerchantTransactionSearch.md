---
layout: page
title: "MerchantTransactionSearch"
description: ""
---



Referenced Table: [merchantTransaction](/merchantTransaction)

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | merchantTransaction | 
| summaryCount | int |  | merchantTransaction | 
| transactionType | short |  | merchantTransaction | 
| transactionId | string | 32 | merchantTransaction | 
| payment_recNo | long |  | merchantTransaction | 
| dateProcessed | DateTimeOffset |  | merchantTransaction | 

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
| transactionType | short |  | 
| dateProcessedFrom | DateTimeOffset |  | 
| dateProcessedTo | DateTimeOffset |  | 
| paymentRecNo | long |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/merchantTransactionSearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```

