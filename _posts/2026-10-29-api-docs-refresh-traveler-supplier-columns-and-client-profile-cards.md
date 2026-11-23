---
layout: post
title: "Tres API docs refresh: traveler and supplier columns in trip search, cards on client profiles"
date: 2026-10-29 11:30:00 -0700
description: "The developer portal now reflects AppServer 1.8.4.7, including traveler and supplier-profile columns in trip search, client-profile card links, profile-search card columns, and a segment-level market share search."
---

The Tres Developer Portal now reflects the API documentation shipped with AppServer 1.8.4.7.

As of October 29, staging reports 1.8.4.7 and production reports 1.8.3.6. Some of the changes below are not yet in production, and the supplier-profile trip search columns were added after the 1.8.4.7 build. Each section notes where a change first appears. Check your target environment's [Version]({{ '/api/Version.html' | relative_url }}) before relying on a new field.

## Traveler and supplier-profile columns in trip search

[`TripSearch`]({{ '/api/TripSearch.html' | relative_url }}) has two new groups of cross-area columns, alongside the existing `ClientProfile_*` and `ClientPayment_*` groups:

| Prefix | Source | Linked through |
| --- | --- | --- |
| `Traveler_` | [`PersonSearch`]({{ '/api/PersonSearch.html' | relative_url }}) columns | The reservation's traveler |
| `SupplierProfile_` | [`ProfileSearch`]({{ '/api/ProfileSearch.html' | relative_url }}) columns | The reservation's supplier profile |

Request them through `includeColsExtended`, the same way as the client columns described in [Adding client data to Trip Search results]({% post_url 2026-08-07-cross-area-trip-search %}). They are not returned when the request omits them.

Both groups link through the reservation rather than the trip. When a request includes either prefix, the server adds `reservationRecNo` and the linking column (`reservationTravelerRecNo` or `reservationSupplierProfileRecNo`) to the search. Expect reservation-level rows, so a trip with several reservations can appear more than once. Reservations that share a traveler or supplier each carry that profile's values. Count distinct trip IDs when the question is how many trips matched.

`Traveler_*` columns are available in 1.8.3.6. `SupplierProfile_*` columns were added after 1.8.4.7 and arrive with the next build.

`TripSearch` also has a new `tripActionItemDescription` filter, a `StringSearchParam` on the trip action item's description. It is available in 1.8.4.7.

## Cards on client profiles

Client profiles can now hold cards directly. [`ClientProfile`]({{ '/api/ClientProfile.html' | relative_url }}) has a `clientProfileCardLink` array with the same shape as the person-level `personCardLink`: each link carries `clientProfile_recNo`, `card_recNo`, and a nested `card` object. The card types are the same: `1` = Credit/Debit, `2` = Loyalty, and `3` = Travel Document.

The save rules from [Migrating person cards to personCardLink]({% post_url 2026-09-30-migrating-person-cards-to-person-card-links %}) apply here too. Preserve the link and card IDs on existing cards, send old and new data when updating, leave loaded masked card numbers unchanged, and treat `type` as insert-only.

Two related references expose client-level card data:

- [`ProfileSearch`]({{ '/api/ProfileSearch.html' | relative_url }}) has card columns: `cardRecNo`, `cardType`, `cardSubType`, `cardNumber`, `cardExpDate`, `cardDescription`, and `nameOnCard`. They come from the profile's card links, so a profile with several cards can return one row per card. `cardNumber` is the stored value, which is masked for credit/debit cards. The same columns appear in trip search as `ClientProfile_card*`.
- [`ClientProfileMergeToPnr`]({{ '/api/ClientProfileMergeToPnr.html' | relative_url }}) now returns `clientCreditCard` entries with a `maskedCardNumber`, and `clientFrequentFlyer` entries built from the client's air loyalty cards.

All of these are available in 1.8.3.6.

## Other reference updates

- [`AirlineMarketShareAnalysisBySegmentSearch`]({{ '/api/AirlineMarketShareAnalysisBySegmentSearch.html' | relative_url }}) is a new search that returns segment-level rows: trip and reservation IDs, provider, city pair, fare, fare basis, ticket number, supplier profile, and traveler name. Its filters cover air indicator, ARC-only, branch, client profile, city pair, departure and booking dates, tags, travel subcategory, and supplier profile. Available in 1.8.3.6.
- [`NewClientTravelerFormDocumentAcknowledgement`]({{ '/api/NewClientTravelerFormDocumentAcknowledgement.html' | relative_url }}) is a new load for the New Client/Traveler form. It returns the selected Document Acknowledgement template's description, acknowledgement verbiage, and attachments, or `204 No Content` when no active Document Acknowledgement template is selected or the feature is disabled. Available in 1.8.4.7.
- [`DocumentTemplate`]({{ '/api/DocumentTemplate.html' | relative_url }}) now marks `activeStatus` as required.

## What integrators should do

If you report on trip search results, decide whether you need traveler or supplier details and add those columns to your `includeColsExtended` selection, then adjust your counting for reservation-level rows. Integrations that save client profiles should handle `clientProfileCardLink` the same way they handle `personCardLink`, and should not discard client-level cards they did not edit.
