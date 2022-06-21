---
layout: page
title: "AppUser"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | appUser | 
| id | string | 64 |  | appUser | 
| enabled | bool |  |  | appUser | 
| password | string | 128 |  | appUser | 
| personActions | short |  | Required | appUser | 
| clientProfileActions | short |  | Required | appUser | 
| supplierProfileActions | short |  | Required | appUser | 
| tripActions | short |  | Required | appUser | 
| activityActions | short |  | Required | appUser | 
| paymentActions | short |  | Required | appUser | 
| advisorProfileActions | short |  | Required | appUser | 
| actionItemTemplateActions | short |  | Required | appUser | 
| tripImportActions | short |  | Required | appUser | 
| advisorReconciliationActions | short |  | Required | appUser | 
| tagActions | short |  | Required | appUser | 
| otherProfileActions | short |  | Required | appUser | 
| otherPaymentActions | short |  | Required | appUser | 
| bankTransactionActions | short |  | Required | appUser | 
| clientPaymentActions | short |  | Required | appUser | 
| supplierPaymentActions | short |  | Required | appUser | 
| branch_recNo | long |  | FKey | appUser | 
| branchName | string | 64 | ReadOnly | appUser | 
| nonExpiringPassword | bool |  |  | appUser | 
| userType | short |  | Required | appUser | 
| locked | DateTimeOffset |  |  | appUser | 
| description | string | 64 |  | appUser | 
| name | string | 64 |  | appUser | 
| mobilePhone | string | 64 |  | appUser | 
| email | string | 128 |  | appUser | 
| passwordLastModified | Date |  | ReadOnly | appUser | 
| emailServerType | short |  |  | appUser | 
| emailServerName | string | 64 |  | appUser | 
| emailServerUserName | string | 128 |  | appUser | 
| emailServerPassword | string | 64 |  | appUser | 
| appUserAdvisor  | table |  |  | appUser | 
| appUser_RecNo | long |  | PKey,FKey | appUserAdvisor | 
| advisorProfile_recNo | long |  | PKey,Required,FKey | appUserAdvisor | 
| advisorName | string | 256 | ReadOnly | appUserAdvisor | 
| isPrimary | bool |  | Required | appUserAdvisor | 



<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
