---
layout: api_page
title: "ClientItinAdvisor"
description: ""
assembly_version: "1.0.25.7"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `clientItinAdvisor` | 
| `name` | `string` | 256 |  | `clientItinAdvisor` | 
| `phone` | `string` | 256 |  | `clientItinAdvisor` | 
| `email` | `string` | 256 |  | `clientItinAdvisor` | 
| `logoData` | `byte[]` |  |  | `clientItinAdvisor` | 
| `logoDirectUrl` | `string` | 256 |  | `clientItinAdvisor` | 
| `brandingColor` | `int` |  |  | `clientItinAdvisor` | 
| `brandingName` | `string` | 64 |  | `clientItinAdvisor` | 
| `photoDirectUrl` | `string` | 256 |  | `clientItinAdvisor` | 
| `photoData` | `byte[]` |  |  | `clientItinAdvisor` | 
| `address  [shared]` | table |  | Singleton | `clientItinAdvisor` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `address` | 
| `street1` | `string` | 128 |  | `address` | 
| `street2` | `string` | 128 |  | `address` | 
| `street3` | `string` | 128 |  | `address` | 
| `city` | `string` | 64 |  | `address` | 
| `county` | `string` | 64 |  | `address` | 
| `stateProvince` | `string` | 8 |  | `address` | 
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


