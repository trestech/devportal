---
layout: page
title: "MerchantTransaction"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | Key | merchantTransaction | 
| transactionType | short |  | Required | merchantTransaction | 
| amount | long |  | Required | merchantTransaction | 
| cardNumber | string | 64 |  | merchantTransaction | 
| expirationDate | Date |  |  | merchantTransaction | 
| profile_recNo | long |  | FKey | merchantTransaction | 
| name | string | 256 |  | merchantTransaction | 
| companyName | string | 256 |  | merchantTransaction | 
| street1 | string | 128 |  | merchantTransaction | 
| zipPostalCode | string | 16 |  | merchantTransaction | 
| dateProcessed | DateTimeOffset |  |  | merchantTransaction | 
| transactionId | string | 32 | Required | merchantTransaction | 
| originalTransactionId | string | 32 |  | merchantTransaction | 
| authorizationCode | string | 16 |  | merchantTransaction | 
| authorizationStatus | string | 1 |  | merchantTransaction | 
| authorizationMessage | string | 256 |  | merchantTransaction | 
| orderId | string | 16 |  | merchantTransaction | 
| payment_recNo | long |  | FKey | merchantTransaction | 


