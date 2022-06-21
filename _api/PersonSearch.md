---
layout: page
title: "PersonSearch"
description: ""
---



Referenced Table: [person](/person)

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
| cardType | short |  | person | 
| cardNumber | string | 64 | card | 
| cardExpDate | Date |  | card | 
| cardDescription | string | 128 | card | 

| Parameter | Type | Linked Parameter | Description |
| --------- | ---- | ---------------- | ----------- |
| recNo [inherited] | long |  | 
| recNoList [inherited] | long[] |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | [includeColsExtended[]](/includeColsExtended) |  | 
| baseUrl [inherited] | string |  | 
| tagRecNo [inherited] | long[] |  | 
| tagValueCond [inherited] | short |  | 
| tagValue [inherited] | string |  | 
| displayTagRecNo [inherited] | long |  | 
| tags [inherited] | [TagsSearch[]](/TagsSearch) |  | 
| name | string |  | 
| firstName | string |  | 
| firstNameCond | short |  | 
| middleName | string |  | 
| middleNameCond | short |  | 
| lastName | string |  | 
| lastNameCond | short |  | 
| commType | short |  | 
| commValue | string |  | 
| commValueCond | short |  | 
| commValueCountryDomain | string |  | 
| commValueCityArea | string |  | 
| commValueUserSpecific | string |  | 
| profileRecNo | long |  | 
| birthdayMonth | short[] |  | 
| birthdayMonthFrom | short |  | 
| birthdayMonthTo | short |  | 
| birthdayDayFrom | short |  | 
| birthdayDayTo | short |  | 
| marketing | [marketing[]](/marketing) |  | 
| emailPermitMarketing | bool |  | 
| phonePermitMarketing | bool |  | 
| createDateTimeFrom | DateTimeOffset |  | 
| createDateTimeTo | DateTimeOffset |  | 
| modifiedDateTimeFrom | DateTimeOffset |  | 
| modifiedDateTimeTo | DateTimeOffset |  | 
| cardType | short[] |  | 
| personActivitySearchParams | [activitySearch](/activitySearch) |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/personSearch
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
```

