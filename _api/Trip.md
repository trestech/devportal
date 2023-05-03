---
layout: api_page
title: "Trip"
description: ""
assembly_version: "1.0.13.6"
---



Permission Areas: Trip

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `trip` | 
| `clientProfile_recNo` | `long` |  | FKey | `trip` | 
| `clientName_Lookup` | `string` | 256 | ReadOnly | `trip` | 
| `branch_recNo` | `long` |  | FKey | `trip` | 
| `branch_name` | `string` | 64 | ReadOnly | `trip` | 
| `name` | `string` | 256 |  | `trip` | 
| `advisorProfile_recNo` | `long` |  | FKey | `trip` | 
| `advisorName_Lookup` | `string` | 256 | ReadOnly | `trip` | 
| `advisorId_Lookup` | `string` | 256 | ReadOnly | `trip` | 
| `uniqueId` | `string` | 64 |  | `trip` | 
| `cancelled` | `bool` |  | Required | `trip` | 
| `startDateTime` | `DateTime` |  |  | `trip` | 
| `endDateTime` | `DateTime` |  |  | `trip` | 
| `targetTravelDate` | `Date` |  |  | `trip` | 
| `destination_recNo` | `long` |  | FKey | `trip` | 
| `destinationName_Lookup` | `string` | 64 | ReadOnly | `trip` | 
| `remarks` | `string` |  |  | `trip` | 
| `advisorRemarks` | `string` |  |  | `trip` | 
| `marketingSource` | `string` | 64 | Deprecated | `trip` | MarketingSource is being deprecated; use the default TripMarketingSource tag or other tag instead
| `recordLocator` | `string` | 32 |  | `trip` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly | `trip` | 
| `clientProfileInfo ` | table |  | Singleton | `trip` | 
| `trip_recNo` | `long` |  | PKey, InsertOnly, FKey | `clientProfileInfo` | 
| `name` | `string` | 256 |  | `clientProfileInfo` | 
| `id` | `string` | 32 |  | `clientProfileInfo` | 
| `phone` | `string` | 256 |  | `clientProfileInfo` | 
| `email` | `string` | 256 |  | `clientProfileInfo` | 
| `street1` | `string` | 128 |  | `clientProfileInfo` | 
| `street2` | `string` | 128 |  | `clientProfileInfo` | 
| `city` | `string` | 64 |  | `clientProfileInfo` | 
| `stateProvince` | `string` | 8 |  | `clientProfileInfo` | 
| `zipPostalCode` | `string` | 16 |  | `clientProfileInfo` | 
| `country` | `string` | 4 |  | `clientProfileInfo` | 
| `tripReservationLink ` | table |  |  | `trip` | 
| `trip_recNo` | `long` |  | PKey, InsertOnly, FKey | `tripReservationLink` | 
| `reservation_recNo` | `long` |  | PKey, Auto-Assign | `tripReservationLink` | 
| `reservation  [shared]` | table |  | Singleton | `tripReservationLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `reservation` | 
| `supplierProfile_recNo` | `long` |  | FKey | `reservation` | 
| `supplierName_Lookup` | `string` | 256 | ReadOnly | `reservation` | 
| `providerProfile_recNo` | `long` |  | FKey | `reservation` | 
| `providerName_Lookup` | `string` | 256 | ReadOnly | `reservation` | 
| `travelCategory_recNo` | `short` |  | Required, FKey | `reservation` | 
| `totalFare` | `long` |  | Required | `reservation` | 
| `commissionAmount` | `long` |  |  | `reservation` | 
| `commissionRate` | `short` |  |  | `reservation` | 
| `markupDiscount` | `long` |  | Required | `reservation` | 
| `highFare` | `long` |  |  | `reservation` | 
| `lowFare` | `long` |  |  | `reservation` | 
| `confirmationNo` | `string` | 64 |  | `reservation` | 
| `arcBspNo` | `int` |  |  | `reservation` | 
| `ticketNo` | `long` |  |  | `reservation` | 
| `status` | `short` |  | Required | `reservation` | Pending = 1, Confirmed = 2, Cancelled = 3
| `finalPayDueDate` | `Date` |  |  | `reservation` | 
| `bookDateTime` | `DateTime` |  |  | `reservation` | 
| `startDateTime` | `DateTime` |  |  | `reservation` | 
| `endDateTime` | `DateTime` |  |  | `reservation` | 
| `unitCode` | `string` | 8 |  | `reservation` | 
| `unitDescription` | `string` | 256 |  | `reservation` | 
| `numberOfUnits` | `short` |  |  | `reservation` | 
| `rateCode` | `string` | 8 |  | `reservation` | 
| `rateDescription` | `string` | 256 |  | `reservation` | 
| `recordLocator` | `string` | 32 |  | `reservation` | 
| `source` | `string` | 32 |  | `reservation` | 
| `travelerName` | `string` | 512 |  | `reservation` | 
| `promoId` | `string` | 256 |  | `reservation` | 
| `itineraryRemarks` | `string` |  |  | `reservation` | 
| `supplierRemarks` | `string` |  |  | `reservation` | 
| `advisorInfo` | `string` | 256 |  | `reservation` | 
| `trackClientPayments` | `bool` |  | Required | `reservation` | 
| `tripStatementPrintOption` | `short` |  | Required | `reservation` | All = 0, HideReservation = 1, HideTotalFare = 2
| `travelerDepartment` | `string` | 64 |  | `reservation` | 
| `startInfo` | `string` | 256 |  | `reservation` | 
| `endInfo` | `string` | 256 |  | `reservation` | 
| `clientBalance` | `long` |  | ReadOnly | `reservation` | 
| `supplierBalance` | `long` |  | ReadOnly | `reservation` | 
| `accountingEntry_recNo` | `long` |  | Auto-Assign | `reservation` | 
| `paymentCount` | `int` |  | ReadOnly | `reservation` | 
| `airReservation  [shared]` | table |  | Singleton | `reservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `airReservation` | 
| `ticketType` | `short` |  |  | `airReservation` | Normal = 1, ExchangeAddCollect = 2, ExchangeRefund = 3, CreditMemo = 4, DebitMemo = 5, TAAD = 6
| `endingTicketNo` | `long` |  |  | `airReservation` | 
| `originalTicketNo` | `long` |  |  | `airReservation` | 
| `ticketDesignator` | `string` | 32 |  | `airReservation` | 
| `domIntlIndicator` | `short` |  | Required | `airReservation` | Domestic = 1, International = 2, Transborder = 3
| `eTicketIndicator` | `short` |  |  | `airReservation` | 
| `tourCode` | `string` | 32 |  | `airReservation` | 
| `airSegment ` | table |  |  | `airReservation` | 
| `recNo` | `long` |  | PKey | `airSegment` | 
| `airReservation_recNo` | `long` |  | InsertOnly, FKey | `airSegment` | 
| `departDateTime` | `DateTime` |  |  | `airSegment` | 
| `departCityCode` | `string` | 3 |  | `airSegment` | 
| `departCityName` | `string` | 64 |  | `airSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `airSegment` | 
| `arriveCityCode` | `string` | 3 |  | `airSegment` | 
| `arriveCityName` | `string` | 64 |  | `airSegment` | 
| `connection` | `string` | 1 |  | `airSegment` | 
| `flightNo` | `short` |  |  | `airSegment` | 
| `provider` | `string` | 8 |  | `airSegment` | 
| `fare` | `long` |  |  | `airSegment` | 
| `classOfService` | `string` | 2 |  | `airSegment` | 
| `fareBasis` | `string` | 16 |  | `airSegment` | 
| `ticketDesignator` | `string` | 32 |  | `airSegment` | 
| `mileage` | `short` |  |  | `airSegment` | 
| `indexNo` | `short` |  |  | `airSegment` | 
| `seatNo` | `string` | 4 |  | `airSegment` | 
| `seatType` | `string` | 32 |  | `airSegment` | 
| `recordLocator` | `string` | 32 |  | `airSegment` | 
| `railReservation  [shared]` | table |  | Singleton | `reservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `railReservation` | 
| `railSegment ` | table |  |  | `railReservation` | 
| `recNo` | `long` |  | PKey | `railSegment` | 
| `railReservation_recNo` | `long` |  | InsertOnly, FKey | `railSegment` | 
| `departDateTime` | `DateTime` |  |  | `railSegment` | 
| `departStationCode` | `string` | 3 |  | `railSegment` | 
| `departStationName` | `string` | 64 |  | `railSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `railSegment` | 
| `arriveStationCode` | `string` | 3 |  | `railSegment` | 
| `arriveStationName` | `string` | 64 |  | `railSegment` | 
| `trainNo` | `short` |  |  | `railSegment` | 
| `classOfService` | `string` | 2 |  | `railSegment` | 
| `supplierProfileInfo  [shared]` | table |  | Singleton | `reservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `supplierProfileInfo` | 
| `name` | `string` | 256 |  | `supplierProfileInfo` | 
| `id` | `string` | 32 |  | `supplierProfileInfo` | 
| `phone` | `string` | 256 |  | `supplierProfileInfo` | 
| `fax` | `string` | 256 |  | `supplierProfileInfo` | 
| `street1` | `string` | 128 |  | `supplierProfileInfo` | 
| `street2` | `string` | 128 |  | `supplierProfileInfo` | 
| `city` | `string` | 64 |  | `supplierProfileInfo` | 
| `stateProvince` | `string` | 8 |  | `supplierProfileInfo` | 
| `zipPostalCode` | `string` | 16 |  | `supplierProfileInfo` | 
| `country` | `string` | 4 |  | `supplierProfileInfo` | 
| `providerProfileInfo  [shared]` | table |  | Singleton | `reservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `providerProfileInfo` | 
| `name` | `string` | 256 |  | `providerProfileInfo` | 
| `id` | `string` | 32 |  | `providerProfileInfo` | 
| `phone` | `string` | 256 |  | `providerProfileInfo` | 
| `fax` | `string` | 256 |  | `providerProfileInfo` | 
| `street1` | `string` | 128 |  | `providerProfileInfo` | 
| `street2` | `string` | 128 |  | `providerProfileInfo` | 
| `city` | `string` | 64 |  | `providerProfileInfo` | 
| `stateProvince` | `string` | 8 |  | `providerProfileInfo` | 
| `zipPostalCode` | `string` | 16 |  | `providerProfileInfo` | 
| `country` | `string` | 4 |  | `providerProfileInfo` | 
| `accountingEntry  [shared]` | table |  | Singleton | `reservation` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `accountingEntry` | 
| `createDate` | `DateTime` |  | InsertOnly | `accountingEntry` | 
| `postDate` | `DateTime` |  |  | `accountingEntry` | 
| `description` | `string` | 512 |  | `accountingEntry` | 
| `accountingReference` | `string` | 64 |  | `accountingEntry` | 
| `journalEntry_recNo` | `long` |  | Auto-Assign | `accountingEntry` | 
| `accountingEntryDetail ` | table |  |  | `accountingEntry` | 
| `recNo` | `long` |  | PKey | `accountingEntryDetail` | 
| `accountingEntry_recNo` | `long` |  | InsertOnly, FKey | `accountingEntryDetail` | 
| `description` | `string` | 512 |  | `accountingEntryDetail` | 
| `accountCategory` | `short` |  | Required | `accountingEntryDetail` | None = 0, SupplierBalances = 2, UndepositedFunds = 3, CCProcessingBalances = 5, AgencyCCBalances = 6, BankAccount = 7, Sales = 8, CostOfSales = 9, RetainedEarnings = 10, Other = 99
| `accountNumber` | `long` |  |  | `accountingEntryDetail` | 
| `debitAmount` | `long` |  |  | `accountingEntryDetail` | 
| `creditAmount` | `long` |  |  | `accountingEntryDetail` | 
| `journalEntry  [shared]` | table |  | Singleton | `accountingEntry` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `journalEntry` | 
| `remarks` | `string` | 512 |  | `journalEntry` | 
| `date` | `Date` |  | Required | `journalEntry` | 
| `journalEntryDetail ` | table |  |  | `journalEntry` | 
| `recNo` | `long` |  | PKey | `journalEntryDetail` | 
| `journalEntry_recNo` | `long` |  | InsertOnly, FKey | `journalEntryDetail` | 
| `generalLedgerAccount_recNo` | `long` |  | Required, FKey | `journalEntryDetail` | 
| `debitAmount` | `long` |  |  | `journalEntryDetail` | 
| `creditAmount` | `long` |  |  | `journalEntryDetail` | 
| `remarks` | `string` | 256 |  | `journalEntryDetail` | 
| `generalLedgerAccountName_lookup` | `string` | 64 | ReadOnly | `journalEntryDetail` | 
| `generalLedgerAccountCategory_lookup` | `short` |  | ReadOnly | `journalEntryDetail` | Assets = 1, Liabilities = 2, Capital = 3, Sales = 4, CostOfSales = 5, Expenses = 6
| `reservationTraveler ` | table |  |  | `reservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `reservationTraveler` | 
| `person_recNo` | `long` |  | PKey, Required, FKey | `reservationTraveler` | 
| `nameLookup` | `string` | 256 | ReadOnly | `reservationTraveler` | 
| `isPrimary` | `bool` |  |  | `reservationTraveler` | 
| `primaryPhone` | `string` | 256 | ReadOnly | `reservationTraveler` | 
| `primaryEmail` | `string` | 256 | ReadOnly | `reservationTraveler` | 
| `reservationAdvisor ` | table |  |  | `reservation` | 
| `recNo` | `long` |  | PKey | `reservationAdvisor` | 
| `reservation_recNo` | `long` |  | InsertOnly, FKey | `reservationAdvisor` | 
| `advisorProfile_recNo` | `long` |  | Required, FKey | `reservationAdvisor` | 
| `advisorName` | `string` | 256 | ReadOnly | `reservationAdvisor` | 
| `id` | `string` | 32 | ReadOnly | `reservationAdvisor` | 
| `commissionRate` | `short` |  |  | `reservationAdvisor` | 
| `commissionAmount` | `long` |  |  | `reservationAdvisor` | 
| `datePaid` | `Date` |  |  | `reservationAdvisor` | 
| `reconciliationRecNo` | `long` |  | ReadOnly | `reservationAdvisor` | 
| `reconciliationDate` | `Date` |  | ReadOnly | `reservationAdvisor` | 
| `reservationTax ` | table |  |  | `reservation` | 
| `recNo` | `long` |  | PKey | `reservationTax` | 
| `reservation_recNo` | `long` |  | InsertOnly, FKey | `reservationTax` | 
| `code` | `string` | 2 |  | `reservationTax` | 
| `amount` | `long` |  | Required | `reservationTax` | 
| `reservationAttachmentLink ` | table |  |  | `reservation` | 
| `reservation_recNo` | `long` |  | InsertOnly, FKey | `reservationAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `reservationAttachmentLink` | 
| `reservationAttachment  [shared]` | table |  | Singleton | `reservationAttachmentLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `bool` |  |  | `attachment` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Private = 1, Public = 2
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `reservationTag ` | table |  |  | `reservation` | 
| `recNo` | `long` |  | PKey | `reservationTag` | 
| `reservation_recNo` | `long` |  | InsertOnly, FKey | `reservationTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `reservationTag` | 
| `name` | `string` | 64 | ReadOnly | `reservationTag` | 
| `value` | `string` | 1024 |  | `reservationTag` | 
| `cruiseReservation ` | table |  | Singleton | `reservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `cruiseReservation` | 
| `type` | `short` |  | Required | `cruiseReservation` | Ocean = 1, River = 2
| `deck` | `string` | 32 |  | `cruiseReservation` | 
| `cabin` | `string` | 32 |  | `cruiseReservation` | 
| `dining` | `string` | 32 |  | `cruiseReservation` | 
| `bedding` | `string` | 128 |  | `cruiseReservation` | 
| `groupBookingNo` | `string` | 16 |  | `cruiseReservation` | 
| `cruiseSegment ` | table |  |  | `cruiseReservation` | 
| `recNo` | `long` |  | PKey | `cruiseSegment` | 
| `cruiseReservation_recNo` | `long` |  | InsertOnly, FKey | `cruiseSegment` | 
| `departDateTime` | `DateTime` |  |  | `cruiseSegment` | 
| `departPortCode` | `string` | 3 |  | `cruiseSegment` | 
| `departPortName` | `string` | 64 |  | `cruiseSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `cruiseSegment` | 
| `arrivePortCode` | `string` | 3 |  | `cruiseSegment` | 
| `arrivePortName` | `string` | 64 |  | `cruiseSegment` | 
| `remarks` | `string` | 256 |  | `cruiseSegment` | 
| `indexNo` | `short` |  |  | `cruiseSegment` | 
| `cruiseSubReservationLink ` | table |  |  | `cruiseReservation` | 
| `parentReservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `subReservationLink` | 
| `subReservation_recNo` | `long` |  | PKey, Auto-Assign | `subReservationLink` | 
| `cruiseSubReservation  [shared]` | table |  | Singleton | `cruiseSubReservationLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `reservation` | 
| `supplierProfile_recNo` | `long` |  | FKey | `reservation` | 
| `supplierName_Lookup` | `string` | 256 | ReadOnly | `reservation` | 
| `providerProfile_recNo` | `long` |  | FKey | `reservation` | 
| `providerName_Lookup` | `string` | 256 | ReadOnly | `reservation` | 
| `travelCategory_recNo` | `short` |  | Required, FKey | `reservation` | 
| `totalFare` | `long` |  | Required | `reservation` | 
| `commissionAmount` | `long` |  |  | `reservation` | 
| `commissionRate` | `short` |  |  | `reservation` | 
| `markupDiscount` | `long` |  | Required | `reservation` | 
| `highFare` | `long` |  |  | `reservation` | 
| `lowFare` | `long` |  |  | `reservation` | 
| `confirmationNo` | `string` | 64 |  | `reservation` | 
| `arcBspNo` | `int` |  |  | `reservation` | 
| `ticketNo` | `long` |  |  | `reservation` | 
| `status` | `short` |  | Required | `reservation` | Pending = 1, Confirmed = 2, Cancelled = 3
| `finalPayDueDate` | `Date` |  |  | `reservation` | 
| `bookDateTime` | `DateTime` |  |  | `reservation` | 
| `startDateTime` | `DateTime` |  |  | `reservation` | 
| `endDateTime` | `DateTime` |  |  | `reservation` | 
| `unitCode` | `string` | 8 |  | `reservation` | 
| `unitDescription` | `string` | 256 |  | `reservation` | 
| `numberOfUnits` | `short` |  |  | `reservation` | 
| `rateCode` | `string` | 8 |  | `reservation` | 
| `rateDescription` | `string` | 256 |  | `reservation` | 
| `recordLocator` | `string` | 32 |  | `reservation` | 
| `source` | `string` | 32 |  | `reservation` | 
| `travelerName` | `string` | 512 |  | `reservation` | 
| `promoId` | `string` | 256 |  | `reservation` | 
| `itineraryRemarks` | `string` |  |  | `reservation` | 
| `supplierRemarks` | `string` |  |  | `reservation` | 
| `advisorInfo` | `string` | 256 |  | `reservation` | 
| `trackClientPayments` | `bool` |  | Required | `reservation` | 
| `tripStatementPrintOption` | `short` |  | Required | `reservation` | All = 0, HideReservation = 1, HideTotalFare = 2
| `travelerDepartment` | `string` | 64 |  | `reservation` | 
| `startInfo` | `string` | 256 |  | `reservation` | 
| `endInfo` | `string` | 256 |  | `reservation` | 
| `airReservation  [shared]` | table |  | Singleton | `cruiseSubReservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `airReservation` | 
| `ticketType` | `short` |  |  | `airReservation` | Normal = 1, ExchangeAddCollect = 2, ExchangeRefund = 3, CreditMemo = 4, DebitMemo = 5, TAAD = 6
| `endingTicketNo` | `long` |  |  | `airReservation` | 
| `originalTicketNo` | `long` |  |  | `airReservation` | 
| `ticketDesignator` | `string` | 32 |  | `airReservation` | 
| `domIntlIndicator` | `short` |  | Required | `airReservation` | Domestic = 1, International = 2, Transborder = 3
| `eTicketIndicator` | `short` |  |  | `airReservation` | 
| `tourCode` | `string` | 32 |  | `airReservation` | 
| `airSegment ` | table |  |  | `cruiseSubAirReservation` | 
| `recNo` | `long` |  | PKey | `airSegment` | 
| `airReservation_recNo` | `long` |  | InsertOnly, FKey | `airSegment` | 
| `departDateTime` | `DateTime` |  |  | `airSegment` | 
| `departCityCode` | `string` | 3 |  | `airSegment` | 
| `departCityName` | `string` | 64 |  | `airSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `airSegment` | 
| `arriveCityCode` | `string` | 3 |  | `airSegment` | 
| `arriveCityName` | `string` | 64 |  | `airSegment` | 
| `connection` | `string` | 1 |  | `airSegment` | 
| `flightNo` | `short` |  |  | `airSegment` | 
| `provider` | `string` | 8 |  | `airSegment` | 
| `fare` | `long` |  |  | `airSegment` | 
| `classOfService` | `string` | 2 |  | `airSegment` | 
| `fareBasis` | `string` | 16 |  | `airSegment` | 
| `ticketDesignator` | `string` | 32 |  | `airSegment` | 
| `mileage` | `short` |  |  | `airSegment` | 
| `indexNo` | `short` |  |  | `airSegment` | 
| `seatNo` | `string` | 4 |  | `airSegment` | 
| `seatType` | `string` | 32 |  | `airSegment` | 
| `recordLocator` | `string` | 32 |  | `airSegment` | 
| `railReservation  [shared]` | table |  | Singleton | `cruiseSubReservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `railReservation` | 
| `railSegment ` | table |  |  | `cruiseSubRailReservation` | 
| `recNo` | `long` |  | PKey | `railSegment` | 
| `railReservation_recNo` | `long` |  | InsertOnly, FKey | `railSegment` | 
| `departDateTime` | `DateTime` |  |  | `railSegment` | 
| `departStationCode` | `string` | 3 |  | `railSegment` | 
| `departStationName` | `string` | 64 |  | `railSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `railSegment` | 
| `arriveStationCode` | `string` | 3 |  | `railSegment` | 
| `arriveStationName` | `string` | 64 |  | `railSegment` | 
| `trainNo` | `short` |  |  | `railSegment` | 
| `classOfService` | `string` | 2 |  | `railSegment` | 
| `cruiseSubSupplierProfileInfo  [shared]` | table |  | Singleton | `cruiseSubReservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `supplierProfileInfo` | 
| `name` | `string` | 256 |  | `supplierProfileInfo` | 
| `id` | `string` | 32 |  | `supplierProfileInfo` | 
| `phone` | `string` | 256 |  | `supplierProfileInfo` | 
| `fax` | `string` | 256 |  | `supplierProfileInfo` | 
| `street1` | `string` | 128 |  | `supplierProfileInfo` | 
| `street2` | `string` | 128 |  | `supplierProfileInfo` | 
| `city` | `string` | 64 |  | `supplierProfileInfo` | 
| `stateProvince` | `string` | 8 |  | `supplierProfileInfo` | 
| `zipPostalCode` | `string` | 16 |  | `supplierProfileInfo` | 
| `country` | `string` | 4 |  | `supplierProfileInfo` | 
| `cruiseSubProviderProfileInfo  [shared]` | table |  | Singleton | `cruiseSubReservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `providerProfileInfo` | 
| `name` | `string` | 256 |  | `providerProfileInfo` | 
| `id` | `string` | 32 |  | `providerProfileInfo` | 
| `phone` | `string` | 256 |  | `providerProfileInfo` | 
| `fax` | `string` | 256 |  | `providerProfileInfo` | 
| `street1` | `string` | 128 |  | `providerProfileInfo` | 
| `street2` | `string` | 128 |  | `providerProfileInfo` | 
| `city` | `string` | 64 |  | `providerProfileInfo` | 
| `stateProvince` | `string` | 8 |  | `providerProfileInfo` | 
| `zipPostalCode` | `string` | 16 |  | `providerProfileInfo` | 
| `country` | `string` | 4 |  | `providerProfileInfo` | 
| `tourReservation ` | table |  | Singleton | `reservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `tourReservation` | 
| `tourSubReservationLink ` | table |  |  | `tourReservation` | 
| `parentReservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `subReservationLink` | 
| `subReservation_recNo` | `long` |  | PKey, Auto-Assign | `subReservationLink` | 
| `tourSubReservation  [shared]` | table |  | Singleton | `tourSubReservationLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `reservation` | 
| `supplierProfile_recNo` | `long` |  | FKey | `reservation` | 
| `supplierName_Lookup` | `string` | 256 | ReadOnly | `reservation` | 
| `providerProfile_recNo` | `long` |  | FKey | `reservation` | 
| `providerName_Lookup` | `string` | 256 | ReadOnly | `reservation` | 
| `travelCategory_recNo` | `short` |  | Required, FKey | `reservation` | 
| `totalFare` | `long` |  | Required | `reservation` | 
| `commissionAmount` | `long` |  |  | `reservation` | 
| `commissionRate` | `short` |  |  | `reservation` | 
| `markupDiscount` | `long` |  | Required | `reservation` | 
| `highFare` | `long` |  |  | `reservation` | 
| `lowFare` | `long` |  |  | `reservation` | 
| `confirmationNo` | `string` | 64 |  | `reservation` | 
| `arcBspNo` | `int` |  |  | `reservation` | 
| `ticketNo` | `long` |  |  | `reservation` | 
| `status` | `short` |  | Required | `reservation` | Pending = 1, Confirmed = 2, Cancelled = 3
| `finalPayDueDate` | `Date` |  |  | `reservation` | 
| `bookDateTime` | `DateTime` |  |  | `reservation` | 
| `startDateTime` | `DateTime` |  |  | `reservation` | 
| `endDateTime` | `DateTime` |  |  | `reservation` | 
| `unitCode` | `string` | 8 |  | `reservation` | 
| `unitDescription` | `string` | 256 |  | `reservation` | 
| `numberOfUnits` | `short` |  |  | `reservation` | 
| `rateCode` | `string` | 8 |  | `reservation` | 
| `rateDescription` | `string` | 256 |  | `reservation` | 
| `recordLocator` | `string` | 32 |  | `reservation` | 
| `source` | `string` | 32 |  | `reservation` | 
| `travelerName` | `string` | 512 |  | `reservation` | 
| `promoId` | `string` | 256 |  | `reservation` | 
| `itineraryRemarks` | `string` |  |  | `reservation` | 
| `supplierRemarks` | `string` |  |  | `reservation` | 
| `advisorInfo` | `string` | 256 |  | `reservation` | 
| `trackClientPayments` | `bool` |  | Required | `reservation` | 
| `tripStatementPrintOption` | `short` |  | Required | `reservation` | All = 0, HideReservation = 1, HideTotalFare = 2
| `travelerDepartment` | `string` | 64 |  | `reservation` | 
| `startInfo` | `string` | 256 |  | `reservation` | 
| `endInfo` | `string` | 256 |  | `reservation` | 
| `airReservation  [shared]` | table |  | Singleton | `tourSubReservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `airReservation` | 
| `ticketType` | `short` |  |  | `airReservation` | Normal = 1, ExchangeAddCollect = 2, ExchangeRefund = 3, CreditMemo = 4, DebitMemo = 5, TAAD = 6
| `endingTicketNo` | `long` |  |  | `airReservation` | 
| `originalTicketNo` | `long` |  |  | `airReservation` | 
| `ticketDesignator` | `string` | 32 |  | `airReservation` | 
| `domIntlIndicator` | `short` |  | Required | `airReservation` | Domestic = 1, International = 2, Transborder = 3
| `eTicketIndicator` | `short` |  |  | `airReservation` | 
| `tourCode` | `string` | 32 |  | `airReservation` | 
| `airSegment ` | table |  |  | `tourSubAirReservation` | 
| `recNo` | `long` |  | PKey | `airSegment` | 
| `airReservation_recNo` | `long` |  | InsertOnly, FKey | `airSegment` | 
| `departDateTime` | `DateTime` |  |  | `airSegment` | 
| `departCityCode` | `string` | 3 |  | `airSegment` | 
| `departCityName` | `string` | 64 |  | `airSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `airSegment` | 
| `arriveCityCode` | `string` | 3 |  | `airSegment` | 
| `arriveCityName` | `string` | 64 |  | `airSegment` | 
| `connection` | `string` | 1 |  | `airSegment` | 
| `flightNo` | `short` |  |  | `airSegment` | 
| `provider` | `string` | 8 |  | `airSegment` | 
| `fare` | `long` |  |  | `airSegment` | 
| `classOfService` | `string` | 2 |  | `airSegment` | 
| `fareBasis` | `string` | 16 |  | `airSegment` | 
| `ticketDesignator` | `string` | 32 |  | `airSegment` | 
| `mileage` | `short` |  |  | `airSegment` | 
| `indexNo` | `short` |  |  | `airSegment` | 
| `seatNo` | `string` | 4 |  | `airSegment` | 
| `seatType` | `string` | 32 |  | `airSegment` | 
| `recordLocator` | `string` | 32 |  | `airSegment` | 
| `railReservation  [shared]` | table |  | Singleton | `tourSubReservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `railReservation` | 
| `railSegment ` | table |  |  | `tourSubRailReservation` | 
| `recNo` | `long` |  | PKey | `railSegment` | 
| `railReservation_recNo` | `long` |  | InsertOnly, FKey | `railSegment` | 
| `departDateTime` | `DateTime` |  |  | `railSegment` | 
| `departStationCode` | `string` | 3 |  | `railSegment` | 
| `departStationName` | `string` | 64 |  | `railSegment` | 
| `arriveDateTime` | `DateTime` |  |  | `railSegment` | 
| `arriveStationCode` | `string` | 3 |  | `railSegment` | 
| `arriveStationName` | `string` | 64 |  | `railSegment` | 
| `trainNo` | `short` |  |  | `railSegment` | 
| `classOfService` | `string` | 2 |  | `railSegment` | 
| `tourSubSupplierProfileInfo  [shared]` | table |  | Singleton | `tourSubReservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `supplierProfileInfo` | 
| `name` | `string` | 256 |  | `supplierProfileInfo` | 
| `id` | `string` | 32 |  | `supplierProfileInfo` | 
| `phone` | `string` | 256 |  | `supplierProfileInfo` | 
| `fax` | `string` | 256 |  | `supplierProfileInfo` | 
| `street1` | `string` | 128 |  | `supplierProfileInfo` | 
| `street2` | `string` | 128 |  | `supplierProfileInfo` | 
| `city` | `string` | 64 |  | `supplierProfileInfo` | 
| `stateProvince` | `string` | 8 |  | `supplierProfileInfo` | 
| `zipPostalCode` | `string` | 16 |  | `supplierProfileInfo` | 
| `country` | `string` | 4 |  | `supplierProfileInfo` | 
| `tourSubProviderProfileInfo  [shared]` | table |  | Singleton | `tourSubReservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `providerProfileInfo` | 
| `name` | `string` | 256 |  | `providerProfileInfo` | 
| `id` | `string` | 32 |  | `providerProfileInfo` | 
| `phone` | `string` | 256 |  | `providerProfileInfo` | 
| `fax` | `string` | 256 |  | `providerProfileInfo` | 
| `street1` | `string` | 128 |  | `providerProfileInfo` | 
| `street2` | `string` | 128 |  | `providerProfileInfo` | 
| `city` | `string` | 64 |  | `providerProfileInfo` | 
| `stateProvince` | `string` | 8 |  | `providerProfileInfo` | 
| `zipPostalCode` | `string` | 16 |  | `providerProfileInfo` | 
| `country` | `string` | 4 |  | `providerProfileInfo` | 
| `reservationDeposit ` | table |  |  | `reservation` | 
| `recNo` | `long` |  | PKey | `reservationDeposit` | 
| `reservation_recNo` | `long` |  | InsertOnly, FKey | `reservationDeposit` | 
| `dueAmount` | `long` |  | Required | `reservationDeposit` | 
| `dueDate` | `Date` |  | Required | `reservationDeposit` | 
| `notes` | `string` | 256 |  | `reservationDeposit` | 
| `completed` | `DateTimeOffset` |  |  | `reservationDeposit` | 
| `completedBy_appUserRecNo` | `long` |  |  | `reservationDeposit` | 
| `completedBy_appUserId` | `string` | 64 | ReadOnly | `reservationDeposit` | 
| `clientPaymentInfo ` | table |  | Singleton | `reservation` | 
| `reservation_recNo` | `long` |  | PKey, InsertOnly, FKey | `clientPaymentInfo` | 
| `paymentDate` | `Date` |  |  | `clientPaymentInfo` | 
| `amount` | `long` |  |  | `clientPaymentInfo` | 
| `method` | `short` |  | Required | `clientPaymentInfo` | Cash = 1, Check = 2, EFT = 3, CreditCard = 4, Other = 99
| `agencyProcessed` | `bool` |  | Required | `clientPaymentInfo` | 
| `cardNumber` | `string` | 64 |  | `clientPaymentInfo` | 
| `cardNumberToken` | `string` | 64 |  | `clientPaymentInfo` | 
| `expirationDate` | `Date` |  |  | `clientPaymentInfo` | 
| `tripAttachmentLink ` | table |  |  | `trip` | 
| `trip_recNo` | `long` |  | PKey, InsertOnly, FKey | `tripAttachmentLink` | 
| `attachment_recNo` | `long` |  | PKey, Auto-Assign | `tripAttachmentLink` | 
| `sortIndex` | `short` |  |  | `tripAttachmentLink` | 
| `tripAttachment  [shared]` | table |  | Singleton | `tripAttachmentLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `attachment` | 
| `type` | `short` |  | Required | `attachment` | Link = 1, File = 2
| `description` | `string` | 256 |  | `attachment` | 
| `fileNameLinkURL` | `string` | 256 | Required | `attachment` | 
| `fileData` | `byte[]` |  |  | `attachment` | 
| `size` | `int` |  |  | `attachment` | 
| `compressed` | `bool` |  |  | `attachment` | 
| `storeExternal` | `bool` |  |  | `attachment` | 
| `createDateTime` | `DateTimeOffset` |  | ReadOnly | `attachment` | 
| `visibility` | `short` |  | Required | `attachment` | Private = 1, Public = 2
| `directUrl` | `string` | 256 | ReadOnly | `attachment` | 
| `subType` | `short` |  | Required | `attachment` | Document = 1, Image = 2, Other = 3
| `tripTag ` | table |  |  | `trip` | 
| `recNo` | `long` |  | PKey | `tripTag` | 
| `trip_recNo` | `long` |  | InsertOnly, FKey | `tripTag` | 
| `tag_recNo` | `long` |  | Required, FKey | `tripTag` | 
| `name` | `string` | 64 | ReadOnly | `tripTag` | 
| `value` | `string` | 1024 |  | `tripTag` | 
| `tripActionItemLink ` | table |  |  | `trip` | 
| `trip_recNo` | `long` |  | PKey, InsertOnly, FKey | `tripActionItemLink` | 
| `actionItem_recNo` | `long` |  | PKey, Auto-Assign | `tripActionItemLink` | 
| `tripActionItem ` | table |  | Singleton | `tripActionItemLink` | 
| `recNo` | `long` |  | PKey, InsertOnly, FKey | `actionItem` | 
| `type` | `short` |  | Required | `actionItem` | Trip = 1, TripTemplate = 2
| `description` | `string` | 256 |  | `actionItem` | 
| `triggerIndex` | `short` |  | Required | `actionItem` | FixedDate = 1, StartDate = 2, EndDate = 3, TargetTravelDate = 4, CreateDate = 5, EarliestBookingDate = 6, EarliestDepositDate = 7, EarliestFinalPayDate = 8
| `triggerDaysOffset` | `short` |  |  | `actionItem` | 
| `triggerFixedDate` | `Date` |  |  | `actionItem` | 
| `appUser_recNo` | `long` |  |  | `actionItem` | 
| `appUserId` | `string` | 64 | ReadOnly | `actionItem` | 
| `completed` | `DateTimeOffset` |  |  | `actionItem` | 
| `completedBy_appUserRecNo` | `long` |  |  | `actionItem` | 
| `completedBy_appUserId` | `string` | 64 | ReadOnly | `actionItem` | 
| `notes` | `string` | 256 |  | `actionItem` | 
| `tripDocument ` | table |  |  | `trip` | 
| `recNo` | `long` |  | PKey | `tripDocument` | 
| `trip_recNo` | `long` |  | PKey, InsertOnly, FKey | `tripDocument` | 
| `documentTemplate_recNo` | `long` |  | PKey, Required, FKey | `tripDocument` | 
| `emailAddresses` | `string` | 512 |  | `tripDocument` | 
| `name_lookup` | `string` | 128 | ReadOnly | `tripDocument` | 
| `sent` | `DateTimeOffset` |  | ReadOnly | `tripDocument` | 
| `waiverId` | `string` | 32 |  | `tripDocument` | 
| `waiverUrl` | `string` | 128 |  | `tripDocument` | 
| `status` | `short` |  | Required | `tripDocument` | Pending = 1, Signed = 2, Expired = 3
| `statusDateTime` | `DateTimeOffset` |  |  | `tripDocument` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |


