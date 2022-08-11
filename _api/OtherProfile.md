---
layout: api_page
title: "OtherProfile"
description: ""
---



Permission Areas: OtherProfile

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| generalLedgerAccount_recNo | long |  | FKey | otherProfile | 
| generalLedgerAccount_name | string | 64 | ReadOnly | otherProfile | 
| profile_recNo | long |  | PKey,Auto-Assign | otherProfile | 
| profile  [shared] | table |  | Singleton | otherProfile | 
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
| communication  [shared] | table |  | Singleton | profileCommunicationLink | 
| recNo | long |  | PKey,FKey | communication | 
| type | short |  | Required | communication | Phone = 1, Email = 2, SocialMedia = 3, Web = 4
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
| addressType | short |  | PKey,Required | profileAddressLink | Physical = 1, Mailing = 2
| permitMarketing | bool |  |  | profileAddressLink | 
| address_recNo | long |  | PKey,Auto-Assign | profileAddressLink | 
| address  [shared] | table |  | Singleton | profileAddressLink | 
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
| attachment  [shared] | table |  | Singleton | profileAttachmentLink | 
| recNo | long |  | PKey,FKey | attachment | 
| type | short |  | Required | attachment | Link = 1, File = 2
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

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


