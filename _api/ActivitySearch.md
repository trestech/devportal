---
layout: post
---

﻿# ActivitySearch


| Column | Type | Size | Description | 
| ------ | ---- | ---- | ----------- | 
| recNo | long |  | 
| tagValue | string | 1024 | 
| summaryCount | int |  | 
| type | short |  | 
| appUser_recNo | long |  | 
| appUserId | string | 64 | 
| subject | string | 64 | 
| priority | short |  | 
| targetDateTime | DateTimeOffset |  | 
| targetDate | Date |  | 
| completionDateTime | DateTime |  | 
| clientProfileRecNo | long |  | 
| clientProfileName | string | 256 | 
| supplierProfileRecNo | long |  | 
| supplierProfileName | string | 256 | 
| personRecNo | long |  | 
| personName | string | 256 | 
| tripRecNo | long |  | 
| tripName | string | 256 | 
| createDateTime | DateTimeOffset |  | 
| remarks | string |  | 

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
| appUserRecNo | long |  | 
| type | short[] |  | 
| targetDateFrom | Date |  | 
| targetDateTo | Date |  | 
| targetDateTimeFrom | Date |  | 
| targetDateTimeTo | Date |  | 
| completed | bool |  | 
| clientProfileRecNo | long |  | 
| supplierProfileRecNo | long |  | 
| personRecNo | long |  | 
| tripRecNo | long |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/activitySearch
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
