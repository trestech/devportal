---
layout: api_page
title: "BankTransactionSearch"
description: ""
---



Referenced Table: [BankTransaction]({{ '/api/BankTransaction.html' | relative_url }})

Permission Areas: BankTransaction

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | bankTransaction | 
| summaryCount | int |  | bankTransaction | 
| transactionDate | Date |  | bankTransaction | 
| amount | long |  | bankTransaction | 
| bankRecNo | long |  | bankTransaction | 
| bankName | string | 64 | bankTransaction | 
| voided | bool |  | bankTransaction | 
| remarks | string |  | bankTransaction | 
| dateCleared | Date |  | bankTransaction | 

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
| transactionDateFrom | Date | transactionDate |  | 
| transactionDateTo | Date | transactionDate |  | 
| bankRecNo | long | bankRecNo |  | 
| voided | bool | voided |  | 
| cleared | bool | dateCleared |  | 
| dateClearedFrom | Date | dateCleared |  | 
| dateClearedTo | Date | dateCleared |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


