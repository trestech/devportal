---
layout: api_page
title: "TravelerPortalAdvisor"
description: ""
assembly_version: "1.4.14.9"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `travelerPortalAdvisor` | 
| `name` | `string` | 256 |  | `travelerPortalAdvisor` | 
| `phone` | `string` | 256 |  | `travelerPortalAdvisor` | 
| `email` | `string` | 256 |  | `travelerPortalAdvisor` | 
| `logoData` | `byte[]` |  |  | `travelerPortalAdvisor` | 
| `logoDirectUrl` | `string` | 256 |  | `travelerPortalAdvisor` | 
| `brandingColor` | `int` |  |  | `travelerPortalAdvisor` | 
| `brandingName` | `string` | 64 |  | `travelerPortalAdvisor` | 
| `photoDirectUrl` | `string` | 256 |  | `travelerPortalAdvisor` | 
| `photoData` | `byte[]` |  |  | `travelerPortalAdvisor` | 
| `address  [shared]` | table |  | Singleton | `travelerPortalAdvisor` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `address` | 
| `street1` | `string` | 128 |  | `address` | 
| `street2` | `string` | 128 |  | `address` | 
| `street3` | `string` | 128 |  | `address` | 
| `city` | `string` | 64 |  | `address` | 
| `county` | `string` | 64 |  | `address` | 
| `stateProvince` | `string` | 8 |  | `address` | 
| `stateProvinceName` | `string` | 64 |  | `address` | 
| `zipPostalCode` | `string` | 16 |  | `address` | 
| `country` | `string` | 4 |  | `address` | 
| `countryName` | `string` | 64 |  | `address` | 
| `permitMarketing` | `bool` |  |  | `address` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


