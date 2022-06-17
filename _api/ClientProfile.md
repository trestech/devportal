---
layout: page
title: "ClientProfile"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| profile_recNo | long |  | {string.Join(',', flags)} | clientProfile | 
| type | short |  | {string.Join(',', flags)} | clientProfile | 
| branch_recNo | long |  | {string.Join(',', flags)} | clientProfile | 
| branchName | string | 64 | {string.Join(',', flags)} | clientProfile | 
| referredBy | string | 64 | {string.Join(',', flags)} | clientProfile | 
| advisorProfile_recNo | long |  | {string.Join(',', flags)} | clientProfile | 
| advisorName | string | 256 | {string.Join(',', flags)} | clientProfile | 
| anniversaryDay | short |  | {string.Join(',', flags)} | clientProfile | 
| anniversaryMonth | short |  | {string.Join(',', flags)} | clientProfile | 
| anniversaryYear | short |  | {string.Join(',', flags)} | clientProfile | 
| anniversaryNote | string | 256 | {string.Join(',', flags)} | clientProfile | 
| formalSalutation | string | 128 | {string.Join(',', flags)} | clientProfile | 
| informalSalutation | string | 128 | {string.Join(',', flags)} | clientProfile | 
| travelPolicy | string | 1024 | {string.Join(',', flags)} | clientProfile | 
| profile  [shared] | table |  |  |  | 
| recNo | long |  | {string.Join(',', flags)} | profile | 
| name | string | 256 | {string.Join(',', flags)} | profile | 
| activeStatus | bool |  | {string.Join(',', flags)} | profile | 
| uniqueId | string | 64 | {string.Join(',', flags)} | profile | 
| remarks | string |  | {string.Join(',', flags)} | profile | 
| accountingReference | string | 64 | {string.Join(',', flags)} | profile | 
| permitMarketing | bool |  | {string.Join(',', flags)} | profile | 
| profilePersonLink  | table |  |  | clientProfile | 
| person_recNo | long |  | {string.Join(',', flags)} | profilePersonLink | 
| profile_recNo | long |  | {string.Join(',', flags)} | profilePersonLink | 
| role | string | 64 | {string.Join(',', flags)} | profilePersonLink | 
| isPrimary | bool |  | {string.Join(',', flags)} | profilePersonLink | 
| name | string | 256 | {string.Join(',', flags)} | profilePersonLink | 
| primaryPhone | string | 256 | {string.Join(',', flags)} | profilePersonLink | 
| primaryEmail | string | 256 | {string.Join(',', flags)} | profilePersonLink | 
| profileCommunicationLink  | table |  |  | clientProfile | 
| profile_recNo | long |  | {string.Join(',', flags)} | profileCommunicationLink | 
| communication_recNo | long |  | {string.Join(',', flags)} | profileCommunicationLink | 
| communication  [shared] | table |  |  | profile | 
| recNo | long |  | {string.Join(',', flags)} | communication | 
| type | short |  | {string.Join(',', flags)} | communication | 
| subType | string | 32 | {string.Join(',', flags)} | communication | 
| value | string | 256 | {string.Join(',', flags)} | communication | 
| countryDomain | string | 64 | {string.Join(',', flags)} | communication | 
| cityArea | string | 4 | {string.Join(',', flags)} | communication | 
| userSpecific | string | 64 | {string.Join(',', flags)} | communication | 
| description | string | 64 | {string.Join(',', flags)} | communication | 
| isPrimary | bool |  | {string.Join(',', flags)} | communication | 
| permitMarketing | bool |  | {string.Join(',', flags)} | communication | 
| profileAddressLink  | table |  |  | clientProfile | 
| profile_recNo | long |  | {string.Join(',', flags)} | profileAddressLink | 
| addressType | short |  | {string.Join(',', flags)} | profileAddressLink | 
| permitMarketing | bool |  | {string.Join(',', flags)} | profileAddressLink | 
| address_recNo | long |  | {string.Join(',', flags)} | profileAddressLink | 
| address  [shared] | table |  |  | profile | 
| recNo | long |  | {string.Join(',', flags)} | address | 
| street1 | string | 128 | {string.Join(',', flags)} | address | 
| street2 | string | 128 | {string.Join(',', flags)} | address | 
| street3 | string | 128 | {string.Join(',', flags)} | address | 
| city | string | 64 | {string.Join(',', flags)} | address | 
| county | string | 64 | {string.Join(',', flags)} | address | 
| stateProvince | string | 8 | {string.Join(',', flags)} | address | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | address | 
| country | string | 4 | {string.Join(',', flags)} | address | 
| permitMarketing | bool |  | {string.Join(',', flags)} | address | 
| profileId  | table |  |  | clientProfile | 
| recNo | long |  | {string.Join(',', flags)} | profileId | 
| profile_recNo | long |  | {string.Join(',', flags)} | profileId | 
| id | string | 32 | {string.Join(',', flags)} | profileId | 
| profileAttachmentLink  | table |  |  | clientProfile | 
| profile_recNo | long |  | {string.Join(',', flags)} | profileAttachmentLink | 
| attachment_recNo | long |  | {string.Join(',', flags)} | profileAttachmentLink | 
| attachment  [shared] | table |  |  | profile | 
| recNo | long |  | {string.Join(',', flags)} | attachment | 
| type | short |  | {string.Join(',', flags)} | attachment | 
| description | string | 256 | {string.Join(',', flags)} | attachment | 
| fileNameLinkURL | string | 256 | {string.Join(',', flags)} | attachment | 
| fileData | byte[] |  | {string.Join(',', flags)} | attachment | 
| size | int |  | {string.Join(',', flags)} | attachment | 
| compressed | bool |  | {string.Join(',', flags)} | attachment | 
| profileTag  | table |  |  | clientProfile | 
| recNo | long |  | {string.Join(',', flags)} | profileTag | 
| profile_recNo | long |  | {string.Join(',', flags)} | profileTag | 
| tag_recNo | long |  | {string.Join(',', flags)} | profileTag | 
| name | string | 64 | {string.Join(',', flags)} | profileTag | 
| value | string | 1024 | {string.Join(',', flags)} | profileTag | 
| clientProfileMarketing  | table |  |  |  | 
| clientProfile_recNo | long |  | {string.Join(',', flags)} | clientProfileMarketing | 
| affiliation_recNo | int |  | {string.Join(',', flags)} | clientProfileMarketing | 
| marketingElement_recNo | long |  | {string.Join(',', flags)} | clientProfileMarketing | 


