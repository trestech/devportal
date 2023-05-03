---
layout: api_page
title: "AppUser"
description: ""
assembly_version: "1.0.13.6"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `id` | `string` | 64 |  | `appUser` | 
| `enabled` | `bool` |  |  | `appUser` | 
| `password` | `string` | 128 |  | `appUser` | 
| `nonExpiringPassword` | `bool` |  |  | `appUser` | 
| `locked` | `DateTimeOffset` |  |  | `appUser` | 
| `name` | `string` | 64 |  | `appUser` | 
| `email` | `string` | 128 |  | `appUser` | 
| `passwordLastModified` | `Date` |  | ReadOnly | `appUser` | 
| `microsoftId` | `string` | 64 |  | `appUser` | 
| `recNo` | `long` |  | PKey | `appUser` | 
| `branch_recNo` | `long` |  | FKey | `appUser` | 
| `branchName` | `string` | 64 | ReadOnly | `appUser` | 
| `userType` | `short` |  | Required | `appUser` | User = 1, Manager = 2, Admin = 3
| `description` | `string` | 64 |  | `appUser` | 
| `mobilePhone` | `string` | 64 |  | `appUser` | 
| `emailServerType` | `short` |  |  | `appUser` | Office365 = 1, Gmail = 2, GenericSMTP = 3
| `emailServerName` | `string` | 64 |  | `appUser` | 
| `emailServerUserName` | `string` | 128 |  | `appUser` | 
| `emailServerPassword` | `string` | 64 |  | `appUser` | 
| `personActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `clientProfileActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `supplierProfileActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `tripActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `activityActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `advisorProfileActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `actionItemTemplateActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `tripImportActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `advisorReconciliationActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `tagActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `otherProfileActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `otherPaymentActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `bankTransactionActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `clientPaymentActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `supplierPaymentActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `generalLedgerAccountActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `journalEntryActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `destinationActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `arcBspNoActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `bankActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `branchActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `documentTemplateActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `advisorAdjustmentActions` | `short` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `appUserAdvisor ` | table |  |  | `appUser` | 
| `appUser_RecNo` | `long` |  | PKey, InsertOnly, FKey | `appUserAdvisor` | 
| `advisorProfile_recNo` | `long` |  | PKey, Required, FKey | `appUserAdvisor` | 
| `advisorName` | `string` | 256 | ReadOnly | `appUserAdvisor` | 
| `isPrimary` | `bool` |  | Required | `appUserAdvisor` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


