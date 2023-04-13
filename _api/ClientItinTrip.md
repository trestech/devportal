---
layout: api_page
title: "ClientItinTrip"
description: ""
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `clientItinTrip` | 
| `tripName` | `string` | 256 |  | `clientItinTrip` | 
| `advisorProfile_recNo` | `long` |  | FKey | `clientItinTrip` | 
| `tripStartDateTime` | `DateTime` |  |  | `clientItinTrip` | 
| `tripEndDateTime` | `DateTime` |  |  | `clientItinTrip` | 
| `event ` | table |  |  | `clientItinTrip` | 
| `indexNo` | `long` |  | PKey | `event` | 
| `tripRecNo` | `long` |  | PKey, InsertOnly, FKey | `event` | 
| `eventDateTime` | `DateTime` |  |  | `event` | 
| `travelCategory` | `short` |  |  | `event` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `action` | `string` | 32 |  | `event` | 
| `providerName` | `string` | 256 |  | `event` | 
| `travelers` | `string` | 512 |  | `event` | 
| `eventReservationLink ` | table |  |  | `event` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventReservationLink` | 
| `reservationRecNo` | `long` |  | PKey | `eventReservationLink` | 
| `eventAirSegment ` | table |  |  | `event` | 
| `indexNo` | `long` |  | PKey | `eventAirSegment` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventAirSegment` | 
| `departDateTime` | `DateTime` |  |  | `eventAirSegment` | 
| `departCityCode` | `string` | 3 |  | `eventAirSegment` | 
| `departCityName` | `string` | 64 |  | `eventAirSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `eventAirSegment` | 
| `arriveCityCode` | `string` | 3 |  | `eventAirSegment` | 
| `arriveCityName` | `string` | 64 |  | `eventAirSegment` | 
| `connection` | `string` | 1 |  | `eventAirSegment` | 
| `flightNo` | `short` |  |  | `eventAirSegment` | 
| `provider` | `string` | 8 |  | `eventAirSegment` | 
| `eventCruiseSegment ` | table |  | Singleton | `event` | 
| `indexNo` | `long` |  | PKey | `eventCruiseSegment` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventCruiseSegment` | 
| `departDateTime` | `DateTime` |  |  | `eventCruiseSegment` | 
| `departPortCode` | `string` | 3 |  | `eventCruiseSegment` | 
| `departPortName` | `string` | 64 |  | `eventCruiseSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `eventCruiseSegment` | 
| `arrivePortCode` | `string` | 3 |  | `eventCruiseSegment` | 
| `arrivePortName` | `string` | 64 |  | `eventCruiseSegment` | 
| `remarks` | `string` | 256 |  | `eventCruiseSegment` | 
| `attachment ` | table |  |  | `clientItinTrip` | 
| `recNo` | `long` |  |  | `attachment` | 
| `tripRecNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  |  | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `attachment` | 
| `directUrl` | `string` | 256 |  | `attachment` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


