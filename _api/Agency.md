---
layout: api_page
title: "Agency"
description: ""
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `int` |  | PKey | `agency` | 
| `name` | `string` | 256 |  | `agency` | 
| `alias` | `string` | 64 |  | `agency` | 
| `uniqueId` | `string` | 64 |  | `agency` | 
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
| `agencyAffiliationLink ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, FKey | `agencyAffiliationLink` | 
| `affiliation_recNo` | `int` |  | PKey, Required, FKey | `agencyAffiliationLink` | 
| `affiliationName` | `string` | 64 | ReadOnly | `agencyAffiliationLink` | 
| `id` | `string` | 32 |  | `agencyAffiliationLink` | 
| `agencyAdvisorReconciliation ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, FKey | `agencyAdvisorReconciliation` | 
| `travelCategory_recNo` | `short` |  | PKey, Required, FKey | `agencyAdvisorReconciliation` | 
| `paymentTrigger` | `short` |  | Required | `agencyAdvisorReconciliation` | AgencyPaidAndDeparted = 1, AgencyPaid = 2
| `accountingReference ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, FKey | `accountingReference` | 
| `type` | `short` |  | PKey, Required | `accountingReference` | None = 0, SupplierBalances = 2, UndepositedFunds = 3, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, RetainedEarnings = 10, Other = 99
| `generalLedgerAccount_recNo` | `long` |  | FKey | `accountingReference` | 
| `accountingReferenceTravelCategory ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, FKey | `accountingReferenceTravelCategory` | 
| `type` | `short` |  | PKey, Required | `accountingReferenceTravelCategory` | None = 0, SupplierBalances = 2, UndepositedFunds = 3, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, RetainedEarnings = 10, Other = 99
| `travelCategory_recNo` | `short` |  | PKey, Required, FKey | `accountingReferenceTravelCategory` | 
| `generalLedgerAccount_recNo` | `long` |  | FKey | `accountingReferenceTravelCategory` | 
| `appFeature ` | table |  |  | `agency` | 
| `agency_recNo` | `int` |  | PKey, FKey | `appFeature` | 
| `feature` | `short` |  | PKey, Required | `appFeature` | BankManagement = 1, GeneralLedger = 2, MerchantProcessing = 3
| `enabled` | `bool` |  | Required | `appFeature` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


