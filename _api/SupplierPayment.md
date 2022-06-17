---
layout: page
title: "SupplierPayment"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| payment_recNo | long |  | {string.Join(',', flags)} | supplierPayment | 
| supplierProfile_recNo | long |  | {string.Join(',', flags)} | supplierPayment | 
| supplierName_Lookup | string | 256 | {string.Join(',', flags)} | supplierPayment | 
| createVoucher | bool |  | {string.Join(',', flags)} | supplierPayment | 
| voucherTripName | string | 256 | {string.Join(',', flags)} | supplierPayment | 
| voucherRemarks | string |  | {string.Join(',', flags)} | supplierPayment | 
| voucherAmount | long |  | {string.Join(',', flags)} | supplierPayment | 
| noReservationRefresh | bool |  | {string.Join(',', flags)} | supplierPayment | 
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
| paymentDetail  | table |  |  | supplierPayment | 
| payment_recNo | long |  | {string.Join(',', flags)} | paymentDetail | 
| reservation_recNo | long |  | {string.Join(',', flags)} | paymentDetail | 
| amount | long |  | {string.Join(',', flags)} | paymentDetail | 
| paymentAttachmentLink  | table |  |  | supplierPayment | 
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
| paymentTag  | table |  |  | supplierPayment | 
| recNo | long |  | {string.Join(',', flags)} | paymentTag | 
| payment_recNo | long |  | {string.Join(',', flags)} | paymentTag | 
| tag_recNo | long |  | {string.Join(',', flags)} | paymentTag | 
| name | string | 64 | {string.Join(',', flags)} | paymentTag | 
| value | string | 1024 | {string.Join(',', flags)} | paymentTag | 


