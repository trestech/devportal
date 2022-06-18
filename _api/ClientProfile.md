---
layout: page
title: "ClientProfile"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| profile_recNo | long |  | Key,Auto-Assign | clientProfile | 
| type | short |  | Required | clientProfile | 
| branch_recNo | long |  | FKey | clientProfile | 
| branchName | string | 64 | ReadOnly | clientProfile | 
| referredBy | string | 64 |  | clientProfile | 
| advisorProfile_recNo | long |  | FKey | clientProfile | 
| advisorName | string | 256 | ReadOnly | clientProfile | 
| anniversaryDay | short |  |  | clientProfile | 
| anniversaryMonth | short |  |  | clientProfile | 
| anniversaryYear | short |  |  | clientProfile | 
| anniversaryNote | string | 256 |  | clientProfile | 
| formalSalutation | string | 128 |  | clientProfile | 
| informalSalutation | string | 128 |  | clientProfile | 
| travelPolicy | string | 1024 |  | clientProfile | 
| profile  [shared] | table |  |  |  | 
| recNo | long |  | Key,FKey | profile | 
| name | string | 256 |  | profile | 
| activeStatus | bool |  |  | profile | 
| uniqueId | string | 64 |  | profile | 
| remarks | string |  |  | profile | 
| accountingReference | string | 64 |  | profile | 
| permitMarketing | bool |  |  | profile | 
| profilePersonLink  | table |  |  | clientProfile | 
| person_recNo | long |  | Key,Required,FKey | profilePersonLink | 
| profile_recNo | long |  | Key,FKey | profilePersonLink | 
| role | string | 64 |  | profilePersonLink | 
| isPrimary | bool |  |  | profilePersonLink | 
| name | string | 256 | ReadOnly | profilePersonLink | 
| primaryPhone | string | 256 | ReadOnly | profilePersonLink | 
| primaryEmail | string | 256 | ReadOnly | profilePersonLink | 
| profileCommunicationLink  | table |  |  | clientProfile | 
| profile_recNo | long |  | Key,FKey | profileCommunicationLink | 
| communication_recNo | long |  | Key,Auto-Assign | profileCommunicationLink | 
| communication  [shared] | table |  |  | profile | 
| recNo | long |  | Key,FKey | communication | 
| type | short |  | Required | communication | 
| subType | string | 32 |  | communication | 
| value | string | 256 |  | communication | 
| countryDomain | string | 64 |  | communication | 
| cityArea | string | 4 |  | communication | 
| userSpecific | string | 64 |  | communication | 
| description | string | 64 |  | communication | 
| isPrimary | bool |  |  | communication | 
| permitMarketing | bool |  |  | communication | 
| profileAddressLink  | table |  |  | clientProfile | 
| profile_recNo | long |  | Key,FKey | profileAddressLink | 
| addressType | short |  | Key,Required | profileAddressLink | 
| permitMarketing | bool |  |  | profileAddressLink | 
| address_recNo | long |  | Key,Auto-Assign | profileAddressLink | 
| address  [shared] | table |  |  | profile | 
| recNo | long |  | Key,FKey | address | 
| street1 | string | 128 |  | address | 
| street2 | string | 128 |  | address | 
| street3 | string | 128 |  | address | 
| city | string | 64 |  | address | 
| county | string | 64 |  | address | 
| stateProvince | string | 8 |  | address | 
| zipPostalCode | string | 16 |  | address | 
| country | string | 4 |  | address | 
| permitMarketing | bool |  |  | address | 
| profileId  | table |  |  | clientProfile | 
| recNo | long |  | Key | profileId | 
| profile_recNo | long |  | FKey | profileId | 
| id | string | 32 | Required | profileId | 
| profileAttachmentLink  | table |  |  | clientProfile | 
| profile_recNo | long |  | Key,FKey | profileAttachmentLink | 
| attachment_recNo | long |  | Key,Auto-Assign | profileAttachmentLink | 
| attachment  [shared] | table |  |  | profile | 
| recNo | long |  | Key,FKey | attachment | 
| type | short |  | Required | attachment | 
| description | string | 256 |  | attachment | 
| fileNameLinkURL | string | 256 | Required | attachment | 
| fileData | byte[] |  |  | attachment | 
| size | int |  |  | attachment | 
| compressed | bool |  |  | attachment | 
| profileTag  | table |  |  | clientProfile | 
| recNo | long |  | Key | profileTag | 
| profile_recNo | long |  | FKey | profileTag | 
| tag_recNo | long |  | Required,FKey | profileTag | 
| name | string | 64 | ReadOnly | profileTag | 
| value | string | 1024 |  | profileTag | 
| clientProfileMarketing  | table |  |  |  | 
| clientProfile_recNo | long |  | Key,FKey | clientProfileMarketing | 
| affiliation_recNo | int |  | Required,FKey | clientProfileMarketing | 
| marketingElement_recNo | long |  | Key,Required,FKey | clientProfileMarketing | 


