---
layout: api_page
title: "PersonSearch"
description: "PersonSearch returns data for persons (travelers)"
---

PersonSearch returns data for persons (travelers).

User needs at least select permission for person records. Results may be filtered if person permission includes OnlySelf (based on user's linked advisors) or if permission includes OnlyBranch (based on user's branch).

Permission Areas: Person

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `person` | 
| `tagValue` | `string` | 1024 | `person` | 
| `summaryCount` | `int` |  | `person` | 
| `name` | `string` | 256 | `person` | 
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
| `createDateTime` | `DateTime` |  | `person` | 
| `lastModifiedDateTime` | `DateTime` |  | `person` | 
| `cardType` | `short` |  | `person` | CreditDebit = 1, Loyalty = 2, Passport = 3
| `cardNumber` | `string` | 64 | `card` | 
| `cardExpDate` | `Date` |  | `card` | 
| `cardDescription` | `string` | 512 | `card` | 
| `cardRecNo` | `long` |  | `card` | 
| `branchRecNo` | `long` |  | `person` | 
| `branchRecName` | `string` | 64 | `person` | 
| `advisorProfileRecNo` | `long` |  | `person` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
| `displayTagRecNo [inherited]` | `long` |  | 
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `firstName` | [`StringSearchParam`](StringSearchParam) | `firstName` | 
| `middleName` | [`StringSearchParam`](StringSearchParam) | `middleName` | 
| `lastName` | [`StringSearchParam`](StringSearchParam) | `lastName` | 
| `commType` | `long` |  | 
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
| `createDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `createDateTimeTo` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeTo` | `DateTimeUTCSearchParam` |  | 
| `cardType` | `long` | `cardType` | 
| `AdvisorProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `advisorProfileRecNo` | 
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

