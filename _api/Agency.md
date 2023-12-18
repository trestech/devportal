---
layout: api_page
title: "Agency"
description: ""
assembly_version: "1.0.30.6"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `int` |  | PKey | `agency` | 
| `name` | `string` | 256 |  | `agency` | 
| `alias` | `string` | 64 |  | `agency` | 
| `uniqueId` | `string` | 64 | InsertOnly | `agency` | 
| `phone` | `string` | 256 |  | `agency` | 
| `email` | `string` | 256 |  | `agency` | 
| `street1` | `string` | 128 |  | `agency` | 
| `street2` | `string` | 128 |  | `agency` | 
| `city` | `string` | 64 |  | `agency` | 
| `stateProvince` | `string` | 8 |  | `agency` | 
| `zipPostalCode` | `string` | 16 |  | `agency` | 
| `country` | `string` | 4 |  | `agency` | 
| `headerInfo` | `string` | 512 |  | `agency` | 
| `logoData` | `byte[]` |  |  | `agency` | 
| `itineraryRemarks` | `string` |  |  | `agency` | 
| `supplierStatementRemarks` | `string` |  |  | `agency` | 
| `merchantId` | `string` | 64 |  | `agency` | 
| `merchantUserName` | `string` | 64 |  | `agency` | 
| `merchantPassword` | `string` | 256 |  | `agency` | 
| `merchantMaxChargeAmount` | `long` |  |  | `agency` | 
| `clientFormToken` | `string` | 1024 | Deprecated | `agency` | Obsolete. Use AppFeature.Token instead.
| `brandingColor` | `int` |  |  | `agency` | 
| `logoAttachment_recNo` | `long` |  | Auto-Assign | `agency` | 
| `agencyAffiliationLink ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, InsertOnly, FKey | `agencyAffiliationLink` | 
| `affiliation_recNo` | `short` |  | PKey, Required | `agencyAffiliationLink` | Tres = 1, Signature = 2, AmEx = 6, EnsembleCanada = 7, EnsembleUS = 8, MART = 9, MAST = 10, TravelLeaders = 12, Virtuoso = 13, WESTA = 14, TravelSaversUS = 15, TravelSaversCanada = 16, Axus = 23, Grasp = 24
| `affiliationName` | `string` | 64 | ReadOnly | `agencyAffiliationLink` | 
| `id` | `string` | 32 |  | `agencyAffiliationLink` | 
| `agencyAdvisorReconciliation ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, InsertOnly, FKey | `agencyAdvisorReconciliation` | 
| `travelCategory_recNo` | `short` |  | PKey, Required, FKey | `agencyAdvisorReconciliation` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `paymentTrigger` | `short` |  | Required | `agencyAdvisorReconciliation` | AgencyPaidAndDeparted = 1, AgencyPaid = 2
| `accountingReference ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, InsertOnly, FKey | `accountingReference` | 
| `type` | `short` |  | PKey, Required | `accountingReference` | None = 0, SupplierBalances = 2, UndepositedFunds = 3, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, RetainedEarnings = 10, Other = 99
| `generalLedgerAccount_recNo` | `long` |  | FKey | `accountingReference` | 
| `accountingReferenceTravelCategory ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, InsertOnly, FKey | `accountingReferenceTravelCategory` | 
| `type` | `short` |  | PKey, Required | `accountingReferenceTravelCategory` | None = 0, SupplierBalances = 2, UndepositedFunds = 3, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, RetainedEarnings = 10, Other = 99
| `travelCategory_recNo` | `short` |  | PKey, Required | `accountingReferenceTravelCategory` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `generalLedgerAccount_recNo` | `long` |  | FKey | `accountingReferenceTravelCategory` | 
| `appFeature ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, InsertOnly, FKey | `appFeature` | 
| `feature` | `short` |  | PKey, Required | `appFeature` | BankManagement = 1, GeneralLedger = 2, MerchantProcessing = 3, ClientForm = 4, GdsInterface = 5, ClientItin = 6, ESign = 7, PaymentAuthorization = 8
| `enabled` | `bool` |  | Required | `appFeature` | 
| `flags` | `short` |  | Required | `appFeature` | 
| `token` | `string` | 1024 |  | `appFeature` | 
| `logoAttachment  [shared]` | table |  | Singleton | `agency` | 
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

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


