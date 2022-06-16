---
layout: post
---

﻿# Person


| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | {string.Join(',', flags)} | person | 
| firstName | string | 64 | {string.Join(',', flags)} | person | 
| middleName | string | 64 | {string.Join(',', flags)} | person | 
| lastName | string | 64 | {string.Join(',', flags)} | person | 
| courtesyTitle | string | 64 | {string.Join(',', flags)} | person | 
| salutation | string | 64 | {string.Join(',', flags)} | person | 
| birthdayDay | short |  | {string.Join(',', flags)} | person | 
| birthdayMonth | short |  | {string.Join(',', flags)} | person | 
| birthdayYear | short |  | {string.Join(',', flags)} | person | 
| birthdayNote | string | 256 | {string.Join(',', flags)} | person | 
| citizenship | string | 2 | {string.Join(',', flags)} | person | 
| redressNumber | string | 32 | {string.Join(',', flags)} | person | 
| knownTravelerNumber | string | 32 | {string.Join(',', flags)} | person | 
| gender | string | 1 | {string.Join(',', flags)} | person | 
| uniqueId | string | 64 | {string.Join(',', flags)} | person | 
| branch_recNo | long |  | {string.Join(',', flags)} | person | 
| branchName | string | 64 | {string.Join(',', flags)} | person | 
| advisorProfile_recNo | long |  | {string.Join(',', flags)} | person | 
| advisorName | string | 256 | {string.Join(',', flags)} | person | 
| remarks | string |  | {string.Join(',', flags)} | person | 
| emergencyContactName | string | 64 | {string.Join(',', flags)} | person | 
| emergencyContactRelationship | string | 64 | {string.Join(',', flags)} | person | 
| emergencyContactPhone | string | 64 | {string.Join(',', flags)} | person | 
| emergencyContactEmail | string | 64 | {string.Join(',', flags)} | person | 
| personCommunicationLink  | table |  |  |  | 
| person_recNo | long |  | {string.Join(',', flags)} | personCommunicationLink | 
| communication_recNo | long |  | {string.Join(',', flags)} | personCommunicationLink | 
| communication  [shared] | table |  |  | person | 
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
| card  | table |  |  |  | 
| recNo | long |  | {string.Join(',', flags)} | card | 
| person_recNo | long |  | {string.Join(',', flags)} | card | 
| type | short |  | {string.Join(',', flags)} | card | 
| cardNumber | string | 64 | {string.Join(',', flags)} | card | 
| issueDate | Date |  | {string.Join(',', flags)} | card | 
| expirationDate | Date |  | {string.Join(',', flags)} | card | 
| issuingCity | string | 64 | {string.Join(',', flags)} | card | 
| issuingCountry | string | 2 | {string.Join(',', flags)} | card | 
| description | string | 128 | {string.Join(',', flags)} | card | 
| cardNumberToken | string | 64 | {string.Join(',', flags)} | card | 
| code | string | 8 | {string.Join(',', flags)} | card | 
| nameOnCard | string | 64 | {string.Join(',', flags)} | card | 
| personMarketing  | table |  |  |  | 
| person_recNo | long |  | {string.Join(',', flags)} | personMarketing | 
| marketingElement_recNo | long |  | {string.Join(',', flags)} | personMarketing | 
| affiliation_recNo | int |  | {string.Join(',', flags)} | personMarketing | 
| personAttachmentLink  | table |  |  |  | 
| person_recNo | long |  | {string.Join(',', flags)} | personAttachmentLink | 
| attachment_recNo | long |  | {string.Join(',', flags)} | personAttachmentLink | 
| attachment  [shared] | table |  |  | person | 
| recNo | long |  | {string.Join(',', flags)} | attachment | 
| type | short |  | {string.Join(',', flags)} | attachment | 
| description | string | 256 | {string.Join(',', flags)} | attachment | 
| fileNameLinkURL | string | 256 | {string.Join(',', flags)} | attachment | 
| fileData | byte[] |  | {string.Join(',', flags)} | attachment | 
| size | int |  | {string.Join(',', flags)} | attachment | 
| compressed | bool |  | {string.Join(',', flags)} | attachment | 
| personTag  | table |  |  |  | 
| recNo | long |  | {string.Join(',', flags)} | personTag | 
| person_recNo | long |  | {string.Join(',', flags)} | personTag | 
| tag_recNo | long |  | {string.Join(',', flags)} | personTag | 
| name | string | 64 | {string.Join(',', flags)} | personTag | 
| value | string | 1024 | {string.Join(',', flags)} | personTag | 
