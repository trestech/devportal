---
layout: post
---

﻿# OtherProfile


| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| profile_recNo | long |  | {string.Join(',', flags)} | otherProfile | 
| profile  [shared] | table |  |  |  | 
| recNo | long |  | {string.Join(',', flags)} | profile | 
| name | string | 256 | {string.Join(',', flags)} | profile | 
| activeStatus | bool |  | {string.Join(',', flags)} | profile | 
| uniqueId | string | 64 | {string.Join(',', flags)} | profile | 
| remarks | string |  | {string.Join(',', flags)} | profile | 
| accountingReference | string | 64 | {string.Join(',', flags)} | profile | 
| permitMarketing | bool |  | {string.Join(',', flags)} | profile | 
| profilePersonLink  | table |  |  | otherProfile | 
| person_recNo | long |  | {string.Join(',', flags)} | profilePersonLink | 
| profile_recNo | long |  | {string.Join(',', flags)} | profilePersonLink | 
| role | string | 64 | {string.Join(',', flags)} | profilePersonLink | 
| isPrimary | bool |  | {string.Join(',', flags)} | profilePersonLink | 
| name | string | 256 | {string.Join(',', flags)} | profilePersonLink | 
| primaryPhone | string | 256 | {string.Join(',', flags)} | profilePersonLink | 
| primaryEmail | string | 256 | {string.Join(',', flags)} | profilePersonLink | 
| profileCommunicationLink  | table |  |  | otherProfile | 
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
| profileAddressLink  | table |  |  | otherProfile | 
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
| profileId  | table |  |  | otherProfile | 
| recNo | long |  | {string.Join(',', flags)} | profileId | 
| profile_recNo | long |  | {string.Join(',', flags)} | profileId | 
| id | string | 32 | {string.Join(',', flags)} | profileId | 
| profileAttachmentLink  | table |  |  | otherProfile | 
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
| profileTag  | table |  |  | otherProfile | 
| recNo | long |  | {string.Join(',', flags)} | profileTag | 
| profile_recNo | long |  | {string.Join(',', flags)} | profileTag | 
| tag_recNo | long |  | {string.Join(',', flags)} | profileTag | 
| name | string | 64 | {string.Join(',', flags)} | profileTag | 
| value | string | 1024 | {string.Join(',', flags)} | profileTag | 
