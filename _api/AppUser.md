---
layout: api_page
title: "AppUser"
description: ""
assembly_version: "1.6.13.5"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `id` | `string` | 64 | Required | `appUser` | 
| `enabled` | `bool` |  |  | `appUser` | 
| `password` | `string` | 128 |  | `appUser` | 
| `nonExpiringPassword` | `bool` |  |  | `appUser` | 
| `locked` | `DateTimeOffset` |  |  | `appUser` | 
| `name` | `string` | 64 |  | `appUser` | 
| `email` | `string` | 128 |  | `appUser` | 
| `passwordLastModified` | `Date` |  | ReadOnly | `appUser` | 
| `microsoftId` | `string` | 64 |  | `appUser` | 
| `microsoftUserPrincipalName` | `string` | 64 |  | `appUser` | 
| `uniqueId` | `string` | 64 | InsertOnly | `appUser` | 
| `userType` | `short` |  | Required | `appUser` | User = 1, Manager = 2, Admin = 3
| `recNo` | `long` |  | PKey | `appUser` | 
| `branch_recNo` | `long` |  | ReadOnly, FKey, Deprecated | `appUser` | Obsolete. Use AppUser.Branch.RecNo of primary branch instead
| `branchName` | `string` | 64 | ReadOnly, Deprecated, Lookup | `appUser` | Obsolete. Use AppUser.Branch.Name of primary branch instead
| `description` | `string` | 64 |  | `appUser` | 
| `mobilePhone` | `string` | 64 |  | `appUser` | 
| `emailServerType` | `short` |  |  | `appUser` | Office365 = 1, Gmail = 2, GenericSMTP = 3
| `emailServerName` | `string` | 64 |  | `appUser` | 
| `emailServerUserName` | `string` | 128 |  | `appUser` | 
| `emailServerPassword` | `string` | 128 |  | `appUser` | 
| `slaVersionAcknowledged` | `int` |  |  | `appUser` | 
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
| `agencyCardActions` | `int` |  | Required | `appUser` | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, AllUsers = 32, AllBranches = 64, Decrypt = 128, Export = 256, Import = 512
| `otherPermissions` | `int` |  | Required | `appUser` | None = 0, AllowModifyTripAdvisor = 1, AllowViewOtherAdvisors = 2
| `signatureAttachment_recNo` | `long` |  | Auto-Assign | `appUser` | 
| `lastLoginDateTime` | `DateTimeOffset` |  | ReadOnly, Lookup | `appUser` | 
| `googleId` | `string` | 64 |  | `appUser` | 
| `googleUserPrincipalName` | `string` | 64 |  | `appUser` | 
| `appUserAdvisor ` | table |  |  | `appUser` | 
| `appUser_recNo` | `long` |  | PKey, InsertOnly, FKey | `appUserAdvisor` | 
| `advisorProfile_recNo` | `long` |  | PKey, Required, FKey | `appUserAdvisor` | 
| `advisorName` | `string` | 256 | ReadOnly, Lookup | `appUserAdvisor` | 
| `isPrimary` | `bool` |  | Required | `appUserAdvisor` | 
| `appUserBranch ` | table |  |  | `appUser` | 
| `appUser_recNo` | `long` |  | PKey, InsertOnly, FKey | `appUserBranch` | 
| `branch_recNo` | `long` |  | PKey, Required, FKey | `appUserBranch` | 
| `branchName` | `string` | 64 | ReadOnly, Lookup | `appUserBranch` | 
| `isPrimary` | `bool` |  | Required | `appUserBranch` | 
| `signatureAttachment  [shared]` | table |  | Singleton | `appUser` | 
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
| `imageCredit` | `string` | 256 |  | `attachment` | 
| `appUserHistory ` | table |  |  | `appUser` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `history` | 
| `timestamp` | `DateTimeOffset` |  |  | `history` | 
| `action` | `string` | 64 |  | `history` | 
| `tableName` | `string` | 64 |  | `history` | 
| `tableRecNo` | `long` |  |  | `history` | 
| `tableRecNo2` | `long` |  |  | `history` | 
| `columnName` | `string` | 64 |  | `history` | 
| `description` | `string` | 256 |  | `history` | 
| `oldValue` | `string` | 256 |  | `history` | 
| `newValue` | `string` | 256 |  | `history` | 
| `token_recNo` | `long` |  |  | `history` | 
| `clientIPAddress` | `string` | 16 |  | `history` | 
| `errorCode` | `int` |  |  | `history` | 
| `appUser_recNo` | `long` |  |  | `history` | 
| `appUser_id` | `string` | 64 |  | `history` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


