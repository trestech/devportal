---
layout: post
---

# AppSettingSearch


| Column | Type | Size | Description | 
| ------ | ---- | ---- | ----------- | 
| recNo | long |  | 
| summaryCount | int |  | 
| appUser_recNo | long |  | 
| area | string | 64 | 
| name | string | 64 | 
| description | string | 64 | 
| data | string |  | 

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
| area | string |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/appSettingSearch
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
