---
layout: api_page
title: "ClientPayment"
description: ""
---



Permission Areas: ClientPayment

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| agencyProcessed | bool |  | Required | clientPayment | 
| payment_recNo | long |  | PKey,Auto-Assign | clientPayment | 
| clientProfile_recNo | long |  | Required,FKey | clientPayment | 
| clientName_lookup | string | 256 | ReadOnly | clientPayment | 
| person_recNo | long |  | FKey | clientPayment | 
| personName_lookup | string | 256 | ReadOnly | clientPayment | 
| createVoucher | bool |  |  | clientPayment | 
| voucherTripName | string | 256 |  | clientPayment | 
| voucherRemarks | string |  |  | clientPayment | 
| voucherAmount | long |  |  | clientPayment | 
| noReservationRefresh | bool |  |  | clientPayment | 
| transactionId | string | 32 | ReadOnly | clientPayment | 
| authorizationCode | string | 16 | ReadOnly | clientPayment | 
| originalTransactionId | string | 32 |  | clientPayment | 
| payment  [shared] | table |  | Singleton | clientPayment | 
| recNo | long |  | PKey,FKey | payment | 
| amount | long |  | Required | payment | 
| paymentDate | Date |  | Required | payment | 
| method | short |  | Required | payment | None = 0, Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| cardNumber | string | 64 |  | payment | 
| expirationDate | Date |  |  | payment | 
| nameOnCard | string | 64 |  | payment | 
| checkNumber | long |  |  | payment | 
| bank_recNo | long |  | FKey | payment | 
| remarks | string |  |  | payment | 
| accountingEntry_recNo | long |  | FKey | payment | 
| cardNumberToken | string | 64 |  | payment | 
| voided | bool |  |  | payment | 
| dateCleared | Date |  |  | payment | 
| paymentDetail  | table |  |  | payment | 
| payment_recNo | long |  | PKey,FKey | paymentDetail | 
| reservation_recNo | long |  | PKey,Required,FKey | paymentDetail | 
| amount | long |  | Required | paymentDetail | 
| paymentAttachmentLink  | table |  |  | payment | 
| payment_recNo | long |  | PKey,FKey | paymentAttachmentLink | 
| attachment_recNo | long |  | PKey,Auto-Assign | paymentAttachmentLink | 
| attachment  [shared] | table |  | Singleton | paymentAttachmentLink | 
| recNo | long |  | PKey,FKey | attachment | 
| type | short |  | Required | attachment | Link = 1, File = 2
| description | string | 256 |  | attachment | 
| fileNameLinkURL | string | 256 | Required | attachment | 
| fileData | byte[] |  |  | attachment | 
| size | int |  |  | attachment | 
| compressed | bool |  |  | attachment | 
| paymentTag  | table |  |  | payment | 
| recNo | long |  | PKey | paymentTag | 
| payment_recNo | long |  | FKey | paymentTag | 
| tag_recNo | long |  | Required,FKey | paymentTag | 
| name | string | 64 | ReadOnly | paymentTag | 
| value | string | 1024 |  | paymentTag | 


