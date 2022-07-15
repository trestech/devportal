---
layout: api_page
title: "OtherPayment"
description: ""
---



Permission Areas: OtherPayment

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| payment_recNo | long |  | PKey,Auto-Assign | otherPayment | 
| otherProfile_recNo | long |  | Required,FKey | otherPayment | 
| otherName_Lookup | string | 256 | ReadOnly | otherPayment | 
| payment  [shared] | table |  | Singleton | otherPayment | 
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
| cardNumberToken | string | 64 |  | payment | 
| voided | bool |  |  | payment | 
| dateCleared | Date |  |  | payment | 
| accountingEntry_recNo | long |  | Auto-Assign | payment | 
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
| accountingEntry  [shared] | table |  | Singleton | payment | 
| recNo | long |  | PKey,FKey | accountingEntry | 
| createDate | DateTimeOffset |  |  | accountingEntry | 
| postDate | DateTimeOffset |  |  | accountingEntry | 
| description | string | 512 |  | accountingEntry | 
| accountingReference | string | 64 |  | accountingEntry | 
| journalEntry_recNo | long |  | Auto-Assign | accountingEntry | 
| accountingEntryDetail  | table |  |  | accountingEntry | 
| recNo | long |  | PKey | accountingEntryDetail | 
| accountingEntry_recNo | long |  | FKey | accountingEntryDetail | 
| description | string | 512 |  | accountingEntryDetail | 
| accountCategory | short |  | Required | accountingEntryDetail | None = 0, ClientBalances = 1, SupplierBalances = 2, UndepositedFunds = 3, Undisbursedfunds = 4, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, CommissionIncome = 10, Other = 99
| accountNumber | long |  |  | accountingEntryDetail | 
| debitAmount | long |  |  | accountingEntryDetail | 
| creditAmount | long |  |  | accountingEntryDetail | 
| journalEntry  [shared] | table |  | Singleton | accountingEntry | 
| recNo | long |  | PKey,FKey | journalEntry | 
| remarks | string | 512 |  | journalEntry | 
| date | Date |  | Required | journalEntry | 
| journalEntryDetail  | table |  |  | journalEntry | 
| recNo | long |  | PKey | journalEntryDetail | 
| journalEntry_recNo | long |  | FKey | journalEntryDetail | 
| generalLedgerAccount_recNo | long |  | FKey | journalEntryDetail | 
| debitAmount | long |  |  | journalEntryDetail | 
| creditAmount | long |  |  | journalEntryDetail | 
| remarks | string | 256 |  | journalEntryDetail | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


