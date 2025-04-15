---
layout: api_page
title: "ClientProfile"
description: "ClientProfile provides methods to load and save client profile data"
assembly_version: "1.4.15.6"
---

ClientProfile provides methods to load and save client profile data.

User needs at least read permission to load client profiles.

Permission Areas: ClientProfile

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `profile_recNo` | `long` |  | PKey, Auto-Assign | `clientProfile` | 
| `type` | `short` |  | Required | `clientProfile` | Personal = 1, Corporate = 2
| `branch_recNo` | `long` |  | FKey | `clientProfile` | 
| `branchName` | `string` | 64 | ReadOnly, Lookup | `clientProfile` | 
| `advisorProfile_recNo` | `long` |  | FKey | `clientProfile` | 
| `advisorName` | `string` | 256 | ReadOnly, Lookup | `clientProfile` | 
| `anniversaryDay` | `short` |  |  | `clientProfile` | 
| `anniversaryMonth` | `short` |  |  | `clientProfile` | 
| `anniversaryYear` | `short` |  |  | `clientProfile` | 
| `anniversaryNote` | `string` | 256 |  | `clientProfile` | 
| `formalSalutation` | `string` | 128 |  | `clientProfile` | 
| `informalSalutation` | `string` | 128 |  | `clientProfile` | 
| `travelPolicy` | `string` | 1024 |  | `clientProfile` | 
| `itinAppToken` | `string` | 1024 |  | `clientProfile` | 
| `tokenExpireDateTime` | `DateTimeOffset` |  |  | `clientProfile` | 
| `profile  [shared]` | table |  | Singleton | `clientProfile` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `profile` | 
| `name` | `string` | 256 |  | `profile` | 
| `activeStatus` | `short` |  | Required | `profile` | Inactive = 0, Active = 1, Pending = 2
| `uniqueId` | `string` | 64 | InsertOnly | `profile` | 
| `remarks` | `string` |  |  | `profile` | 
| `accountingReference` | `string` | 64 |  | `profile` | 
| `permitMarketing` | `bool` |  |  | `profile` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly, Lookup | `profile` | 
| `profilePersonLink ` | table |  |  | `profile` | 
| `person_recNo` | `long` |  | PKey, Required, FKey | `profilePersonLink` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profilePersonLink` | 
| `role` | `string` | 64 |  | `profilePersonLink` | 
| `isPrimary` | `bool` |  |  | `profilePersonLink` | 
| `name` | `string` | 256 | ReadOnly, Lookup | `profilePersonLink` | 
| `primaryPhone` | `string` | 256 | ReadOnly, Lookup | `profilePersonLink` | 
| `primaryEmail` | `string` | 256 | ReadOnly, Lookup | `profilePersonLink` | 
| `department` | `string` | 64 |  | `profilePersonLink` | 
| `birthdayDay` | `short` |  | ReadOnly, Lookup | `profilePersonLink` | 
| `birthdayMonth` | `short` |  | ReadOnly, Lookup | `profilePersonLink` | 
| `birthdayYear` | `short` |  | ReadOnly, Lookup | `profilePersonLink` | 
| `indexNo` | `short` |  |  | `profilePersonLink` | 
| `profileCommunicationLink ` | table |  |  | `profile` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profileCommunicationLink` | 
| `communication_recNo` | `long` |  | PKey, Auto-Assign | `profileCommunicationLink` | 
| `communication  [shared]` | table |  | Singleton | `profileCommunicationLink` | 
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
| `profileAddressLink ` | table |  |  | `profile` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profileAddressLink` | 
| `addressType` | `short` |  | PKey, Required | `profileAddressLink` | Physical = 1, Mailing = 2
| `permitMarketing` | `bool` |  |  | `profileAddressLink` | 
| `address_recNo` | `long` |  | PKey, Auto-Assign | `profileAddressLink` | 
| `address  [shared]` | table |  | Singleton | `profileAddressLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `address` | 
| `street1` | `string` | 128 |  | `address` | 
| `street2` | `string` | 128 |  | `address` | 
| `street3` | `string` | 128 |  | `address` | 
| `city` | `string` | 64 |  | `address` | 
| `county` | `string` | 64 |  | `address` | 
| `stateProvince` | `string` | 8 |  | `address` | 
| `stateProvinceName` | `string` | 64 |  | `address` | 
| `zipPostalCode` | `string` | 16 |  | `address` | 
| `country` | `string` | 4 |  | `address` | 
| `countryName` | `string` | 64 |  | `address` | 
| `permitMarketing` | `bool` |  |  | `address` | 
| `profileId ` | table |  |  | `profile` | 
| `recNo` | `long` |  | PKey | `profileId` | 
| `profile_recNo` | `long` |  | InsertOnly, FKey | `profileId` | 
| `id` | `string` | 32 | Required | `profileId` | 
| `profileAttachmentLink ` | table |  |  | `profile` | 
| `profile_recNo` | `long` |  | PKey, InsertOnly, FKey | `profileAttachmentLink` | 
| `sortIndex` | `short` |  |  | `profileAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `profileAttachmentLink` | 
| `attachment  [shared]` | table |  | Singleton | `profileAttachmentLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `short` |  |  | `attachment` | Database = 0, PrivateStorage = 1, PublicStorage = 2
| `createDateTime` | `DateTimeOffset` |  | ReadOnly, Lookup | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Public = 1, Private = 2, Internal = 3
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `profileTag ` | table |  |  | `profile` | 
| `recNo` | `long` |  | PKey | `profileTag` | 
| `profile_recNo` | `long` |  | InsertOnly, FKey | `profileTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `profileTag` | 
| `name` | `string` | 64 | ReadOnly | `profileTag` | 
| `value` | `string` | 1024 |  | `profileTag` | 
| `clientProfileMarketing ` | table |  |  | `clientProfile` | 
| `clientProfile_recNo` | `long` |  | PKey, InsertOnly, FKey | `clientProfileMarketing` | 
| `affiliation_recNo` | `int` |  | Required, FKey | `clientProfileMarketing` | 
| `marketingElement_recNo` | `long` |  | PKey, Required, FKey | `clientProfileMarketing` | 
| `clientProfileActionItemLink ` | table |  |  | `clientProfile` | 
| `clientProfile_recNo` | `long` |  | PKey, InsertOnly, FKey | `clientProfileActionItemLink` | 
| `actionItem_recNo` | `long` |  | PKey, Auto-Assign | `clientProfileActionItemLink` | 
| `clientProfileActionItem ` | table |  | Singleton | `clientProfileActionItemLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `actionItem` | 
| `type` | `short` |  | Deprecated | `actionItem` | Not needed
| `description` | `string` | 256 |  | `actionItem` | 
| `triggerIndex` | `short` |  | Required | `actionItem` | FixedDate = 1, CreateDate = 2, AnniversaryDate = 3
| `triggerDaysOffset` | `short` |  |  | `actionItem` | 
| `triggerFixedDate` | `Date` |  |  | `actionItem` | 
| `appUser_recNo` | `long` |  |  | `actionItem` | 
| `appUserId` | `string` | 64 | ReadOnly, Lookup | `actionItem` | 
| `completed` | `DateTimeOffset` |  |  | `actionItem` | 
| `completedBy_appUserRecNo` | `long` |  |  | `actionItem` | 
| `completedBy_appUserId` | `string` | 64 | ReadOnly, Lookup | `actionItem` | 
| `notes` | `string` |  |  | `actionItem` | 
| `documentTemplate_recNo` | `long` |  | FKey | `actionItem` | 
| `clientProfileHistory ` | table |  |  | `clientProfile` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `history` | 
| `timestamp` | `DateTimeOffset` |  |  | `history` | 
| `action` | `string` | 64 |  | `history` | 
| `tableName` | `string` | 64 |  | `history` | 
| `tableRecNo` | `long` |  |  | `history` | 
| `tableRecNo2` | `long` |  |  | `history` | 
| `columnName` | `string` | 64 |  | `history` | 
| `description` | `string` | 256 |  | `history` | 
| `oldValue` | `string` | 256 |  | `history` | 
| `newValue` | `string` | 256 |  | `history` | 
| `token_recNo` | `long` |  |  | `history` | 
| `clientIPAddress` | `string` | 16 |  | `history` | 
| `errorCode` | `int` |  |  | `history` | 
| `appUser_recNo` | `long` |  |  | `history` | 
| `appUser_id` | `string` | 64 |  | `history` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: loading client profile 11518989 (Able/Ken)
```sh
GET https://api-dev.trestechnologies.com/clientProfile/11518989
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
[
  {
    "profile_recNo": 1518989,
    "type": 1,
    "branch_recNo": 1225,
    "branchName": "Jet Set Travel",
    "referredBy": "Website",
    "advisorProfile_recNo": 1517848,
    "advisorName": "Beth Vollmar",
    "anniversaryDay": 1,
    "anniversaryMonth": 9,
    "anniversaryYear": 2001,
    "anniversaryNote": "Married on the beach",
    "formalSalutation": "Kenneth",
    "informalSalutation": "Kenny",
    "profile": {
      "recNo": 1518989,
      "name": "Able/Ken",
      "activeStatus": true,
      "uniqueId": "c77b620b-fc11-4562-9c7d-f664e0b26b61",
      "remarks": "4198230971",
      "permitMarketing": false,
      "profilePersonLink": [
        {
          "person_recNo": 1971214,
          "profile_recNo": 1518989,
          "role": "Wife to Ken",
          "isPrimary": false,
          "name": "Able/Mary Kay"
        },
        {
          "person_recNo": 1971215,
          "profile_recNo": 1518989,
          "role": "",
          "isPrimary": true,
          "name": "Able/Kenneth Michael"
        }
      ],
      "profileAddressLink": [
        {
          "profile_recNo": 1518989,
          "addressType": 1,
          "permitMarketing": false,
          "address_recNo": 1416456,
          "address": {
            "recNo": 1416456,
            "street1": "125 Main Street",
            "street2": "",
            "street3": "",
            "city": "Waterville",
            "stateProvince": "OH",
            "zipPostalCode": "45256",
            "country": "",
            "permitMarketing": false
          }
        },
        {
          "profile_recNo": 1518989,
          "addressType": 2,
          "permitMarketing": false,
          "address_recNo": 1416735,
          "address": {
            "recNo": 1416735,
            "street1": "29 High Street",
            "street2": "",
            "street3": "",
            "city": "Hampton",
            "stateProvince": "NH",
            "zipPostalCode": "03842",
            "country": "",
            "permitMarketing": false
          }
        }
      ],
      "profileCommunicationLink": [
        {
          "profile_recNo": 1518989,
          "communication_recNo": 1406556,
          "communication": {
            "recNo": 1406556,
            "type": 2,
            "subType": "",
            "value": "email@email.com",
            "countryDomain": "",
            "cityArea": "",
            "userSpecific": "",
            "description": "Work email",
            "isPrimary": true,
            "permitMarketing": true
          }
        },
        {
          "profile_recNo": 1518989,
          "communication_recNo": 1406637,
          "communication": {
            "recNo": 1406637,
            "type": 1,
            "subType": "",
            "value": "4198230971",
            "countryDomain": "",
            "cityArea": "",
            "userSpecific": "",
            "description": "",
            "isPrimary": false,
            "permitMarketing": false
          }
        },
        {
          "profile_recNo": 1518989,
          "communication_recNo": 2965284,
          "communication": {
            "recNo": 2965284,
            "type": 1,
            "subType": "4198230971",
            "value": "4198230971",
            "countryDomain": "",
            "cityArea": "",
            "userSpecific": "",
            "description": "4198230971",
            "isPrimary": true,
            "permitMarketing": false
          }
        }
      ],
      "profileId": [
        {
          "recNo": 528637,
          "profile_recNo": 1518989,
          "id": "4198230971"
        }
      ],
      "profileAttachmentLink": [
        {
          "profile_recNo": 1518989,
          "attachment_recNo": 152644,
          "attachment": {
            "recNo": 152644,
            "type": 2,
            "description": "Ken Able Passport",
            "fileNameLinkURL": "passport.png",
            "size": 94162,
            "compressed": false
          }
        }
      ]
    },
    "clientProfileMarketing": [
      {
        "clientProfile_recNo": 1518989,
        "affiliation_recNo": 14,
        "marketingElement_recNo": 117
      },
      {
        "clientProfile_recNo": 1518989,
        "affiliation_recNo": 14,
        "marketingElement_recNo": 120
      },
      {
        "clientProfile_recNo": 1518989,
        "affiliation_recNo": 14,
        "marketingElement_recNo": 129
      }
    ]
  }
]
```

