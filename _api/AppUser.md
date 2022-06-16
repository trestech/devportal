---
layout: post
---

﻿# AppUser


| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | {string.Join(',', flags)} | appUser | 
| id | string | 64 | {string.Join(',', flags)} | appUser | 
| enabled | bool |  | {string.Join(',', flags)} | appUser | 
| password | string | 128 | {string.Join(',', flags)} | appUser | 
| personActions | short |  | {string.Join(',', flags)} | appUser | 
| clientProfileActions | short |  | {string.Join(',', flags)} | appUser | 
| supplierProfileActions | short |  | {string.Join(',', flags)} | appUser | 
| tripActions | short |  | {string.Join(',', flags)} | appUser | 
| activityActions | short |  | {string.Join(',', flags)} | appUser | 
| paymentActions | short |  | {string.Join(',', flags)} | appUser | 
| advisorProfileActions | short |  | {string.Join(',', flags)} | appUser | 
| actionItemTemplateActions | short |  | {string.Join(',', flags)} | appUser | 
| tripImportActions | short |  | {string.Join(',', flags)} | appUser | 
| advisorReconciliationActions | short |  | {string.Join(',', flags)} | appUser | 
| tagActions | short |  | {string.Join(',', flags)} | appUser | 
| otherProfileActions | short |  | {string.Join(',', flags)} | appUser | 
| otherPaymentActions | short |  | {string.Join(',', flags)} | appUser | 
| bankTransactionActions | short |  | {string.Join(',', flags)} | appUser | 
| clientPaymentActions | short |  | {string.Join(',', flags)} | appUser | 
| supplierPaymentActions | short |  | {string.Join(',', flags)} | appUser | 
| branch_recNo | long |  | {string.Join(',', flags)} | appUser | 
| branchName | string | 64 | {string.Join(',', flags)} | appUser | 
| nonExpiringPassword | bool |  | {string.Join(',', flags)} | appUser | 
| userType | short |  | {string.Join(',', flags)} | appUser | 
| locked | DateTimeOffset |  | {string.Join(',', flags)} | appUser | 
| description | string | 64 | {string.Join(',', flags)} | appUser | 
| name | string | 64 | {string.Join(',', flags)} | appUser | 
| mobilePhone | string | 64 | {string.Join(',', flags)} | appUser | 
| email | string | 128 | {string.Join(',', flags)} | appUser | 
| passwordLastModified | Date |  | {string.Join(',', flags)} | appUser | 
| emailServerType | short |  | {string.Join(',', flags)} | appUser | 
| emailServerName | string | 64 | {string.Join(',', flags)} | appUser | 
| emailServerUserName | string | 128 | {string.Join(',', flags)} | appUser | 
| emailServerPassword | string | 64 | {string.Join(',', flags)} | appUser | 
| appUserAdvisor  | table |  |  |  | 
| appUser_RecNo | long |  | {string.Join(',', flags)} | appUserAdvisor | 
| advisorProfile_recNo | long |  | {string.Join(',', flags)} | appUserAdvisor | 
| advisorName | string | 256 | {string.Join(',', flags)} | appUserAdvisor | 
| isPrimary | bool |  | {string.Join(',', flags)} | appUserAdvisor | 
