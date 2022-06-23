---
layout: api_page
title: "Person"
description: "Permission Areas: Person"
---



Permission Areas: Person

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | person | 
| firstName | string | 64 |  | person | 
| middleName | string | 64 |  | person | 
| lastName | string | 64 |  | person | 
| courtesyTitle | string | 64 |  | person | 
| salutation | string | 64 |  | person | 
| birthdayDay | short |  |  | person | 
| birthdayMonth | short |  |  | person | 
| birthdayYear | short |  |  | person | 
| birthdayNote | string | 256 |  | person | 
| citizenship | string | 2 |  | person | 
| redressNumber | string | 32 |  | person | 
| knownTravelerNumber | string | 32 |  | person | 
| gender | string | 1 |  | person | 
| uniqueId | string | 64 |  | person | 
| branch_recNo | long |  | FKey | person | 
| branchName | string | 64 | ReadOnly | person | 
| advisorProfile_recNo | long |  | FKey | person | 
| advisorName | string | 256 | ReadOnly | person | 
| remarks | string |  |  | person | 
| emergencyContactName | string | 64 |  | person | 
| emergencyContactRelationship | string | 64 |  | person | 
| emergencyContactPhone | string | 64 |  | person | 
| emergencyContactEmail | string | 64 |  | person | 
| personCommunicationLink  | table |  |  | person | 
| person_recNo | long |  | PKey,FKey | personCommunicationLink | 
| communication_recNo | long |  | PKey,Auto-Assign | personCommunicationLink | 
| communication  [shared] | table |  |  | personCommunicationLink | 
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
| card  | table |  |  | person | 
| recNo | long |  | PKey | card | 
| person_recNo | long |  | FKey | card | 
| type | short |  | Required | card | 
| cardNumber | string | 64 | Required | card | 
| issueDate | Date |  |  | card | 
| expirationDate | Date |  |  | card | 
| issuingCity | string | 64 |  | card | 
| issuingCountry | string | 2 |  | card | 
| description | string | 128 |  | card | 
| cardNumberToken | string | 64 |  | card | 
| code | string | 8 |  | card | 
| nameOnCard | string | 64 |  | card | 
| personMarketing  | table |  |  | person | 
| person_recNo | long |  | PKey,FKey | personMarketing | 
| marketingElement_recNo | long |  | PKey,Required,FKey | personMarketing | 
| affiliation_recNo | int |  | Required,FKey | personMarketing | 
| personAttachmentLink  | table |  |  | person | 
| person_recNo | long |  | PKey,FKey | personAttachmentLink | 
| attachment_recNo | long |  | PKey,Auto-Assign | personAttachmentLink | 
| attachment  [shared] | table |  |  | personAttachmentLink | 
| recNo | long |  | PKey,FKey | attachment | 
| type | short |  | Required | attachment | 
| description | string | 256 |  | attachment | 
| fileNameLinkURL | string | 256 | Required | attachment | 
| fileData | byte[] |  |  | attachment | 
| size | int |  |  | attachment | 
| compressed | bool |  |  | attachment | 
| personTag  | table |  |  | person | 
| recNo | long |  | PKey | personTag | 
| person_recNo | long |  | FKey | personTag | 
| tag_recNo | long |  | Required,FKey | personTag | 
| name | string | 64 | ReadOnly | personTag | 
| value | string | 1024 |  | personTag | 


