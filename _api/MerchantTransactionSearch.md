---
layout: api_page
title: "MerchantTransactionSearch"
description: ""
---



Referenced Table: [MerchantTransaction]({{ '/api/MerchantTransaction.html' | relative_url }})

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | merchantTransaction | 
| summaryCount | int |  | merchantTransaction | 
| transactionType | short |  | merchantTransaction | Sale = 1, Void = 2, Refund = 3
| transactionId | string | 32 | merchantTransaction | 
| payment_recNo | long |  | merchantTransaction | 
| dateProcessed | DateTimeOffset |  | merchantTransaction | 

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
| transactionType | `EnumSearchParam<TransactionType>` | transactionType | Sale = 1, Void = 2, Refund = 3
| dateProcessedFrom | DateTimeUTCSearchParam | dateProcessed | 
| dateProcessedTo | DateTimeUTCSearchParam | dateProcessed | 
| paymentRecNo | [NumSearchParam](NumSearchParam) | payment_recNo | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


