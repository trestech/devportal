---
layout: api_page
title: "TravelerPortalAgency"
description: ""
assembly_version: "1.4.12.8"
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

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


