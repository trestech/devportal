---
layout: api_page
title: "BankTransaction"
description: ""
---



Permission Areas: BankTransaction

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | bankTransaction | 
| transactionDate | Date |  | Required | bankTransaction | 
| amount | long |  | Required | bankTransaction | 
| bank_recNo | long |  | Required,FKey | bankTransaction | 
| bankName_lookup | string | 64 | ReadOnly | bankTransaction | 
| voided | bool |  | Required | bankTransaction | 
| remarks | string |  |  | bankTransaction | 
| dateCleared | Date |  |  | bankTransaction | 
| bankTransactionDetail  | table |  |  | bankTransaction | 
| bankTransaction_recNo | long |  | PKey,FKey | bankTransactionDetail | 
| payment_recNo | long |  | PKey,Required,FKey | bankTransactionDetail | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


