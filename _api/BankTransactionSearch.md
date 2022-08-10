---
layout: api_page
title: "BankTransactionSearch"
description: ""
---



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
| transactionDateFrom | DateSearchParam | transactionDate | 
| transactionDateTo | DateSearchParam | transactionDate | 
| bankRecNo | [NumSearchParam](NumSearchParam) | bankRecNo | 
| voided | bool | voided | 
| cleared | bool | dateCleared | 
| dateClearedFrom | DateSearchParam | dateCleared | 
| dateClearedTo | DateSearchParam | dateCleared | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


