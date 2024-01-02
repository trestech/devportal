---
layout: api_page
title: "PaymentRecon"
description: ""
assembly_version: "1.0.32.1"
---



Permission Areas: SupplierPayment

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `paymentRecon` | 
| `fileData` | `byte[]` |  |  | `paymentRecon` | 
| `provider` | `short` |  | Required | `paymentRecon` | Onyx = 1
| `supplierProfile_recNo` | `long` |  |  | `paymentRecon` | 
| `bank_recNo` | `long` |  |  | `paymentRecon` | 
| `achCheckNo` | `string` | 48 |  | `paymentRecon` | 
| `paymentDate` | `Date` |  |  | `paymentRecon` | 
| `paymentMethod` | `short` |  |  | `paymentRecon` | Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| `serviceFeeAmount` | `long` |  | Required | `paymentRecon` | 
| `description` | `string` | 128 |  | `paymentRecon` | 
| `supplierPayment_recNo` | `long` |  |  | `paymentRecon` | 
| `lastAttemptErrorCount` | `int` |  |  | `paymentRecon` | 
| `gross` | `long` |  | ReadOnly | `paymentRecon` | 
| `runFinalization` | `bool` |  | ReadOnly | `paymentRecon` | 
| `paymentReconDetail ` | table |  |  | `paymentRecon` | 
| `recNo` | `long` |  | PKey | `paymentReconDetail` | 
| `paymentRecon_RecNo` | `long` |  | InsertOnly, FKey | `paymentReconDetail` | 
| `commissionAmount` | `long` |  | Required | `paymentReconDetail` | 
| `commissionRate` | `short` |  |  | `paymentReconDetail` | 
| `chainCode` | `string` | 2 |  | `paymentReconDetail` | 
| `arcNo` | `long` |  |  | `paymentReconDetail` | 
| `cityCode` | `string` | 4 |  | `paymentReconDetail` | 
| `voidReservation` | `bool` |  | Required | `paymentReconDetail` | 
| `issueDate` | `Date` |  |  | `paymentReconDetail` | 
| `providerName` | `string` | 256 |  | `paymentReconDetail` | 
| `traveler` | `string` | 256 |  | `paymentReconDetail` | 
| `confirmation` | `string` | 64 |  | `paymentReconDetail` | 
| `totalFare` | `long` |  | Required | `paymentReconDetail` | 
| `startDate` | `Date` |  |  | `paymentReconDetail` | 
| `notes` | `string` | 128 |  | `paymentReconDetail` | 
| `recordLocator` | `string` | 32 |  | `paymentReconDetail` | 
| `city` | `string` | 64 |  | `paymentReconDetail` | 
| `travelCategory_recNo` | `short` |  | Required | `paymentReconDetail` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `status` | `short` |  | Required | `paymentReconDetail` | Unreconciled = 0, Reconciled = 1, MultiMatches = 2, Duplicate = 3
| `reservation_recNo` | `long` |  |  | `paymentReconDetail` | 
| `errorMessage` | `string` | 256 |  | `paymentReconDetail` | 
| `errorTimeStamp` | `DateTime` |  |  | `paymentReconDetail` | 
| `commissionVariance` | `long` |  | ReadOnly | `paymentReconDetail` | 
| `advisor` | `string` | 256 | ReadOnly | `paymentReconDetail` | 
| `reservationProviderName` | `string` | 256 | ReadOnly | `paymentReconDetail` | 
| `reservationTravelerName` | `string` | 512 | ReadOnly | `paymentReconDetail` | 
| `reservationConfirmationNo` | `string` | 64 | ReadOnly | `paymentReconDetail` | 
| `reservationTotalFare` | `long` |  | ReadOnly | `paymentReconDetail` | 
| `reservationCommission` | `long` |  | ReadOnly | `paymentReconDetail` | 
| `reservationStartDate` | `Date` |  | ReadOnly | `paymentReconDetail` | 
| `reservationNotes` | `string` | 256 | ReadOnly | `paymentReconDetail` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


