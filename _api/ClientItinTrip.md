---
layout: api_page
title: "ClientItinTrip"
description: ""
assembly_version: "1.4.14.9"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `clientItinTrip` | 
| `tripName` | `string` | 256 |  | `clientItinTrip` | 
| `advisorProfile_recNo` | `long` |  | FKey | `clientItinTrip` | 
| `tripStartDateTime` | `DateTime` |  |  | `clientItinTrip` | 
| `tripEndDateTime` | `DateTime` |  |  | `clientItinTrip` | 
| `tripClientName` | `string` | 256 |  | `clientItinTrip` | 
| `remarks` | `string` |  |  | `clientItinTrip` | 
| `branch_recNo` | `long` |  | FKey | `clientItinTrip` | 
| `tripTraveler ` | table |  |  | `clientItinTrip` | 
| `tripRecNo` | `long` |  | PKey, InsertOnly, FKey | `tripTraveler` | 
| `travelerName` | `string` | 512 |  | `tripTraveler` | 
| `personRecNo` | `long` |  |  | `tripTraveler` | 
| `firstName` | `string` | 64 |  | `tripTraveler` | 
| `middleName` | `string` | 64 |  | `tripTraveler` | 
| `lastName` | `string` | 64 |  | `tripTraveler` | 
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
| `numberOfUnits` | `short` |  |  | `event` | 
| `unitDescription` | `string` |  |  | `event` | 
| `itineraryRemarks` | `string` |  |  | `event` | 
| `startInfo` | `string` | 256 |  | `event` | 
| `endInfo` | `string` | 256 |  | `event` | 
| `confirmationNo` | `string` | 64 |  | `event` | 
| `supplierInfo  [shared]` | table |  | Singleton | `event` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `supplierInfo` | 
| `name` | `string` | 256 |  | `supplierInfo` | 
| `phone` | `string` | 256 |  | `supplierInfo` | 
| `email` | `string` | 256 |  | `supplierInfo` | 
| `web` | `string` | 256 |  | `supplierInfo` | 
| `street1` | `string` | 128 |  | `supplierInfo` | 
| `street2` | `string` | 128 |  | `supplierInfo` | 
| `city` | `string` | 64 |  | `supplierInfo` | 
| `stateProvince` | `string` | 8 |  | `supplierInfo` | 
| `zipPostalCode` | `string` | 16 |  | `supplierInfo` | 
| `country` | `string` | 4 |  | `supplierInfo` | 
| `providerInfo  [shared]` | table |  | Singleton | `event` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `providerInfo` | 
| `name` | `string` | 256 |  | `providerInfo` | 
| `phone` | `string` | 256 |  | `providerInfo` | 
| `email` | `string` | 256 |  | `providerInfo` | 
| `web` | `string` | 256 |  | `providerInfo` | 
| `street1` | `string` | 128 |  | `providerInfo` | 
| `street2` | `string` | 128 |  | `providerInfo` | 
| `city` | `string` | 64 |  | `providerInfo` | 
| `stateProvince` | `string` | 8 |  | `providerInfo` | 
| `zipPostalCode` | `string` | 16 |  | `providerInfo` | 
| `country` | `string` | 4 |  | `providerInfo` | 
| `eventTraveler ` | table |  |  | `event` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventTraveler` | 
| `travelerName` | `string` | 512 |  | `eventTraveler` | 
| `personRecNo` | `long` |  |  | `eventTraveler` | 
| `firstName` | `string` | 64 |  | `eventTraveler` | 
| `middleName` | `string` | 64 |  | `eventTraveler` | 
| `lastName` | `string` | 64 |  | `eventTraveler` | 
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
| `flightStatusUrl` | `string` | 512 |  | `eventAirSegment` | 
| `classOfService` | `string` | 2 | Deprecated | `eventAirSegment` | Obsolete. Use eventAirTraveler.classOfService instead.
| `eventAirTraveler ` | table |  |  | `eventAirSegment` | 
| `indexNo` | `long` |  | PKey | `eventAirTraveler` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventAirTraveler` | 
| `name` | `string` | 256 |  | `eventAirTraveler` | 
| `firstName` | `string` | 64 |  | `eventAirTraveler` | 
| `middleName` | `string` | 64 |  | `eventAirTraveler` | 
| `lastName` | `string` | 64 |  | `eventAirTraveler` | 
| `ticketNo` | `long` |  |  | `eventAirTraveler` | 
| `confirmationNo` | `string` | 64 |  | `eventAirTraveler` | 
| `recordLocator` | `string` | 32 |  | `eventAirTraveler` | 
| `itineraryRemarks` | `string` |  |  | `eventAirTraveler` | 
| `seatNo` | `string` | 4 |  | `eventAirTraveler` | 
| `classOfService` | `string` | 2 |  | `eventAirTraveler` | 
| `eventAirTravelerAttachment ` | table |  |  | `eventAirTraveler` | 
| `recNo` | `long` |  | PKey | `eventAirTravelerAttachment` | 
| `airTravelerIndexNo` | `long` |  | InsertOnly, FKey | `eventAirTravelerAttachment` | 
| `type` | `short` |  |  | `eventAirTravelerAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `eventAirTravelerAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `eventAirTravelerAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `eventAirTravelerAttachment` | 
| `directUrl` | `string` | 256 |  | `eventAirTravelerAttachment` | 
| `fileData` | `byte[]` |  |  | `eventAirTravelerAttachment` | 
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
| `deck` | `string` | 32 |  | `eventCruiseSegment` | 
| `cabin` | `string` | 32 |  | `eventCruiseSegment` | 
| `dining` | `string` | 32 |  | `eventCruiseSegment` | 
| `bedding` | `string` | 128 |  | `eventCruiseSegment` | 
| `eventRailSegment ` | table |  | Singleton | `event` | 
| `indexNo` | `long` |  | PKey | `eventRailSegment` | 
| `eventIndexNo` | `long` |  | PKey, InsertOnly, FKey | `eventRailSegment` | 
| `departDateTime` | `DateTime` |  |  | `eventRailSegment` | 
| `departStationCode` | `string` | 3 |  | `eventRailSegment` | 
| `departStationName` | `string` | 64 |  | `eventRailSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `eventRailSegment` | 
| `arriveStationCode` | `string` | 3 |  | `eventRailSegment` | 
| `arriveStationName` | `string` | 64 |  | `eventRailSegment` | 
| `trainNo` | `short` |  |  | `eventRailSegment` | 
| `eventAttachment ` | table |  |  | `event` | 
| `recNo` | `long` |  | PKey | `eventAttachment` | 
| `eventIndexNo` | `long` |  | InsertOnly, FKey | `eventAttachment` | 
| `type` | `short` |  |  | `eventAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `eventAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `eventAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `eventAttachment` | 
| `directUrl` | `string` | 256 |  | `eventAttachment` | 
| `fileData` | `byte[]` |  |  | `eventAttachment` | 
| `tripAttachment ` | table |  |  | `clientItinTrip` | 
| `recNo` | `long` |  | PKey | `tripAttachment` | 
| `tripRecNo` | `long` |  | InsertOnly, FKey | `tripAttachment` | 
| `type` | `short` |  |  | `tripAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `tripAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `tripAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `tripAttachment` | 
| `directUrl` | `string` | 256 |  | `tripAttachment` | 
| `fileData` | `byte[]` |  |  | `tripAttachment` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


