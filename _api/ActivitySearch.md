---
layout: api_page
title: "ActivitySearch"
description: "Search activities based on filters"
assembly_version: "1.4.7.2"
---

Search activities based on filters.

See: [Activity](Activity.html)

Permission Areas: Activity

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `activity` | 
| `tagRecNo` | `long` |  | `activity` | 
| `tagName` | `string` | 64 | `activity` | 
| `tagValue` | `string` | 1024 | `activity` | 
| `tags` | `string` |  | `activity` | 
| `summaryCount` | `int` |  | `activity` | 
| `createDateTime` | `DateTimeOffset` |  | `activity` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `activity` | 
| `type` | `short` |  | `activity` | Task = 1, Appointment = 2, Note = 3, Promo = 4
| `appUser_recNo` | `long` |  | `activity` | 
| `appUserId` | `string` | 64 | `activity` | 
| `subject` | `string` | 64 | `activity` | 
| `priority` | `short` |  | `activity` | Low = 1, Medium = 2, High = 3
| `targetDateTime` | `DateTimeOffset` |  | `activity` | 
| `targetDate` | `Date` |  | `activity` | 
| `completionDateTime` | `DateTime` |  | `activity` | 
| `clientProfileRecNo` | `long` |  | `activity` | 
| `clientProfileName` | `string` | 256 | `activity` | 
| `supplierProfileRecNo` | `long` |  | `activity` | 
| `supplierProfileName` | `string` | 256 | `activity` | 
| `personRecNo` | `long` |  | `activity` | 
| `personName` | `string` | 256 | `activity` | 
| `tripRecNo` | `long` |  | `activity` | 
| `tripName` | `string` | 256 | `activity` | 
| `remarks` | `string` |  | `activity` | 
| `promoId` | `string` | 256 | `activity` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `createDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `createDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeFrom [inherited]` | `DateTimeUTCSearchParam` |  | 
| `modifiedDateTimeTo [inherited]` | `DateTimeUTCSearchParam` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `appUserRecNo` | [`NumSearchParam`](NumSearchParam) | `appUser_recNo` | 
| `type` | `EnumSearchParam<Type>` | `type` | Task = 1, Appointment = 2, Note = 3, Promo = 4
| `targetDateFrom` | `DateSearchParam` | `targetDate` | 
| `targetDateTo` | `DateSearchParam` | `targetDate` | 
| `targetDateTimeFrom` | `DateTimeUTCSearchParam` | `targetDateTime` | 
| `targetDateTimeTo` | `DateTimeUTCSearchParam` | `targetDateTime` | 
| `completed` | `bool` | `completionDateTime` | 
| `clientProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `clientProfileRecNo` | 
| `supplierProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `supplierProfileRecNo` | 
| `personRecNo` | [`NumSearchParam`](NumSearchParam) | `personRecNo` | 
| `tripRecNo` | [`NumSearchParam`](NumSearchParam) | `tripRecNo` | 
| `subject` | [`StringSearchParam`](StringSearchParam) | `subject` | 
| `promoId` | [`StringSearchParam`](StringSearchParam) | `promoId` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


