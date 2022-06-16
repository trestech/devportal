---
layout: post
---

﻿# TripSearch
TripSearch returns data for trips and reservations.

User needs at least select permission for trips. Results may be filtered if trip permission includes OnlySelf (based on user's linked advisors) or if trip permission includes OnlyBranch (based on user's branch).

Referenced Table: [trip](/trip)

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | trip | 
| tagValue | string | 1024 | trip | 
| summaryCount | int |  | trip | 
| name | string | 256 | trip | 
| startDateTime | DateTime |  | trip | 
| endDateTime | DateTime |  | trip | 
| targetTravelDate | Date |  | trip | 
| clientProfileRecNo | long |  | trip | 
| clientProfileName | string | 256 | trip | 
| advisorProfileRecNo | long |  | trip | 
| advisorProfileName | string | 256 | trip | 
| advisorProfileId | string | 32 | trip | 
| remarks | string | 256 | trip | 
| advisorRemarks | string | 256 | trip | 
| cancelled | bool |  | trip | 
| destinationRecNo | long |  | trip | 
| destinationName | string | 64 | trip | 
| destinationRegionRecNo | long |  | trip | 
| destinationRegionName | string | 64 | trip | 
| branchRecNo | long |  | trip | 
| branchName | string | 64 | trip | 
| createDateTime | DateTime |  | trip | 
| lastModifiedDateTime | DateTime |  | trip | 
| reservationRecNo | long |  | trip | 
| reservationTagValue | string | 1024 | trip | 
| reservationSupplierProfileRecNo | long |  | trip | 
| reservationSupplierProfileName | string | 256 | trip | 
| reservationCommisionTriggerIndex | short |  | trip | 
| reservationCommisionTriggerDaysOffset | short |  | trip | 
| reservationClientBalance | long |  | trip | 
| reservationSupplierBalance | long |  | trip | 
| reservationTrackClientPayments | bool |  | trip | 
| reservationStatus | short |  | trip | 
| reservationTravelCategoryRecNo | short |  | trip | 
| reservationTravelCategoryName | string | 32 | trip | 
| reservationTotalFare | long |  | trip | 
| reservationCommissionAmount | long |  | trip | 
| reservationCommissionRate | long |  | trip | 
| reservationBaseFare | long |  | trip | 
| reservationTaxAmount | long |  | trip | 
| reservationHighFare | long |  | trip | 
| reservationLowFare | long |  | trip | 
| reservationBookDateTime | DateTime |  | trip | 
| reservationStartDateTime | DateTime |  | trip | 
| reservationEndDateTime | DateTime |  | trip | 
| reservationCommissionDatePayable | Date |  | trip | 
| reservationTicketNo | long |  | trip | 
| reservationConfirmationNo | string | 64 | trip | 
| reservationRecordLocator | string | 32 | trip | 
| reservationDepositRecNo | long |  | trip | 
| reservationDepositDueDate | Date |  | trip | Since reservations can now have multiple deposits, column will reflect earliest deposit that meets specified criteria
| reservationDepositDueAmount | long |  | trip | Since reservations can now have multiple deposits, column will reflect earliest deposit that meets specified criteria
| reservationDepositCompleted | DateTime |  | trip | 
| reservationFinalPayDueDate | Date |  | trip | 
| reservationARCBSPNumber | int |  | trip | 
| reservationProviderProfileRecNo | long |  | trip | 
| reservationProviderProfileName | string | 256 | trip | 
| reservationTicketNumber | long |  | trip | 
| reservationConfirmationNumber | string | 64 | trip | 
| reservationConfirmedDateTime | DateTime |  | trip | 
| reservationPromoId | string | 256 | trip | 
| reservationSource | string | 32 | trip | 
| reservationPrimaryTravelerRecNo | long |  | trip | 
| reservationPrimaryTravelerName | string | 256 | trip | 
| tripActionRecNo | long |  | trip | 
| tripActionItemTriggerIndex | short |  | trip | 
| tripActionItemDate | Date |  | trip | 
| tripActionItemTriggerFixedDate | Date |  | trip | 
| tripActionItemDescription | string | 256 | trip | 
| tripActionItemCompleted | DateTime |  | trip | 
| reservationAdvisorRecNo | long |  | trip | 
| reservationAdvisorProfileRecNo | long |  | trip | 
| reservationAdvisorProfileName | string | 256 | trip | 
| reservationAdvisorProfileId | string | 32 | trip | 
| reservationAdvisorCommissionAmount | long |  | trip | 
| reservationAdvisorCommissionRate | long |  | trip | 
| reservationAdvisorReconciliationRecNo | long |  | trip | 
| reservationAdvisorReconciliationDate | Date |  | trip | 
| reservationAccountingEntryRecNo | long |  | trip | 
| reservationAccountingEntryCreateDate | Date |  | trip | 

| Parameter | Type | Linked Parameter | Description |
| --------- | ---- | ---------------- | ----------- |
| recNo [inherited] | long |  | 
| recNoList [inherited] | long[] |  | 
| startingRow [inherited] | int |  | 
| rowCount [inherited] | int |  | 
| topRows [inherited] | int |  | 
| distinct [inherited] | bool |  | 
| includeCols [inherited] | string[] |  | 
| includeColsExtended [inherited] | [includeColsExtended[]](/includeColsExtended) |  | 
| baseUrl [inherited] | string |  | 
| tagRecNo [inherited] | long[] |  | 
| tagValueCond [inherited] | short |  | 
| tagValue [inherited] | string |  | 
| displayTagRecNo [inherited] | long |  | 
| tags [inherited] | [TagsSearch[]](/TagsSearch) |  | 
| clientProfileRecNo | long |  | 
| clientProfileRecNoCond | short | clientProfileRecNo | 
| advisorProfileRecNo | long |  | 
| targetTravelDateFrom | Date |  | 
| targetTravelDateTo | Date |  | 
| tripStartDateTimeFrom | Date |  | 
| tripStartDateTimeTo | Date |  | 
| tripEndDateTimeFrom | Date |  | 
| tripEndDateTimeTo | Date |  | 
| cancelled | bool |  | 
| tripName | string |  | 
| tripNameCond | short |  | 
| destinationRecNo | long[] |  | 
| branchRecNo | long[] |  | 
| tripCreateDateTimeFrom | DateTimeOffset |  | 
| tripCreateDateTimeTo | DateTimeOffset |  | 
| tripModifiedDateTimeFrom | DateTimeOffset |  | 
| tripModifiedDateTimeTo | DateTimeOffset |  | 
| reservationRecNo | long[] |  | 
| reservationBookDateTimeFrom | Date |  | 
| reservationBookDateTimeTo | Date |  | 
| reservationStartDateTimeFrom | Date |  | 
| reservationStartDateTimeTo | Date |  | 
| reservationEndDateTimeFrom | Date |  | 
| reservationEndDateTimeTo | Date |  | 
| reservationDepositDueDateFrom | Date |  | 
| reservationDepositDueDateTo | Date |  | 
| reservationDepositCompleted | bool |  | 
| reservationFinalPayDueDateFrom | Date |  | 
| reservationFinalPayDueDateTo | Date |  | 
| reservationTravelCategory | short[] |  | 
| reservationSupplierProfileRecNo | long |  | 
| reservationTrackClientPayments | bool |  | 
| reservationStatus | short |  | 
| reservationClientBalanceNonZero | bool |  | ReservationClientBalance parameters are meant to be used in conjunction with ReservationTrackClientPayments = true. For reservations where ReservationTrackClientPayments = false, clientBalance will be NULL.
| reservationClientBalanceMin | long |  | 
| reservationClientBalanceMax | long |  | 
| reservationSupplierBalanceNonZero | bool |  | 
| reservationSupplierBalanceMin | long |  | 
| reservationSupplierBalanceMax | long |  | 
| reservationTagRecNo | long[] |  | 
| reservationTagValueCond | short |  | 
| reservationTagValue | string |  | 
| reservationDisplayTagRecNo | long |  | 
| reservationARCBSPNumber | int |  | 
| reservationARCBSPNumberCond | short |  | 
| reservationAdvisorProfileRecNo | long |  | 
| reservationProviderProfileRecNo | long |  | 
| reservationTravelerRecNo | long |  | 
| reservationTicketNumber | long |  | 
| reservationConfirmationNumber | string |  | 
| reservationConfirmedDateTimeFrom | Date |  | 
| reservationConfirmedDateTimeTo | Date |  | 
| reservationRecordLocator | string |  | 
| reservationPromoId | string |  | 
| tripActionItemCompleted | bool |  | 
| tripActionItemDateFrom | Date |  | 
| tripActionItemDateTo | Date |  | 
| reservationAdvisorReconciliationRecNo | long |  | 
| reservationAdvisorReconciled | bool |  | 
| reservationCommissionDatePayableFrom | Date |  | Filter results based on calculated date payable column
| reservationCommissionDatePayableTo | Date |  | Filter results based on calculated date payable column
| reservationAccountingEntryCreateDateFrom | Date |  | 
| reservationAccountingEntryCreateDateTo | Date |  | 
| reservationTags | [TagsSearch[]](/TagsSearch) |  | 
| clientProfileSearchParams | [profileSearch](/profileSearch) |  | 
| destinationSearchParams | [destinationSearch](/destinationSearch) |  | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request
```sh
POST https://api-dev.trestechnologies.com/tripSearch
Content-Type: application/json
Authorization: Bearer <session-token>
{
  "targetTravelDateFrom": "2022-12-31T00:00:00",
  "targetTravelDateTo": "2023-01-15T00:00:00",
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
