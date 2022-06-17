---
layout: page
title: "Trip"
description: ""
---



| Column | Type | Size | Table | Description |
| ------ | ---- | ---- | ----- | ----------- |
| recNo | long |  | {string.Join(',', flags)} | trip | 
| clientProfile_recNo | long |  | {string.Join(',', flags)} | trip | 
| clientName_Lookup | string | 256 | {string.Join(',', flags)} | trip | 
| branch_recNo | long |  | {string.Join(',', flags)} | trip | 
| branch_name | string | 64 | {string.Join(',', flags)} | trip | 
| name | string | 256 | {string.Join(',', flags)} | trip | 
| advisorProfile_recNo | long |  | {string.Join(',', flags)} | trip | 
| advisorName_Lookup | string | 256 | {string.Join(',', flags)} | trip | 
| advisorId_Lookup | string | 256 | {string.Join(',', flags)} | trip | 
| uniqueId | string | 64 | {string.Join(',', flags)} | trip | 
| cancelled | bool |  | {string.Join(',', flags)} | trip | 
| startDateTime | DateTime |  | {string.Join(',', flags)} | trip | 
| endDateTime | DateTime |  | {string.Join(',', flags)} | trip | 
| targetTravelDate | Date |  | {string.Join(',', flags)} | trip | 
| destination_recNo | long |  | {string.Join(',', flags)} | trip | 
| destinationName_Lookup | string | 64 | {string.Join(',', flags)} | trip | 
| remarks | string |  | {string.Join(',', flags)} | trip | 
| advisorRemarks | string |  | {string.Join(',', flags)} | trip | 
| marketingSource | string | 64 | {string.Join(',', flags)} | trip | 
| clientProfileInfo  | table |  |  |  | 
| trip_recNo | long |  | {string.Join(',', flags)} | clientProfileInfo | 
| name | string | 256 | {string.Join(',', flags)} | clientProfileInfo | 
| id | string | 32 | {string.Join(',', flags)} | clientProfileInfo | 
| phone | string | 256 | {string.Join(',', flags)} | clientProfileInfo | 
| email | string | 256 | {string.Join(',', flags)} | clientProfileInfo | 
| street1 | string | 128 | {string.Join(',', flags)} | clientProfileInfo | 
| street2 | string | 128 | {string.Join(',', flags)} | clientProfileInfo | 
| city | string | 64 | {string.Join(',', flags)} | clientProfileInfo | 
| stateProvince | string | 8 | {string.Join(',', flags)} | clientProfileInfo | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | clientProfileInfo | 
| country | string | 4 | {string.Join(',', flags)} | clientProfileInfo | 
| tripReservationLink  | table |  |  |  | 
| trip_recNo | long |  | {string.Join(',', flags)} | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | tripReservationLink | 
| reservation  [shared] | table |  |  | trip | 
| recNo | long |  | {string.Join(',', flags)} | reservation | 
| supplierProfile_recNo | long |  | {string.Join(',', flags)} | reservation | 
| supplierName_Lookup | string | 256 | {string.Join(',', flags)} | reservation | 
| providerProfile_recNo | long |  | {string.Join(',', flags)} | reservation | 
| providerName_Lookup | string | 256 | {string.Join(',', flags)} | reservation | 
| travelCategory_recNo | short |  | {string.Join(',', flags)} | reservation | 
| totalFare | long |  | {string.Join(',', flags)} | reservation | 
| commissionAmount | long |  | {string.Join(',', flags)} | reservation | 
| commissionRate | short |  | {string.Join(',', flags)} | reservation | 
| markupDiscount | long |  | {string.Join(',', flags)} | reservation | 
| highFare | long |  | {string.Join(',', flags)} | reservation | 
| lowFare | long |  | {string.Join(',', flags)} | reservation | 
| confirmationNo | string | 64 | {string.Join(',', flags)} | reservation | 
| arcBspNo | int |  | {string.Join(',', flags)} | reservation | 
| ticketNo | long |  | {string.Join(',', flags)} | reservation | 
| status | short |  | {string.Join(',', flags)} | reservation | 
| finalPayDueDate | Date |  | {string.Join(',', flags)} | reservation | 
| bookDateTime | DateTimeOffset |  | {string.Join(',', flags)} | reservation | 
| startDateTime | DateTime |  | {string.Join(',', flags)} | reservation | 
| endDateTime | DateTime |  | {string.Join(',', flags)} | reservation | 
| unitCode | string | 8 | {string.Join(',', flags)} | reservation | 
| unitDescription | string | 256 | {string.Join(',', flags)} | reservation | 
| numberOfUnits | short |  | {string.Join(',', flags)} | reservation | 
| rateCode | string | 8 | {string.Join(',', flags)} | reservation | 
| rateDescription | string | 256 | {string.Join(',', flags)} | reservation | 
| recordLocator | string | 32 | {string.Join(',', flags)} | reservation | 
| source | string | 32 | {string.Join(',', flags)} | reservation | 
| travelerName | string | 256 | {string.Join(',', flags)} | reservation | 
| promoId | string | 256 | {string.Join(',', flags)} | reservation | 
| itineraryRemarks | string |  | {string.Join(',', flags)} | reservation | 
| supplierRemarks | string |  | {string.Join(',', flags)} | reservation | 
| advisorInfo | string | 256 | {string.Join(',', flags)} | reservation | 
| trackClientPayments | bool |  | {string.Join(',', flags)} | reservation | 
| clientBalance | long |  | {string.Join(',', flags)} | reservation | 
| supplierBalance | long |  | {string.Join(',', flags)} | reservation | 
| accountingEntry_recNo | long |  | {string.Join(',', flags)} | reservation | 
| paymentCount | int |  | {string.Join(',', flags)} | reservation | 
| airReservation  [shared] | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | airReservation | 
| ticketType | short |  | {string.Join(',', flags)} | airReservation | 
| endingTicketNo | long |  | {string.Join(',', flags)} | airReservation | 
| originalTicketNo | long |  | {string.Join(',', flags)} | airReservation | 
| ticketDesignator | string | 32 | {string.Join(',', flags)} | airReservation | 
| domIntlIndicator | short |  | {string.Join(',', flags)} | airReservation | 
| eTicketIndicator | short |  | {string.Join(',', flags)} | airReservation | 
| airSegment  | table |  |  | reservation | 
| recNo | long |  | {string.Join(',', flags)} | airSegment | 
| airReservation_recNo | long |  | {string.Join(',', flags)} | airSegment | 
| departDateTime | DateTime |  | {string.Join(',', flags)} | airSegment | 
| departCityCode | string | 3 | {string.Join(',', flags)} | airSegment | 
| departCityName | string | 64 | {string.Join(',', flags)} | airSegment | 
| arriveDateTime | DateTime |  | {string.Join(',', flags)} | airSegment | 
| arriveCityCode | string | 3 | {string.Join(',', flags)} | airSegment | 
| arriveCityName | string | 64 | {string.Join(',', flags)} | airSegment | 
| connection | string | 1 | {string.Join(',', flags)} | airSegment | 
| flightNo | short |  | {string.Join(',', flags)} | airSegment | 
| provider | string | 8 | {string.Join(',', flags)} | airSegment | 
| fare | long |  | {string.Join(',', flags)} | airSegment | 
| classOfService | string | 2 | {string.Join(',', flags)} | airSegment | 
| fareBasis | string | 16 | {string.Join(',', flags)} | airSegment | 
| ticketDesignator | string | 32 | {string.Join(',', flags)} | airSegment | 
| mileage | short |  | {string.Join(',', flags)} | airSegment | 
| indexNo | short |  | {string.Join(',', flags)} | airSegment | 
| railReservation  [shared] | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | railReservation | 
| departStationCode | string | 3 | {string.Join(',', flags)} | railReservation | 
| departStationName | string | 64 | {string.Join(',', flags)} | railReservation | 
| arriveStationCode | string | 3 | {string.Join(',', flags)} | railReservation | 
| arriveStationName | string | 64 | {string.Join(',', flags)} | railReservation | 
| trainNo | short |  | {string.Join(',', flags)} | railReservation | 
| classOfService | string | 2 | {string.Join(',', flags)} | railReservation | 
| supplierProfileInfo  [shared] | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | supplierProfileInfo | 
| name | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| id | string | 32 | {string.Join(',', flags)} | supplierProfileInfo | 
| phone | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| fax | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| street1 | string | 128 | {string.Join(',', flags)} | supplierProfileInfo | 
| street2 | string | 128 | {string.Join(',', flags)} | supplierProfileInfo | 
| city | string | 64 | {string.Join(',', flags)} | supplierProfileInfo | 
| stateProvince | string | 8 | {string.Join(',', flags)} | supplierProfileInfo | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | supplierProfileInfo | 
| country | string | 4 | {string.Join(',', flags)} | supplierProfileInfo | 
| providerProfileInfo  [shared] | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | providerProfileInfo | 
| name | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| id | string | 32 | {string.Join(',', flags)} | providerProfileInfo | 
| phone | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| fax | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| street1 | string | 128 | {string.Join(',', flags)} | providerProfileInfo | 
| street2 | string | 128 | {string.Join(',', flags)} | providerProfileInfo | 
| city | string | 64 | {string.Join(',', flags)} | providerProfileInfo | 
| stateProvince | string | 8 | {string.Join(',', flags)} | providerProfileInfo | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | providerProfileInfo | 
| country | string | 4 | {string.Join(',', flags)} | providerProfileInfo | 
| reservationTraveler  | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | reservationTraveler | 
| person_recNo | long |  | {string.Join(',', flags)} | reservationTraveler | 
| nameLookup | string | 256 | {string.Join(',', flags)} | reservationTraveler | 
| isPrimary | bool |  | {string.Join(',', flags)} | reservationTraveler | 
| reservationAdvisor  | table |  |  | tripReservationLink | 
| recNo | long |  | {string.Join(',', flags)} | reservationAdvisor | 
| reservation_recNo | long |  | {string.Join(',', flags)} | reservationAdvisor | 
| advisorProfile_recNo | long |  | {string.Join(',', flags)} | reservationAdvisor | 
| advisorName | string | 256 | {string.Join(',', flags)} | reservationAdvisor | 
| id | string | 32 | {string.Join(',', flags)} | reservationAdvisor | 
| commissionRate | short |  | {string.Join(',', flags)} | reservationAdvisor | 
| commissionAmount | long |  | {string.Join(',', flags)} | reservationAdvisor | 
| datePaid | Date |  | {string.Join(',', flags)} | reservationAdvisor | 
| reconciliationRecNo | long |  | {string.Join(',', flags)} | reservationAdvisor | 
| reconciliationDate | Date |  | {string.Join(',', flags)} | reservationAdvisor | 
| reservationTax  | table |  |  | tripReservationLink | 
| recNo | long |  | {string.Join(',', flags)} | reservationTax | 
| reservation_recNo | long |  | {string.Join(',', flags)} | reservationTax | 
| code | string | 2 | {string.Join(',', flags)} | reservationTax | 
| amount | long |  | {string.Join(',', flags)} | reservationTax | 
| reservationAttachmentLink  | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | reservationAttachmentLink | 
| attachment_recNo | long |  | {string.Join(',', flags)} | reservationAttachmentLink | 
| reservationAttachment  [shared] | table |  |  | reservation | 
| recNo | long |  | {string.Join(',', flags)} | attachment | 
| type | short |  | {string.Join(',', flags)} | attachment | 
| description | string | 256 | {string.Join(',', flags)} | attachment | 
| fileNameLinkURL | string | 256 | {string.Join(',', flags)} | attachment | 
| fileData | byte[] |  | {string.Join(',', flags)} | attachment | 
| size | int |  | {string.Join(',', flags)} | attachment | 
| compressed | bool |  | {string.Join(',', flags)} | attachment | 
| reservationTag  | table |  |  | tripReservationLink | 
| recNo | long |  | {string.Join(',', flags)} | reservationTag | 
| reservation_recNo | long |  | {string.Join(',', flags)} | reservationTag | 
| tag_recNo | long |  | {string.Join(',', flags)} | reservationTag | 
| name | string | 64 | {string.Join(',', flags)} | reservationTag | 
| value | string | 1024 | {string.Join(',', flags)} | reservationTag | 
| cruiseReservation  | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | cruiseReservation | 
| type | short |  | {string.Join(',', flags)} | cruiseReservation | 
| deck | string | 32 | {string.Join(',', flags)} | cruiseReservation | 
| cabin | string | 16 | {string.Join(',', flags)} | cruiseReservation | 
| cruiseSegment  | table |  |  | reservation | 
| recNo | long |  | {string.Join(',', flags)} | cruiseSegment | 
| cruiseReservation_recNo | long |  | {string.Join(',', flags)} | cruiseSegment | 
| departDateTime | DateTime |  | {string.Join(',', flags)} | cruiseSegment | 
| departPortCode | string | 3 | {string.Join(',', flags)} | cruiseSegment | 
| departPortName | string | 64 | {string.Join(',', flags)} | cruiseSegment | 
| arriveDateTime | DateTime |  | {string.Join(',', flags)} | cruiseSegment | 
| arrivePortCode | string | 3 | {string.Join(',', flags)} | cruiseSegment | 
| arrivePortName | string | 64 | {string.Join(',', flags)} | cruiseSegment | 
| remarks | string | 256 | {string.Join(',', flags)} | cruiseSegment | 
| indexNo | short |  | {string.Join(',', flags)} | cruiseSegment | 
| cruiseSubReservationLink  | table |  |  | reservation | 
| parentReservation_recNo | long |  | {string.Join(',', flags)} | subReservationLink | 
| subReservation_recNo | long |  | {string.Join(',', flags)} | subReservationLink | 
| cruiseSubReservation  [shared] | table |  |  | cruiseReservation | 
| recNo | long |  | {string.Join(',', flags)} | reservation | 
| supplierProfile_recNo | long |  | {string.Join(',', flags)} | reservation | 
| supplierName_Lookup | string | 256 | {string.Join(',', flags)} | reservation | 
| providerProfile_recNo | long |  | {string.Join(',', flags)} | reservation | 
| providerName_Lookup | string | 256 | {string.Join(',', flags)} | reservation | 
| travelCategory_recNo | short |  | {string.Join(',', flags)} | reservation | 
| totalFare | long |  | {string.Join(',', flags)} | reservation | 
| commissionAmount | long |  | {string.Join(',', flags)} | reservation | 
| commissionRate | short |  | {string.Join(',', flags)} | reservation | 
| markupDiscount | long |  | {string.Join(',', flags)} | reservation | 
| highFare | long |  | {string.Join(',', flags)} | reservation | 
| lowFare | long |  | {string.Join(',', flags)} | reservation | 
| confirmationNo | string | 64 | {string.Join(',', flags)} | reservation | 
| arcBspNo | int |  | {string.Join(',', flags)} | reservation | 
| ticketNo | long |  | {string.Join(',', flags)} | reservation | 
| status | short |  | {string.Join(',', flags)} | reservation | 
| finalPayDueDate | Date |  | {string.Join(',', flags)} | reservation | 
| bookDateTime | DateTimeOffset |  | {string.Join(',', flags)} | reservation | 
| startDateTime | DateTime |  | {string.Join(',', flags)} | reservation | 
| endDateTime | DateTime |  | {string.Join(',', flags)} | reservation | 
| unitCode | string | 8 | {string.Join(',', flags)} | reservation | 
| unitDescription | string | 256 | {string.Join(',', flags)} | reservation | 
| numberOfUnits | short |  | {string.Join(',', flags)} | reservation | 
| rateCode | string | 8 | {string.Join(',', flags)} | reservation | 
| rateDescription | string | 256 | {string.Join(',', flags)} | reservation | 
| recordLocator | string | 32 | {string.Join(',', flags)} | reservation | 
| source | string | 32 | {string.Join(',', flags)} | reservation | 
| travelerName | string | 256 | {string.Join(',', flags)} | reservation | 
| promoId | string | 256 | {string.Join(',', flags)} | reservation | 
| itineraryRemarks | string |  | {string.Join(',', flags)} | reservation | 
| supplierRemarks | string |  | {string.Join(',', flags)} | reservation | 
| advisorInfo | string | 256 | {string.Join(',', flags)} | reservation | 
| trackClientPayments | bool |  | {string.Join(',', flags)} | reservation | 
| airReservation  [shared] | table |  |  | cruiseSubReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | airReservation | 
| ticketType | short |  | {string.Join(',', flags)} | airReservation | 
| endingTicketNo | long |  | {string.Join(',', flags)} | airReservation | 
| originalTicketNo | long |  | {string.Join(',', flags)} | airReservation | 
| ticketDesignator | string | 32 | {string.Join(',', flags)} | airReservation | 
| domIntlIndicator | short |  | {string.Join(',', flags)} | airReservation | 
| eTicketIndicator | short |  | {string.Join(',', flags)} | airReservation | 
| airSegment  | table |  |  | cruiseSubReservation | 
| recNo | long |  | {string.Join(',', flags)} | airSegment | 
| airReservation_recNo | long |  | {string.Join(',', flags)} | airSegment | 
| departDateTime | DateTime |  | {string.Join(',', flags)} | airSegment | 
| departCityCode | string | 3 | {string.Join(',', flags)} | airSegment | 
| departCityName | string | 64 | {string.Join(',', flags)} | airSegment | 
| arriveDateTime | DateTime |  | {string.Join(',', flags)} | airSegment | 
| arriveCityCode | string | 3 | {string.Join(',', flags)} | airSegment | 
| arriveCityName | string | 64 | {string.Join(',', flags)} | airSegment | 
| connection | string | 1 | {string.Join(',', flags)} | airSegment | 
| flightNo | short |  | {string.Join(',', flags)} | airSegment | 
| provider | string | 8 | {string.Join(',', flags)} | airSegment | 
| fare | long |  | {string.Join(',', flags)} | airSegment | 
| classOfService | string | 2 | {string.Join(',', flags)} | airSegment | 
| fareBasis | string | 16 | {string.Join(',', flags)} | airSegment | 
| ticketDesignator | string | 32 | {string.Join(',', flags)} | airSegment | 
| mileage | short |  | {string.Join(',', flags)} | airSegment | 
| indexNo | short |  | {string.Join(',', flags)} | airSegment | 
| railReservation  [shared] | table |  |  | cruiseSubReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | railReservation | 
| departStationCode | string | 3 | {string.Join(',', flags)} | railReservation | 
| departStationName | string | 64 | {string.Join(',', flags)} | railReservation | 
| arriveStationCode | string | 3 | {string.Join(',', flags)} | railReservation | 
| arriveStationName | string | 64 | {string.Join(',', flags)} | railReservation | 
| trainNo | short |  | {string.Join(',', flags)} | railReservation | 
| classOfService | string | 2 | {string.Join(',', flags)} | railReservation | 
| cruiseSubSupplierProfileInfo  [shared] | table |  |  | cruiseSubReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | supplierProfileInfo | 
| name | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| id | string | 32 | {string.Join(',', flags)} | supplierProfileInfo | 
| phone | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| fax | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| street1 | string | 128 | {string.Join(',', flags)} | supplierProfileInfo | 
| street2 | string | 128 | {string.Join(',', flags)} | supplierProfileInfo | 
| city | string | 64 | {string.Join(',', flags)} | supplierProfileInfo | 
| stateProvince | string | 8 | {string.Join(',', flags)} | supplierProfileInfo | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | supplierProfileInfo | 
| country | string | 4 | {string.Join(',', flags)} | supplierProfileInfo | 
| cruiseSubProviderProfileInfo  [shared] | table |  |  | cruiseSubReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | providerProfileInfo | 
| name | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| id | string | 32 | {string.Join(',', flags)} | providerProfileInfo | 
| phone | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| fax | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| street1 | string | 128 | {string.Join(',', flags)} | providerProfileInfo | 
| street2 | string | 128 | {string.Join(',', flags)} | providerProfileInfo | 
| city | string | 64 | {string.Join(',', flags)} | providerProfileInfo | 
| stateProvince | string | 8 | {string.Join(',', flags)} | providerProfileInfo | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | providerProfileInfo | 
| country | string | 4 | {string.Join(',', flags)} | providerProfileInfo | 
| tourReservation  | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | tourReservation | 
| tourSubReservationLink  | table |  |  | reservation | 
| parentReservation_recNo | long |  | {string.Join(',', flags)} | subReservationLink | 
| subReservation_recNo | long |  | {string.Join(',', flags)} | subReservationLink | 
| tourSubReservation  [shared] | table |  |  | tourReservation | 
| recNo | long |  | {string.Join(',', flags)} | reservation | 
| supplierProfile_recNo | long |  | {string.Join(',', flags)} | reservation | 
| supplierName_Lookup | string | 256 | {string.Join(',', flags)} | reservation | 
| providerProfile_recNo | long |  | {string.Join(',', flags)} | reservation | 
| providerName_Lookup | string | 256 | {string.Join(',', flags)} | reservation | 
| travelCategory_recNo | short |  | {string.Join(',', flags)} | reservation | 
| totalFare | long |  | {string.Join(',', flags)} | reservation | 
| commissionAmount | long |  | {string.Join(',', flags)} | reservation | 
| commissionRate | short |  | {string.Join(',', flags)} | reservation | 
| markupDiscount | long |  | {string.Join(',', flags)} | reservation | 
| highFare | long |  | {string.Join(',', flags)} | reservation | 
| lowFare | long |  | {string.Join(',', flags)} | reservation | 
| confirmationNo | string | 64 | {string.Join(',', flags)} | reservation | 
| arcBspNo | int |  | {string.Join(',', flags)} | reservation | 
| ticketNo | long |  | {string.Join(',', flags)} | reservation | 
| status | short |  | {string.Join(',', flags)} | reservation | 
| finalPayDueDate | Date |  | {string.Join(',', flags)} | reservation | 
| bookDateTime | DateTimeOffset |  | {string.Join(',', flags)} | reservation | 
| startDateTime | DateTime |  | {string.Join(',', flags)} | reservation | 
| endDateTime | DateTime |  | {string.Join(',', flags)} | reservation | 
| unitCode | string | 8 | {string.Join(',', flags)} | reservation | 
| unitDescription | string | 256 | {string.Join(',', flags)} | reservation | 
| numberOfUnits | short |  | {string.Join(',', flags)} | reservation | 
| rateCode | string | 8 | {string.Join(',', flags)} | reservation | 
| rateDescription | string | 256 | {string.Join(',', flags)} | reservation | 
| recordLocator | string | 32 | {string.Join(',', flags)} | reservation | 
| source | string | 32 | {string.Join(',', flags)} | reservation | 
| travelerName | string | 256 | {string.Join(',', flags)} | reservation | 
| promoId | string | 256 | {string.Join(',', flags)} | reservation | 
| itineraryRemarks | string |  | {string.Join(',', flags)} | reservation | 
| supplierRemarks | string |  | {string.Join(',', flags)} | reservation | 
| advisorInfo | string | 256 | {string.Join(',', flags)} | reservation | 
| trackClientPayments | bool |  | {string.Join(',', flags)} | reservation | 
| airReservation  [shared] | table |  |  | tourSubReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | airReservation | 
| ticketType | short |  | {string.Join(',', flags)} | airReservation | 
| endingTicketNo | long |  | {string.Join(',', flags)} | airReservation | 
| originalTicketNo | long |  | {string.Join(',', flags)} | airReservation | 
| ticketDesignator | string | 32 | {string.Join(',', flags)} | airReservation | 
| domIntlIndicator | short |  | {string.Join(',', flags)} | airReservation | 
| eTicketIndicator | short |  | {string.Join(',', flags)} | airReservation | 
| airSegment  | table |  |  | tourSubReservation | 
| recNo | long |  | {string.Join(',', flags)} | airSegment | 
| airReservation_recNo | long |  | {string.Join(',', flags)} | airSegment | 
| departDateTime | DateTime |  | {string.Join(',', flags)} | airSegment | 
| departCityCode | string | 3 | {string.Join(',', flags)} | airSegment | 
| departCityName | string | 64 | {string.Join(',', flags)} | airSegment | 
| arriveDateTime | DateTime |  | {string.Join(',', flags)} | airSegment | 
| arriveCityCode | string | 3 | {string.Join(',', flags)} | airSegment | 
| arriveCityName | string | 64 | {string.Join(',', flags)} | airSegment | 
| connection | string | 1 | {string.Join(',', flags)} | airSegment | 
| flightNo | short |  | {string.Join(',', flags)} | airSegment | 
| provider | string | 8 | {string.Join(',', flags)} | airSegment | 
| fare | long |  | {string.Join(',', flags)} | airSegment | 
| classOfService | string | 2 | {string.Join(',', flags)} | airSegment | 
| fareBasis | string | 16 | {string.Join(',', flags)} | airSegment | 
| ticketDesignator | string | 32 | {string.Join(',', flags)} | airSegment | 
| mileage | short |  | {string.Join(',', flags)} | airSegment | 
| indexNo | short |  | {string.Join(',', flags)} | airSegment | 
| railReservation  [shared] | table |  |  | tourSubReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | railReservation | 
| departStationCode | string | 3 | {string.Join(',', flags)} | railReservation | 
| departStationName | string | 64 | {string.Join(',', flags)} | railReservation | 
| arriveStationCode | string | 3 | {string.Join(',', flags)} | railReservation | 
| arriveStationName | string | 64 | {string.Join(',', flags)} | railReservation | 
| trainNo | short |  | {string.Join(',', flags)} | railReservation | 
| classOfService | string | 2 | {string.Join(',', flags)} | railReservation | 
| tourSubSupplierProfileInfo  [shared] | table |  |  | tourSubReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | supplierProfileInfo | 
| name | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| id | string | 32 | {string.Join(',', flags)} | supplierProfileInfo | 
| phone | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| fax | string | 256 | {string.Join(',', flags)} | supplierProfileInfo | 
| street1 | string | 128 | {string.Join(',', flags)} | supplierProfileInfo | 
| street2 | string | 128 | {string.Join(',', flags)} | supplierProfileInfo | 
| city | string | 64 | {string.Join(',', flags)} | supplierProfileInfo | 
| stateProvince | string | 8 | {string.Join(',', flags)} | supplierProfileInfo | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | supplierProfileInfo | 
| country | string | 4 | {string.Join(',', flags)} | supplierProfileInfo | 
| tourSubProviderProfileInfo  [shared] | table |  |  | tourSubReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | providerProfileInfo | 
| name | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| id | string | 32 | {string.Join(',', flags)} | providerProfileInfo | 
| phone | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| fax | string | 256 | {string.Join(',', flags)} | providerProfileInfo | 
| street1 | string | 128 | {string.Join(',', flags)} | providerProfileInfo | 
| street2 | string | 128 | {string.Join(',', flags)} | providerProfileInfo | 
| city | string | 64 | {string.Join(',', flags)} | providerProfileInfo | 
| stateProvince | string | 8 | {string.Join(',', flags)} | providerProfileInfo | 
| zipPostalCode | string | 16 | {string.Join(',', flags)} | providerProfileInfo | 
| country | string | 4 | {string.Join(',', flags)} | providerProfileInfo | 
| reservationDeposit  | table |  |  | tripReservationLink | 
| recNo | long |  | {string.Join(',', flags)} | reservationDeposit | 
| reservation_recNo | long |  | {string.Join(',', flags)} | reservationDeposit | 
| dueAmount | long |  | {string.Join(',', flags)} | reservationDeposit | 
| dueDate | Date |  | {string.Join(',', flags)} | reservationDeposit | 
| notes | string | 256 | {string.Join(',', flags)} | reservationDeposit | 
| completed | DateTimeOffset |  | {string.Join(',', flags)} | reservationDeposit | 
| completedBy_appUserRecNo | long |  | {string.Join(',', flags)} | reservationDeposit | 
| completedBy_appUserId | string | 64 | {string.Join(',', flags)} | reservationDeposit | 
| clientPaymentInfo  | table |  |  | tripReservationLink | 
| reservation_recNo | long |  | {string.Join(',', flags)} | clientPaymentInfo | 
| paymentDate | Date |  | {string.Join(',', flags)} | clientPaymentInfo | 
| amount | long |  | {string.Join(',', flags)} | clientPaymentInfo | 
| method | short |  | {string.Join(',', flags)} | clientPaymentInfo | 
| agencyProcessed | bool |  | {string.Join(',', flags)} | clientPaymentInfo | 
| cardNumber | string | 64 | {string.Join(',', flags)} | clientPaymentInfo | 
| cardNumberToken | string | 64 | {string.Join(',', flags)} | clientPaymentInfo | 
| expirationDate | Date |  | {string.Join(',', flags)} | clientPaymentInfo | 
| tripAttachmentLink  | table |  |  |  | 
| trip_recNo | long |  | {string.Join(',', flags)} | tripAttachmentLink | 
| attachment_recNo | long |  | {string.Join(',', flags)} | tripAttachmentLink | 
| tripAttachment  [shared] | table |  |  | trip | 
| recNo | long |  | {string.Join(',', flags)} | attachment | 
| type | short |  | {string.Join(',', flags)} | attachment | 
| description | string | 256 | {string.Join(',', flags)} | attachment | 
| fileNameLinkURL | string | 256 | {string.Join(',', flags)} | attachment | 
| fileData | byte[] |  | {string.Join(',', flags)} | attachment | 
| size | int |  | {string.Join(',', flags)} | attachment | 
| compressed | bool |  | {string.Join(',', flags)} | attachment | 
| tripTag  | table |  |  |  | 
| recNo | long |  | {string.Join(',', flags)} | tripTag | 
| trip_recNo | long |  | {string.Join(',', flags)} | tripTag | 
| tag_recNo | long |  | {string.Join(',', flags)} | tripTag | 
| name | string | 64 | {string.Join(',', flags)} | tripTag | 
| value | string | 1024 | {string.Join(',', flags)} | tripTag | 
| tripActionItemLink  | table |  |  |  | 
| trip_recNo | long |  | {string.Join(',', flags)} | tripActionItemLink | 
| actionItem_recNo | long |  | {string.Join(',', flags)} | tripActionItemLink | 
| tripActionItem  | table |  |  | trip | 
| recNo | long |  | {string.Join(',', flags)} | actionItem | 
| type | short |  | {string.Join(',', flags)} | actionItem | 
| description | string | 256 | {string.Join(',', flags)} | actionItem | 
| triggerIndex | short |  | {string.Join(',', flags)} | actionItem | 
| triggerDaysOffset | short |  | {string.Join(',', flags)} | actionItem | 
| triggerFixedDate | Date |  | {string.Join(',', flags)} | actionItem | 
| completed | DateTimeOffset |  | {string.Join(',', flags)} | actionItem | 
| completedBy_appUserRecNo | long |  | {string.Join(',', flags)} | actionItem | 
| completedBy_appUserId | string | 64 | {string.Join(',', flags)} | actionItem | 
| notes | string | 256 | {string.Join(',', flags)} | actionItem | 


