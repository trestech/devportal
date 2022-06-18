---
layout: page
title: "BankTransaction"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | Key | bankTransaction | 
| transactionDate | Date |  | Required | bankTransaction | 
| amount | long |  | Required | bankTransaction | 
| bank_recNo | long |  | Required,FKey | bankTransaction | 
| bankName_lookup | string | 64 | ReadOnly | bankTransaction | 
| voided | bool |  | Required | bankTransaction | 
| remarks | string |  |  | bankTransaction | 
| clearedDate | Date |  |  | bankTransaction | 


