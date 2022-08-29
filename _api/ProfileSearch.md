---
layout: api_page
title: "ProfileSearch"
description: "ProfileSearch returns data for client, supplier, advisor and other profiles"
---

ProfileSearch returns data for client, supplier, advisor and other profiles.

User needs at least select permission for whichever type of profile being searched for. Results may be filtered if client or advisor permission includes OnlySelf (based on user's linked advisors) or if client permission or advisor permission includes OnlyBranch (based on user's branch).

Permission Areas: AdvisorProfile, ClientProfile, OtherProfile, SupplierProfile

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `profile` | 
| `tagValue` | `string` | 1024 | `profile` | 
| `summaryCount` | `int` |  | `profile` | 
| `name` | `string` | 256 | `profile` | 
| `profileType` | `short` |  | `profile` | Client = 1, Supplier = 2, Advisor = 3, Other = 4
| `clientType` | `short` |  | `clientProfile` | Personal = 1, Corporate = 2
| `supplierType` | `short` |  | `supplierProfile` | BillingAndServiceProvider = 1, BillingProvider = 2, ServiceProvider = 3
| `primaryPersonRecNo` | `long` |  | `profile` | 
| `primaryPersonName` | `string` | 256 | `profile` | 
| `primaryPersonFirstName` | `string` | 64 | `profile` | 
| `primaryPersonLastName` | `string` | 64 | `profile` | 
| `primaryPersonEmail` | `string` | 256 | `profile` | 
| `primaryPersonPhone` | `string` | 256 | `profile` | 
| `clientAnniversaryDay` | `short` |  | `clientProfile` | 
| `clientAnniversaryMonth` | `short` |  | `clientProfile` | 
| `clientAnniversaryYear` | `short` |  | `clientProfile` | 
| `clientAnniversaryNote` | `string` | 256 | `clientProfile` | 
| `clientAdvisorProfileRecNo` | `long` |  | `clientProfile` | 
| `clientAdvisorName` | `string` | 256 | `clientProfile` | 
| `clientBranchRecNo` | `long` |  | `clientProfile` | 
| `clientBranchName` | `string` | 64 | `clientProfile` | 
| `remarks` | `string` | 256 | `profile` | 
| `activeStatus` | `bool` |  | `profile` | 
| `primaryEmail` | `string` | 256 | `profile` | 
| `primaryEmailPermitMarketing` | `bool` |  | `profile` | 
| `primaryPhone` | `string` | 256 | `profile` | 
| `primaryPhonePermitMarketing` | `bool` |  | `profile` | 
| `preferredSupplier` | `bool` |  | `supplierProfile` | 
| `street1` | `string` | 128 | `address` | 
| `street2` | `string` | 128 | `address` | 
| `city` | `string` | 64 | `address` | 
| `stateProvince` | `string` | 8 | `address` | 
| `zipPostalCode` | `string` | 16 | `address` | 
| `country` | `string` | 4 | `address` | 
| `mailingStreet1` | `string` | 128 | `address` | 
| `mailingStreet2` | `string` | 128 | `address` | 
| `mailingCity` | `string` | 64 | `address` | 
| `mailingStateProvince` | `string` | 8 | `address` | 
| `mailingZipPostalCode` | `string` | 16 | `address` | 
| `mailingCountry` | `string` | 4 | `address` | 
| `addressPermitMarketing` | `bool` |  | `address` | 
| `clientReferredBy` | `string` | 64 | `clientProfile` | 
| `clientCreateDateTime` | `DateTime` |  | `clientProfile` | 
| `clientLastModifiedDateTime` | `DateTime` |  | `clientProfile` | 
| `supplierVendorId` | `string` | 10 | `supplierProfile` | 
| `clientInformalSalutation` | `string` | 128 | `clientProfile` | 
| `clientFormalSalutation` | `string` | 128 | `clientProfile` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `displayTagRecNo [inherited]` | `long` |  | 
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `profileType` | `long` | `profileType` | 
| `profileName` | [`StringSearchParam`](StringSearchParam) | `name` | 
| `commType` | `long` |  | 
| `commValue` | [`StringSearchParam`](StringSearchParam) |  | 
| `clientAnniversaryMonth` | [`NumSearchParam`](NumSearchParam) | `clientAnniversaryMonth` | 
| `clientAnniversaryMonthFrom` | `long` |  | 
| `clientAnniversaryMonthTo` | `long` |  | 
| `clientAnniversaryDayFrom` | `long` |  | 
| `clientAnniversaryDayTo` | `long` |  | 
| `clientAdvisorProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `clientAdvisorProfileRecNo` | 
| `clientType` | `long` | `clientType` | 
| `supplierType` | `long` | `supplierType` | 
| `activestatus` | `bool` | `activeStatus` | 
| `clientBranchRecNo` | [`NumSearchParam`](NumSearchParam) | `clientBranchRecNo` | 
| `personRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `personFirstName` | [`StringSearchParam`](StringSearchParam) |  | 
| `personLastName` | [`StringSearchParam`](StringSearchParam) |  | 
| `preferredSupplier` | `bool` | `preferredSupplier` | 
| `street1` | [`StringSearchParam`](StringSearchParam) | `street1` | 
| `city` | [`StringSearchParam`](StringSearchParam) | `city` | 
| `stateProvince` | [`StringSearchParam`](StringSearchParam) | `stateProvince` | 
| `zipPostalCode` | [`StringSearchParam`](StringSearchParam) | `zipPostalCode` | 
| `country` | [`StringSearchParam`](StringSearchParam) | `country` | 
| `marketing` | [`MarketingSearchParam[]`](MarketingSearchParam) |  | 
| `id` | [`StringSearchParam`](StringSearchParam) |  | 
| `emailPermitMarketing` | `bool` |  | 
| `phonePermitMarketing` | `bool` |  | 
| `addressPermitMarketing` | `bool` | `addressPermitMarketing` | 
| `clientCreateDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `clientCreateDateTimeTo` | `DateTimeUTCSearchParam` |  | 
| `clientModifiedDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `clientModifiedDateTimeTo` | `DateTimeUTCSearchParam` |  | 
| `supplierVendorId` | [`StringSearchParam`](StringSearchParam) | `supplierVendorId` | 
| `clientTripSearchParams` | `TripSearchParams` |  | 
| `supplierTripSearchParams` | `TripSearchParams` |  | 
| `clientActivitySearchParams` | `ActivitySearchParams` |  | 

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
  "profileType": {
    "value": 1
  },
  "activestatus": true,
  "profileName": {
    "value": [
      "Able"
    ],
    "compareCondition": 5
  },
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

