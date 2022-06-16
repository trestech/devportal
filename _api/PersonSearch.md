---
layout: post
---

# PersonSearch


| Column | Type | Size | Description | 
| ------ | ---- | ---- | ----------- | 
| recNo | long |  | 
| tagValue | string | 1024 | 
| summaryCount | int |  | 
| name | string | 256 | 
| firstName | string | 64 | 
| middleName | string | 64 | 
| lastName | string | 64 | 
| primaryPhone | string | 256 | 
| primaryPhoneMarketingPermission | bool |  | 
| primaryEmail | string | 256 | 
| primaryEmailMarketingPermission | bool |  | 
| birthdayDay | short |  | 
| birthdayMonth | short |  | 
| birthdayYear | short |  | 
| birthdayNote | string | 256 | 
| remarks | string | 256 | 
| createDateTime | DateTime |  | 
| lastModifiedDateTime | DateTime |  | 
| cardType | short |  | 
| cardNumber | string | 64 | 
| cardExpDate | Date |  | 
| cardDescription | string | 128 | 

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
{
	"targetDateFrom": "12/31/2001",
	"targetDateFrom": "12/31/2001",
	"includeCols": ["recNo", "name"]
}
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
{
	{
		"recNo": 1969697,
		"name": "Anderson/Jennifer"
	},
	{
		"recNo": 1969733,
		"name": "Abler/K"
	},
}
```
