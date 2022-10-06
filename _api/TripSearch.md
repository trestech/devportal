---
layout: api_page
title: "TripSearch"
description: "TripSearch returns data for trips and reservations"
---

TripSearch returns data for trips and reservations.

User needs at least select permission for trips. Results may be filtered if trip permission includes OnlySelf (based on user's linked advisors) or if trip permission includes OnlyBranch (based on user's branch).

Permission Areas: Trip

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `trip` | 
| `tagValue` | `string` | 1024 | `trip` | 
| `summaryCount` | `int` |  | `trip` | 
| `name` | `string` | 256 | `trip` | 
| `startDateTime` | `DateTime` |  | `trip` | 
| `endDateTime` | `DateTime` |  | `trip` | 
| `targetTravelDate` | `Date` |  | `trip` | 
| `clientProfileRecNo` | `long` |  | `trip` | 
| `clientProfileName` | `string` | 256 | `trip` | 
| `advisorProfileRecNo` | `long` |  | `trip` | 
| `advisorProfileName` | `string` | 256 | `trip` | 
| `advisorProfileId` | `string` | 32 | `trip` | 
| `remarks` | `string` | 256 | `trip` | 
| `advisorRemarks` | `string` | 256 | `trip` | 
| `cancelled` | `bool` |  | `trip` | 
| `destinationRecNo` | `long` |  | `trip` | 
| `destinationName` | `string` | 64 | `trip` | 
| `destinationRegionRecNo` | `long` |  | `trip` | 
| `destinationRegionName` | `string` | 64 | `trip` | 
| `branchRecNo` | `long` |  | `trip` | 
| `branchName` | `string` | 64 | `trip` | 
| `tripRecordLocator` | `string` | 32 | `trip` | 
| `createDateTime` | `DateTime` |  | `trip` | 
| `lastModifiedDateTime` | `DateTime` |  | `trip` | 
| `reservationRecNo` | `long` |  | `reservation` | 
| `reservationTagValue` | `string` | 1024 | `reservation` | 
| `reservationSupplierProfileRecNo` | `long` |  | `reservation` | 
| `reservationSupplierProfileName` | `string` | 256 | `reservation` | 
| `reservationCommisionTriggerIndex` | `short` |  | `reservation` | BookingDate = 1, DepartDate = 2, ReturnDate = 3, FinalPayDate = 4
| `reservationCommisionTriggerDaysOffset` | `short` |  | `reservation` | 
| `reservationClientBalance` | `long` |  | `reservation` | 
| `reservationSupplierBalance` | `long` |  | `reservation` | 
| `reservationTrackClientPayments` | `bool` |  | `reservation` | 
| `reservationStatus` | `short` |  | `reservation` | Pending = 1, Confirmed = 2, Cancelled = 3
| `reservationTravelCategoryRecNo` | `short` |  | `reservation` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `reservationTravelCategoryName` | `string` | 32 | `reservation` | 
| `reservationTotalFare` | `long` |  | `reservation` | 
| `reservationCommissionAmount` | `long` |  | `reservation` | 
| `reservationCommissionRate` | `long` |  | `reservation` | 
| `reservationBaseFare` | `long` |  | `reservation` | 
| `reservationTaxAmount` | `long` |  | `reservation` | 
| `reservationHighFare` | `long` |  | `reservation` | 
| `reservationLowFare` | `long` |  | `reservation` | 
| `reservationBookDateTime` | `DateTime` |  | `reservation` | 
| `reservationStartDateTime` | `DateTime` |  | `reservation` | 
| `reservationEndDateTime` | `DateTime` |  | `reservation` | 
| `reservationConfirmationNo` | `string` | 64 | `reservation` | 
| `reservationRecordLocator` | `string` | 32 | `reservation` | 
| `reservationDepositRecNo` | `long` |  | `reservationDeposit` | 
| `reservationDepositDueDate` | `Date` |  | `reservationDeposit` | Since reservations can now have multiple deposits, column will reflect earliest deposit that meets specified criteria
| `reservationDepositDueAmount` | `long` |  | `reservationDeposit` | Since reservations can now have multiple deposits, column will reflect earliest deposit that meets specified criteria
| `reservationDepositCompleted` | `DateTime` |  | `reservationDeposit` | 
| `reservationFinalPayDueDate` | `Date` |  | `reservation` | 
| `reservationARCBSPNumber` | `int` |  | `reservation` | 
| `reservationProviderProfileRecNo` | `long` |  | `reservation` | 
| `reservationProviderProfileName` | `string` | 256 | `reservation` | 
| `reservationTicketNo` | `long` |  | `reservation` | 
| `reservationConfirmationNumber` | `string` | 64 | `reservation` | 
| `reservationConfirmedDateTime` | `DateTime` |  | `reservation` | 
| `reservationPromoId` | `string` | 256 | `reservation` | 
| `reservationSource` | `string` | 32 | `reservation` | 
| `reservationPrimaryTravelerRecNo` | `long` |  | `reservation` | 
| `reservationPrimaryTravelerName` | `string` | 256 | `reservation` | 
| `reservationTicketType` | `short` |  | `airReservation` | Normal = 1, ExchangeAddCollect = 2, ExchangeRefund = 3, CreditMemo = 4, DebitMemo = 5, TAAD = 6
| `reservationCommissionDatePayable` | `Date` |  | `reservation` | 
| `tripActionRecNo` | `long` |  | `tripActionItem` | 
| `tripActionItemTriggerIndex` | `short` |  | `tripActionItem` | FixedDate = 1, StartDate = 2, EndDate = 3, TargetTravelDate = 4, CreateDate = 5, EarliestBookingDate = 6, EarliestDepositDate = 7, EarliestFinalPayDate = 8
| `tripActionItemDate` | `Date` |  | `tripActionItem` | 
| `tripActionItemTriggerFixedDate` | `Date` |  | `tripActionItem` | 
| `tripActionItemDescription` | `string` | 256 | `tripActionItem` | 
| `tripActionItemCompleted` | `DateTime` |  | `tripActionItem` | 
| `reservationAdvisorRecNo` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorProfileRecNo` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorProfileName` | `string` | 256 | `reservationAdvisor` | 
| `reservationAdvisorProfileId` | `string` | 32 | `reservationAdvisor` | 
| `reservationAdvisorCommissionAmount` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorCommissionRate` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorReconciliationRecNo` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorReconciliationDate` | `Date` |  | `reservationAdvisor` | 
| `reservationAdvisorDefaultCommissionRate` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorDefaultCommissionAmount` | `long` |  | `reservationAdvisor` | 
| `reservationAccountingEntryRecNo` | `long` |  | `reservation` | 
| `reservationAccountingEntryCreateDate` | `Date` |  | `reservation` | 
| `reservationTravelerRecNo` | `long` |  | `reservationTraveler` | 

| Parameter | Type | Linked Column | Description |
| --------- | ---- | ------------- | ----------- |
| `recNo [inherited]` | [`NumSearchParam`](NumSearchParam) | `recNo` | 
| `startingRow [inherited]` | `long` |  | 
| `rowCount [inherited]` | `long` |  | 
| `topRows [inherited]` | `long` |  | 
| `distinct [inherited]` | `bool` |  | 
| `includeCols [inherited]` | `string[]` |  | 
| `includeColsExtended [inherited]` | `includeColsExtended[]` |  | 
| `baseUrl [inherited]` | `string` |  | 
| `reportFormat [inherited]` | `bool` |  | 
| `reportName [inherited]` | `string` |  | 
| `displayTagRecNo [inherited]` | `long` |  | 
| `tags [inherited]` | `TagsSearchParams[]` |  | 
| `clientProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `clientProfileRecNo` | 
| `advisorProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `advisorProfileRecNo` | 
| `targetTravelDateFrom` | `DateSearchParam` | `targetTravelDate` | 
| `targetTravelDateTo` | `DateSearchParam` | `targetTravelDate` | 
| `tripStartDateTimeFrom` | `DateSearchParam` | `startDateTime` | 
| `tripStartDateTimeTo` | `DateSearchParam` | `startDateTime` | 
| `tripEndDateTimeFrom` | `DateSearchParam` | `endDateTime` | 
| `tripEndDateTimeTo` | `DateSearchParam` | `endDateTime` | 
| `cancelled` | `bool` | `cancelled` | 
| `tripName` | [`StringSearchParam`](StringSearchParam) | `name` | 
| `destinationRecNo` | [`NumSearchParam`](NumSearchParam) | `destinationRecNo` | 
| `branchRecNo` | [`NumSearchParam`](NumSearchParam) | `branchRecNo` | 
| `tripRecordLocator` | [`StringSearchParam`](StringSearchParam) | `tripRecordLocator` | 
| `tripCreateDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `tripCreateDateTimeTo` | `DateTimeUTCSearchParam` |  | 
| `tripModifiedDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `tripModifiedDateTimeTo` | `DateTimeUTCSearchParam` |  | 
| `reservationRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationRecNo` | 
| `reservationBookDateTimeFrom` | `DateSearchParam` | `reservationBookDateTime` | 
| `reservationBookDateTimeTo` | `DateSearchParam` | `reservationBookDateTime` | 
| `reservationStartDateTimeFrom` | `DateSearchParam` | `reservationStartDateTime` | 
| `reservationStartDateTimeTo` | `DateSearchParam` | `reservationStartDateTime` | 
| `reservationEndDateTimeFrom` | `DateSearchParam` | `reservationEndDateTime` | 
| `reservationEndDateTimeTo` | `DateSearchParam` | `reservationEndDateTime` | 
| `reservationDepositDueDateFrom` | `DateSearchParam` | `reservationDepositDueDate` | 
| `reservationDepositDueDateTo` | `DateSearchParam` | `reservationDepositDueDate` | 
| `reservationDepositCompleted` | `bool` | `reservationDepositCompleted` | 
| `reservationFinalPayDueDateFrom` | `DateSearchParam` | `reservationFinalPayDueDate` | 
| `reservationFinalPayDueDateTo` | `DateSearchParam` | `reservationFinalPayDueDate` | 
| `reservationTravelCategory` | `EnumSearchParam<TravelCategory>` | `reservationTravelCategoryRecNo` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `reservationSupplierProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierProfileRecNo` | 
| `reservationTrackClientPayments` | `bool` | `reservationTrackClientPayments` | 
| `reservationStatus` | `EnumSearchParam<Status>` | `reservationStatus` | Pending = 1, Confirmed = 2, Cancelled = 3
| `reservationClientBalance` | [`NumSearchParam`](NumSearchParam) | `reservationClientBalance` | 
| `reservationClientBalanceMin` | [`NumSearchParam`](NumSearchParam) | `reservationClientBalance` | 
| `reservationClientBalanceMax` | [`NumSearchParam`](NumSearchParam) | `reservationClientBalance` | 
| `reservationSupplierBalance` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierBalance` | 
| `reservationSupplierBalanceMin` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierBalance` | 
| `reservationSupplierBalanceMax` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierBalance` | 
| `reservationDisplayTagRecNo` | `long` |  | 
| `reservationARCBSPNumber` | [`NumSearchParam`](NumSearchParam) | `reservationARCBSPNumber` | 
| `reservationAdvisorProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationAdvisorProfileRecNo` | 
| `reservationProviderProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationProviderProfileRecNo` | 
| `reservationTravelerRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationTravelerRecNo` | 
| `reservationTicketNumber` | [`NumSearchParam`](NumSearchParam) | `reservationTicketNo` | 
| `reservationConfirmationNumber` | [`StringSearchParam`](StringSearchParam) | `reservationConfirmationNumber` | 
| `reservationConfirmedDateTimeFrom` | `DateSearchParam` | `reservationConfirmedDateTime` | 
| `reservationConfirmedDateTimeTo` | `DateSearchParam` | `reservationConfirmedDateTime` | 
| `reservationRecordLocator` | [`StringSearchParam`](StringSearchParam) | `reservationRecordLocator` | 
| `reservationPromoId` | [`StringSearchParam`](StringSearchParam) | `reservationPromoId` | 
| `tripActionItemCompleted` | `bool` | `tripActionItemCompleted` | 
| `tripActionItemDateFrom` | `DateSearchParam` |  | 
| `tripActionItemDateTo` | `DateSearchParam` |  | 
| `reservationAdvisorReconciliationRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationAdvisorReconciliationRecNo` | 
| `reservationAdvisorReconciled` | `bool` | `reservationAdvisorReconciliationRecNo` | 
| `reservationCommissionDatePayableFrom` | `DateSearchParam` | `reservationCommissionDatePayable` | Filter results based on calculated date payable column
| `reservationCommissionDatePayableTo` | `DateSearchParam` | `reservationCommissionDatePayable` | Filter results based on calculated date payable column
| `reservationAccountingEntryCreateDateFrom` | `DateSearchParam` | `reservationAccountingEntryCreateDate` | 
| `reservationAccountingEntryCreateDateTo` | `DateSearchParam` | `reservationAccountingEntryCreateDate` | 
| `reservationTags` | `TagsSearchParams[]` |  | 
| `clientProfileSearchParams` | `ProfileSearchParams` |  | 
| `destinationSearchParams` | `DestinationSearchParams` |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: a trip search that returns the trip recNo and trip name for trips with a target travel date between 31-DEC-2022 and 15-JAN-2023
```sh
POST https://api-dev.trestechnologies.com/tripSearch
Content-Type: application/json
Authorization: Bearer <session-token>
{
  "targetTravelDateFrom": {
    "Date": "2022-12-31T00:00:00"
  },
  "targetTravelDateTo": {
    "Date": "2023-01-15T00:00:00"
  },
  "includeCols": [
    "recNo",
    "name"
  ]
}
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
[
  {
    "recNo": 1969697,
    "name": "Hawaii 2023"
  },
  {
    "recNo": 1969698,
    "name": "50th Anniversary"
  }
]
```

