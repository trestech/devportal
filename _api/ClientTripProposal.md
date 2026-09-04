---
layout: api_page
title: "ClientTripProposal"
description: ""
assembly_version: "1.7.7.5"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `travelerPortalBase` | 
| `tripName` | `string` | 256 |  | `travelerPortalBase` | 
| `tripStartDateTime` | `DateTime` |  |  | `travelerPortalBase` | 
| `tripEndDateTime` | `DateTime` |  |  | `travelerPortalBase` | 
| `tripAdvisorProfile_recNo` | `long` |  |  | `travelerPortalBase` | 
| `tripBranch_recNo` | `long` |  |  | `travelerPortalBase` | 
| `preparedForTravelers` | `string` |  |  | `travelerPortalBase` | 
| `tripAttachment ` | table |  |  | `travelerPortalBase` | 
| `recNo` | `long` |  | PKey | `tripAttachment` | 
| `tripRecNo` | `long` |  | InsertOnly, FKey | `tripAttachment` | 
| `type` | `short` |  |  | `tripAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `tripAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `tripAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `tripAttachment` | 
| `directUrl` | `string` | 256 |  | `tripAttachment` | 
| `fileData` | `byte[]` |  |  | `tripAttachment` | 
| `imageCredit` | `string` | 256 |  | `tripAttachment` | 
| `tripRemarks  [shared]` | table |  |  | `travelerPortalBase` | 
| `recNo` | `long` |  | PKey | `tripRemarks` | 
| `trip_recNo` | `long` |  | PKey, InsertOnly, FKey | `tripRemarks` | 
| `remarks` | `string` |  | Required | `tripRemarks` | 
| `viewOptions` | `int` |  | Required | `tripRemarks` | None = 0, TripStatementFooter = 1, SupplierStatementFooter = 2, TripProposalHeader = 4, TripProposalSummary = 8, TripProposalFooter = 16, ClientItinHeader = 32
| `component  [shared]` | table |  |  | `clientTripProposal` | 
| `indexNo` | `long` |  | PKey, InsertOnly, FKey | `component` | 
| `tripRecNo` | `long` |  | InsertOnly, FKey | `component` | 
| `travelCategory` | `short` |  |  | `component` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `supplierName` | `string` | 256 |  | `component` | 
| `providerName` | `string` | 256 |  | `component` | 
| `travelers` | `string` |  |  | `component` | 
| `totalFare` | `long` |  |  | `component` | 
| `startDateTime` | `DateTime` |  |  | `component` | 
| `endDateTime` | `DateTime` |  |  | `component` | 
| `itineraryRemarks` | `string` |  |  | `component` | 
| `foreignTotalFare` | `long` |  |  | `component` | 
| `foreignCurrencyCode` | `string` | 3 |  | `component` | 
| `numberOfUnits` | `short` |  |  | `component` | 
| `unitDescription` | `string` |  |  | `component` | 
| `rateDescription` | `string` | 256 |  | `component` | 
| `startInfo` | `string` | 256 |  | `component` | 
| `endInfo` | `string` | 256 |  | `component` | 
| `componentAttachment ` | table |  |  | `component` | 
| `recNo` | `long` |  | PKey | `componentAttachment` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `componentAttachment` | 
| `type` | `short` |  |  | `componentAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `componentAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `componentAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `componentAttachment` | 
| `directUrl` | `string` | 256 |  | `componentAttachment` | 
| `fileData` | `byte[]` |  |  | `componentAttachment` | 
| `imageCredit` | `string` | 256 |  | `componentAttachment` | 
| `airComponent ` | table |  | Singleton | `component` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `airComponent` | 
| `airTraveler ` | table |  |  | `airComponent` | 
| `indexNo` | `long` |  | PKey | `airTraveler` | 
| `airComponentIndexNo` | `long` |  | InsertOnly, FKey | `airTraveler` | 
| `travelerName` | `string` | 512 |  | `airTraveler` | 
| `itineraryRemarks` | `string` |  |  | `airTraveler` | 
| `foreignTotalFare` | `long` |  |  | `airTraveler` | 
| `foreignCurrencyCode` | `string` | 3 |  | `airTraveler` | 
| `totalFare` | `long` |  |  | `airTraveler` | 
| `airTravelerDocument ` | table |  |  | `airTraveler` | 
| `recNo` | `long` |  | PKey | `airTravelerDocument` | 
| `airTravelerIndexNo` | `long` |  | InsertOnly, FKey | `airTravelerDocument` | 
| `type` | `short` |  |  | `airTravelerDocument` | Link = 1, File = 2
| `subType` | `short` |  |  | `airTravelerDocument` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `airTravelerDocument` | 
| `fileNameLinkURL` | `string` | 256 |  | `airTravelerDocument` | 
| `directUrl` | `string` | 256 |  | `airTravelerDocument` | 
| `fileData` | `byte[]` |  |  | `airTravelerDocument` | 
| `airSegment ` | table |  |  | `airComponent` | 
| `indexNo` | `long` |  | PKey | `airSegment` | 
| `airComponentIndexNo` | `long` |  | InsertOnly, FKey | `airSegment` | 
| `departDateTime` | `DateTime` |  |  | `airSegment` | 
| `departCityCode` | `string` | 3 |  | `airSegment` | 
| `departCityName` | `string` | 64 |  | `airSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `airSegment` | 
| `arriveCityCode` | `string` | 3 |  | `airSegment` | 
| `arriveCityName` | `string` | 64 |  | `airSegment` | 
| `flightNo` | `short` |  |  | `airSegment` | 
| `provider` | `string` | 8 |  | `airSegment` | 
| `airSegmentTraveler ` | table |  |  | `airSegment` | 
| `airSegmentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `airSegmentTraveler` | 
| `airTravelerIndexNo` | `long` |  | PKey, InsertOnly, FKey | `airSegmentTraveler` | 
| `seatNo` | `string` | 4 |  | `airSegmentTraveler` | 
| `classOfService` | `string` | 2 |  | `airSegmentTraveler` | 
| `cruiseComponent ` | table |  | Singleton | `component` | 
| `indexNo` | `long` |  | PKey, InsertOnly, FKey | `cruiseComponent` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `cruiseComponent` | 
| `deck` | `string` | 32 |  | `cruiseComponent` | 
| `cabin` | `string` | 32 |  | `cruiseComponent` | 
| `dining` | `string` | 32 |  | `cruiseComponent` | 
| `bedding` | `string` | 128 |  | `cruiseComponent` | 
| `cruiseSegment ` | table |  |  | `cruiseComponent` | 
| `indexNo` | `long` |  | PKey | `cruiseSegment` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `cruiseSegment` | 
| `portCode` | `string` | 3 |  | `cruiseSegment` | 
| `portName` | `string` | 64 |  | `cruiseSegment` | 
| `departDateTime` | `DateTime` |  |  | `cruiseSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `cruiseSegment` | 
| `cruiseSubComponent  [shared]` | table |  |  | `cruiseComponent` | 
| `indexNo` | `long` |  | PKey, InsertOnly, FKey | `cruiseSubComponent` | 
| `tripRecNo` | `long` |  | InsertOnly, FKey | `cruiseSubComponent` | 
| `travelCategory` | `short` |  |  | `cruiseSubComponent` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `supplierName` | `string` | 256 |  | `cruiseSubComponent` | 
| `providerName` | `string` | 256 |  | `cruiseSubComponent` | 
| `travelers` | `string` |  |  | `cruiseSubComponent` | 
| `totalFare` | `long` |  |  | `cruiseSubComponent` | 
| `startDateTime` | `DateTime` |  |  | `cruiseSubComponent` | 
| `endDateTime` | `DateTime` |  |  | `cruiseSubComponent` | 
| `itineraryRemarks` | `string` |  |  | `cruiseSubComponent` | 
| `foreignTotalFare` | `long` |  |  | `cruiseSubComponent` | 
| `foreignCurrencyCode` | `string` | 3 |  | `cruiseSubComponent` | 
| `numberOfUnits` | `short` |  |  | `cruiseSubComponent` | 
| `unitDescription` | `string` |  |  | `cruiseSubComponent` | 
| `rateDescription` | `string` | 256 |  | `cruiseSubComponent` | 
| `startInfo` | `string` | 256 |  | `cruiseSubComponent` | 
| `endInfo` | `string` | 256 |  | `cruiseSubComponent` | 
| `cruiseSubComponentAttachment ` | table |  |  | `cruiseSubComponent` | 
| `recNo` | `long` |  | PKey | `cruiseSubComponentAttachment` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `cruiseSubComponentAttachment` | 
| `type` | `short` |  |  | `cruiseSubComponentAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `cruiseSubComponentAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `cruiseSubComponentAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `cruiseSubComponentAttachment` | 
| `directUrl` | `string` | 256 |  | `cruiseSubComponentAttachment` | 
| `fileData` | `byte[]` |  |  | `cruiseSubComponentAttachment` | 
| `imageCredit` | `string` | 256 |  | `cruiseSubComponentAttachment` | 
| `tourComponent ` | table |  | Singleton | `component` | 
| `indexNo` | `long` |  | PKey, InsertOnly, FKey | `tourComponent` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `tourComponent` | 
| `tourSubComponent  [shared]` | table |  |  | `tourComponent` | 
| `indexNo` | `long` |  | PKey, InsertOnly, FKey | `tourSubComponent` | 
| `tripRecNo` | `long` |  | InsertOnly, FKey | `tourSubComponent` | 
| `travelCategory` | `short` |  |  | `tourSubComponent` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `supplierName` | `string` | 256 |  | `tourSubComponent` | 
| `providerName` | `string` | 256 |  | `tourSubComponent` | 
| `travelers` | `string` |  |  | `tourSubComponent` | 
| `totalFare` | `long` |  |  | `tourSubComponent` | 
| `startDateTime` | `DateTime` |  |  | `tourSubComponent` | 
| `endDateTime` | `DateTime` |  |  | `tourSubComponent` | 
| `itineraryRemarks` | `string` |  |  | `tourSubComponent` | 
| `foreignTotalFare` | `long` |  |  | `tourSubComponent` | 
| `foreignCurrencyCode` | `string` | 3 |  | `tourSubComponent` | 
| `numberOfUnits` | `short` |  |  | `tourSubComponent` | 
| `unitDescription` | `string` |  |  | `tourSubComponent` | 
| `rateDescription` | `string` | 256 |  | `tourSubComponent` | 
| `startInfo` | `string` | 256 |  | `tourSubComponent` | 
| `endInfo` | `string` | 256 |  | `tourSubComponent` | 
| `tourSubComponentAttachment ` | table |  |  | `tourSubComponent` | 
| `recNo` | `long` |  | PKey | `tourSubComponentAttachment` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `tourSubComponentAttachment` | 
| `type` | `short` |  |  | `tourSubComponentAttachment` | Link = 1, File = 2
| `subType` | `short` |  |  | `tourSubComponentAttachment` | Document = 1, Image = 2, Other = 3
| `description` | `string` | 256 |  | `tourSubComponentAttachment` | 
| `fileNameLinkURL` | `string` | 256 |  | `tourSubComponentAttachment` | 
| `directUrl` | `string` | 256 |  | `tourSubComponentAttachment` | 
| `fileData` | `byte[]` |  |  | `tourSubComponentAttachment` | 
| `imageCredit` | `string` | 256 |  | `tourSubComponentAttachment` | 
| `railComponent ` | table |  | Singleton | `component` | 
| `indexNo` | `long` |  | PKey | `railComponent` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `railComponent` | 
| `railSegment ` | table |  |  | `railComponent` | 
| `indexNo` | `long` |  | PKey | `railSegment` | 
| `componentIndexNo` | `long` |  | PKey, InsertOnly, FKey | `railSegment` | 
| `departDateTime` | `DateTime` |  |  | `railSegment` | 
| `departStationCode` | `string` | 3 |  | `railSegment` | 
| `departStationName` | `string` | 64 |  | `railSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `railSegment` | 
| `arriveStationCode` | `string` | 3 |  | `railSegment` | 
| `arriveStationName` | `string` | 64 |  | `railSegment` | 
| `trainNo` | `short` |  |  | `railSegment` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


