---
layout: api_page
title: "TravelerPortalAgency"
description: ""
assembly_version: "1.4.15.6"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `name` | `string` | 256 |  | `travelerPortalAgency` | 
| `phone` | `string` | 256 |  | `travelerPortalAgency` | 
| `email` | `string` | 256 |  | `travelerPortalAgency` | 
| `street1` | `string` | 128 |  | `travelerPortalAgency` | 
| `street2` | `string` | 128 |  | `travelerPortalAgency` | 
| `city` | `string` | 64 |  | `travelerPortalAgency` | 
| `stateProvince` | `string` | 8 |  | `travelerPortalAgency` | 
| `zipPostalCode` | `string` | 16 |  | `travelerPortalAgency` | 
| `country` | `string` | 4 |  | `travelerPortalAgency` | 
| `headerInfo` | `string` | 512 |  | `travelerPortalAgency` | 
| `logoData` | `byte[]` |  |  | `travelerPortalAgency` | 
| `logoDirectUrl` | `string` | 256 |  | `travelerPortalAgency` | 
| `brandingColor` | `int` |  |  | `travelerPortalAgency` | 
| `clientProfileName` | `string` | 256 |  | `travelerPortalAgency` | 
| `advisorProfile_recNo` | `long` |  | FKey | `travelerPortalAgency` | 
| `branch_recNo` | `long` |  | FKey | `travelerPortalAgency` | 
| `acknowledgementVerbiage` | `string` | 1024 |  | `travelerPortalAgency` | 
| `agency_recNo` | `long` |  |  | `travelerPortalAgency` | 
| `agencyPersonTag ` | table |  |  | `travelerPortalAgency` | 
| `agency_recNo` | `long` |  | InsertOnly, FKey | `agencyPersonTag` | 
| `recNo` | `long` |  | PKey | `agencyPersonTag` | 
| `name` | `string` | 64 | Required | `agencyPersonTag` | 
| `activeStatus` | `bool` |  |  | `agencyPersonTag` | 
| `valueFreeFlow` | `bool` |  |  | `agencyPersonTag` | 
| `valueRequired` | `bool` |  |  | `agencyPersonTag` | 
| `valueList` | `string` |  |  | `agencyPersonTag` | 
| `description` | `string` | 64 |  | `agencyPersonTag` | 
| `areaFlags` | `int` |  |  | `agencyPersonTag` | All = 0, Client = 1, Traveler = 2, Supplier = 4, Advisor = 8, Trip = 16, Reservation = 32, Payment = 64, Activity = 128, AdvisorAdjustment = 256, Destination = 512, Branch = 1024, OtherProfile = 2048
| `requirement` | `short` |  | Required | `agencyPersonTag` | Optional = 1, Recommended = 2, Mandatory = 3
| `defaultValue` | `string` | 128 |  | `agencyPersonTag` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


