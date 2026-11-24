# Tanza content still needed

Fact-check notes from 24 Nov 2026. "Verified" means I found it on `tanza.gov.ph`, `tanzapublicservice.site` or Wikipedia. Facebook, OWWA/DOH sites and search engines blocked or returned nothing for scripted requests, and OpenStreetMap was down, so those items are listed as **not found**, not as wrong.

## 1. Pages that still describe Lapu-Lapu City (14 files, plus 1 empty file)

Every item below needs a Tanza source (call the office, or take it from its official Facebook page). Nothing here could be confirmed online.

| Page                                               | Lapu-Lapu facts to replace                                                                                                          | What Tanza must supply                                                                                                      |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `health-services/go-to-the-local-hospital-…`       | Sta. Rosa Community Hospital, Mactan Doctors', ARC Hospitals, `(032)` numbers, an email                                             | Tanza's government hospital (if any) and nearby private hospitals, with address, hours and phone                            |
| `health-services/get-free-check-ups-…`             | "City Health Office", MAIFIPP program, partner pharmacies (Basak, Carajay, Ibo), Animal Bite Center, "proof of Lapu-Lapu residency" | Municipal Health Office (MHO) services, free-medicine process, any senior medicine program, animal bite center location     |
| `health-services/access-maternal-care-…`           | CHO, Mon–Fri / Sat clinic hours, Wednesday EPI day, `lapulapucity.gov.ph` reference                                                 | Rural Health Unit / barangay health center hours and the real immunization day                                              |
| `health-services/join-health-programs-…`           | CHO DOTS clinic, CIO                                                                                                                | Where Tanza's TB-DOTS clinic is, who runs nutrition and dengue programs                                                     |
| `business/apply-for-barangay-clearance-…`          | Lapu-Lapu BPLO and its permit portal (dead link). The page is also a partnership guide, not a barangay-clearance guide              | Tanza BPLO location, requirements, whether an online permit portal exists                                                   |
| `business/renew-permits-…`                         | "City Treasurer", "BOSS", "city's online portal", "the city"                                                                        | Tanza BPLO and Municipal Treasurer process, renewal dates, penalty rates from the Tanza revenue code                        |
| `business/join-trade-fairs-…`                      | Whole "Key Local Contacts" table (BPLO, PESO, CIO, Tourism, Hoops Dome), Cebu references                                            | Tanza BPLO, PESO, Tourism and Negosyo Center contacts; local fairs and events                                               |
| `business/rent-stalls-in-public-markets.md`        | **Empty file (0 bytes)**. Wikipedia and the app show a Tanza Public Market                                                          | Stall application process, fees, market office                                                                              |
| `education/access-educational-support-programs-…`  | SEF school supplies, Hoops Dome e-Library, PESO SPES, Cindi "Skwela" scholarship, DepEd Lapu-Lapu                                   | Tanza equivalents (SEF supplies, library, PESO/SPES, any mayor's scholarship)                                               |
| `education/enroll-children-in-lgu-daycare-…`       | CSWDO, DepEd Lapu-Lapu Division                                                                                                     | See "Verified" below: 32 daycare centers under the MSWDO. Tanza needs enrollment dates, forms and fees                      |
| `education/learn-about-supplementary-activities-…` | DepEd Lapu-Lapu website and Facebook, Hoops Dome e-Library                                                                          | Tanza Schools District Office contacts                                                                                      |
| `garbage-waste-disposal/` (4 pages)                | CENRO, `(032) 340-0004`, Brgy. Pajo, "City Information Office"                                                                      | Tanza's solid-waste office (usually MENRO), phone, collection days per barangay, MRF/drop-off points, how to report dumping |

## 2. Pages listed in the menu that do not exist (20 files)

These slugs appear in the category `index.yaml` files but have no `.md`, so the link opens "Document Not Found". General Trias has versions of all 20, but they carry General Trias facts and need the same rewrite.

- **Agriculture and fisheries (4):** free seeds/fertilizer, veterinary services, farming/fishing training, borrowing farm tools
- **Disaster preparedness (3):** drills and evacuation planning, emergency procedures and evacuation routes, early warning
- **Environment (2):** clean-up drives and tree planting, reporting illegal logging/quarrying/fishing
- **Housing and land use (3):** socialized housing, zoning/building permits, relocation sites
- **Infrastructure (4):** damaged roads/drainage, barangay water supply, public gyms/halls, market stalls and cemeteries
- **Social welfare (4):** senior/solo parent/PWD assistance, relief goods during disasters, livelihood training, family welfare

Decision for you: write them, or remove the 20 entries from the `index.yaml` files until they are ready.

## 3. Existing app data that conflicts with the official site

`tanza.gov.ph` lists these numbers on its home page. The app shows different ones:

| Service                   | Official site | In the app (`Navbar.tsx`) |
| ------------------------- | ------------- | ------------------------- |
| MDRRMO                    | 0977-345-5035 | 0977-345-5035 (matches)   |
| Police                    | 0905-330-0656 | (046) 437-6568            |
| Bureau of Fire Protection | 0945-175-8625 | (046) 505-6084            |
| Municipal Health Office   | 0945-175-8625 | (046) 484-1485            |

- The official site gives the **same number** for BFP and the Municipal Health Office, which looks like an error on their side. Confirm before using either.
- `(046) 432-0000` appears 22 times in 12 source files as the Municipal Hall number (Officials, Contact, InfoBar, SALN, FOI, and others). I could not confirm it anywhere. The official site publishes only Facebook as a contact channel.
- `info@tanza.gov.ph` (Contact section) is also unconfirmed.
- DSWD (046) 437-8601 and Coast Guard 0916-793-2511 are unconfirmed.

## 4. Verified for Tanza (safe to reuse)

- Vision and mission statements (tanza.gov.ph home page). They are not yet shown in the app.
- 32 government daycare centers, managed by the MSWDO (Wikipedia).
- Town fiesta on 28 August, Grand Karakol on 27 August (Wikipedia).
- Schools: Wikipedia lists the public and private primary and high schools, plus Cavite State University – Tanza Campus, Saint Joseph College – Tanza, POWER School of Technology and others (Wikipedia, citing the DepEd 2021 masterlist).
- Municipal income: ₱681.1M (2020) and ₱732.1M (2021) (Wikipedia).
- Bids and Awards notices are posted live at `tanza.gov.ph/bidsandawards`.
- Social media: Facebook `ph.MunicipalityofTanza` (about 92K followers), YouTube `@MunicipalGovernmentofTanza`, TikTok `@matro.bros`.

## 5. Not verified (left unchanged)

- The councilor roster, Del Rosario's photo, and the Economy pie-chart percentages (see earlier notes).
- The OWWA scholarship amounts: I removed them because I couldn't verify them.
