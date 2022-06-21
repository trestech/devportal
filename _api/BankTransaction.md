---
layout: page
title: "BankTransaction"
description: "| Column | Type | Size | Flags | Table | Description |"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | bankTransaction | 
| transactionDate | Date |  | Required | bankTransaction | 
| amount | long |  | Required | bankTransaction | 
| bank_recNo | long |  | Required,FKey | bankTransaction | 
| bankName_lookup | string | 64 | ReadOnly | bankTransaction | 
| voided | bool |  | Required | bankTransaction | 
| remarks | string |  |  | bankTransaction | 
| clearedDate | Date |  |  | bankTransaction | 


