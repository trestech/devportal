---
layout: post
---

# ProfileSearch


| Column | Type | Size | Description | 
| ------ | ---- | ---- | ----------- | 
| recNo | long |  | 
| tagValue | string | 1024 | 
| summaryCount | int |  | 
| name | string | 256 | 
| profileType | short |  | 
| clientType | short |  | 
| supplierType | short |  | 
| primaryPersonRecNo | long |  | 
| primaryPersonName | string | 256 | 
| primaryPersonFirstName | string | 64 | 
| primaryPersonLastName | string | 64 | 
| primaryPersonEmail | string | 256 | 
| primaryPersonPhone | string | 256 | 
| clientAnniversaryDay | short |  | 
| clientAnniversaryMonth | short |  | 
| clientAnniversaryYear | short |  | 
| clientAnniversaryNote | string | 256 | 
| clientAdvisorProfileRecNo | long |  | 
| clientAdvisorName | string | 256 | 
| clientBranchRecNo | long |  | 
| clientBranchName | string | 64 | 
| remarks | string | 256 | 
| activeStatus | bool |  | 
| primaryEmail | string | 256 | 
| primaryEmailPermitMarketing | bool |  | 
| primaryPhone | string | 256 | 
| primaryPhonePermitMarketing | bool |  | 
| preferredSupplier | bool |  | 
| street1 | string | 128 | 
| street2 | string | 128 | 
| city | string | 64 | 
| stateProvince | string | 8 | 
| zipPostalCode | string | 16 | 
| country | string | 4 | 
| mailingStreet1 | string | 128 | 
| mailingStreet2 | string | 128 | 
| mailingCity | string | 64 | 
| mailingStateProvince | string | 8 | 
| mailingZipPostalCode | string | 16 | 
| mailingCountry | string | 4 | 
| addressPermitMarketing | bool |  | 
| clientReferredBy | string | 64 | 
| clientCreateDateTime | DateTime |  | 
| clientLastModifiedDateTime | DateTime |  | 
| supplierVendorId | string | 10 | 
| clientInformalSalutation | string | 128 | 
| clientFormalSalutation | string | 128 | 

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
| profileName | string |  | 
| profileNameCond | short |  | 
| commType | short |  | 
| commValue | string |  | 
| commValueCond | short |  | 
| clientAnniversaryMonth | short[] |  | 
| clientAnniversaryMonthFrom | short |  | 
| clientAnniversaryMonthTo | short |  | 
| clientAnniversaryDayFrom | short |  | 
| clientAnniversaryDayTo | short |  | 
| clientAdvisorProfileRecNo | long |  | 
| clientType | short |  | 
| supplierType | short |  | 
| activestatus | bool |  | 
| clientBranchRecNo | long |  | 
| personRecNo | long |  | 
| personName | string |  | 
| personFirstName | string |  | 
| personFirstNameCond | short |  | 
| personLastName | string |  | 
| personLastNameCond | short |  | 
| preferredSupplier | bool |  | 
| street1 | string |  | 
| city | string |  | 
| stateProvince | string |  | 
| zipPostalCode | string |  | 
| country | string |  | 
| marketing | [marketing[]](/marketing) |  | 
| id | string |  | 
| emailPermitMarketing | bool |  | 
| phonePermitMarketing | bool |  | 
| addressPermitMarketing | bool |  | 
| clientCreateDateTimeFrom | DateTimeOffset |  | 
| clientCreateDateTimeTo | DateTimeOffset |  | 
| clientModifiedDateTimeFrom | DateTimeOffset |  | 
| clientModifiedDateTimeTo | DateTimeOffset |  | 
| supplierVendorId | string |  | 
| clientTripSearchParams | [tripSearch](/tripSearch) |  | 
| supplierTripSearchParams | [tripSearch](/tripSearch) |  | 
| clientActivitySearchParams | [activitySearch](/activitySearch) |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/profileSearch
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
