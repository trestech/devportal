---
layout: api_page
title: "Person"
description: "Person provides methods to load and save person (traveler) data"
assembly_version: "1.0.24.1"
---

Person provides methods to load and save person (traveler) data.

User needs at least read permission to load person records.

Permission Areas: Person

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `person` | 
| `firstName` | `string` | 64 |  | `person` | 
| `middleName` | `string` | 64 |  | `person` | 
| `lastName` | `string` | 64 |  | `person` | 
| `courtesyTitle` | `string` | 64 |  | `person` | 
| `salutation` | `string` | 64 |  | `person` | 
| `birthdayDay` | `short` |  |  | `person` | 
| `birthdayMonth` | `short` |  |  | `person` | 
| `birthdayYear` | `short` |  |  | `person` | 
| `birthdayNote` | `string` | 256 |  | `person` | 
| `citizenship` | `string` | 2 |  | `person` | 
| `redressNumber` | `string` | 32 |  | `person` | 
| `knownTravelerNumber` | `string` | 32 |  | `person` | 
| `gender` | `string` | 1 |  | `person` | 
| `uniqueId` | `string` | 64 |  | `person` | 
| `branch_recNo` | `long` |  | FKey | `person` | 
| `branchName` | `string` | 64 | ReadOnly | `person` | 
| `advisorProfile_recNo` | `long` |  | FKey | `person` | 
| `advisorName` | `string` | 256 | ReadOnly, Lookup | `person` | 
| `remarks` | `string` |  |  | `person` | 
| `emergencyContactName` | `string` | 64 |  | `person` | 
| `emergencyContactRelationship` | `string` | 64 |  | `person` | 
| `emergencyContactPhone` | `string` | 64 |  | `person` | 
| `emergencyContactEmail` | `string` | 64 |  | `person` | 
| `activeStatus` | `short` |  | Required | `person` | Inactive = 0, Active = 1, Pending = 2
| `age` | `short` |  | ReadOnly | `person` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly, Lookup | `person` | 
| `personCommunicationLink ` | table |  |  | `person` | 
| `person_recNo` | `long` |  | PKey, InsertOnly, FKey | `personCommunicationLink` | 
| `communication_recNo` | `long` |  | PKey, Auto-Assign | `personCommunicationLink` | 
| `communication  [shared]` | table |  | Singleton | `personCommunicationLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `communication` | 
| `type` | `short` |  | Required | `communication` | Phone = 1, Email = 2, SocialMedia = 3, Web = 4
| `subType` | `string` | 32 |  | `communication` | 
| `value` | `string` | 256 |  | `communication` | 
| `countryDomain` | `string` | 64 |  | `communication` | 
| `cityArea` | `string` | 4 |  | `communication` | 
| `userSpecific` | `string` | 64 |  | `communication` | 
| `description` | `string` | 64 |  | `communication` | 
| `isPrimary` | `bool` |  |  | `communication` | 
| `permitMarketing` | `bool` |  |  | `communication` | 
| `isBillingContact` | `bool` |  | Deprecated | `communication` | IsBillingContact is deprecated. Use contactOptions instead.
| `contactOption` | `short` |  |  | `communication` | Billing = 1, CustomerService = 2
| `card ` | table |  |  | `person` | 
| `recNo` | `long` |  | PKey | `card` | 
| `person_recNo` | `long` |  | InsertOnly, FKey | `card` | 
| `type` | `short` |  | Required | `card` | CreditDebit = 1, Loyalty = 2, TravelDocument = 3
| `cardNumber` | `string` | 64 | Required | `card` | 
| `issueDate` | `Date` |  |  | `card` | 
| `expirationDate` | `Date` |  |  | `card` | 
| `issuingCity` | `string` | 64 |  | `card` | 
| `issuingCountry` | `string` | 2 |  | `card` | 
| `issuingCountryName` | `string` | 64 |  | `card` | 
| `description` | `string` | 512 |  | `card` | 
| `cardNumberToken` | `string` | 64 |  | `card` | 
| `code` | `string` | 8 |  | `card` | 
| `nameOnCard` | `string` | 64 |  | `card` | 
| `cvvCode` | `string` | 4 |  | `card` | 
| `subType` | `short` |  |  | `card` | 
| `personMarketing ` | table |  |  | `person` | 
| `person_recNo` | `long` |  | PKey, InsertOnly, FKey | `personMarketing` | 
| `marketingElement_recNo` | `long` |  | PKey, Required, FKey | `personMarketing` | 
| `affiliation_recNo` | `int` |  | Required, FKey | `personMarketing` | 
| `personAttachmentLink ` | table |  |  | `person` | 
| `person_recNo` | `long` |  | PKey, InsertOnly, FKey | `personAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `personAttachmentLink` | 
| `attachment  [shared]` | table |  | Singleton | `personAttachmentLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `bool` |  |  | `attachment` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly, Lookup | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Public = 1, Private = 2, Internal = 3
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `personTag ` | table |  |  | `person` | 
| `recNo` | `long` |  | PKey | `personTag` | 
| `person_recNo` | `long` |  | InsertOnly, FKey | `personTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `personTag` | 
| `name` | `string` | 64 | ReadOnly | `personTag` | 
| `value` | `string` | 1024 |  | `personTag` | 
| `personActionItemLink ` | table |  |  | `person` | 
| `person_recNo` | `long` |  | PKey, InsertOnly, FKey | `personActionItemLink` | 
| `actionItem_recNo` | `long` |  | PKey, Auto-Assign | `personActionItemLink` | 
| `personActionItem ` | table |  | Singleton | `personActionItemLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `actionItem` | 
| `type` | `short` |  | Deprecated | `actionItem` | Not needed
| `description` | `string` | 256 |  | `actionItem` | 
| `triggerIndex` | `short` |  | Required | `actionItem` | FixedDate = 1, CreateDate = 2, Birthday = 3
| `triggerDaysOffset` | `short` |  |  | `actionItem` | 
| `triggerFixedDate` | `Date` |  |  | `actionItem` | 
| `appUser_recNo` | `long` |  |  | `actionItem` | 
| `appUserId` | `string` | 64 | ReadOnly, Lookup | `actionItem` | 
| `completed` | `DateTimeOffset` |  |  | `actionItem` | 
| `completedBy_appUserRecNo` | `long` |  |  | `actionItem` | 
| `completedBy_appUserId` | `string` | 64 | ReadOnly, Lookup | `actionItem` | 
| `notes` | `string` | 256 |  | `actionItem` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: loading peron 1969999 (Abler/Ken)
```sh
GET https://api-dev.trestechnologies.com/person/1969999
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
[
  {
    "recNo": 1969999,
    "firstName": "Ken",
    "middleName": "",
    "lastName": "Abler",
    "courtesyTitle": "",
    "salutation": "",
    "birthdayDay": 23,
    "birthdayMonth": 4,
    "birthdayYear": 1931,
    "birthdayNote": "",
    "citizenship": "  ",
    "redressNumber": "13431265431654",
    "knownTravelerNumber": "",
    "gender": "M",
    "uniqueId": "8a869d59-9fd6-4c26-ab31-104f4358e7ee",
    "remarks": "",
    "emergencyContactName": "",
    "emergencyContactRelationship": "",
    "emergencyContactPhone": "",
    "emergencyContactEmail": "",
    "personCommunicationLink": [
      {
        "person_recNo": 1969999,
        "communication_recNo": 1404099,
        "communication": {
          "recNo": 1404099,
          "type": 1,
          "subType": "",
          "value": "+1 (650) 988-1222",
          "countryDomain": "",
          "cityArea": "",
          "userSpecific": "",
          "description": "Business",
          "isPrimary": true,
          "permitMarketing": true
        }
      },
      {
        "person_recNo": 1969999,
        "communication_recNo": 1404100,
        "communication": {
          "recNo": 1404100,
          "type": 2,
          "subType": "",
          "value": "1@tramsQA.com",
          "countryDomain": "",
          "cityArea": "",
          "userSpecific": "",
          "description": "E-Mail",
          "isPrimary": false,
          "permitMarketing": true
        }
      },
      {
        "person_recNo": 1969999,
        "communication_recNo": 1404765,
        "communication": {
          "recNo": 1404765,
          "type": 2,
          "subType": "",
          "value": "ken @hotmail.com",
          "countryDomain": "",
          "cityArea": "",
          "userSpecific": "",
          "description": "",
          "isPrimary": true,
          "permitMarketing": false
        }
      }
    ],
    "personMarketing": [
      {
        "person_recNo": 1969999,
        "marketingElement_recNo": 1,
        "affiliation_recNo": 1
      },
      {
        "person_recNo": 1969999,
        "marketingElement_recNo": 5,
        "affiliation_recNo": 1
      }
    ],
    "card": [
      {
        "recNo": 156971,
        "person_recNo": 1969999,
        "type": 1,
        "cardNumber": "VI 41-XXXX-1111",
        "expirationDate": "2025-12-31T00:00:00",
        "issuingCity": "",
        "issuingCountry": "  ",
        "description": "Visa",
        "code": ""
      },
      {
        "recNo": 156972,
        "person_recNo": 1969999,
        "type": 2,
        "cardNumber": "4567888",
        "issuingCity": "",
        "issuingCountry": "  ",
        "description": "Advantage",
        "code": ""
      },
      {
        "recNo": 156973,
        "person_recNo": 1969999,
        "type": 1,
        "cardNumber": "VI 41-XXXX-1111",
        "expirationDate": "2025-12-31T00:00:00",
        "issuingCity": "",
        "issuingCountry": "  ",
        "description": "Visa",
        "code": ""
      },
      {
        "recNo": 156974,
        "person_recNo": 1969999,
        "type": 2,
        "cardNumber": "5656343",
        "issuingCity": "",
        "issuingCountry": "  ",
        "description": "Hilton Hotels",
        "code": ""
      },
      {
        "recNo": 156975,
        "person_recNo": 1969999,
        "type": 1,
        "cardNumber": "VI 41-XXXX-1111",
        "expirationDate": "2025-12-31T00:00:00",
        "issuingCity": "",
        "issuingCountry": "  ",
        "description": "Visa",
        "code": ""
      },
      {
        "recNo": 300178,
        "person_recNo": 1969999,
        "type": 3,
        "cardNumber": "123",
        "issueDate": "2022-07-21T00:00:00",
        "expirationDate": "2022-07-19T00:00:00",
        "code": ""
      }
    ],
    "personTag": [
      {
        "recNo": 1341988,
        "person_recNo": 1969999,
        "tag_recNo": 2460,
        "name": "CBTravelerNo",
        "value": "231"
      }
    ]
  }
]
```

