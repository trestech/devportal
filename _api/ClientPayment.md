---
layout: post
---

﻿# ClientPayment


| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| agencyProcessed | bool |  | {string.Join(',', flags)} | clientPayment | 
| payment_recNo | long |  | {string.Join(',', flags)} | clientPayment | 
| clientProfile_recNo | long |  | {string.Join(',', flags)} | clientPayment | 
| clientName_lookup | string | 256 | {string.Join(',', flags)} | clientPayment | 
| person_recNo | long |  | {string.Join(',', flags)} | clientPayment | 
| personName_lookup | string | 256 | {string.Join(',', flags)} | clientPayment | 
| createVoucher | bool |  | {string.Join(',', flags)} | clientPayment | 
| voucherTripName | string | 256 | {string.Join(',', flags)} | clientPayment | 
| voucherRemarks | string |  | {string.Join(',', flags)} | clientPayment | 
| voucherAmount | long |  | {string.Join(',', flags)} | clientPayment | 
| noReservationRefresh | bool |  | {string.Join(',', flags)} | clientPayment | 
| transactionId | string | 32 | {string.Join(',', flags)} | clientPayment | 
| authorizationCode | string | 16 | {string.Join(',', flags)} | clientPayment | 
| originalTransactionId | string | 32 | {string.Join(',', flags)} | clientPayment | 
| payment  [shared] | table |  |  |  | 
| recNo | long |  | {string.Join(',', flags)} | payment | 
| amount | long |  | {string.Join(',', flags)} | payment | 
| paymentDate | Date |  | {string.Join(',', flags)} | payment | 
| method | short |  | {string.Join(',', flags)} | payment | 
| cardNumber | string | 64 | {string.Join(',', flags)} | payment | 
| expirationDate | Date |  | {string.Join(',', flags)} | payment | 
| nameOnCard | string | 64 | {string.Join(',', flags)} | payment | 
| checkNumber | long |  | {string.Join(',', flags)} | payment | 
| bank_recNo | long |  | {string.Join(',', flags)} | payment | 
| remarks | string |  | {string.Join(',', flags)} | payment | 
| accountingEntry_recNo | long |  | {string.Join(',', flags)} | payment | 
| cardNumberToken | string | 64 | {string.Join(',', flags)} | payment | 
| voided | bool |  | {string.Join(',', flags)} | payment | 
| clearedDate | Date |  | {string.Join(',', flags)} | payment | 
| paymentDetail  | table |  |  | clientPayment | 
| payment_recNo | long |  | {string.Join(',', flags)} | paymentDetail | 
| reservation_recNo | long |  | {string.Join(',', flags)} | paymentDetail | 
| amount | long |  | {string.Join(',', flags)} | paymentDetail | 
| paymentAttachmentLink  | table |  |  | clientPayment | 
| payment_recNo | long |  | {string.Join(',', flags)} | paymentAttachmentLink | 
| attachment_recNo | long |  | {string.Join(',', flags)} | paymentAttachmentLink | 
| attachment  [shared] | table |  |  | payment | 
| recNo | long |  | {string.Join(',', flags)} | attachment | 
| type | short |  | {string.Join(',', flags)} | attachment | 
| description | string | 256 | {string.Join(',', flags)} | attachment | 
| fileNameLinkURL | string | 256 | {string.Join(',', flags)} | attachment | 
| fileData | byte[] |  | {string.Join(',', flags)} | attachment | 
| size | int |  | {string.Join(',', flags)} | attachment | 
| compressed | bool |  | {string.Join(',', flags)} | attachment | 
| paymentTag  | table |  |  | clientPayment | 
| recNo | long |  | {string.Join(',', flags)} | paymentTag | 
| payment_recNo | long |  | {string.Join(',', flags)} | paymentTag | 
| tag_recNo | long |  | {string.Join(',', flags)} | paymentTag | 
| name | string | 64 | {string.Join(',', flags)} | paymentTag | 
| value | string | 1024 | {string.Join(',', flags)} | paymentTag | 
