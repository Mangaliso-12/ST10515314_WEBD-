# Changelog - M&M Hotel Vang Vieng, Laos
All notable changes to M&M Hotel website documented in this file.
Coordinates: 18.9266° N, 102.4494° E
Assignment: WebD - Prices in ZAR Rands (R) - English Only

## [1.5.0] - 2026-10-29
### Fixed
- **contact.html** - Removed duplicate DOCTYPE block (2x pasted in one file)
- Added top separator nav `top-sep-nav` with Services / Enquiry / Contact / Map at top
- Map iframe fixed to use `https://www.google.com/maps?q=18.92667,102.44944&z=14&output=embed`
- Unified prices to Rands (R850 / R1,200 / R2,200) + activities R280 / R950 / R380
- Added `id="map"` anchor for Map navigation

### Added
- Contact form fields: cname, cemail, ctype, cmsg with sendMsg() function
- Info boxes: Address, Phone & WhatsApp English Only, Email, Reception Hours

## [1.4.0] - 2026-10-29
### Fixed
- **about.html** - Added missing top separator navigation
- Original missing Services / Enquiry / Contact / Map separated at top - now added
- Header nav unified across all pages: Home, About Us, Services, Contact Us, Book R850

### Added
- **about.html** sections:
    - page-hero: Family owned, English spoken - Since 2018
    - story-grid: Story of M & M brother and sister, English Only + Rands Only rule
    - Stats: 2018 Founded, 18 Rooms, 4.8 Rating
    - Promise section: English Only, Rands Only (R), Family Owned

## [1.3.0] - 2026-10-29
### Fixed
- **indication.html** - Major structure errors fixed:
    - Missing <header> with M&M logo added
    - Missing <nav> with sticky top menu added
    - Missing <div class="container"> opening tag added
    - Prices converted from $15/$45/$80/$150 to R850/R1,200/R2,200/R3,500 to match index

### Added
- Indication page features:
    - Room Availability Indicators: AVAILABLE (green dot), LIMITED (orange), FULL (red)
    - 4 rooms: Backpacker Dorm (12 beds), River View Bungalow (2 left), Karst Mountain Suite (5 rooms), Luxury Villa (Full)
    - Hotel Indications: Check-in 2PM / Check-out 12PM, Free WiFi, Breakfast, Nam Song River location
    - Navigation: Book Now in Enquiry + View Map buttons

## [1.2.0] - 2026-10-29
### Fixed
- **index.html** - Critical errors fixed:
    - Removed stray `</header><header>` before `<html>` tag (line 1-3 error)
    - Fixed invalid HTML structure: <!DOCTYPE> must be first, then <html>
    - Added .top-nav sticky menu that separates Services (#rooms), Enquiry (#book), Contact (#contact), Map (#map-section) at top

### Added
- **index.html** sections:
    - hero: Where limestone mountains meet luxury - R850/R1,200/R2,200 No USD
    - rooms: 3 rooms grid - Standard R850, Deluxe R1,200, Executive R2,200
    - amenities: 100 Mbps WiFi, Spa, Pool, Restaurant
    - activities: Balloon R950, Kayak R280, Climbing R380
    - book (Enquiry): Check-in/check-out date inputs, type select, summary calculation (calc() function)
    - contact: english@mmhotel.la, Vang Vieng location
    - map-section: Google Maps iframe 18.92667,102.44944
    - Responsive: mobile-menu, hero-content, stats, trust badges

## [1.1.0] - 2026-10-29
### Fixed
- **services.html** - Validated, no errors but missing cross-page nav
- Added nav link to index.html#book (Enquiry) and index.html#map-section (Map) to satisfy assignment requirement of 4 sections at top

### Added
- **services.html** sections:
    - page-hero: Everything you need, priced in Rands - No USD, no Kip
    - Hotel Services: Lao Spa R280/R450, Infinity Pool FREE, Restaurant R55-R250, WiFi FREE, Fitness FREE/Trainer R200/h, Airport Transfers R450/R150, Bike R120/R350, Concierge FREE
    - Adventures: Hot Air Balloon R950 pp, Kayak Nam Song R280 pp, Rock Climbing R380 pp with Book buttons linking to contact.html

## [1.0.0] - 2026-10-29
### Added
- **script.js** - M&M Hotel WebD Assignment Logic
    - MAP SECTION: Leaflet L.map('map').setView([18.92667,102.44944],14), OpenStreetMap tiles, Main hotel marker + 3 attractions (Blue Lagoon 1, Tham Chang Cave, Nam Song Tubing)
    - FORM SECTION: hotelForm submit handler, validation, activities collection, price calculation (original $15/$45/$80/$150), summaryDiv innerHTML, console.log proof, localStorage save
    - CHANGE LOG HELPER: console.log Map loaded timestamp

### Fixed in v1.0.1+
- script.js prices updated from $ to Rands: backpacker= R850, river= R1,200, karst= R2,200, luxury= R3,500
- Added calcRands() function for new index.html form (ci, co, type, name, nights, rate, total)
- Added support for both id="map" and id="map-section" for Leaflet initialization
- Added top navigation logger for Services/Enquiry/Contact/Map separation

## [0.1.0] - 2026-10-28
### Added
- Initial project setup: stylesheet.css, Font Awesome 6.5.0
- Brand: M&M VANGVIENG, Colors #0a1931 (navy) #c5a059 (gold) #f8f5ef (sand)
- Core promise: English Only, Rands Only (ZAR), Responsive on iPhone/Android/iPad/Laptop
- Location: Nam Song Riverside, Vang Vieng District, Vientiane Province, Laos
- Contact: english@mmhotel.la, +856 20 XXX XXXX, WhatsApp English reply within 1 hour

---
Format: Keep a Changelog
Project: M&M Hotel Vang Vieng
Currency: ZAR Rands (R) Only - No USD
Language: English Only
Responsive: 100% Mobile/Tablet/Desktop
Map: 18.92667, 102.44944