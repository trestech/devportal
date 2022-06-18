---
layout: page
title: "OtherPayment"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| payment_recNo | long |  | Key,Auto-Assign | otherPayment | 
| otherProfile_recNo | long |  | Required,FKey | otherPayment | 
| otherName_Lookup | string | 256 | ReadOnly | otherPayment | 
| payment  [shared] | table |  |  |  | 
| recNo | long |  | Key,FKey | payment | 
| amount | long |  | Required | payment | 
| paymentDate | Date |  | Required | payment | 
| method | short |  | Required | payment | 
| cardNumber | string | 64 |  | payment | 
| expirationDate | Date |  |  | payment | 
| nameOnCard | string | 64 |  | payment | 
| checkNumber | long |  |  | payment | 
| bank_recNo | long |  | FKey | payment | 
| remarks | string |  |  | payment | 
| accountingEntry_recNo | long |  | FKey | payment | 
| cardNumberToken | string | 64 |  | payment | 
| voided | bool |  |  | payment | 
| clearedDate | Date |  |  | payment | 
| paymentDetail  | table |  |  | otherPayment | 
| payment_recNo | long |  | Key,FKey | paymentDetail | 
| reservation_recNo | long |  | Key,Required,FKey | paymentDetail | 
| amount | long |  | Required | paymentDetail | 
| paymentAttachmentLink  | table |  |  | otherPayment | 
| payment_recNo | long |  | Key,FKey | paymentAttachmentLink | 
| attachment_recNo | long |  | Key,Auto-Assign | paymentAttachmentLink | 
| attachment  [shared] | table |  |  | payment | 
| recNo | long |  | Key,FKey | attachment | 
| type | short |  | Required | attachment | 
| description | string | 256 |  | attachment | 
| fileNameLinkURL | string | 256 | Required | attachment | 
| fileData | byte[] |  |  | attachment | 
| size | int |  |  | attachment | 
| compressed | bool |  |  | attachment | 
| paymentTag  | table |  |  | otherPayment | 
| recNo | long |  | Key | paymentTag | 
| payment_recNo | long |  | FKey | paymentTag | 
| tag_recNo | long |  | Required,FKey | paymentTag | 
| name | string | 64 | ReadOnly | paymentTag | 
| value | string | 1024 |  | paymentTag | 


