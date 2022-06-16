---
layout: post
---

# TripSearch
TripSearch returns data for trips and reservations.

User needs at least select permission for trips. Results may be filtered if trip permission includes OnlySelf (based on user's linked advisors) or if trip permission includes OnlyBranch (based on user's branch).

| Column | Type | Size | Description | 
| ------ | ---- | ---- | ----------- | 
| recNo | long |  | 
| tagValue | string | 1024 | 
| summaryCount | int |  | 
| name | string | 256 | 
| startDateTime | DateTime |  | 
| endDateTime | DateTime |  | 
| targetTravelDate | Date |  | 
| clientProfileRecNo | long |  | 
| clientProfileName | string | 256 | 
| advisorProfileRecNo | long |  | 
| advisorProfileName | string | 256 | 
| advisorProfileId | string | 32 | 
| remarks | string | 256 | 
| advisorRemarks | string | 256 | 
| cancelled | bool |  | 
| destinationRecNo | long |  | 
| destinationName | string | 64 | 
| destinationRegionRecNo | long |  | 
| destinationRegionName | string | 64 | 
| branchRecNo | long |  | 
| branchName | string | 64 | 
| createDateTime | DateTime |  | 
| lastModifiedDateTime | DateTime |  | 
| reservationRecNo | long |  | 
| reservationTagValue | string | 1024 | 
| reservationSupplierProfileRecNo | long |  | 
| reservationSupplierProfileName | string | 256 | 
| reservationCommisionTriggerIndex | short |  | 
| reservationCommisionTriggerDaysOffset | short |  | 
| reservationClientBalance | long |  | 
| reservationSupplierBalance | long |  | 
| reservationTrackClientPayments | bool |  | 
| reservationStatus | short |  | 
| reservationTravelCategoryRecNo | short |  | 
| reservationTravelCategoryName | string | 32 | 
| reservationTotalFare | long |  | 
| reservationCommissionAmount | long |  | 
| reservationCommissionRate | long |  | 
| reservationBaseFare | long |  | 
| reservationTaxAmount | long |  | 
| reservationHighFare | long |  | 
| reservationLowFare | long |  | 
| reservationBookDateTime | DateTime |  | 
| reservationStartDateTime | DateTime |  | 
| reservationEndDateTime | DateTime |  | 
| reservationCommissionDatePayable | Date |  | 
| reservationTicketNo | long |  | 
| reservationConfirmationNo | string | 64 | 
| reservationRecordLocator | string | 32 | 
| reservationDepositRecNo | long |  | 
| reservationDepositDueDate | Date |  | Since reservations can now have multiple deposits, column will reflect earliest deposit that meets specified criteria
| reservationDepositDueAmount | long |  | Since reservations can now have multiple deposits, column will reflect earliest deposit that meets specified criteria
| reservationDepositCompleted | DateTime |  | 
| reservationFinalPayDueDate | Date |  | 
| reservationARCBSPNumber | int |  | 
| reservationProviderProfileRecNo | long |  | 
| reservationProviderProfileName | string | 256 | 
| reservationTicketNumber | long |  | 
| reservationConfirmationNumber | string | 64 | 
| reservationConfirmedDateTime | DateTime |  | 
| reservationPromoId | string | 256 | 
| reservationSource | string | 32 | 
| reservationPrimaryTravelerRecNo | long |  | 
| reservationPrimaryTravelerName | string | 256 | 
| tripActionRecNo | long |  | 
| tripActionItemTriggerIndex | short |  | 
| tripActionItemDate | Date |  | 
| tripActionItemTriggerFixedDate | Date |  | 
| tripActionItemDescription | string | 256 | 
| tripActionItemCompleted | DateTime |  | 
| reservationAdvisorRecNo | long |  | 
| reservationAdvisorProfileRecNo | long |  | 
| reservationAdvisorProfileName | string | 256 | 
| reservationAdvisorProfileId | string | 32 | 
| reservationAdvisorCommissionAmount | long |  | 
| reservationAdvisorCommissionRate | long |  | 
| reservationAdvisorReconciliationRecNo | long |  | 
| reservationAdvisorReconciliationDate | Date |  | 
| reservationAccountingEntryRecNo | long |  | 
| reservationAccountingEntryCreateDate | Date |  | 

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
  "targetTravelDateTo": "2023-01-15T00:00:00"
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
