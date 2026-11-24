# betterTanza — Public Images

Place the following image files in the correct directories.
The code already references these paths — dropping in the files activates them immediately.

---

## Municipal Seal

**File:** `tanza-seal.png` ✅ **EXISTS** — converted from `Tanza,_Cavite_Seal.svg`
**Path:** `/public/tanza-seal.png` (400×400 RGBA PNG)
**Source SVG:** `/public/images/Tanza,_Cavite_Seal.svg`

**Usage in code:**

- `src/components/layout/Navbar.tsx` — beside the "betterTanza" brand text (48px height)
- `src/components/layout/Footer.tsx` — brand column (36px height, inverted white)

---

## Official Photos of Local Officials

**Directory:** `/public/images/officials/`

| Filename             | Official                                            | Source                                                     |
| -------------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| `mayor-matro.jpg`    | Hon. Archangelo "SM" B. Matro — Municipal Mayor     | ✅ Cropped from image on tanza.gov.ph homepage (400×400)   |
| `vm-del-rosario.jpg` | Hon. Raymundo "Munding" A. Del Rosario — Vice Mayor | ❌ MISSING — UI shows initials "RD" until a photo is added |

**Where to source:**

- https://www.facebook.com/LGUTanzaCavite (photos from official posts)
- https://www.tanza.gov.ph
- Official LGU press kits / DILG profile directory

**Usage in code:**

- `src/components/home/LeadershipSection.tsx` — profile photo in leadership cards
- `src/pages/Officials.tsx` — executive branch cards

**Recommended size:** 400×400px minimum, JPG or WebP, square or portrait crop

---

## Place Photos

**Directory:** `/public/images/places/` — used by `src/pages/TouristSpots.tsx`.
All five are from Wikimedia Commons, CC BY-SA 4.0, by Ralffralff (July 2023); keep the attribution line on the page.

---

## Notes

- Official-person photos must come from official LGU channels; place photos may be openly licensed (with attribution)
- Do NOT use Google Images or unofficial social media reposts
- Preferred format: WebP for photos, SVG for logos/seals
- After adding images, run `npm run build` to verify no broken paths
