# betterTanza — Public Images

Place the following image files in the correct directories.
The code already references these paths — dropping in the files activates them immediately.

---

## Municipal Seal

**File:** `tanza-seal.png` (or `.svg`)
**Path:** `/public/images/tanza-seal.png`

**Where to source:**

1. Wikipedia: https://en.wikipedia.org/wiki/Tanza,_Cavite — check the infobox image
2. Official LGU Facebook: https://www.facebook.com/LGUTanzaCavite — profile photo / cover photo
3. Official website: https://www.tanza.gov.ph
4. Wikimedia Commons: search "Tanza Cavite seal"

**Usage in code:**

- `src/components/layout/Navbar.tsx` — beside the "betterTanza" brand text
- `src/components/layout/Footer.tsx` — brand column

**Recommended size:** 128×128px minimum, PNG with transparent background or SVG

---

## Official Photos of Local Officials

**Directory:** `/public/images/officials/`

| Filename             | Official                                            | Source                                |
| -------------------- | --------------------------------------------------- | ------------------------------------- |
| `mayor-matro.jpg`    | Hon. Archangelo "SM" B. Matro — Municipal Mayor     | LGU Facebook, official press releases |
| `vm-del-rosario.jpg` | Hon. Raymundo "Munding" A. Del Rosario — Vice Mayor | LGU Facebook, official press releases |

**Where to source:**

- https://www.facebook.com/LGUTanzaCavite (photos from official posts)
- https://www.tanza.gov.ph
- Official LGU press kits / DILG profile directory

**Usage in code:**

- `src/components/home/LeadershipSection.tsx` — profile photo in leadership cards
- `src/pages/Officials.tsx` — executive branch cards

**Recommended size:** 400×400px minimum, JPG or WebP, square or portrait crop

---

## Notes

- All images must be from official or public domain sources
- Do NOT use Google Images or unofficial social media reposts
- Preferred format: WebP for photos, SVG for logos/seals
- After adding images, run `npm run build` to verify no broken paths
