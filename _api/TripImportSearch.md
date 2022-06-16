---
layout: post
---

# TripImportSearch


| Column | Type | Size | Description | 
| ------ | ---- | ---- | ----------- | 
| recNo | long |  | 
| summaryCount | int |  | 
| type | short |  | 
| subType | short |  | 
| source | string | 64 | 
| recordLocator | string | 6 | 
| status | short |  | 
| statusMessage | string | 256 | 
| advisorProfile_recNo | long |  | 
| advisorProfile_Name | string | 256 | 
| branch_recNo | long |  | 
| branch_name | string | 64 | 
| tripReference | string | 64 | 
| createDateTime | DateTimeOffset |  | 
| lastModifiedDateTime | DateTimeOffset |  | 
| trip_RecNo | long |  | 

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
| type | short[] |  | 
| status | short[] |  | 
| tripRecNo | long |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/tripImportSearch
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
