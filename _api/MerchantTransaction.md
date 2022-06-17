---
layout: page
title: "MerchantTransaction"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | {string.Join(',', flags)} | merchantTransaction | 
| transactionType | short |  | {string.Join(',', flags)} | merchantTransaction | 
| amount | long |  | {string.Join(',', flags)} | merchantTransaction | 
| cardNumber | string | 64 | {string.Join(',', flags)} | merchantTransaction | 
| expirationDate | Date |  | {string.Join(',', flags)} | merchantTransaction | 
| profile_recNo | long |  | {string.Join(',', flags)} | merchantTransaction | 
| name | string | 256 | {string.Join(',', flags)} | merchantTransaction | 
| companyName | string | 256 | {string.Join(',', flags)} | merchantTransaction | 
| street1 | string | 128 | {string.Join(',', flags)} | merchantTransaction | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | merchantTransaction | 
| dateProcessed | DateTimeOffset |  | {string.Join(',', flags)} | merchantTransaction | 
| transactionId | string | 32 | {string.Join(',', flags)} | merchantTransaction | 
| originalTransactionId | string | 32 | {string.Join(',', flags)} | merchantTransaction | 
| authorizationCode | string | 16 | {string.Join(',', flags)} | merchantTransaction | 
| authorizationStatus | string | 1 | {string.Join(',', flags)} | merchantTransaction | 
| authorizationMessage | string | 256 | {string.Join(',', flags)} | merchantTransaction | 
| orderId | string | 16 | {string.Join(',', flags)} | merchantTransaction | 
| payment_recNo | long |  | {string.Join(',', flags)} | merchantTransaction | 


