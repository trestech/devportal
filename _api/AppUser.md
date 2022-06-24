---
layout: api_page
title: "AppUser"
description: ""
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | appUser | 
| id | string | 64 |  | appUser | 
| enabled | bool |  |  | appUser | 
| password | string | 128 |  | appUser | 
| personActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| clientProfileActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| supplierProfileActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| tripActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| activityActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| paymentActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| advisorProfileActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| actionItemTemplateActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| tripImportActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| advisorReconciliationActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| tagActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| otherProfileActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| otherPaymentActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| bankTransactionActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| clientPaymentActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| supplierPaymentActions | short |  | Required | appUser | None = 0, Select = 1, Read = 2, Insert = 4, Update = 8, Delete = 16, OnlySelf = 32, OnlyBranch = 64, Decrypt = 128
| branch_recNo | long |  | FKey | appUser | 
| branchName | string | 64 | ReadOnly | appUser | 
| nonExpiringPassword | bool |  |  | appUser | 
| userType | short |  | Required | appUser | User = 1, Manager = 2, Admin = 3
| locked | DateTimeOffset |  |  | appUser | 
| description | string | 64 |  | appUser | 
| name | string | 64 |  | appUser | 
| mobilePhone | string | 64 |  | appUser | 
| email | string | 128 |  | appUser | 
| passwordLastModified | Date |  | ReadOnly | appUser | 
| emailServerType | short |  |  | appUser | Office365 = 1, Gmail = 2, GenericSMTP = 3
| emailServerName | string | 64 |  | appUser | 
| emailServerUserName | string | 128 |  | appUser | 
| emailServerPassword | string | 64 |  | appUser | 
| appUserAdvisor  | table |  |  | appUser | 
| appUser_RecNo | long |  | PKey,FKey | appUserAdvisor | 
| advisorProfile_recNo | long |  | PKey,Required,FKey | appUserAdvisor | 
| advisorName | string | 256 | ReadOnly | appUserAdvisor | 
| isPrimary | bool |  | Required | appUserAdvisor | 


