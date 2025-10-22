---
layout: api_page
title: "PersonSearch"
description: "PersonSearch returns data for persons (travelers)"
assembly_version: "1.5.6.5"
---

PersonSearch returns data for persons (travelers).

User needs at least select permission for person records. Results may be filtered if person permission includes OnlySelf (based on user's linked advisors) or if permission includes OnlyBranch (based on user's branch).

See: [Person](Person.html)

Permission Areas: Person

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `person` | 
| `tagRecNo` | `long` |  | `person` | 
| `tagName` | `string` | 64 | `person` | 
| `tagValue` | `string` | 1024 | `person` | 
| `tags` | `string` |  | `person` | 
| `summaryCount` | `int` |  | `person` | 
| `createDateTime` | `DateTimeOffset` |  | `person` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `person` | 
| `name` | `string` | 256 | `person` | 
| `uniqueId` | `string` | 64 | `person` | 
| `firstName` | `string` | 64 | `person` | 
| `middleName` | `string` | 64 | `person` | 
| `lastName` | `string` | 64 | `person` | 
| `primaryPhone` | `string` | 256 | `person` | 
| `primaryPhoneMarketingPermission` | `bool` |  | `person` | 
| `primaryEmail` | `string` | 256 | `person` | 
| `primaryEmailMarketingPermission` | `bool` |  | `person` | 
| `birthdayDay` | `short` |  | `person` | 
| `birthdayMonth` | `short` |  | `person` | 
| `birthdayYear` | `short` |  | `person` | 
| `birthdayNote` | `string` | 256 | `person` | 
| `remarks` | `string` | 256 | `person` | 
| `cardType` | `short` |  | `person` | CreditDebit = 1, Loyalty = 2, TravelDocument = 3
| `cardSubType` | `short` |  | `person` | 
| `cardNumber` | `string` | 64 | `card` | 
| `cardExpDate` | `Date` |  | `card` | 
| `cardDescription` | `string` | 512 | `card` | 
| `cardRecNo` | `long` |  | `card` | 
| `nameOnCard` | `string` | 64 | `card` | 
| `branchRecNo` | `long` |  | `person` | 
| `branchRecName` | `string` | 64 | `person` | 
| `advisorProfileRecNo` | `long` |  | `person` | 
| `advisorProfileName` | `string` | 256 | `person` | 
| `activeStatus` | `short` |  | `person` | Inactive = 0, Active = 1, Pending = 2
| `actionRecNo` | `long` |  | `personActionItem` | 
| `actionItemTriggerIndex` | `short` |  | `personActionItem` | FixedDate = 1, CreateDate = 2, Birthday = 3
| `actionItemDate` | `Date` |  | `personActionItem` | 
| `actionItemTriggerFixedDate` | `Date` |  | `personActionItem` | 
| `actionItemDescription` | `string` |  | `personActionItem` | 
| `actionItemCompleted` | `DateTime` |  | `personActionItem` | 
| `actionItemAssignedToAppUserRecNo` | `long` |  | `personActionItem` | 
| `actionItemAssignedToAppUserId` | `string` | 64 | `personActionItem` | 
| `associatedProfileNames` | `string` |  | `person` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `createDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `createDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
| `queryOptimizerFlags [inherited]` | [`int<int>`] |  | Recompile = 1
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `UniqueId` | `string` | `uniqueId` | 
| `firstName` | [`StringSearchParam`](StringSearchParam) | `firstName` | 
| `middleName` | [`StringSearchParam`](StringSearchParam) | `middleName` | 
| `lastName` | [`StringSearchParam`](StringSearchParam) | `lastName` | 
| `commType` | [`short<short>`] |  | Phone = 1, Email = 2, SocialMedia = 3, Web = 4
| `commValue` | [`StringSearchParam`](StringSearchParam) |  | 
| `commValueCountryDomain` | [`StringSearchParam`](StringSearchParam) |  | 
| `commValueCityArea` | [`StringSearchParam`](StringSearchParam) |  | 
| `commValueUserSpecific` | [`StringSearchParam`](StringSearchParam) |  | 
| `profileRecNo` | [`NumSearchParam`](NumSearchParam) | `profile_recNo` | 
| `birthdayMonth` | [`NumSearchParam`](NumSearchParam) | `birthdayMonth` | 
| `birthdayMonthFrom` | `long` |  | 
| `birthdayMonthTo` | `long` |  | 
| `birthdayDayFrom` | `long` |  | 
| `birthdayDayTo` | `long` |  | 
| `marketing` | [`MarketingSearchParam[]`](MarketingSearchParam) |  | 
| `emailPermitMarketing` | `bool` |  | 
| `phonePermitMarketing` | `bool` |  | 
| `cardType` | [`short<short>`] | `cardType` | CreditDebit = 1, Loyalty = 2, TravelDocument = 3
| `cardSubType` | [`NumSearchParam`](NumSearchParam) | `cardSubType` | 
| `cardExpirationDateFrom` | `DateSearchParam` |  | 
| `cardExpirationDateTo` | `DateSearchParam` |  | 
| `AdvisorProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `advisorProfileRecNo` | 
| `activeStatus` | [`short<short>`] | `activeStatus` | Inactive = 0, Active = 1, Pending = 2
| `actionItemCompleted` | `bool` | `actionItemCompleted` | 
| `actionItemDateFrom` | `DateSearchParam` | `actionItemDate` | 
| `actionItemDateTo` | `DateSearchParam` | `actionItemDate` | 
| `actionItemAssignedToAppUserRecNo` | [`NumSearchParam`](NumSearchParam) | `actionItemAssignedToAppUserRecNo` | 
| `personActivitySearchParams` | `ActivitySearchParams` |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: a person search that returns the recNo and name for persons whose last name starts with "Able"
```sh
POST https://api-dev.trestechnologies.com/personSearch
Content-Type: application/json
Authorization: Bearer <session-token>
{
  "lastName": {
    "value": [
      "Able"
    ],
    "compareCondition": 5
  },
  "includeCols": [
    "recNo",
    "name"
  ]
}
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
[
  {
    "recNo": 1969998,
    "name": "Abler/Sue"
  },
  {
    "recNo": 1969999,
    "name": "Abler/Ken"
  },
  {
    "recNo": 1970000,
    "name": "Abler/Hale Nicole"
  }
]
```

