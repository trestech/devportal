---
layout: api_page
title: "ClientItinTrip"
description: ""
assembly_version: "1.0.17.8"
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
| `eventStartDateTime` | `DateTime` |  |  | `event` | 
| `eventEndDateTime` | `DateTime` |  |  | `event` | 
| `travelCategory` | `short` |  |  | `event` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `action` | `short` |  |  | `event` | Depart = 1, Arrive = 2, Connection = 3, CheckIn = 4, CheckOut = 5, PickUp = 6, DropOff = 7, Embark = 8, Disembark = 9, AtSea = 10
| `actionText` | `string` | 32 |  | `event` | 
| `travelers` | `string` | 512 |  | `event` | 
| `supplierName` | `string` | 256 |  | `event` | 
| `numberOfUnits` | `short` |  |  | `event` | 
| `unitDescription` | `string` | 256 |  | `event` | 
| `itineraryRemarks` | `string` |  |  | `event` | 
| `startInfo` | `string` | 256 |  | `event` | 
| `endInfo` | `string` | 256 |  | `event` | 
| `confirmationNo` | `string` | 64 |  | `event` | 
| `providerInfo ` | table |  | Singleton | `event` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `providerInfo` | 
| `name` | `string` | 256 |  | `providerInfo` | 
| `phone` | `string` | 256 |  | `providerInfo` | 
| `email` | `string` | 256 |  | `providerInfo` | 
| `street1` | `string` | 128 |  | `providerInfo` | 
| `street2` | `string` | 128 |  | `providerInfo` | 
| `city` | `string` | 64 |  | `providerInfo` | 
| `stateProvince` | `string` | 8 |  | `providerInfo` | 
| `zipPostalCode` | `string` | 16 |  | `providerInfo` | 
| `country` | `string` | 4 |  | `providerInfo` | 
| `eventReservationLink ` | table |  |  | `event` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventReservationLink` | 
| `reservationRecNo` | `long` |  | PKey | `eventReservationLink` | 
| `eventAirSegment ` | table |  | Singleton | `event` | 
| `indexNo` | `long` |  | PKey | `eventAirSegment` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventAirSegment` | 
| `departCityCode` | `string` | 3 |  | `eventAirSegment` | 
| `departCityName` | `string` | 64 |  | `eventAirSegment` | 
| `arriveCityCode` | `string` | 3 |  | `eventAirSegment` | 
| `arriveCityName` | `string` | 64 |  | `eventAirSegment` | 
| `connection` | `string` | 1 |  | `eventAirSegment` | 
| `flightNo` | `short` |  |  | `eventAirSegment` | 
| `provider` | `string` | 8 |  | `eventAirSegment` | 
| `nextConnectionDepartDateTime` | `DateTime` |  |  | `eventAirSegment` | 
| `eventAirTraveler ` | table |  |  | `eventAirSegment` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventAirTraveler` | 
| `name` | `string` | 256 |  | `eventAirTraveler` | 
| `ticketNo` | `long` |  |  | `eventAirTraveler` | 
| `recordLocator` | `string` | 32 |  | `eventAirTraveler` | 
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
| `eventAttachment ` | table |  |  | `event` | 
| `recNo` | `long` |  |  | `eventAttachment` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventAttachment` | 
| `type` | `short` |  |  | `eventAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `eventAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `eventAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `eventAttachment` | 
| `directUrl` | `string` | 256 |  | `eventAttachment` | 
| `tripAttachment ` | table |  |  | `clientItinTrip` | 
| `recNo` | `long` |  |  | `tripAttachment` | 
| `tripRecNo` | `long` |  | PKey, InsertOnly, FKey | `tripAttachment` | 
| `type` | `short` |  |  | `tripAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `tripAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `tripAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `tripAttachment` | 
| `directUrl` | `string` | 256 |  | `tripAttachment` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


