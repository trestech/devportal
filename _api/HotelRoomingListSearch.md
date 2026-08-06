---
layout: api_page
title: "HotelRoomingListSearch"
description: ""
assembly_version: "1.7.5.5"
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `hotelRoomingList` | 
| `summaryCount` | `int` |  | `hotelRoomingList` | 
| `createDateTime` | `DateTimeOffset` |  | `hotelRoomingList` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `hotelRoomingList` | 
| `trip_recNo` | `long` |  | `hotelRoomingList` | 
| `reservation_recNo` | `long` |  | `hotelRoomingList` | 
| `confirmationNo` | `string` | 64 | `hotelRoomingList` | 
| `checkInDateTime` | `DateTime` |  | `hotelRoomingList` | 
| `checkOutDateTime` | `DateTime` |  | `hotelRoomingList` | 
| `numberOfRooms` | `short` |  | `hotelRoomingList` | 
| `roomDescription` | `string` |  | `hotelRoomingList` | 
| `travelerNames` | `string` |  | `hotelRoomingList` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `skipLookup [inherited]` | `bool` |  | 
| `readOnlyIntent [inherited]` | `bool` |  | 
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
| `queryOptimizerFlags [inherited]` | [`int<int>`] |  | Recompile = 1
| `priority [inherited]` | `long` |  | 
| `providerSupplierRecNo` | [`NumSearchParam`](NumSearchParam) |  | 
| `checkInDateTimeFrom` | `DateSearchParam` |  | 
| `checkInDateTimeTo` | `DateSearchParam` |  | 
| `checkOutDateTimeFrom` | `DateSearchParam` |  | 
| `checkOutDateTimeTo` | `DateSearchParam` |  | 
| `tripTag` | `TagsSearchParams[]` |  | 
| `tripName` | [`StringSearchParam`](StringSearchParam) |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |


