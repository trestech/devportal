---
layout: api_page
title: "TripSearch"
description: "TripSearch returns data for trips and reservations"
assembly_version: "1.5.5.3"
---

TripSearch returns data for trips and reservations.

User needs at least select permission for trips. Results may be filtered if trip permission includes OnlySelf (based on user's linked advisors) or if trip permission includes OnlyBranch (based on user's branch).

See: [Trip](Trip.html)

Permission Areas: Trip

| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| `recNo` | `long` |  | `trip` | 
| `tagRecNo` | `long` |  | `trip` | 
| `tagName` | `string` | 64 | `trip` | 
| `tagValue` | `string` | 1024 | `trip` | 
| `tags` | `string` |  | `trip` | 
| `summaryCount` | `int` |  | `trip` | 
| `createDateTime` | `DateTimeOffset` |  | `trip` | 
| `lastModifiedDateTime` | `DateTimeOffset` |  | `trip` | 
| `name` | `string` | 256 | `trip` | 
| `startDateTime` | `DateTime` |  | `trip` | 
| `endDateTime` | `DateTime` |  | `trip` | 
| `targetTravelDate` | `Date` |  | `trip` | 
| `clientProfileRecNo` | `long` |  | `trip` | 
| `clientProfileName` | `string` | 256 | `trip` | 
| `clientProfileInfoName` | `string` | 256 | `trip` | 
| `advisorProfileRecNo` | `long` |  | `trip` | 
| `advisorProfileName` | `string` | 256 | `trip` | 
| `advisorProfileId` | `string` | 32 | `trip` | 
| `remarks` | `string` | 256 | `trip` | 
| `advisorRemarks` | `string` | 256 | `trip` | 
| `cancelled` | `bool` |  | `trip` | 
| `destinations` | `string` |  | `trip` | 
| `destinationRecNo` | `long` |  | `trip` | 
| `destinationName` | `string` | 64 | `trip` | 
| `destinationRegionRecNo` | `long` |  | `trip` | 
| `destinationRegionName` | `string` | 64 | `trip` | 
| `branchRecNo` | `long` |  | `trip` | 
| `branchName` | `string` | 64 | `trip` | 
| `tripRecordLocator` | `string` | 32 | `trip` | 
| `visibility` | `short` |  | `trip` | 
| `tripTotalFare` | `long` |  | `trip` | 
| `tripCommissionAmount` | `long` |  | `trip` | 
| `tripClientBalance` | `long` |  | `trip` | 
| `reservationRecNo` | `long` |  | `reservation` | 
| `reservationTagRecNo` | `long` |  | `reservation` | 
| `reservationTagName` | `string` | 64 | `reservation` | 
| `reservationTagValue` | `string` | 1024 | `reservation` | 
| `reservationTags` | `string` |  | `reservation` | 
| `reservationSupplierProfileRecNo` | `long` |  | `reservation` | 
| `reservationSupplierProfileName` | `string` | 256 | `reservation` | 
| `reservationSupplierProfileInfoName` | `string` | 256 | `reservation` | 
| `reservationCommisionTriggerIndex` | `short` |  | `reservation` | BookingDate = 1, DepartDate = 2, ReturnDate = 3, FinalPayDate = 4
| `reservationCommisionTriggerDaysOffset` | `short` |  | `reservation` | 
| `reservationClientBalance` | `long` |  | `reservation` | 
| `reservationSupplierBalance` | `long` |  | `reservation` | 
| `reservationTrackClientPayments` | `bool` |  | `reservation` | 
| `reservationStatus` | `short` |  | `reservation` | Pending = 1, Confirmed = 2, Cancelled = 3, Voided = 4
| `reservationTravelCategoryRecNo` | `short` |  | `reservation` | Air = 1, Hotel = 2, Car = 3, Cruise = 4, Tour = 5, Rail = 6, Transfer = 7, Insurance = 8, ServiceFee = 9, Excursion = 10, ClientVoucher = 11, GiftCertificate = 12, SupplierVoucher = 13, Misc = 99
| `reservationTravelCategoryName` | `string` | 32 | `reservation` | 
| `reservationTravelSubCategoryRecNo` | `long` |  | `reservation` | 
| `reservationTravelSubCategoryName` | `string` | 64 | `reservation` | 
| `reservationTotalFare` | `long` |  | `reservation` | 
| `reservationCommissionAmount` | `long` |  | `reservation` | 
| `reservationCommissionRate` | `short` |  | `reservation` | Percentage values have an implied 2 digits after the decimal point. A value of 25% is represented as 2500
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
| `reservationProviderProfileInfoName` | `string` | 256 | `reservation` | 
| `reservationTicketNo` | `long` |  | `reservation` | 
| `reservationConfirmationNumber` | `string` | 64 | `reservation` | TripSearch.ReservationConfirmationNumber column deprecated; use TripSearch.ReservationConfirmationNo instead
| `reservationConfirmationTicketNo` | `string` | 64 | `reservation` | 
| `reservationConfirmedDateTime` | `DateTime` |  | `reservation` | 
| `reservationPromoId` | `string` | 256 | `reservation` | 
| `reservationSource` | `string` | 32 | `reservation` | 
| `reservationPrimaryTravelerRecNo` | `long` |  | `reservation` | 
| `reservationPrimaryTravelerName` | `string` | 256 | `reservation` | 
| `reservationTravelerName` | `string` |  | `reservation` | 
| `reservationTicketType` | `short` |  | `airReservation` | Normal = 1, ExchangeAddCollect = 2, ExchangeRefund = 3, CreditMemo = 4, DebitMemo = 5, TAAD = 6
| `reservationOriginalTicketNo` | `long` |  | `airReservation` | 
| `reservationCommissionDatePayable` | `Date` |  | `reservation` | 
| `reservationCreateDateTime` | `DateTimeOffset` |  | `reservation` | 
| `reservationLastModifiedDateTime` | `DateTimeOffset` |  | `reservation` | 
| `reservationMarkupDiscount` | `long` |  | `reservation` | 
| `reservationItineraryRemarks` | `string` |  | `reservation` | 
| `reservationForeignCurrencyCode` | `string` | 3 | `reservation` | 
| `reservationForeignTotalFare` | `long` |  | `reservation` | 
| `reservationForeignCommissionAmount` | `long` |  | `reservation` | 
| `reservationForeignConversionRate` | `int` |  | `reservation` | Percentage values have an implied 4 digits after the decimal point. A value of 0.2512 == 25.12% is represented as 251200
| `reservationGstVatOnCommissionAmount` | `long` |  | `reservation` | 
| `reservationGstVatOnCommissionOverride` | `bool` |  | `reservation` | 
| `reservationGstVatOnCommissionRate` | `int` |  | `reservation` | Percentage values have an implied 4 digits after the decimal point. A value of 0.2512 == 25.12% is represented as 251200
| `reservationTotalGstVatTaxAmount` | `long` |  | `reservation` | 
| `tripActionRecNo` | `long` |  | `tripActionItem` | 
| `tripActionItemTriggerIndex` | `short` |  | `tripActionItem` | FixedDate = 1, StartDate = 2, EndDate = 3, TargetTravelDate = 4, CreateDate = 5, EarliestBookingDate = 6, EarliestDepositDate = 7, EarliestFinalPayDate = 8
| `tripActionItemDate` | `Date` |  | `tripActionItem` | 
| `tripActionItemTriggerFixedDate` | `Date` |  | `tripActionItem` | 
| `tripActionItemDescription` | `string` |  | `tripActionItem` | 
| `tripActionItemCompleted` | `DateTime` |  | `tripActionItem` | 
| `tripActionItemAssignedToAppUserRecNo` | `long` |  | `tripActionItem` | 
| `tripActionItemAssignedToAppUserId` | `string` | 64 | `tripActionItem` | 
| `reservationAdvisorRecNo` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorProfileRecNo` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorProfileName` | `string` | 256 | `reservationAdvisor` | 
| `reservationAdvisorProfileId` | `string` | 32 | `reservationAdvisor` | 
| `reservationAdvisorCommissionAmount` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorCommissionRate` | `short` |  | `reservationAdvisor` | Percentage values have an implied 2 digits after the decimal point. A value of 25% is represented as 2500
| `reservationAdvisorReconciliationRecNo` | `long` |  | `reservationAdvisor` | 
| `reservationAdvisorReconciliationDate` | `Date` |  | `reservationAdvisor` | 
| `reservationAdvisorDefaultCommissionRate` | `short` |  | `reservationAdvisor` | Percentage values have an implied 2 digits after the decimal point. A value of 25% is represented as 2500
| `reservationAdvisorDefaultCommissionAmount` | `long` |  | `reservationAdvisor` | 
| `reservationAccountingEntryRecNo` | `long` |  | `reservation` | 
| `reservationAccountingEntryCreateDate` | `Date` |  | `reservation` | 
| `reservationTravelerRecNo` | `long` |  | `reservationTraveler` | 
| `reservationAdvisorsDatePayable` | `Date` |  | `reservation` | 
| `tripPaymentAuthorizationRecNo` | `long` |  | `tripPaymentAuthorization` | 
| `tripPaymentAuthorizationStatus` | `short` |  | `tripPaymentAuthorization` | Pending = 1, Authorized = 2, Expired = 3
| `tripPaymentAuthorizationCreateDateTime` | `DateTimeOffset` |  | `tripPaymentAuthorization` | 
| `tripPaymentAuthorizationExpirationDateTime` | `DateTimeOffset` |  | `tripPaymentAuthorization` | 
| `reservationSupplierPaymentTotal` | `long` |  | `reservation` | 
| `reservationClientPaymentTotal` | `long` |  | `reservation` | 
| `tripDocumentAcknowledgementRecNo` | `long` |  | `tripDocumentAcknowledgement` | 
| `tripDocumentAcknowledgementStatus` | `short` |  | `tripDocumentAcknowledgement` | Pending = 1, Acknowledged = 2, Expired = 3
| `tripDocumentAcknowledgementCreateDateTime` | `DateTimeOffset` |  | `tripDocumentAcknowledgement` | 
| `tripDocumentAcknowledgementAcknowledgeByDateTime` | `DateTimeOffset` |  | `tripDocumentAcknowledgement` | 
| `tripDocumentAcknowledgementDocumentTemplateRecNo` | `long` |  | `tripDocumentAcknowledgement` | 

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
| `queryOptimizerFlags [inherited]` | [`int<int>`] |  | Recompile = 1
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
| `tripVisibility` | [`short<short>`] | `visibility` | None = 0, ClientItin = 1, ClientTripProposal = 2, DestinationImages = 64
| `reservationCreateDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `reservationCreateDateTimeTo` | `DateTimeUTCSearchParam` |  | 
| `reservationModifiedDateTimeFrom` | `DateTimeUTCSearchParam` |  | 
| `reservationModifiedDateTimeTo` | `DateTimeUTCSearchParam` |  | 
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
| `reservationTravelSubCategoryRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationTravelSubCategoryRecNo` | 
| `reservationSupplierProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierProfileRecNo` | 
| `reservationTrackClientPayments` | `bool` | `reservationTrackClientPayments` | 
| `reservationStatus` | `EnumSearchParam<Status>` | `reservationStatus` | Pending = 1, Confirmed = 2, Cancelled = 3, Voided = 4
| `reservationClientBalance` | [`NumSearchParam`](NumSearchParam) | `reservationClientBalance` | 
| `reservationClientBalanceMin` | [`NumSearchParam`](NumSearchParam) | `reservationClientBalance` | 
| `reservationClientBalanceMax` | [`NumSearchParam`](NumSearchParam) | `reservationClientBalance` | 
| `reservationSupplierBalance` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierBalance` | 
| `reservationSupplierBalanceMin` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierBalance` | 
| `reservationSupplierBalanceMax` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierBalance` | 
| `reservationARCBSPNumber` | [`NumSearchParam`](NumSearchParam) | `reservationARCBSPNumber` | 
| `reservationAdvisorProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationAdvisorProfileRecNo` | 
| `reservationProviderProfileRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationProviderProfileRecNo` | 
| `reservationTravelerRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationTravelerRecNo` | 
| `reservationTravelerName` | [`StringSearchParam`](StringSearchParam) | `reservationTravelerName` | 
| `reservationTicketNumber` | [`NumSearchParam`](NumSearchParam) | `reservationTicketNo` | 
| `reservationConfirmationNumber` | [`StringSearchParam`](StringSearchParam) | `reservationConfirmationNo` | 
| `reservationConfirmedDateTimeFrom` | `DateSearchParam` | `reservationConfirmedDateTime` | 
| `reservationConfirmedDateTimeTo` | `DateSearchParam` | `reservationConfirmedDateTime` | 
| `reservationRecordLocator` | [`StringSearchParam`](StringSearchParam) | `reservationRecordLocator` | 
| `reservationPromoId` | [`StringSearchParam`](StringSearchParam) | `reservationPromoId` | 
| `reservationTotalFare` | [`NumSearchParam`](NumSearchParam) | `reservationTotalFare` | 
| `reservationCommissionAmount` | [`NumSearchParam`](NumSearchParam) | `reservationCommissionAmount` | 
| `reservationSupplierProfileInfoName` | [`StringSearchParam`](StringSearchParam) | `reservationSupplierProfileInfoName` | 
| `reservationProviderProfileInfoName` | [`StringSearchParam`](StringSearchParam) | `reservationProviderProfileInfoName` | 
| `reservationOriginalTicketNumber` | [`NumSearchParam`](NumSearchParam) | `reservationOriginalTicketNo` | 
| `tripActionItemCompleted` | `bool` | `tripActionItemCompleted` | 
| `tripActionItemDateFrom` | `DateSearchParam` | `tripActionItemDate` | 
| `tripActionItemDateTo` | `DateSearchParam` | `tripActionItemDate` | 
| `tripActionItemAssignedToAppUserRecNo` | [`NumSearchParam`](NumSearchParam) | `tripActionItemAssignedToAppUserRecNo` | 
| `reservationAdvisorReconciliationRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationAdvisorReconciliationRecNo` | 
| `reservationAdvisorReconciled` | `bool` | `reservationAdvisorReconciliationRecNo` | Parameter reservationAdvisorReconciled is deprecated, use reservationAdvisorReconciliationRecNo IS BLANK instead.
| `reservationAdvisorReconciliationDateFrom` | `DateSearchParam` | `reservationAdvisorReconciliationDate` | 
| `reservationAdvisorReconciliationDateTo` | `DateSearchParam` | `reservationAdvisorReconciliationDate` | 
| `reservationCommissionDatePayableFrom` | `DateSearchParam` | `reservationCommissionDatePayable` | Filter results based on calculated date payable column
| `reservationCommissionDatePayableTo` | `DateSearchParam` | `reservationCommissionDatePayable` | Filter results based on calculated date payable column
| `reservationAccountingEntryCreateDateFrom` | `DateSearchParam` | `reservationAccountingEntryCreateDate` | 
| `reservationAccountingEntryCreateDateTo` | `DateSearchParam` | `reservationAccountingEntryCreateDate` | 
| `reservationAdvisorsDatePayableFrom` | `DateSearchParam` | `reservationAdvisorsDatePayable` | 
| `reservationAdvisorsDatePayableTo` | `DateSearchParam` | `reservationAdvisorsDatePayable` | 
| `reservationAdvisorRecNo` | [`NumSearchParam`](NumSearchParam) | `reservationAdvisorRecNo` | 
| `tripPaymentAuthorizationRecNo` | [`NumSearchParam`](NumSearchParam) | `tripPaymentAuthorizationRecNo` | 
| `tripPaymentAuthorizationStatus` | `EnumSearchParam<PaymentAuthorizationStatus>` | `tripPaymentAuthorizationStatus` | Pending = 1, Authorized = 2, Expired = 3
| `tripPaymentAuthorizationCreateDateTimeFrom` | `DateTimeUTCSearchParam` | `tripPaymentAuthorizationCreateDateTime` | 
| `tripPaymentAuthorizationCreateDateTimeTo` | `DateTimeUTCSearchParam` | `tripPaymentAuthorizationCreateDateTime` | 
| `tripPaymentAuthorizationExpirationDateTimeFrom` | `DateTimeUTCSearchParam` | `tripPaymentAuthorizationExpirationDateTime` | 
| `tripPaymentAuthorizationExpirationDateTimeTo` | `DateTimeUTCSearchParam` | `tripPaymentAuthorizationExpirationDateTime` | 
| `reservationSupplierPaymentTotal` | [`NumSearchParam`](NumSearchParam) | `reservationSupplierPaymentTotal` | 
| `reservationSource` | [`StringSearchParam`](StringSearchParam) | `reservationSource` | 
| `reservationItineraryRemarks` | [`StringSearchParam`](StringSearchParam) | `reservationItineraryRemarks` | 
| `tripDocumentAcknowledgementRecNo` | [`NumSearchParam`](NumSearchParam) | `tripDocumentAcknowledgementRecNo` | 
| `tripDocumentAcknowledgementStatus` | `EnumSearchParam<DocumentAcknowledgementStatus>` | `tripDocumentAcknowledgementStatus` | Pending = 1, Acknowledged = 2, Expired = 3
| `tripDocumentAcknowledgementCreateDateTimeFrom` | `DateTimeUTCSearchParam` | `tripDocumentAcknowledgementCreateDateTime` | 
| `tripDocumentAcknowledgementCreateDateTimeTo` | `DateTimeUTCSearchParam` | `tripDocumentAcknowledgementCreateDateTime` | 
| `tripDocumentAcknowledgementAcknowledgeByDateTimeFrom` | `DateTimeUTCSearchParam` | `tripDocumentAcknowledgementAcknowledgeByDateTime` | 
| `tripDocumentAcknowledgementAcknowledgeByDateTimeTo` | `DateTimeUTCSearchParam` | `tripDocumentAcknowledgementAcknowledgeByDateTime` | 
| `tripDocumentAcknowledgementDocumentTemplateRecNo` | [`NumSearchParam`](NumSearchParam) | `tripDocumentAcknowledgementDocumentTemplateRecNo` | 
| `reservationTags` | `TagsSearchParams[]` |  | 
| `includeParamSets` | [`TripSearchParams[]`](TripSearchParams) |  | 
| `excludeParamSets` | [`TripSearchParams[]`](TripSearchParams) |  | 
| `clientProfileSearchParams` | `ProfileSearchParams` | `clientProfileRecNo` | 
| `destinationSearchParams` | `DestinationSearchParams` | `destinationRecNo` | 
| `reservationTravelerSearchParams` | [`PersonSearchParams`](PersonSearchParams) | `reservationTravelerRecNo` | 
| `reservationAdvisorProfileSearchParams` | `ProfileSearchParams` | `reservationAdvisorProfileRecNo` | 
| `reservationSupplierProfileSearchParams` | `ProfileSearchParams` | `reservationSupplierProfileRecNo` | 
| `reservationProviderProfileSearchParams` | `ProfileSearchParams` | `reservationProviderProfileRecNo` | 
| `reservationPaymentSearchParams` | [`PaymentSearchParams`](PaymentSearchParams) | `reservationRecNo` | 
| `excludeTripSearchParams` | `TripSearchParams` | `recNo` | 

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

