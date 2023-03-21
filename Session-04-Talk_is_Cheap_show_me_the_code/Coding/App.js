// # Chapter 04 - Talk is Cheap, show me the code

// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo
const Title = () => (
  <div class="logo_container">
 <a href="/">
  <img 
  className="logo"
  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Good_Food.svg/1200px-Good_Food.svg.png" />
 </a>
 </div>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
   <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
   </div>
  );
};

// RestaurantList is JSON Data for displaying cards
const restaurantList =[
{
  
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "676472",
            "name": "Doon Darbar",
            "uuid": "b7057ba7-f2d0-4f31-bc34-710c743a04f0",
            "city": "22",
            "area": "Deh_Patel Nagar",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "bdd748b4afb51cebf455f1a1a32b901a",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Biryani",
              "Beverages",
              "Snacks"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 2.0999999046325684,
            "slugs": {
              "restaurant": "doon-darbar-quality-food-deh_patel-nagar-deh_patel-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "\"GROUND FLOOR, TURNER ROAD, CLEMENT TOWN, ,,Dehradun Nagar Nigam,Dehradun,Uttarakhand-248002\t\"",
            "locality": "Dehradun Nagar",
            "parentId": 13207,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "60% off",
              "shortDescriptionList": [
                {
                  "meta": "60% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "60% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6215785~p=1~eid=00000186-ffb8-8515-20e9-979000600148",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "676472",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 2.0999999046325684,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.3",
            "totalRatings": 50,
            "new": true
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "149292",
            "name": "Mughal Darbar",
            "uuid": "03067471-cac0-45a0-bce2-4b0a53c75887",
            "city": "22",
            "area": "Subhash Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "ssz46edn5w8z4xpxbfxv",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
              "restaurant": "mughal-darbar-subhash-nagar-subhash-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "opposite hotel paradise,near shimla byepass,dehradun",
            "locality": "Sewla Kalan",
            "parentId": 8892,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "40% off",
              "shortDescriptionList": [
                {
                  "meta": "40% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "40% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "149292",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 1.2000000476837158,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.4",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "532213",
            "name": "Chilli'Z Restro",
            "uuid": "0b828188-33d3-4bfb-ab57-f901539b273a",
            "city": "22",
            "area": "Prem Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "mzsuzzznrww2mpzwk27d",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Snacks",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 3.5999999046325684,
            "slugs": {
              "restaurant": "chilliz-restro-(patel-nagar)-patel-nagar-patel-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "75/4,arya tower,patel nagar,Dehradun 248001",
            "locality": "Saharanpur Road",
            "parentId": 13645,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "60% off",
              "shortDescriptionList": [
                {
                  "meta": "60% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "60% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6082590~p=4~eid=00000186-ffb8-8515-20e9-979100600454",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "532213",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 3.5999999046325684,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "381399",
            "name": "NEW DELHI DARBAR RESTAURANT (Majra)",
            "uuid": "35aeb983-7bb4-4dbe-8dc7-c14bbae57fb9",
            "city": "22",
            "area": "Majra",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "roam3mh4fulh3b03sihx",
            "cuisines": [
              "North Indian",
              "Biryani"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
              "restaurant": "new-delhi-darbar-restaurant-patel-nagar-patel-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "saharanpur road shimla bypaas chowk opposite icici bank majra ,,Dehradun Nagar Nigam,Dehradun,Uttarakhand-248171",
            "locality": "Saharanpur Road",
            "parentId": 251653,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "381399",
              "deliveryTime": 26,
              "minDeliveryTime": 26,
              "maxDeliveryTime": 26,
              "lastMileTravel": 1.2000000476837158,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "408505",
            "name": "KFC",
            "uuid": "0dd1e681-54d2-458e-8b24-52cc995ce165",
            "city": "22",
            "area": "Morowala",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "tags": [
              
            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
              "restaurant": "kfc-khasara-patel-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "KFC  Ground Floor,Khasara No 544,545,Mauza-Niranjanpur,Paragana,Central Doon.District Dehradun- 24817",
            "locality": "Sewla Kalan",
            "parentId": 547,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "408505",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 1.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "74373",
            "name": "Walk In Woods (Ballupur)",
            "uuid": "b2f8e187-a60d-4cac-a6de-487621aa4ac8",
            "city": "22",
            "area": "Ballupur",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "rx6kpst6wxyw9vvj7wo8",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Biryani"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 38,
            "minDeliveryTime": 38,
            "maxDeliveryTime": 38,
            "slaString": "38 MINS",
            "lastMileTravel": 5,
            "slugs": {
              "restaurant": "walk-in-woods-ballupur-ballupur",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Walk In Woods Restaurant, 323, Ballupur, GMS Road",
            "locality": "General Mahadev Singh Road",
            "parentId": 359025,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "FLAT125 off",
              "shortDescriptionList": [
                {
                  "meta": "FLAT125 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT125 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT125 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 3400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 3400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6225444~p=7~eid=00000186-ffb8-8515-20e9-97920060074a",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "74373",
              "deliveryTime": 38,
              "minDeliveryTime": 38,
              "maxDeliveryTime": 38,
              "lastMileTravel": 5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 10000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "542132",
            "name": "Domnik Pizza",
            "uuid": "ab1eca36-d82b-4fa5-ab48-a7dd35b9ace9",
            "city": "22",
            "area": "Majra",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "sboh9oor0cvp6ztsyhvj",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Fast Food",
              "Snacks",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 0.5,
            "slugs": {
              "restaurant": "domnik-pizza-patel-nagar-patel-nagar-2",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
            "locality": "PNB Enclave",
            "parentId": 22321,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "20% off",
              "shortDescriptionList": [
                {
                  "meta": "20% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off up to ₹50 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "20% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off up to ₹50 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "542132",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 0.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 50,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "413821",
            "name": "Pizza Hut",
            "uuid": "1c259451-1b90-4885-accb-40a3cfdc0355",
            "city": "22",
            "area": "Majra",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "cst4xfxkgt8dj5bbrxwy",
            "cuisines": [
              "Pizzas"
            ],
            "tags": [
              
            ],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 1.7999999523162842,
            "slugs": {
              "restaurant": "pizza-hut-dehradun-patel-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Pizza Hut at Shop No- 1 & 2, Ground Floor, Shree Ji Tower, Majra Saharanpur Road, Dehradun, Dehradun Nagar Nigam, Dehradun, Uttarakhand, 248001",
            "locality": "Saharanpur Road",
            "parentId": 721,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.7 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "413821",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 1.7999999523162842,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "254751",
            "name": "Anandam",
            "uuid": "c70c8586-0584-48d4-acc1-ffeddfd4a262",
            "city": "22",
            "area": "Patel Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "i9sujiwnyj7nqclrlv6y",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Sweets",
              "Snacks"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 3.5,
            "slugs": {
              "restaurant": "anandam-malsi-malsi",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "5, Cooperative Society, Industrial Area, Patel Nagar, Opp Indresh Hospital",
            "locality": "Niranjanpur",
            "parentId": 2649,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "10% off",
              "shortDescriptionList": [
                {
                  "meta": "10% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹40 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "10% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹40 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6083247~p=10~eid=00000186-ffb8-8515-20e9-979300600a13",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "254751",
              "deliveryTime": 31,
              "minDeliveryTime": 31,
              "maxDeliveryTime": 31,
              "lastMileTravel": 3.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "321517",
            "name": "FOOD PLANET RESTAURANT",
            "uuid": "4c7f5896-ed9b-456b-91a0-15705af1bc20",
            "city": "22",
            "area": "Majra",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "ykboewqeoxnne8fgrnui",
            "cuisines": [
              "Indian",
              "Chinese",
              "Tandoor",
              "Thalis",
              "Fast Food"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 38,
            "minDeliveryTime": 38,
            "maxDeliveryTime": 38,
            "slaString": "38 MINS",
            "lastMileTravel": 0.699999988079071,
            "slugs": {
              "restaurant": "food-planet-restaurant-patel-nagar-patel-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
            "locality": "Doon Enclave",
            "parentId": 81850,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "321517",
              "deliveryTime": 38,
              "minDeliveryTime": 38,
              "maxDeliveryTime": 38,
              "lastMileTravel": 0.699999988079071,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.3",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "551710",
            "name": "LITTLE OVEN",
            "uuid": "28bbe984-f78f-4f44-ab9f-f00eff66c18d",
            "city": "22",
            "area": "Majra",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "hmzsr0thnmi6xoo07ghk",
            "cuisines": [
              "Italian",
              "Fast Food",
              "Chinese"
            ],
            "tags": [
              
            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 0.30000001192092896,
            "slugs": {
              "restaurant": "little-oven-subhash-nagar-subhash-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "1 A INDRAPRASHT MARG MAJRA DEHRADUN",
            "locality": "Indraprasth Enclave",
            "parentId": 125528,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "20% off",
              "shortDescriptionList": [
                {
                  "meta": "20% off on all orders",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off on all orders",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "20% OFF",
              "shortDescriptionList": [
                {
                  "meta": "",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off on all orders",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 1900,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 1900,
              "message": "",
              "title": "Delivery Charge",
              "amount": "1900",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "0.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "551710",
              "deliveryTime": 33,
              "minDeliveryTime": 33,
              "maxDeliveryTime": 33,
              "lastMileTravel": 0.30000001192092896,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "69443",
            "name": "Al Baik Chicken",
            "uuid": "daf091fa-ef33-41ee-93ca-b4ef8d6facbc",
            "city": "22",
            "area": "Subhash Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "urwo2bqoeyyrnzhkkxb9",
            "cuisines": [
              "Italian"
            ],
            "tags": [
              
            ],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 2.9000000953674316,
            "slugs": {
              "restaurant": "al-baiks-jakhan-jakhan",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "lane no.13C, turner road dehradun",
            "locality": "Turner Road",
            "parentId": 15678,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6035548~p=13~eid=00000186-ffb8-8515-20e9-979400600d7c",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "2.9 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "69443",
              "deliveryTime": 33,
              "minDeliveryTime": 33,
              "maxDeliveryTime": 33,
              "lastMileTravel": 2.9000000953674316,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.4",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "660709",
            "name": "Royal Darbar",
            "uuid": "3f28f988-8467-4513-8a62-61c4842cd083",
            "city": "22",
            "area": "Majra",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "b187efa74610fb206e8334f401ad9109",
            "cuisines": [
              "North Indian",
              "Mughlai"
            ],
            "tags": [
              
            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 1.600000023841858,
            "slugs": {
              "restaurant": "royal-darbar-deh_patel-nagar-deh_patel-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "H No.177, Near Opp Pradhan Wali Gali, Majra South, Near Post Office, Dehradun Nagar Nigam, Dehradun, Uttarakhand",
            "locality": "Sewla Kalan",
            "parentId": 19337,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.6 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "660709",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 1.600000023841858,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 20,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "232269",
            "name": "The Bambooz Restaurant",
            "uuid": "5da1ddb4-cc11-45f4-be68-2606cc06483e",
            "city": "22",
            "area": "Kaonli",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "ptsttehpdvq4as1mlizd",
            "cuisines": [
              "Fast Food",
              "North Indian"
            ],
            "tags": [
              
            ],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "slaString": "36 MINS",
            "lastMileTravel": 1,
            "slugs": {
              "restaurant": "the-bambooz-restaurant-patel-nagar-patel-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Shimla Bypass Chowk, Near Bank Of India, Dehradun",
            "locality": "Shimla Bypass Chowk",
            "parentId": 204989,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "20% off",
              "shortDescriptionList": [
                {
                  "meta": "20% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off up to ₹50 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "20% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "20% off up to ₹50 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "232269",
              "deliveryTime": 36,
              "minDeliveryTime": 36,
              "maxDeliveryTime": 36,
              "lastMileTravel": 1,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "143944",
            "name": "Laxmi Bakers",
            "uuid": "7d17ce75-97d9-46b1-b64a-197b7521b922",
            "city": "22",
            "area": "Morowala",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "oall79ryzo2cpw2djh1l",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "tags": [
              
            ],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 1.7000000476837158,
            "slugs": {
              "restaurant": "laxmi-bakers-na-subhash-nagar",
              "city": "dehradun"
            },
            "cityState": "22",
            "address": "Turner Road Mod Near ISBT",
            "locality": "Turner Road",
            "parentId": 15341,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "aggregatedDiscountInfo": {
              "header": "30% off",
              "shortDescriptionList": [
                {
                  "meta": "30% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹75 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "30% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹75 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 2400,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 2400,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2400",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "1.7 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "143944",
              "deliveryTime": 23,
              "minDeliveryTime": 23,
              "maxDeliveryTime": 23,
              "lastMileTravel": 1.7000000476837158,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
      
];

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ( {
cloudinaryImageId,
name,
cuisines,
area,
lastMileTravelString,
costForTwoString,
avgRating,
}) => {
return (
  <div className="card">
    <img
      src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        cloudinaryImageId
      }
    />
    <h2>{name}</h2>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{area}</h4>
    <span>
    <h4>{}{avgRating}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwoString}</h4>
    </span>
  </div>
  );
};

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantList.map((restaurant) =>{
          return <RestaurantCard {...restaurant.data} />;
        })}
    </div>
  );
};

const Footer = () =>{
  return <h4>Footer</h4>;
};

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
   <>
   <Header />
   <Body />
   <Footer />
   </>
  );
};

//putting container into the root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
