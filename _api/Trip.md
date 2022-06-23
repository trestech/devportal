---
layout: api_page
title: "Trip"
description: ""
---



Permission Areas: Trip

| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| recNo | long |  | PKey | trip | 
| clientProfile_recNo | long |  | FKey | trip | 
| clientName_Lookup | string | 256 | ReadOnly | trip | 
| branch_recNo | long |  | FKey | trip | 
| branch_name | string | 64 | ReadOnly | trip | 
| name | string | 256 |  | trip | 
| advisorProfile_recNo | long |  | FKey | trip | 
| advisorName_Lookup | string | 256 | ReadOnly | trip | 
| advisorId_Lookup | string | 256 | ReadOnly | trip | 
| uniqueId | string | 64 |  | trip | 
| cancelled | bool |  | Required | trip | 
| startDateTime | DateTime |  |  | trip | 
| endDateTime | DateTime |  |  | trip | 
| targetTravelDate | Date |  |  | trip | 
| destination_recNo | long |  | FKey | trip | 
| destinationName_Lookup | string | 64 | ReadOnly | trip | 
| remarks | string |  |  | trip | 
| advisorRemarks | string |  |  | trip | 
| marketingSource | string | 64 |  | trip | 
| clientProfileInfo  | table |  |  | trip | 
| trip_recNo | long |  | PKey,FKey | clientProfileInfo | 
| name | string | 256 |  | clientProfileInfo | 
| id | string | 32 |  | clientProfileInfo | 
| phone | string | 256 |  | clientProfileInfo | 
| email | string | 256 |  | clientProfileInfo | 
| street1 | string | 128 |  | clientProfileInfo | 
| street2 | string | 128 |  | clientProfileInfo | 
| city | string | 64 |  | clientProfileInfo | 
| stateProvince | string | 8 |  | clientProfileInfo | 
| zipPostalCode | string | 16 |  | clientProfileInfo | 
| country | string | 4 |  | clientProfileInfo | 
| tripReservationLink  | table |  |  | trip | 
| trip_recNo | long |  | PKey,FKey | tripReservationLink | 
| reservation_recNo | long |  | PKey,Auto-Assign | tripReservationLink | 
| reservation  [shared] | table |  |  | tripReservationLink | 
| recNo | long |  | PKey,FKey | reservation | 
| supplierProfile_recNo | long |  | FKey | reservation | 
| supplierName_Lookup | string | 256 | ReadOnly | reservation | 
| providerProfile_recNo | long |  | FKey | reservation | 
| providerName_Lookup | string | 256 | ReadOnly | reservation | 
| travelCategory_recNo | short |  | Required,FKey | reservation | 
| totalFare | long |  | Required | reservation | 
| commissionAmount | long |  | Required | reservation | 
| commissionRate | short |  |  | reservation | 
| markupDiscount | long |  | Required | reservation | 
| highFare | long |  |  | reservation | 
| lowFare | long |  |  | reservation | 
| confirmationNo | string | 64 |  | reservation | 
| arcBspNo | int |  |  | reservation | 
| ticketNo | long |  |  | reservation | 
| status | short |  | Required | reservation | 
| finalPayDueDate | Date |  |  | reservation | 
| bookDateTime | DateTimeOffset |  |  | reservation | 
| startDateTime | DateTime |  |  | reservation | 
| endDateTime | DateTime |  |  | reservation | 
| unitCode | string | 8 |  | reservation | 
| unitDescription | string | 256 |  | reservation | 
| numberOfUnits | short |  |  | reservation | 
| rateCode | string | 8 |  | reservation | 
| rateDescription | string | 256 |  | reservation | 
| recordLocator | string | 32 |  | reservation | 
| source | string | 32 |  | reservation | 
| travelerName | string | 256 |  | reservation | 
| promoId | string | 256 |  | reservation | 
| itineraryRemarks | string |  |  | reservation | 
| supplierRemarks | string |  |  | reservation | 
| advisorInfo | string | 256 |  | reservation | 
| trackClientPayments | bool |  | Required | reservation | 
| clientBalance | long |  | ReadOnly | reservation | 
| supplierBalance | long |  | ReadOnly | reservation | 
| accountingEntry_recNo | long |  | FKey | reservation | 
| paymentCount | int |  | ReadOnly | reservation | 
| airReservation  [shared] | table |  |  | reservation | 
| reservation_recNo | long |  | PKey,FKey | airReservation | 
| ticketType | short |  |  | airReservation | 
| endingTicketNo | long |  |  | airReservation | 
| originalTicketNo | long |  |  | airReservation | 
| ticketDesignator | string | 32 |  | airReservation | 
| domIntlIndicator | short |  | Required | airReservation | 
| eTicketIndicator | short |  |  | airReservation | 
| airSegment  | table |  |  | airReservation | 
| recNo | long |  | PKey | airSegment | 
| airReservation_recNo | long |  | FKey | airSegment | 
| departDateTime | DateTime |  |  | airSegment | 
| departCityCode | string | 3 |  | airSegment | 
| departCityName | string | 64 |  | airSegment | 
| arriveDateTime | DateTime |  |  | airSegment | 
| arriveCityCode | string | 3 |  | airSegment | 
| arriveCityName | string | 64 |  | airSegment | 
| connection | string | 1 |  | airSegment | 
| flightNo | short |  |  | airSegment | 
| provider | string | 8 |  | airSegment | 
| fare | long |  |  | airSegment | 
| classOfService | string | 2 |  | airSegment | 
| fareBasis | string | 16 |  | airSegment | 
| ticketDesignator | string | 32 |  | airSegment | 
| mileage | short |  |  | airSegment | 
| indexNo | short |  |  | airSegment | 
| railReservation  [shared] | table |  |  | reservation | 
| reservation_recNo | long |  | PKey,FKey | railReservation | 
| departStationCode | string | 3 |  | railReservation | 
| departStationName | string | 64 |  | railReservation | 
| arriveStationCode | string | 3 |  | railReservation | 
| arriveStationName | string | 64 |  | railReservation | 
| trainNo | short |  |  | railReservation | 
| classOfService | string | 2 |  | railReservation | 
| supplierProfileInfo  [shared] | table |  |  | reservation | 
| reservation_recNo | long |  | PKey,FKey | supplierProfileInfo | 
| name | string | 256 |  | supplierProfileInfo | 
| id | string | 32 |  | supplierProfileInfo | 
| phone | string | 256 |  | supplierProfileInfo | 
| fax | string | 256 |  | supplierProfileInfo | 
| street1 | string | 128 |  | supplierProfileInfo | 
| street2 | string | 128 |  | supplierProfileInfo | 
| city | string | 64 |  | supplierProfileInfo | 
| stateProvince | string | 8 |  | supplierProfileInfo | 
| zipPostalCode | string | 16 |  | supplierProfileInfo | 
| country | string | 4 |  | supplierProfileInfo | 
| providerProfileInfo  [shared] | table |  |  | reservation | 
| reservation_recNo | long |  | PKey,FKey | providerProfileInfo | 
| name | string | 256 |  | providerProfileInfo | 
| id | string | 32 |  | providerProfileInfo | 
| phone | string | 256 |  | providerProfileInfo | 
| fax | string | 256 |  | providerProfileInfo | 
| street1 | string | 128 |  | providerProfileInfo | 
| street2 | string | 128 |  | providerProfileInfo | 
| city | string | 64 |  | providerProfileInfo | 
| stateProvince | string | 8 |  | providerProfileInfo | 
| zipPostalCode | string | 16 |  | providerProfileInfo | 
| country | string | 4 |  | providerProfileInfo | 
| reservationTraveler  | table |  |  | reservation | 
| reservation_recNo | long |  | PKey,FKey | reservationTraveler | 
| person_recNo | long |  | PKey,Required,FKey | reservationTraveler | 
| nameLookup | string | 256 | ReadOnly | reservationTraveler | 
| isPrimary | bool |  |  | reservationTraveler | 
| primaryPhone | string | 256 | ReadOnly | reservationTraveler | 
| primaryEmail | string | 256 | ReadOnly | reservationTraveler | 
| reservationAdvisor  | table |  |  | reservation | 
| recNo | long |  | PKey | reservationAdvisor | 
| reservation_recNo | long |  | FKey | reservationAdvisor | 
| advisorProfile_recNo | long |  | Required,FKey | reservationAdvisor | 
| advisorName | string | 256 | ReadOnly | reservationAdvisor | 
| id | string | 32 | ReadOnly | reservationAdvisor | 
| commissionRate | short |  |  | reservationAdvisor | 
| commissionAmount | long |  |  | reservationAdvisor | 
| datePaid | Date |  |  | reservationAdvisor | 
| reconciliationRecNo | long |  | ReadOnly | reservationAdvisor | 
| reconciliationDate | Date |  | ReadOnly | reservationAdvisor | 
| reservationTax  | table |  |  | reservation | 
| recNo | long |  | PKey | reservationTax | 
| reservation_recNo | long |  | FKey | reservationTax | 
| code | string | 2 |  | reservationTax | 
| amount | long |  |  | reservationTax | 
| reservationAttachmentLink  | table |  |  | reservation | 
| reservation_recNo | long |  | FKey | reservationAttachmentLink | 
| attachment_recNo | long |  | PKey,Auto-Assign | reservationAttachmentLink | 
| reservationAttachment  [shared] | table |  |  | reservationAttachmentLink | 
| recNo | long |  | PKey,FKey | attachment | 
| type | short |  | Required | attachment | 
| description | string | 256 |  | attachment | 
| fileNameLinkURL | string | 256 | Required | attachment | 
| fileData | byte[] |  |  | attachment | 
| size | int |  |  | attachment | 
| compressed | bool |  |  | attachment | 
| reservationTag  | table |  |  | reservation | 
| recNo | long |  | PKey | reservationTag | 
| reservation_recNo | long |  | FKey | reservationTag | 
| tag_recNo | long |  | Required,FKey | reservationTag | 
| name | string | 64 | ReadOnly | reservationTag | 
| value | string | 1024 |  | reservationTag | 
| cruiseReservation  | table |  |  | reservation | 
| reservation_recNo | long |  | PKey,FKey | cruiseReservation | 
| type | short |  | Required | cruiseReservation | 
| deck | string | 32 |  | cruiseReservation | 
| cabin | string | 16 |  | cruiseReservation | 
| cruiseSegment  | table |  |  | cruiseReservation | 
| recNo | long |  | PKey | cruiseSegment | 
| cruiseReservation_recNo | long |  | FKey | cruiseSegment | 
| departDateTime | DateTime |  |  | cruiseSegment | 
| departPortCode | string | 3 |  | cruiseSegment | 
| departPortName | string | 64 |  | cruiseSegment | 
| arriveDateTime | DateTime |  |  | cruiseSegment | 
| arrivePortCode | string | 3 |  | cruiseSegment | 
| arrivePortName | string | 64 |  | cruiseSegment | 
| remarks | string | 256 |  | cruiseSegment | 
| indexNo | short |  |  | cruiseSegment | 
| cruiseSubReservationLink  | table |  |  | cruiseReservation | 
| parentReservation_recNo | long |  | PKey,FKey | subReservationLink | 
| subReservation_recNo | long |  | PKey,Auto-Assign | subReservationLink | 
| cruiseSubReservation  [shared] | table |  |  | cruiseSubReservationLink | 
| recNo | long |  | PKey,FKey | reservation | 
| supplierProfile_recNo | long |  | FKey | reservation | 
| supplierName_Lookup | string | 256 | ReadOnly | reservation | 
| providerProfile_recNo | long |  | FKey | reservation | 
| providerName_Lookup | string | 256 | ReadOnly | reservation | 
| travelCategory_recNo | short |  | Required,FKey | reservation | 
| totalFare | long |  | Required | reservation | 
| commissionAmount | long |  | Required | reservation | 
| commissionRate | short |  |  | reservation | 
| markupDiscount | long |  | Required | reservation | 
| highFare | long |  |  | reservation | 
| lowFare | long |  |  | reservation | 
| confirmationNo | string | 64 |  | reservation | 
| arcBspNo | int |  |  | reservation | 
| ticketNo | long |  |  | reservation | 
| status | short |  | Required | reservation | 
| finalPayDueDate | Date |  |  | reservation | 
| bookDateTime | DateTimeOffset |  |  | reservation | 
| startDateTime | DateTime |  |  | reservation | 
| endDateTime | DateTime |  |  | reservation | 
| unitCode | string | 8 |  | reservation | 
| unitDescription | string | 256 |  | reservation | 
| numberOfUnits | short |  |  | reservation | 
| rateCode | string | 8 |  | reservation | 
| rateDescription | string | 256 |  | reservation | 
| recordLocator | string | 32 |  | reservation | 
| source | string | 32 |  | reservation | 
| travelerName | string | 256 |  | reservation | 
| promoId | string | 256 |  | reservation | 
| itineraryRemarks | string |  |  | reservation | 
| supplierRemarks | string |  |  | reservation | 
| advisorInfo | string | 256 |  | reservation | 
| trackClientPayments | bool |  | Required | reservation | 
| airReservation  [shared] | table |  |  | cruiseSubReservation | 
| reservation_recNo | long |  | PKey,FKey | airReservation | 
| ticketType | short |  |  | airReservation | 
| endingTicketNo | long |  |  | airReservation | 
| originalTicketNo | long |  |  | airReservation | 
| ticketDesignator | string | 32 |  | airReservation | 
| domIntlIndicator | short |  | Required | airReservation | 
| eTicketIndicator | short |  |  | airReservation | 
| airSegment  | table |  |  | cruiseSubAirReservation | 
| recNo | long |  | PKey | airSegment | 
| airReservation_recNo | long |  | FKey | airSegment | 
| departDateTime | DateTime |  |  | airSegment | 
| departCityCode | string | 3 |  | airSegment | 
| departCityName | string | 64 |  | airSegment | 
| arriveDateTime | DateTime |  |  | airSegment | 
| arriveCityCode | string | 3 |  | airSegment | 
| arriveCityName | string | 64 |  | airSegment | 
| connection | string | 1 |  | airSegment | 
| flightNo | short |  |  | airSegment | 
| provider | string | 8 |  | airSegment | 
| fare | long |  |  | airSegment | 
| classOfService | string | 2 |  | airSegment | 
| fareBasis | string | 16 |  | airSegment | 
| ticketDesignator | string | 32 |  | airSegment | 
| mileage | short |  |  | airSegment | 
| indexNo | short |  |  | airSegment | 
| railReservation  [shared] | table |  |  | cruiseSubReservation | 
| reservation_recNo | long |  | PKey,FKey | railReservation | 
| departStationCode | string | 3 |  | railReservation | 
| departStationName | string | 64 |  | railReservation | 
| arriveStationCode | string | 3 |  | railReservation | 
| arriveStationName | string | 64 |  | railReservation | 
| trainNo | short |  |  | railReservation | 
| classOfService | string | 2 |  | railReservation | 
| cruiseSubSupplierProfileInfo  [shared] | table |  |  | cruiseSubReservation | 
| reservation_recNo | long |  | PKey,FKey | supplierProfileInfo | 
| name | string | 256 |  | supplierProfileInfo | 
| id | string | 32 |  | supplierProfileInfo | 
| phone | string | 256 |  | supplierProfileInfo | 
| fax | string | 256 |  | supplierProfileInfo | 
| street1 | string | 128 |  | supplierProfileInfo | 
| street2 | string | 128 |  | supplierProfileInfo | 
| city | string | 64 |  | supplierProfileInfo | 
| stateProvince | string | 8 |  | supplierProfileInfo | 
| zipPostalCode | string | 16 |  | supplierProfileInfo | 
| country | string | 4 |  | supplierProfileInfo | 
| cruiseSubProviderProfileInfo  [shared] | table |  |  | cruiseSubReservation | 
| reservation_recNo | long |  | PKey,FKey | providerProfileInfo | 
| name | string | 256 |  | providerProfileInfo | 
| id | string | 32 |  | providerProfileInfo | 
| phone | string | 256 |  | providerProfileInfo | 
| fax | string | 256 |  | providerProfileInfo | 
| street1 | string | 128 |  | providerProfileInfo | 
| street2 | string | 128 |  | providerProfileInfo | 
| city | string | 64 |  | providerProfileInfo | 
| stateProvince | string | 8 |  | providerProfileInfo | 
| zipPostalCode | string | 16 |  | providerProfileInfo | 
| country | string | 4 |  | providerProfileInfo | 
| tourReservation  | table |  |  | reservation | 
| reservation_recNo | long |  | PKey,FKey | tourReservation | 
| tourSubReservationLink  | table |  |  | tourReservation | 
| parentReservation_recNo | long |  | PKey,FKey | subReservationLink | 
| subReservation_recNo | long |  | PKey,Auto-Assign | subReservationLink | 
| tourSubReservation  [shared] | table |  |  | tourSubReservationLink | 
| recNo | long |  | PKey,FKey | reservation | 
| supplierProfile_recNo | long |  | FKey | reservation | 
| supplierName_Lookup | string | 256 | ReadOnly | reservation | 
| providerProfile_recNo | long |  | FKey | reservation | 
| providerName_Lookup | string | 256 | ReadOnly | reservation | 
| travelCategory_recNo | short |  | Required,FKey | reservation | 
| totalFare | long |  | Required | reservation | 
| commissionAmount | long |  | Required | reservation | 
| commissionRate | short |  |  | reservation | 
| markupDiscount | long |  | Required | reservation | 
| highFare | long |  |  | reservation | 
| lowFare | long |  |  | reservation | 
| confirmationNo | string | 64 |  | reservation | 
| arcBspNo | int |  |  | reservation | 
| ticketNo | long |  |  | reservation | 
| status | short |  | Required | reservation | 
| finalPayDueDate | Date |  |  | reservation | 
| bookDateTime | DateTimeOffset |  |  | reservation | 
| startDateTime | DateTime |  |  | reservation | 
| endDateTime | DateTime |  |  | reservation | 
| unitCode | string | 8 |  | reservation | 
| unitDescription | string | 256 |  | reservation | 
| numberOfUnits | short |  |  | reservation | 
| rateCode | string | 8 |  | reservation | 
| rateDescription | string | 256 |  | reservation | 
| recordLocator | string | 32 |  | reservation | 
| source | string | 32 |  | reservation | 
| travelerName | string | 256 |  | reservation | 
| promoId | string | 256 |  | reservation | 
| itineraryRemarks | string |  |  | reservation | 
| supplierRemarks | string |  |  | reservation | 
| advisorInfo | string | 256 |  | reservation | 
| trackClientPayments | bool |  | Required | reservation | 
| airReservation  [shared] | table |  |  | tourSubReservation | 
| reservation_recNo | long |  | PKey,FKey | airReservation | 
| ticketType | short |  |  | airReservation | 
| endingTicketNo | long |  |  | airReservation | 
| originalTicketNo | long |  |  | airReservation | 
| ticketDesignator | string | 32 |  | airReservation | 
| domIntlIndicator | short |  | Required | airReservation | 
| eTicketIndicator | short |  |  | airReservation | 
| airSegment  | table |  |  | tourSubAirReservation | 
| recNo | long |  | PKey | airSegment | 
| airReservation_recNo | long |  | FKey | airSegment | 
| departDateTime | DateTime |  |  | airSegment | 
| departCityCode | string | 3 |  | airSegment | 
| departCityName | string | 64 |  | airSegment | 
| arriveDateTime | DateTime |  |  | airSegment | 
| arriveCityCode | string | 3 |  | airSegment | 
| arriveCityName | string | 64 |  | airSegment | 
| connection | string | 1 |  | airSegment | 
| flightNo | short |  |  | airSegment | 
| provider | string | 8 |  | airSegment | 
| fare | long |  |  | airSegment | 
| classOfService | string | 2 |  | airSegment | 
| fareBasis | string | 16 |  | airSegment | 
| ticketDesignator | string | 32 |  | airSegment | 
| mileage | short |  |  | airSegment | 
| indexNo | short |  |  | airSegment | 
| railReservation  [shared] | table |  |  | tourSubReservation | 
| reservation_recNo | long |  | PKey,FKey | railReservation | 
| departStationCode | string | 3 |  | railReservation | 
| departStationName | string | 64 |  | railReservation | 
| arriveStationCode | string | 3 |  | railReservation | 
| arriveStationName | string | 64 |  | railReservation | 
| trainNo | short |  |  | railReservation | 
| classOfService | string | 2 |  | railReservation | 
| tourSubSupplierProfileInfo  [shared] | table |  |  | tourSubReservation | 
| reservation_recNo | long |  | PKey,FKey | supplierProfileInfo | 
| name | string | 256 |  | supplierProfileInfo | 
| id | string | 32 |  | supplierProfileInfo | 
| phone | string | 256 |  | supplierProfileInfo | 
| fax | string | 256 |  | supplierProfileInfo | 
| street1 | string | 128 |  | supplierProfileInfo | 
| street2 | string | 128 |  | supplierProfileInfo | 
| city | string | 64 |  | supplierProfileInfo | 
| stateProvince | string | 8 |  | supplierProfileInfo | 
| zipPostalCode | string | 16 |  | supplierProfileInfo | 
| country | string | 4 |  | supplierProfileInfo | 
| tourSubProviderProfileInfo  [shared] | table |  |  | tourSubReservation | 
| reservation_recNo | long |  | PKey,FKey | providerProfileInfo | 
| name | string | 256 |  | providerProfileInfo | 
| id | string | 32 |  | providerProfileInfo | 
| phone | string | 256 |  | providerProfileInfo | 
| fax | string | 256 |  | providerProfileInfo | 
| street1 | string | 128 |  | providerProfileInfo | 
| street2 | string | 128 |  | providerProfileInfo | 
| city | string | 64 |  | providerProfileInfo | 
| stateProvince | string | 8 |  | providerProfileInfo | 
| zipPostalCode | string | 16 |  | providerProfileInfo | 
| country | string | 4 |  | providerProfileInfo | 
| reservationDeposit  | table |  |  | reservation | 
| recNo | long |  | PKey | reservationDeposit | 
| reservation_recNo | long |  | FKey | reservationDeposit | 
| dueAmount | long |  | Required | reservationDeposit | 
| dueDate | Date |  | Required | reservationDeposit | 
| notes | string | 256 |  | reservationDeposit | 
| completed | DateTimeOffset |  |  | reservationDeposit | 
| completedBy_appUserRecNo | long |  |  | reservationDeposit | 
| completedBy_appUserId | string | 64 | ReadOnly | reservationDeposit | 
| clientPaymentInfo  | table |  |  | reservation | 
| reservation_recNo | long |  | PKey,FKey | clientPaymentInfo | 
| paymentDate | Date |  |  | clientPaymentInfo | 
| amount | long |  |  | clientPaymentInfo | 
| method | short |  | Required | clientPaymentInfo | 
| agencyProcessed | bool |  | Required | clientPaymentInfo | 
| cardNumber | string | 64 |  | clientPaymentInfo | 
| cardNumberToken | string | 64 |  | clientPaymentInfo | 
| expirationDate | Date |  |  | clientPaymentInfo | 
| tripAttachmentLink  | table |  |  | trip | 
| trip_recNo | long |  | PKey,FKey | tripAttachmentLink | 
| attachment_recNo | long |  | PKey,Auto-Assign | tripAttachmentLink | 
| tripAttachment  [shared] | table |  |  | tripAttachmentLink | 
| recNo | long |  | PKey,FKey | attachment | 
| type | short |  | Required | attachment | 
| description | string | 256 |  | attachment | 
| fileNameLinkURL | string | 256 | Required | attachment | 
| fileData | byte[] |  |  | attachment | 
| size | int |  |  | attachment | 
| compressed | bool |  |  | attachment | 
| tripTag  | table |  |  | trip | 
| recNo | long |  | PKey | tripTag | 
| trip_recNo | long |  | FKey | tripTag | 
| tag_recNo | long |  | Required,FKey | tripTag | 
| name | string | 64 | ReadOnly | tripTag | 
| value | string | 1024 |  | tripTag | 
| tripActionItemLink  | table |  |  | trip | 
| trip_recNo | long |  | PKey,FKey | tripActionItemLink | 
| actionItem_recNo | long |  | PKey,Auto-Assign | tripActionItemLink | 
| tripActionItem  | table |  |  | tripActionItemLink | 
| recNo | long |  | PKey,FKey | actionItem | 
| type | short |  | Required | actionItem | 
| description | string | 256 |  | actionItem | 
| triggerIndex | short |  | Required | actionItem | 
| triggerDaysOffset | short |  |  | actionItem | 
| triggerFixedDate | Date |  |  | actionItem | 
| completed | DateTimeOffset |  |  | actionItem | 
| completedBy_appUserRecNo | long |  |  | actionItem | 
| completedBy_appUserId | string | 64 |  | actionItem | 
| notes | string | 256 |  | actionItem | 


