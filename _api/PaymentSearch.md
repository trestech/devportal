---
layout: post
---

# PaymentSearch


| Column | Type | Size | Description | 
| ------ | ---- | ---- | ----------- | 
| recNo | long |  | 
| tagValue | string | 1024 | 
| summaryCount | int |  | 
| profileType | short |  | 
| profileRecNo | long |  | 
| profileName | string | 256 | 
| amount | long |  | 
| paymentDate | Date |  | 
| payType | short |  | 
| method | short |  | 
| bankRecNo | long |  | 
| bankName | string | 64 | 
| agencyProcessed | bool |  | 
| cardNumber | string | 64 | 
| nameOnCard | string | 64 | 
| checkNumber | long |  | 
| reservationRecNo | long |  | 
| reservationAmount | long |  | 
| voided | bool |  | 
| accountingEntryRecNo | long |  | 

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
| profileType | short |  | 
| tripRecNo | long |  | 
| reservationRecNo | long[] |  | 
| paymentDateFrom | Date |  | 
| paymentDateTo | Date |  | 
| clientProfileRecNo | long |  | 
| supplierProfileRecNo | long |  | 
| otherProfileRecNo | long |  | 
| payType | short |  | 
| method | short |  | 
| bankRecNo | long[] |  | 
| agencyProcessed | bool |  | 
| voided | bool |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/paymentSearch
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
