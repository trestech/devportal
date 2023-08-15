---
layout: api_page
title: "AppUser"
description: ""
assembly_version: "1.0.21.8"
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
| `personActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `clientProfileActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `supplierProfileActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `tripActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `activityActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `advisorProfileActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `actionItemTemplateActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `tripImportActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `advisorReconciliationActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `tagActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `otherProfileActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `otherPaymentActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `bankTransactionActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `clientPaymentActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `supplierPaymentActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `generalLedgerAccountActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `journalEntryActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `destinationActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `arcBspNoActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `bankActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `branchActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `documentTemplateActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `advisorAdjustmentActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
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


