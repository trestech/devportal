---
layout: api_page
title: "PersonSearch"
description: "PersonSearch returns data for persons (travelers)"
---

PersonSearch returns data for persons (travelers).

User needs at least select permission for person records. Results may be filtered if person permission includes OnlySelf (based on user's linked advisors) or if permission includes OnlyBranch (based on user's branch).

Referenced Table: [Person]({{ '/api/Person.html' | relative_url }})

Permission Areas: Person

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | person | 
| tagValue | string | 1024 | person | 
| summaryCount | int |  | person | 
| name | string | 256 | person | 
| firstName | string | 64 | person | 
| middleName | string | 64 | person | 
| lastName | string | 64 | person | 
| primaryPhone | string | 256 | person | 
| primaryPhoneMarketingPermission | bool |  | person | 
| primaryEmail | string | 256 | person | 
| primaryEmailMarketingPermission | bool |  | person | 
| birthdayDay | short |  | person | 
| birthdayMonth | short |  | person | 
| birthdayYear | short |  | person | 
| birthdayNote | string | 256 | person | 
| remarks | string | 256 | person | 
| createDateTime | DateTime |  | person | 
| lastModifiedDateTime | DateTime |  | person | 
| cardType | short |  | person | CreditDebit = 1, Loyalty = 2, Passport = 3
| cardNumber | string | 64 | card | 
| cardExpDate | Date |  | card | 
| cardDescription | string | 128 | card | 
| cardRecNo | long |  | card | 
| branchRecNo | long |  | person | 
| branchRecName | string | 64 | person | 
| advisorProfileRecNo | long |  | person | 

| Parameter | Type | Linked Column | Linked Parameter | Description |
| --------- | ---- | ------------- | ---------------- | ----------- |
| recNo [inherited] | long |  |  | 
| recNoList [inherited] | long[] |  |  | 
| startingRow [inherited] | int |  |  | 
| rowCount [inherited] | int |  |  | 
| topRows [inherited] | int |  |  | 
| distinct [inherited] | bool |  |  | 
| includeCols [inherited] | string[] |  |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  |  | 
| baseUrl [inherited] | string |  |  | 
| tagRecNo [inherited] | long[] |  |  | 
| tagValue [inherited] | string |  |  | 
| tagValueCond [inherited] | short |  | tagValue | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| displayTagRecNo [inherited] | long |  |  | 
| tags [inherited] | [TagsSearch[]](/TagsSearch) |  |  | 
| name | string |  |  | 
| firstName | string |  |  | 
| firstNameCond | short |  | firstName | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| middleName | string |  |  | 
| middleNameCond | short |  | middleName | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| lastName | string |  |  | 
| lastNameCond | short |  | lastName | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| commType | short |  |  | Phone = 1, Email = 2, SocialMedia = 3, Web = 4
| commValue | string |  |  | 
| commValueCond | short |  | commValue | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| commValueCountryDomain | string |  |  | 
| commValueCityArea | string |  |  | 
| commValueUserSpecific | string |  |  | 
| profileRecNo | long |  |  | 
| birthdayMonth | short[] |  |  | 
| birthdayMonthFrom | short |  |  | 
| birthdayMonthTo | short |  |  | 
| birthdayDayFrom | short |  |  | 
| birthdayDayTo | short |  |  | 
| marketing | [marketing[]](/marketing) |  |  | 
| emailPermitMarketing | bool |  |  | 
| phonePermitMarketing | bool |  |  | 
| createDateTimeFrom | DateTimeOffset |  |  | 
| createDateTimeTo | DateTimeOffset |  |  | 
| modifiedDateTimeFrom | DateTimeOffset |  |  | 
| modifiedDateTimeTo | DateTimeOffset |  |  | 
| cardType | short[] |  |  | CreditDebit = 1, Loyalty = 2, Passport = 3
| personActivitySearchParams | [activitySearch](/activitySearch) |  |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: a person search that returns the recNo and name for persons whose name starts with "Able"
```sh
POST https://api-dev.trestechnologies.com/personSearch
Content-Type: application/json
Authorization: Bearer <session-token>
{
  "name": "Able",
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

