---
layout: post
---

# HistorySearch


| Column | Type | Size | Description | 
| ------ | ---- | ---- | ----------- | 
| recNo | long |  | 
| summaryCount | int |  | 
| timestamp | DateTimeOffset |  | 
| appUser_recNo | long |  | 
| appUser_id | string | 64 | 
| action | string | 64 | 
| tableName | string | 64 | 
| tableRecNo | long |  | 
| columnName | string | 64 | 
| description | string | 256 | 
| oldValue | string | 256 | 
| newValue | string | 256 | 

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
| tableName | string |  | 
| tableRecNo | long |  | 
| action | string[] |  | 
| timeStampFrom | DateTimeOffset |  | 
| timeStampTo | DateTimeOffset |  | 
| appUser_recNo | string |  | 
| appUser_id | string |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/historySearch
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
