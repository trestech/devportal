---
layout: page
title: "SupplierProfile"
description: ""
---
<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>




| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| profile_recNo | long |  | PKey,Auto-Assign | supplierProfile | 
| type | short |  | Required | supplierProfile | 
| preferred | bool |  | Required | supplierProfile | 
| airlineNo | short |  |  | supplierProfile | 
| commissionTriggerIndex | short |  |  | supplierProfile | 
| commissionTriggerDaysOffset | short |  |  | supplierProfile | 
| vendorId | string | 10 |  | supplierProfile | 
| profile  [shared] | table |  |  | supplierProfile | 
| recNo | long |  | PKey,FKey | profile | 
| name | string | 256 |  | profile | 
| activeStatus | bool |  |  | profile | 
| uniqueId | string | 64 |  | profile | 
| remarks | string |  |  | profile | 
| accountingReference | string | 64 |  | profile | 
| permitMarketing | bool |  |  | profile | 
| profilePersonLink  | table |  |  | profile | 
| person_recNo | long |  | PKey,Required,FKey | profilePersonLink | 
| profile_recNo | long |  | PKey,FKey | profilePersonLink | 
| role | string | 64 |  | profilePersonLink | 
| isPrimary | bool |  |  | profilePersonLink | 
| name | string | 256 | ReadOnly | profilePersonLink | 
| primaryPhone | string | 256 | ReadOnly | profilePersonLink | 
| primaryEmail | string | 256 | ReadOnly | profilePersonLink | 
| profileCommunicationLink  | table |  |  | profile | 
| profile_recNo | long |  | PKey,FKey | profileCommunicationLink | 
| communication_recNo | long |  | PKey,Auto-Assign | profileCommunicationLink | 
| communication  [shared] | table |  |  | profileCommunicationLink | 
| recNo | long |  | PKey,FKey | communication | 
| type | short |  | Required | communication | 
| subType | string | 32 |  | communication | 
| value | string | 256 |  | communication | 
| countryDomain | string | 64 |  | communication | 
| cityArea | string | 4 |  | communication | 
| userSpecific | string | 64 |  | communication | 
| description | string | 64 |  | communication | 
| isPrimary | bool |  |  | communication | 
| permitMarketing | bool |  |  | communication | 
| profileAddressLink  | table |  |  | profile | 
| profile_recNo | long |  | PKey,FKey | profileAddressLink | 
| addressType | short |  | PKey,Required | profileAddressLink | 
| permitMarketing | bool |  |  | profileAddressLink | 
| address_recNo | long |  | PKey,Auto-Assign | profileAddressLink | 
| address  [shared] | table |  |  | profileAddressLink | 
| recNo | long |  | PKey,FKey | address | 
| street1 | string | 128 |  | address | 
| street2 | string | 128 |  | address | 
| street3 | string | 128 |  | address | 
| city | string | 64 |  | address | 
| county | string | 64 |  | address | 
| stateProvince | string | 8 |  | address | 
| zipPostalCode | string | 16 |  | address | 
| country | string | 4 |  | address | 
| permitMarketing | bool |  |  | address | 
| profileId  | table |  |  | profile | 
| recNo | long |  | PKey | profileId | 
| profile_recNo | long |  | FKey | profileId | 
| id | string | 32 | Required | profileId | 
| profileAttachmentLink  | table |  |  | profile | 
| profile_recNo | long |  | PKey,FKey | profileAttachmentLink | 
| attachment_recNo | long |  | PKey,Auto-Assign | profileAttachmentLink | 
| attachment  [shared] | table |  |  | profileAttachmentLink | 
| recNo | long |  | PKey,FKey | attachment | 
| type | short |  | Required | attachment | 
| description | string | 256 |  | attachment | 
| fileNameLinkURL | string | 256 | Required | attachment | 
| fileData | byte[] |  |  | attachment | 
| size | int |  |  | attachment | 
| compressed | bool |  |  | attachment | 
| profileTag  | table |  |  | profile | 
| recNo | long |  | PKey | profileTag | 
| profile_recNo | long |  | FKey | profileTag | 
| tag_recNo | long |  | Required,FKey | profileTag | 
| name | string | 64 | ReadOnly | profileTag | 
| value | string | 1024 |  | profileTag | 



<div class="nav-back"><a href="{{ 'api' | relative_url }}">Back</a></div>
