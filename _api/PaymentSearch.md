---
layout: post
---

﻿# PaymentSearch


Referenced Table: [payment](/payment)

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | payment | 
| tagValue | string | 1024 | payment | 
| summaryCount | int |  | payment | 
| profileType | short |  | payment | 
| profileRecNo | long |  | payment | 
| profileName | string | 256 | payment | 
| amount | long |  | payment | 
| paymentDate | Date |  | payment | 
| payType | short |  | payment | 
| method | short |  | payment | 
| bankRecNo | long |  | payment | 
| bankName | string | 64 | payment | 
| agencyProcessed | bool |  | payment | 
| cardNumber | string | 64 | payment | 
| nameOnCard | string | 64 | payment | 
| checkNumber | long |  | payment | 
| reservationRecNo | long |  | payment | 
| reservationAmount | long |  | payment | 
| voided | bool |  | payment | 
| accountingEntryRecNo | long |  | payment | 

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
| tagRecNo [inherited] | long[] |  | 
| tagValueCond [inherited] | short |  | 
| tagValue [inherited] | string |  | 
| displayTagRecNo [inherited] | long |  | 
| tags [inherited] | [TagsSearch[]](/TagsSearch) |  | 
| profileType | short |  | 
| tripRecNo | long |  | 
| reservationRecNo | long[] |  | 
| paymentDateFrom | Date |  | 
| paymentDateTo | Date |  | 
| clientProfileRecNo | long |  | 
| supplierProfileRecNo | long |  | 
| otherProfileRecNo | long |  | 
| payType | short |  | 
| method | short |  | 
| bankRecNo | long[] |  | 
| agencyProcessed | bool |  | 
| voided | bool |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/paymentSearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```
