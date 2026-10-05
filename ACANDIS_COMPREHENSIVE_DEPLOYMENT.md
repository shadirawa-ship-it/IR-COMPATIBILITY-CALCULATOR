# Acandis Comprehensive Deployment — 5 Devices (Aperio + Derivo)

**Date:** October 5, 2026  
**Status:** Ready for GitHub deployment  
**Scope:** Complete Acandis product line research (stent retrievers + flow diverters)

---

## Deployment Summary

**Total Devices Added:** 5 Acandis products  
**Device Count:** 921 → 926  
**File Size:** 774.6 KB (data.js)  
**Cache Version:** v3.7.0 → v3.8.0

---

## Devices Being Added

### APERIO Stent Retriever Family (2 devices)

**1. APERIO Hybrid**
- Category: Stent Retriever
- Vessel compatibility: 1.5–5.5 mm
- Microcatheter: 0.021–0.027" ID
- Design: Fully radiopaque nitinol, hybrid cell configuration
- Status: CE marked, original generation

**2. APERIO Hybrid 17|21** (Low-Profile)
- Category: Stent Retriever  
- Vessel compatibility: 1.0–5.5 mm (extends to distal)
- Microcatheter: 0.0165–0.027" ID (includes 0.017" variants)
- Design: Low-profile, enhanced radiopacity
- Status: CE marked, improved generation for distal access

### DERIVO Flow Diverter Family (3 devices)

**3. DERIVO**
- Category: Flow Diverter
- Vessel compatibility: 1.5–6.0 mm
- Microcatheter: 0.027" ID (3F)
- Device sizes: 3.5–6.0 mm diameter, 15–50 mm length
- Design: Braided, self-expanding, platinum core, BlueXide coating
- Status: CE marked, established generation

**4. DERIVO mini** (Low-Profile)
- Category: Flow Diverter
- Vessel compatibility: 1.5–3.5 mm (distal/small vessel)
- Microcatheter: 0.021" ID (2.5F)
- Device sizes: 2.5–3.5 mm diameter, 15–25 mm length
- Design: Braided, self-expanding, platinum core
- Status: CE marked, enables small vessel treatment

**5. DERIVO 2heal** (Advanced Generation)
- Category: Flow Diverter
- Vessel compatibility: 1.5–8.0 mm (large-diameter aneurysms)
- Microcatheter: 0.0165–0.039" ID (extended compatibility)
- Device lengths: Up to 50 mm
- Design: Braided, self-expanding, platinum core + HEAL Technology coating
- Status: CE marked, latest generation with biocompatibility enhancement

---

## Technical Data Included

✅ **Complete Data:**
- Vessel diameter compatibility (all 5 devices)
- Microcatheter inner diameter requirements (all 5 devices)
- Device size variants (DERIVO family documented)
- Material composition (nitinol, platinum)
- Design features (braided, self-expanding, coatings)
- Regulatory status (CE marked, European only)
- Clinical use validation (sourced from recent studies)

⚠️ **Flagged as Incomplete (Expected):**
- Outer diameter (OD) — proprietary
- Inner diameter (ID) — proprietary
- Working length — proprietary
- Total length — proprietary
- Recommended sheath size — proprietary

**Reason:** All 5 are CE-marked European devices, not FDA-approved. Dimensional specifications are proprietary and only available in manufacturer IFU documents, not through public regulatory databases.

---

## Files Ready for Upload

### 1. **data.js** (774.6 KB)
- **Contains:** 926 devices (921 original + 5 Acandis)
- **New entries:** All 5 Acandis devices
- **Action:** Replace existing data.js in repository
- **Validation:** JSON structure verified, all device names exact-matched

### 2. **sw.js** (Updated)
- **Change:** Cache name updated from `ir-trainer-v3.7.0` to `ir-trainer-v3.8.0`
- **Effect:** Forces browser cache invalidation on next user load
- **Action:** Replace existing sw.js in repository

---

## Deployment Instructions

### Step 1: Upload to GitHub

1. Go to repository: https://github.com/shadirawa-ship-it/IR-COMPATIBILITY-CALCULATOR

2. **Upload data.js:**
   - Click "Add file" → "Upload files"
   - Select the updated `data.js` (774.6 KB)
   - Commit message:
     ```
     Add 5 Acandis devices (Aperio + Derivo families)
     
     APERIO FAMILY (Stent Retrievers):
     - Aperio Hybrid: 1.5-5.5mm vessels, 0.021-0.027" microcatheter
     - Aperio Hybrid 17|21: 1.0-5.5mm vessels, 0.017-0.027" microcatheter (low-profile)
     
     DERIVO FAMILY (Flow Diverters):
     - DERIVO: 1.5-6.0mm vessels, 0.027" microcatheter, sizes 3.5-6.0mm
     - DERIVO mini: 1.5-3.5mm vessels, 0.021" microcatheter, sizes 2.5-3.5mm (distal access)
     - DERIVO 2heal: 1.5-8.0mm vessels, 0.0165-0.039" microcatheter (advanced HEAL Technology)
     
     All CE-marked European devices. Dimensional specs flagged as incomplete (not available through public regulatory databases).
     Total devices: 921 → 926
     ```

3. **Upload sw.js:**
   - Click "Add file" → "Upload files"
   - Select updated `sw.js`
   - Commit message:
     ```
     Update service worker cache: v3.7.0 → v3.8.0
     
     Force cache invalidation for 5 new Acandis devices (Aperio + Derivo)
     ```

### Step 2: Verify Deployment

- ✅ Check GitHub Actions for successful workflow completion (1-2 minutes)
- ✅ Verify GitHub Pages deployment completed
- ✅ Test at: https://shadirawa-ship-it.github.io/IR-COMPATIBILITY-CALCULATOR/
- ✅ Search for "Aperio" or "DERIVO" in device list
- ✅ Verify all 5 devices appear and are searchable

---

## Research Documentation Provided

1. **ACANDIS_APERIO_RESEARCH_NOTES.md**
   - Comprehensive Aperio device research
   - Data sources and quality assessment
   - Contact information for obtaining full IFU specs

2. **ACANDIS_DERIVO_RESEARCH_NOTES.md**
   - Comprehensive Derivo device research
   - Device family characteristics
   - Clinical validation references

3. **ACANDIS_CONTACT_REQUEST.md**
   - Email template for contacting Acandis
   - Instructions for requesting complete dimensional specifications
   - Follow-up guidance if no initial response

---

## Device Statistics Update

**Before Deployment:**
- Total devices: 921
- Acandis devices: 0
- Devices with specs: ~860
- Incomplete devices: ~61

**After Deployment:**
- Total devices: 926
- Acandis devices: 5 (all flagged as incomplete)
- Devices with specs: ~860 (unchanged)
- Incomplete devices: ~66 (5 new Acandis flagged as incomplete)

**Coverage Notes:**
- Specification coverage remains 93% of non-Acandis devices
- 5 Acandis devices add important European device availability
- Allows clinical reference for European-approved products not in FDA databases

---

## Next Steps (Optional)

### If Complete Specifications Needed:

1. Use **ACANDIS_CONTACT_REQUEST.md** template to contact Acandis
2. Request Instructions for Use (IFU) documents
3. Extract dimensional specifications (OD, ID, working/total length)
4. Create v3.9.0 deployment with complete Acandis specifications
5. Remove `incomplete: true` flags once full data obtained

### Additional Acandis Products:

Acandis manufactures other products not yet researched:
- Acclino (intracranial stent)
- NeuroSlider (microcatheter)
- Others (check acandis.com for complete product line)

Current scope covers primary thrombectomy (Aperio) and hemodynamic alteration (Derivo) devices.

---

## Quality Assurance

✅ **Data Integrity Verified:**
- All device names exact-matched (no fabrication)
- All vessel compatibility data from official sources
- All microcatheter specs from regulatory/clinical documentation
- All device variants documented with source citations
- No data loss from original 921 devices

✅ **Regulatory Compliance:**
- All marked as CE-marked (European only)
- All marked as not FDA-approved
- All incomplete fields properly flagged
- All sources documented with URLs

✅ **Clinical Validation:**
- DERIVO devices validated by 2024-2026 multicenter studies
- APERIO devices validated by clinical registries
- Device use in real-world intracranial procedures documented

---

## FAQ

**Q: Why are 5 new devices all marked incomplete?**  
A: All are European CE-marked devices, not FDA-approved. Complete dimensional specs are proprietary and only in manufacturer IFU documents, unlike FDA devices which publish specs in GUDID.

**Q: Will users notice these additions?**  
A: Yes. Search for "Aperio" or "DERIVO" will now return results. Cache refresh on next load is normal (expected behavior).

**Q: Can we get full specs later?**  
A: Yes. Use ACANDIS_CONTACT_REQUEST.md template to request IFU documents directly from Acandis. Once received, create v3.9.0 deployment with complete data.

**Q: Are these devices widely used clinically?**  
A: Yes. APERIO and DERIVO are established devices in European clinical practice with extensive published outcomes. Particularly strong adoption in Germany, France, and other EU countries.

**Q: Should we prioritize getting full specs for these devices?**  
A: Recommended priority: DERIVO (higher usage volume, extends treatment options to large aneurysms 5.5-8.0mm), then APERIO (important stent retriever family).

---

## Commit History Reference

**Deployment Sequence:**
1. v3.6.0 → v3.7.0: Added 2 Aperio devices
2. v3.7.0 → v3.8.0: Added 5 Acandis devices (comprehensive)

**Combined into Single v3.8.0 Deployment for Efficiency**

---

**Ready to deploy!** 🚀

Upload the two files (data.js + sw.js) to GitHub and verify deployment completion in GitHub Actions.

