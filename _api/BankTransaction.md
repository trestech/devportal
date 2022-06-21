---
layout: page
title: "BankTransaction"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




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



<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
