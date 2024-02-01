---
layout: api_page
title: "ClientTripProposal"
description: ""
assembly_version: "1.0.34.1"
---



| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  |  | `clientTripProposal` | 
| `tripName` | `string` | 256 |  | `clientTripProposal` | 
| `advisorProfile_recNo` | `long` |  | FKey | `clientTripProposal` | 
| `startDateTime` | `DateTime` |  |  | `clientTripProposal` | 
| `endDateTime` | `DateTime` |  |  | `clientTripProposal` | 
| `clientName` | `string` | 256 |  | `clientTripProposal` | 
| `remarks` | `string` |  |  | `clientTripProposal` | 
| `branch_recNo` | `long` |  | FKey | `clientTripProposal` | 
| `reservation ` | table |  |  | `clientTripProposal` | 
| `recNo` | `long` |  | PKey | `reservation` | 
| `trip_recNo` | `long` |  | InsertOnly, FKey | `reservation` | 
| `travelCategory_recNo` | `short` |  |  | `reservation` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `totalFare` | `long` |  |  | `reservation` | 
| `startDateTime` | `DateTime` |  |  | `reservation` | 
| `endDateTime` | `DateTime` |  |  | `reservation` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


