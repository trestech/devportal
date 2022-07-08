---
layout: api_page
title: "ProfileSearch"
description: "ProfileSearch returns data for client, supplier, advisor and other profiles"
---

ProfileSearch returns data for client, supplier, advisor and other profiles.

User needs at least select permission for whichever type of profile being searched for. Results may be filtered if client or advisor permission includes OnlySelf (based on user's linked advisors) or if client permission or advisor permission includes OnlyBranch (based on user's branch).

Referenced Table: [Profile]({{ '/api/Profile.html' | relative_url }})

Permission Areas: AdvisorProfile, ClientProfile, OtherProfile, SupplierProfile

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | profile | 
| tagValue | string | 1024 | profile | 
| summaryCount | int |  | profile | 
| name | string | 256 | profile | 
| profileType | short |  | profile | Client = 1, Supplier = 2, Advisor = 3, Other = 4
| clientType | short |  | clientProfile | Personal = 1, Corporate = 2
| supplierType | short |  | supplierProfile | BillingAndServiceProvider = 1, BillingProvider = 2, ServiceProvider = 3
| primaryPersonRecNo | long |  | profile | 
| primaryPersonName | string | 256 | profile | 
| primaryPersonFirstName | string | 64 | profile | 
| primaryPersonLastName | string | 64 | profile | 
| primaryPersonEmail | string | 256 | profile | 
| primaryPersonPhone | string | 256 | profile | 
| clientAnniversaryDay | short |  | clientProfile | 
| clientAnniversaryMonth | short |  | clientProfile | 
| clientAnniversaryYear | short |  | clientProfile | 
| clientAnniversaryNote | string | 256 | clientProfile | 
| clientAdvisorProfileRecNo | long |  | clientProfile | 
| clientAdvisorName | string | 256 | clientProfile | 
| clientBranchRecNo | long |  | clientProfile | 
| clientBranchName | string | 64 | clientProfile | 
| remarks | string | 256 | profile | 
| activeStatus | bool |  | profile | 
| primaryEmail | string | 256 | profile | 
| primaryEmailPermitMarketing | bool |  | profile | 
| primaryPhone | string | 256 | profile | 
| primaryPhonePermitMarketing | bool |  | profile | 
| preferredSupplier | bool |  | supplierProfile | 
| street1 | string | 128 | address | 
| street2 | string | 128 | address | 
| city | string | 64 | address | 
| stateProvince | string | 8 | address | 
| zipPostalCode | string | 16 | address | 
| country | string | 4 | address | 
| mailingStreet1 | string | 128 | address | 
| mailingStreet2 | string | 128 | address | 
| mailingCity | string | 64 | address | 
| mailingStateProvince | string | 8 | address | 
| mailingZipPostalCode | string | 16 | address | 
| mailingCountry | string | 4 | address | 
| addressPermitMarketing | bool |  | address | 
| clientReferredBy | string | 64 | clientProfile | 
| clientCreateDateTime | DateTime |  | clientProfile | 
| clientLastModifiedDateTime | DateTime |  | clientProfile | 
| supplierVendorId | string | 10 | supplierProfile | 
| clientInformalSalutation | string | 128 | clientProfile | 
| clientFormalSalutation | string | 128 | clientProfile | 

| Parameter | Type | Linked Parameter | Description |
| --------- | ---- | ---------------- | ----------- |
| recNo [inherited] | long |  | 
| recNoList [inherited] | long[] |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | includeColsExtended[] |  | 
| baseUrl [inherited] | string |  | 
| tagRecNo [inherited] | long[] |  | 
| tagValue [inherited] | string |  | 
| tagValueCond [inherited] | short | tagValue | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| displayTagRecNo [inherited] | long |  | 
| tags [inherited] | [TagsSearch[]](/TagsSearch) |  | 
| profileType | short |  | Client = 1, Supplier = 2, Advisor = 3, Other = 4
| profileName | string |  | 
| profileNameCond | short | profileName | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| commType | short |  | Phone = 1, Email = 2, SocialMedia = 3, Web = 4
| commValue | string |  | 
| commValueCond | short | commValue | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| clientAnniversaryMonth | short[] |  | 
| clientAnniversaryMonthFrom | short |  | 
| clientAnniversaryMonthTo | short |  | 
| clientAnniversaryDayFrom | short |  | 
| clientAnniversaryDayTo | short |  | 
| clientAdvisorProfileRecNo | long |  | 
| clientType | short |  | Personal = 1, Corporate = 2
| supplierType | short |  | BillingAndServiceProvider = 1, BillingProvider = 2, ServiceProvider = 3
| activestatus | bool |  | 
| clientBranchRecNo | long |  | 
| personRecNo | long |  | 
| personName | string |  | 
| personFirstName | string |  | 
| personFirstNameCond | short | personFirstName | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
| personLastName | string |  | 
| personLastNameCond | short | personLastName | See [StringCompare]({{ '/api/StringCompare.html' | relative_url }})
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

#### Example request: a profile search that returns the profile recNo and name for active client profiles whose name starts with "Able"
```sh
POST https://api-dev.trestechnologies.com/profileSearch
Content-Type: application/json
Authorization: Bearer <session-token>
{
  "profileType": 1,
  "activestatus": true,
  "profileNameCond": 5,
  "profileName": "Able",
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
    "recNo": 1519190,
    "name": "Able Family"
  },
  {
    "recNo": 1518989,
    "name": "Able/Ken"
  },
  {
    "recNo": 2089967,
    "name": "Abler/Hale Nicole"
  },
  {
    "recNo": 1517502,
    "name": "Abler/Ken"
  }
]
```

