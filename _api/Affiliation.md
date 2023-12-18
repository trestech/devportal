---
layout: api_page
title: "Affiliation"
description: "Affiliation known to Tres"
assembly_version: "1.0.30.6"
---

Affiliation known to Tres.  Pass the record number to get the marketing categories for the specified affiliation.

| RecNo | Affiliation |
|-------------|-------|
| 1 | Tres |
| 2 | Signature |
| 6 | AmEx |
| 7 | EnsembleCanada |
| 8 | EnsembleUS |
| 9 | MART |
| 10 | MAST |
| 12 | TravelLeaders |
| 13 | Virtuoso |
| 14 | WESTA |
| 15 | TravelSaversUS |
| 16 | TravelSaversCanada |
| 23 | Axus |
| 24 | Grasp |


| Column | Type | Size | Flags | Table | Description |
| ------ | ---- | ---- | ----- | ----- | ----------- |
| `recNo` | `long` |  | PKey | `affiliation` | 
| `name` | `string` | 64 |  | `affiliation` | 
| `affiliationMarketingCategory ` | table |  |  | `affiliation` | 
| `affiliation_recNo` | `long` |  | PKey, InsertOnly, FKey | `affiliationMarketingCategory` | 
| `recNo` | `long` |  | PKey | `affiliationMarketingCategory` | 
| `name` | `string` | 64 | Required | `affiliationMarketingCategory` | 
| `id` | `string` | 16 |  | `affiliationMarketingCategory` | 
| `affiliationMarketingElement ` | table |  |  | `affiliationMarketingCategory` | 
| `recNo` | `long` |  | PKey | `affiliationMarketingElement` | 
| `affiliationMarketingCategory_recNo` | `long` |  | InsertOnly, FKey | `affiliationMarketingElement` | 
| `name` | `string` | 64 | Required | `affiliationMarketingElement` | 
| `id` | `string` | 16 | Required | `affiliationMarketingElement` | 

| Status code | Description |
| ----------- | ----------- |
| 200 | Ok |
| 204 | No Content |
| 401 | Unauthorized |
| 403 | Forbidden |

#### Example request: Load the affiliation information for Virtuoso
```sh
GET https://api-dev.trestechnologies.com/affiliation/13
Content-Type: application/json
Authorization: Bearer <session-token>
```

#### Example response
```sh
Content-Type: application/json
Status: 200 Ok
[
  {
    "recNo": 13,
    "name": "Virtuoso",
    "affiliationMarketingCategory": [
      {
        "affiliation_recNo": 13,
        "recNo": 301,
        "name": "Total Trip Budget",
        "affiliationMarketingElement": [
          {
            "recNo": 501,
            "affiliationMarketingCategory_recNo": 301,
            "name": "Up to $3,000",
            "id": "12521"
          },
          {
            "recNo": 502,
            "affiliationMarketingCategory_recNo": 301,
            "name": "$3,000 - $8,000",
            "id": "12522"
          },
          {
            "recNo": 503,
            "affiliationMarketingCategory_recNo": 301,
            "name": "$8,000 - $15,000",
            "id": "12523"
          },
          {
            "recNo": 504,
            "affiliationMarketingCategory_recNo": 301,
            "name": "$15,000+",
            "id": "12524"
          }
        ]
      },
      {
        "affiliation_recNo": 13,
        "recNo": 302,
        "name": "Trip Duration",
        "affiliationMarketingElement": [
          {
            "recNo": 505,
            "affiliationMarketingCategory_recNo": 302,
            "name": "1-4 days",
            "id": "V2526"
          },
          {
            "recNo": 506,
            "affiliationMarketingCategory_recNo": 302,
            "name": "5-10 days",
            "id": "12526"
          },
          {
            "recNo": 507,
            "affiliationMarketingCategory_recNo": 302,
            "name": "11-20 days",
            "id": "12527"
          },
          {
            "recNo": 508,
            "affiliationMarketingCategory_recNo": 302,
            "name": "21 days +",
            "id": "12528"
          }
        ]
      },
      {
        "affiliation_recNo": 13,
        "recNo": 303,
        "name": "Trip Frequency",
        "affiliationMarketingElement": [
          {
            "recNo": 509,
            "affiliationMarketingCategory_recNo": 303,
            "name": "1/year",
            "id": "12529"
          },
          {
            "recNo": 510,
            "affiliationMarketingCategory_recNo": 303,
            "name": "2-3/year",
            "id": "12525"
          },
          {
            "recNo": 511,
            "affiliationMarketingCategory_recNo": 303,
            "name": "4-5/year",
            "id": "12530"
          },
          {
            "recNo": 512,
            "affiliationMarketingCategory_recNo": 303,
            "name": "Over 5/year",
            "id": "12531"
          }
        ]
      },
      {
        "affiliation_recNo": 13,
        "recNo": 304,
        "name": "Client Status",
        "affiliationMarketingElement": [
          {
            "recNo": 513,
            "affiliationMarketingCategory_recNo": 304,
            "name": "Client",
            "id": "12515"
          },
          {
            "recNo": 514,
            "affiliationMarketingCategory_recNo": 304,
            "name": "Prospect",
            "id": "12513"
          },
          {
            "recNo": 515,
            "affiliationMarketingCategory_recNo": 304,
            "name": "Referral",
            "id": "12514"
          },
          {
            "recNo": 516,
            "affiliationMarketingCategory_recNo": 304,
            "name": "VIP",
            "id": "12516"
          }
        ]
      },
      {
        "affiliation_recNo": 13,
        "recNo": 305,
        "name": "Life Cycle",
        "affiliationMarketingElement": [
          {
            "recNo": 517,
            "affiliationMarketingCategory_recNo": 305,
            "name": "Children at Home",
            "id": "12534"
          },
          {
            "recNo": 518,
            "affiliationMarketingCategory_recNo": 305,
            "name": "Domestic Partner",
            "id": "V2536"
          },
          {
            "recNo": 519,
            "affiliationMarketingCategory_recNo": 305,
            "name": "LGBTQ",
            "id": "12640"
          },
          {
            "recNo": 520,
            "affiliationMarketingCategory_recNo": 305,
            "name": "Married",
            "id": "12533"
          },
          {
            "recNo": 521,
            "affiliationMarketingCategory_recNo": 305,
            "name": "Retired",
            "id": "12535"
          },
          {
            "recNo": 522,
            "affiliationMarketingCategory_recNo": 305,
            "name": "Single",
            "id": "12532"
          },
          {
            "recNo": 523,
            "affiliationMarketingCategory_recNo": 305,
            "name": "Widowed",
            "id": "12536"
          }
        ]
      },
      {
        "affiliation_recNo": 13,
        "recNo": 306,
        "name": "Marketing",
        "affiliationMarketingElement": [
          {
            "recNo": 524,
            "affiliationMarketingCategory_recNo": 306,
            "name": "Virtuoso Life",
            "id": "V0501"
          },
          {
            "recNo": 525,
            "affiliationMarketingCategory_recNo": 306,
            "name": "Virtuoso Traveler",
            "id": "12659"
          },
          {
            "recNo": 526,
            "affiliationMarketingCategory_recNo": 306,
            "name": "Virtuoso Best of the Best",
            "id": "V0503"
          },
          {
            "recNo": 527,
            "affiliationMarketingCategory_recNo": 306,
            "name": "Direct Mail",
            "id": "V0504"
          },
          {
            "recNo": 528,
            "affiliationMarketingCategory_recNo": 306,
            "name": "Email Campaign",
            "id": "501"
          },
          {
            "recNo": 529,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Notifications (Overall)",
            "id": "NOVCC"
          },
          {
            "recNo": 530,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Insurance Reminder",
            "id": "NOINS"
          },
          {
            "recNo": 531,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Passport Renewal",
            "id": "NOPPR"
          },
          {
            "recNo": 532,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Bon Voyage",
            "id": "NOBVE"
          },
          {
            "recNo": 533,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No TSA Reminder",
            "id": "NOTSA"
          },
          {
            "recNo": 534,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Anniversary",
            "id": "NOANN"
          },
          {
            "recNo": 535,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Birthday",
            "id": "NOBDY"
          },
          {
            "recNo": 536,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Welcome Home",
            "id": "NOWHE"
          },
          {
            "recNo": 537,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Thinking Of You",
            "id": "NOTOY"
          },
          {
            "recNo": 538,
            "affiliationMarketingCategory_recNo": 306,
            "name": "No Onboard Activity",
            "id": "NOSHO"
          }
        ]
      },
      {
        "affiliation_recNo": 13,
        "recNo": 307,
        "name": "Interests",
        "affiliationMarketingElement": [
          {
            "recNo": 539,
            "affiliationMarketingCategory_recNo": 307,
            "name": "4-Wheel Drive Expedition",
            "id": "12552"
          },
          {
            "recNo": 540,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Adult Education",
            "id": "12553"
          },
          {
            "recNo": 541,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Adventure",
            "id": "12554"
          },
          {
            "recNo": 542,
            "affiliationMarketingCategory_recNo": 307,
            "name": "All Inclusive",
            "id": "12641"
          },
          {
            "recNo": 543,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Archaeology",
            "id": "12555"
          },
          {
            "recNo": 544,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Art/Theatre",
            "id": "12556"
          },
          {
            "recNo": 545,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Ballooning",
            "id": "12557"
          },
          {
            "recNo": 546,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Birding",
            "id": "12558"
          },
          {
            "recNo": 547,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Climbing",
            "id": "12559"
          },
          {
            "recNo": 548,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Cruise-Barge",
            "id": "12561"
          },
          {
            "recNo": 549,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Cruise-Expedition",
            "id": "12562"
          },
          {
            "recNo": 550,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Cruise-Large Ship",
            "id": "12560"
          },
          {
            "recNo": 551,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Cruise-River",
            "id": "12563"
          },
          {
            "recNo": 552,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Cruise-Small Ship",
            "id": "12564"
          },
          {
            "recNo": 553,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Cycling",
            "id": "12565"
          },
          {
            "recNo": 554,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Destination Weddings/Romantic",
            "id": "12642"
          },
          {
            "recNo": 555,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Diving",
            "id": "12566"
          },
          {
            "recNo": 556,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Equestrian",
            "id": "12567"
          },
          {
            "recNo": 557,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Escorted Tours",
            "id": "12568"
          },
          {
            "recNo": 558,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Extreme Sports",
            "id": "12569"
          },
          {
            "recNo": 559,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Family Adventures",
            "id": "12570"
          },
          {
            "recNo": 560,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Family Vacations",
            "id": "12571"
          },
          {
            "recNo": 561,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Fishing",
            "id": "12572"
          },
          {
            "recNo": 562,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Food/Wine",
            "id": "12573"
          },
          {
            "recNo": 563,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Gaming",
            "id": "V2573"
          },
          {
            "recNo": 564,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Gardens",
            "id": "12574"
          },
          {
            "recNo": 565,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Golf",
            "id": "12575"
          },
          {
            "recNo": 566,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Health/Fitness",
            "id": "V2575"
          },
          {
            "recNo": 567,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Hiking",
            "id": "12576"
          },
          {
            "recNo": 568,
            "affiliationMarketingCategory_recNo": 307,
            "name": "History",
            "id": "12577"
          },
          {
            "recNo": 569,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Honeymoon/Anniversary",
            "id": "V2577"
          },
          {
            "recNo": 570,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Hotels",
            "id": "12583"
          },
          {
            "recNo": 571,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Hunting",
            "id": "12578"
          },
          {
            "recNo": 572,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Independent Traveler",
            "id": "12579"
          },
          {
            "recNo": 573,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Indigenous Cultures",
            "id": "12580"
          },
          {
            "recNo": 574,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Multi Generation Travel",
            "id": "V2580"
          },
          {
            "recNo": 575,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Music",
            "id": "12588"
          },
          {
            "recNo": 576,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Naturalist",
            "id": "12589"
          },
          {
            "recNo": 577,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Photography",
            "id": "12590"
          },
          {
            "recNo": 578,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Private Jet",
            "id": "12581"
          },
          {
            "recNo": 579,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Rafting/Kayak",
            "id": "12582"
          },
          {
            "recNo": 580,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Rail Travel",
            "id": "12591"
          },
          {
            "recNo": 581,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Ranch/Lodges",
            "id": "12584"
          },
          {
            "recNo": 582,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Religious Tourism",
            "id": "12643"
          },
          {
            "recNo": 583,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Resorts",
            "id": "12585"
          },
          {
            "recNo": 584,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Safari",
            "id": "12592"
          },
          {
            "recNo": 585,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Sailing",
            "id": "12593"
          },
          {
            "recNo": 586,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Shopping",
            "id": "12644"
          },
          {
            "recNo": 587,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Short Notice Travel",
            "id": "12594"
          },
          {
            "recNo": 588,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Snow Sports",
            "id": "12595"
          },
          {
            "recNo": 589,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Space Travel",
            "id": "12645"
          },
          {
            "recNo": 590,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Spas",
            "id": "12586"
          },
          {
            "recNo": 591,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Sporting Events",
            "id": "12596"
          },
          {
            "recNo": 592,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Sports Enthusiast",
            "id": "12587"
          },
          {
            "recNo": 593,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Sun/Sand",
            "id": "12598"
          },
          {
            "recNo": 594,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Sustainable Tourism",
            "id": "12646"
          },
          {
            "recNo": 595,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Tennis",
            "id": "V2598"
          },
          {
            "recNo": 596,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Trekking",
            "id": "12599"
          },
          {
            "recNo": 597,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Walking",
            "id": "12600"
          },
          {
            "recNo": 598,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Water Sports",
            "id": "12601"
          },
          {
            "recNo": 599,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Wellness",
            "id": "12647"
          },
          {
            "recNo": 600,
            "affiliationMarketingCategory_recNo": 307,
            "name": "Wildlife",
            "id": "12602"
          }
        ]
      },
      {
        "affiliation_recNo": 13,
        "recNo": 308,
        "name": "Destinations",
        "affiliationMarketingElement": [
          {
            "recNo": 601,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Africa",
            "id": "12603"
          },
          {
            "recNo": 602,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Africa-Northern",
            "id": "12648"
          },
          {
            "recNo": 603,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Alaska",
            "id": "12604"
          },
          {
            "recNo": 604,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Antartica",
            "id": "V2638"
          },
          {
            "recNo": 605,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Arctic",
            "id": "12605"
          },
          {
            "recNo": 606,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Asia",
            "id": "12606"
          },
          {
            "recNo": 607,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Australia",
            "id": "12607"
          },
          {
            "recNo": 608,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Bermuda",
            "id": "12649"
          },
          {
            "recNo": 609,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Canada",
            "id": "12608"
          },
          {
            "recNo": 610,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Caribbean",
            "id": "12609"
          },
          {
            "recNo": 611,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Central America",
            "id": "12610"
          },
          {
            "recNo": 612,
            "affiliationMarketingCategory_recNo": 308,
            "name": "China",
            "id": "12611"
          },
          {
            "recNo": 613,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Costa Rica",
            "id": "12650"
          },
          {
            "recNo": 614,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Cuba",
            "id": "12651"
          },
          {
            "recNo": 615,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Europe-Eastern",
            "id": "12613"
          },
          {
            "recNo": 616,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Europe-Western",
            "id": "12627"
          },
          {
            "recNo": 617,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Egypt",
            "id": "V2634"
          },
          {
            "recNo": 618,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Europe",
            "id": "12614"
          },
          {
            "recNo": 619,
            "affiliationMarketingCategory_recNo": 308,
            "name": "France",
            "id": "V2627"
          },
          {
            "recNo": 620,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Galapagos Islands",
            "id": "V2624"
          },
          {
            "recNo": 621,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Germany",
            "id": "V2628"
          },
          {
            "recNo": 622,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Greece",
            "id": "V2629"
          },
          {
            "recNo": 623,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Hawaii",
            "id": "12615"
          },
          {
            "recNo": 624,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Hong Kong",
            "id": "V2636"
          },
          {
            "recNo": 625,
            "affiliationMarketingCategory_recNo": 308,
            "name": "India",
            "id": "V2637"
          },
          {
            "recNo": 626,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Italy",
            "id": "V2630"
          },
          {
            "recNo": 627,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Mediterranean Region",
            "id": "12616"
          },
          {
            "recNo": 628,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Mexico",
            "id": "12617"
          },
          {
            "recNo": 629,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Middle East",
            "id": "12618"
          },
          {
            "recNo": 630,
            "affiliationMarketingCategory_recNo": 308,
            "name": "New Zealand",
            "id": "V2635"
          },
          {
            "recNo": 631,
            "affiliationMarketingCategory_recNo": 308,
            "name": "North America",
            "id": "12619"
          },
          {
            "recNo": 632,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Pacific Rim/Japan",
            "id": "12620"
          },
          {
            "recNo": 633,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Panama Canal Voyages",
            "id": "V2610"
          },
          {
            "recNo": 634,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Polar Regions",
            "id": "12621"
          },
          {
            "recNo": 635,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Portugal",
            "id": "12652"
          },
          {
            "recNo": 636,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Russia",
            "id": "12622"
          },
          {
            "recNo": 637,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Scandinavia",
            "id": "12623"
          },
          {
            "recNo": 638,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Seychelles/Mauritius/Maldives",
            "id": "12653"
          },
          {
            "recNo": 639,
            "affiliationMarketingCategory_recNo": 308,
            "name": "South America",
            "id": "12624"
          },
          {
            "recNo": 640,
            "affiliationMarketingCategory_recNo": 308,
            "name": "South East Asia",
            "id": "V2639"
          },
          {
            "recNo": 641,
            "affiliationMarketingCategory_recNo": 308,
            "name": "South Pacific",
            "id": "12625"
          },
          {
            "recNo": 642,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Spain",
            "id": "V2631"
          },
          {
            "recNo": 643,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Trans Atlantic Voyages",
            "id": "12626"
          },
          {
            "recNo": 644,
            "affiliationMarketingCategory_recNo": 308,
            "name": "Turkey",
            "id": "V2632"
          },
          {
            "recNo": 645,
            "affiliationMarketingCategory_recNo": 308,
            "name": "UK/Ireland",
            "id": "V2633"
          },
          {
            "recNo": 646,
            "affiliationMarketingCategory_recNo": 308,
            "name": "US-Continental",
            "id": "12612"
          },
          {
            "recNo": 647,
            "affiliationMarketingCategory_recNo": 308,
            "name": "US-New England",
            "id": "12654"
          },
          {
            "recNo": 648,
            "affiliationMarketingCategory_recNo": 308,
            "name": "US-Northwest",
            "id": "12655"
          },
          {
            "recNo": 649,
            "affiliationMarketingCategory_recNo": 308,
            "name": "US-Southeast/FL",
            "id": "12656"
          },
          {
            "recNo": 650,
            "affiliationMarketingCategory_recNo": 308,
            "name": "US-Southwest",
            "id": "12657"
          },
          {
            "recNo": 651,
            "affiliationMarketingCategory_recNo": 308,
            "name": "US-West/CA",
            "id": "12658"
          },
          {
            "recNo": 652,
            "affiliationMarketingCategory_recNo": 308,
            "name": "World Grand Voyages",
            "id": "12628"
          }
        ]
      }
    ]
  }
]
```

