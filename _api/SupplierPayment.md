---
layout: api_page
title: "SupplierPayment"
description: ""
assembly_version: "1.0.30.6"
---



Permission Areas: SupplierPayment

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `payment_recNo` | `long` |  | PKey, Auto-Assign | `supplierPayment` | 
| `supplierProfile_recNo` | `long` |  | Required, FKey | `supplierPayment` | 
| `supplierName_Lookup` | `string` | 256 | ReadOnly, Lookup | `supplierPayment` | 
| `createVoucher` | `bool` |  |  | `supplierPayment` | 
| `voucherTripName` | `string` | 256 |  | `supplierPayment` | 
| `voucherRemarks` | `string` |  |  | `supplierPayment` | 
| `voucherAmount` | `long` |  |  | `supplierPayment` | 
| `noReservationRefresh` | `bool` |  |  | `supplierPayment` | 
| `payment  [shared]` | table |  | Singleton | `supplierPayment` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `payment` | 
| `amount` | `long` |  | Required, InsertOnly | `payment` | 
| `paymentDate` | `Date` |  | Required, InsertOnly | `payment` | 
| `method` | `short` |  | Required, InsertOnly | `payment` | Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| `cardNumber` | `string` | 64 |  | `payment` | 
| `expirationDate` | `Date` |  |  | `payment` | 
| `nameOnCard` | `string` | 64 |  | `payment` | 
| `checkNumber` | `long` |  |  | `payment` | 
| `bank_recNo` | `long` |  | FKey | `payment` | 
| `remarks` | `string` |  |  | `payment` | 
| `cardNumberToken` | `string` | 64 |  | `payment` | 
| `voided` | `bool` |  |  | `payment` | 
| `dateCleared` | `Date` |  |  | `payment` | 
| `accountingEntry_recNo` | `long` |  | Auto-Assign | `payment` | 
| `paymentDetail ` | table |  |  | `payment` | 
| `payment_recNo` | `long` |  | PKey, InsertOnly, FKey | `paymentDetail` | 
| `reservation_recNo` | `long` |  | PKey, Required, FKey | `paymentDetail` | 
| `amount` | `long` |  | Required | `paymentDetail` | 
| `paymentAttachmentLink ` | table |  |  | `payment` | 
| `payment_recNo` | `long` |  | PKey, InsertOnly, FKey | `paymentAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `paymentAttachmentLink` | 
| `attachment  [shared]` | table |  | Singleton | `paymentAttachmentLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `short` |  |  | `attachment` | Database = 0, PrivateStorage = 1, PublicStorage = 2
| `createDateTime` | `DateTimeOffset` |  | ReadOnly, Lookup | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Public = 1, Private = 2, Internal = 3
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `paymentTag ` | table |  |  | `payment` | 
| `recNo` | `long` |  | PKey | `paymentTag` | 
| `payment_recNo` | `long` |  | InsertOnly, FKey | `paymentTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `paymentTag` | 
| `name` | `string` | 64 | ReadOnly | `paymentTag` | 
| `value` | `string` | 1024 |  | `paymentTag` | 
| `accountingEntry  [shared]` | table |  | Singleton | `payment` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `accountingEntry` | 
| `createDate` | `Date` |  | InsertOnly | `accountingEntry` | 
| `postDate` | `Date` |  |  | `accountingEntry` | 
| `description` | `string` | 512 |  | `accountingEntry` | 
| `accountingReference` | `string` | 64 |  | `accountingEntry` | 
| `journalEntry_recNo` | `long` |  | Auto-Assign | `accountingEntry` | 
| `accountingEntryDetail ` | table |  |  | `accountingEntry` | 
| `recNo` | `long` |  | PKey | `accountingEntryDetail` | 
| `accountingEntry_recNo` | `long` |  | InsertOnly, FKey | `accountingEntryDetail` | 
| `description` | `string` | 512 |  | `accountingEntryDetail` | 
| `accountCategory` | `short` |  | Required | `accountingEntryDetail` | None = 0, SupplierBalances = 2, UndepositedFunds = 3, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, RetainedEarnings = 10, Other = 99
| `accountNumber` | `long` |  |  | `accountingEntryDetail` | 
| `debitAmount` | `long` |  |  | `accountingEntryDetail` | 
| `creditAmount` | `long` |  |  | `accountingEntryDetail` | 
| `journalEntry  [shared]` | table |  | Singleton | `accountingEntry` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `journalEntry` | 
| `remarks` | `string` | 512 |  | `journalEntry` | 
| `date` | `Date` |  | Required | `journalEntry` | 
| `journalEntryDetail ` | table |  |  | `journalEntry` | 
| `recNo` | `long` |  | PKey | `journalEntryDetail` | 
| `journalEntry_recNo` | `long` |  | InsertOnly, FKey | `journalEntryDetail` | 
| `generalLedgerAccount_recNo` | `long` |  | Required, FKey | `journalEntryDetail` | 
| `debitAmount` | `long` |  |  | `journalEntryDetail` | 
| `creditAmount` | `long` |  |  | `journalEntryDetail` | 
| `remarks` | `string` | 256 |  | `journalEntryDetail` | 
| `generalLedgerAccountName_lookup` | `string` | 64 | ReadOnly | `journalEntryDetail` | 
| `generalLedgerAccountCategory_lookup` | `short` |  | ReadOnly | `journalEntryDetail` | Assets = 1, Liabilities = 2, Capital = 3, Sales = 4, CostOfSales = 5, Expenses = 6

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


