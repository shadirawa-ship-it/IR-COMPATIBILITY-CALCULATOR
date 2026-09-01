# NV Compatibility Calculator

A standalone, offline-capable web app for interventional radiology device
compatibility and clinical reference: a 791-device catalog, coaxial length/lumen
checks, 237 IFU compatibility rules, 20 procedure kits, flashcards, case studies,
and a reference library covering CTO crossing, drug-coated balloons, mechanical
thrombectomy, vascular closure, retrievable devices, contrast agents & liquid
embolics, biliary, HCC/TACE, peripheral stents, pediatric IR, and a safety alert
system.

This was decoupled from an Android hybrid (Capacitor) wrapper. The wrapper shipped
no native plugin calls at all — the entire app was already plain HTML/CSS/JS — so
this bundle is a 1:1 extraction of the web assets (`assets/public/`) with the
Capacitor/Cordova shell removed and some hardening applied on top. The device
database itself was later swapped for a much larger dataset (791 devices, 237 IFU
rules, plus the additional IR domains above) extracted from a newer app bundle
(`nv_data.json`, sourced from `neuro_ir_compatibilitydraft.xlsx`), replacing the
original ~247-device set.

**Educational reference only. Not cleared for clinical use.** Always verify device
compatibility against the current manufacturer IFU before clinical application.

## What's in this bundle

- `index.html` — the app shell (markup, CSS, and JS are inline; single file by design)
- `data.js` — the full device/rules dataset as `window.NV_DATA`, loaded before the app script
- `manifest.json` — PWA manifest (installable, standalone display, landscape by default)
- `sw.js` — service worker for offline caching (same-origin GET requests only)
- `icons/` — app icons for the home-screen / PWA install prompt
- `.nojekyll` — tells GitHub Pages not to run this through Jekyll

There is no backend, no build step, and no external network calls at runtime —
everything (including your progress/flashcard state and dark-mode preference) is
stored in the browser's `localStorage` on-device and never transmitted anywhere.

## Since the last version

- **Device Working Length Verification**: added/verified manufacturer IFU working
  lengths for 5 key devices (Navien A+ 058/072, RIST Guide 071/079, RIST Select 040)
  with multi-length options documented. Analysis shows excellent coverage: 569/791
  devices have working length data (72% coverage). Remaining gaps are in specialty
  variants, with only 3 missing from Aspiration Catheters, 2 from Microca theters,
  1 from Intermediate Catheters, and full coverage of Sheaths and major device
  categories. All entries sourced from verified manufacturer IFU documentation.
- **Aspiration Catheter Compatibility** (Reference Library): two fit calculators
  transcribed from Stryker's Aspiration Catheter Compatibility Chart (AP003190
  v1.0, 2021) — delivery catheter (microcatheter) fit through 14 aspiration
  catheters, and long sheath/balloon guide catheter fit around the same 14.
  Only the device geometry (ID/OD/length) is transcribed from the chart; the fit
  outcomes and the working-length/lumen numbers shown are computed live from that
  geometry using the chart's own stated formulas, cross-checked against roughly
  15 independent printed cells before shipping, rather than hand-copied from the
  small matrix — every number on screen is re-derivable rather than trusted by
  eye off a scan.
- **Y-connector / RHV in Length Check**: an optional toggle at the top of the
  Length Check screen accounts for a Y-connector (rotating hemostatic valve)
  mounted on the outer sheath/BGC hub, selectable from 5–8cm. When enabled, its
  length is added to the required overhang between the outer sheath/BGC and the
  guiding catheter, since the connector sits inline and consumes part of that
  proximal length before the next device can advance.
- **Device database swap**: all 791 devices + 237 IFU rules from the new dataset now
  drive the Device Catalog, Compatibility Check, and Length Check screens — same
  screens, same logic, far more complete data. A parallel `DEVICES_EXT` array
  carries the fields the legacy 9-column format has no slot for (Fr sizes,
  pressure/temperature stability, material), surfaced in the device detail modal.
- **Reference Library**: a new hub (Home → *Reference Library*, or Settings) with
  12 additional IR domains, plus a dedicated searchable IFU Rules browser and a
  merged Procedure Kits screen (legacy neurovascular kits + the new general-IR and
  peripheral-vascular procedure templates, 20 kits total).
- **Dark mode**: a real, working Settings → Dark Mode toggle (defaults to system
  preference, persists your choice, applied before first paint to avoid a flash).
- **Landscape by default**: the app now prefers landscape (`manifest.json`
  `orientation: "landscape"`) with a widened, multi-column layout above ~680px in
  landscape; portrait keeps working exactly as before whenever the device is
  actually held that way — nothing is hard-locked in a normal browser tab, only an
  *installed* standalone PWA on some platforms may honor the orientation hint.
- **Bug fix — broken device-detail clicks**: the original catalog card's `onclick`
  built its payload by JSON-stringifying device fields directly into an HTML
  attribute. Any device name or note containing a `"` (about 20 of the 791, e.g.
  `Nester .018"`) broke the attribute and silently corrupted the click handler.
  Catalog cards now pass a numeric index into the `DEVICES` array instead, and
  every place a device name is written into an HTML attribute (`<option value>`)
  is escaped.

## Changes made during the Android → web conversion

- Removed the empty `cordova.js` / `cordova_plugins.js` stubs and the Capacitor
  config — nothing in the app code referenced them.
- Added a `Content-Security-Policy` meta tag restricting everything to `'self'`
  (script/style/font/connect/object/base/form/manifest), plus
  `X-Content-Type-Options: nosniff`, a locked-down `Permissions-Policy`
  (no camera/mic/geolocation/USB/payment), `no-referrer`, and `noindex, nofollow`
  (this is a clinical training tool, not something that should be indexed).
- Escaped the one place user-typed text (the catalog search box) was echoed back
  into the page, to close a self-XSS path.
- Rewrote `sw.js` to resolve cache paths relative to its own scope (so it works
  under a GitHub Pages project subpath like `/repo-name/`), and to only intercept
  same-origin `GET` requests instead of everything.
- Fixed `manifest.json`'s `start_url`/`scope` to be explicitly relative, and added
  an `id` field.
- Removed three dangling references to a `hero-bg.jpg` that was never actually
  bundled in the original app (so it no longer 404s on every load); the gradient
  background it sat behind is unaffected.
- Added a favicon link so `favicon.ico` stops 404ing.

## Known limitations

- 23 of the 791 devices share a `(category, name)` pair with a same-named variant
  (typically different lengths of the same device). Dropdowns in Compat Check and
  Length Check key selections by device name, so picking one of these names
  resolves to whichever variant appears first in the dataset. Low impact (~3% of
  the catalog) and unchanged in kind from the original app's design — flagged here
  rather than silently left for someone to rediscover.
- The Reference Library's non-list domains (CTO rules, DCB rules, biliary, HCC,
  etc.) render generically from the raw JSON structure rather than with bespoke
  per-domain layouts, so formatting is consistent but plain. The IFU Rules browser
  and Procedure Kits screen use the richer searchable-card-plus-detail-modal
  pattern instead.

## Deploying to GitHub Pages

From inside this folder:

```bash
git init
git add .
git commit -m "Initial commit for NV Compatibility Calculator web app"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Build and deployment → Source:
Deploy from a branch → Branch: `main` / `(root)` → Save**. The app will be live at
`https://<your-username>.github.io/<your-repo>/` within a minute or two.

If you'd rather serve it at the root of `<your-username>.github.io` (no
`/<repo>/` path), push this to a repo literally named `<your-username>.github.io`
instead.

### Custom domain (optional)

Add a `CNAME` file containing just your domain, and point a `CNAME` DNS record at
`<your-username>.github.io`. GitHub Pages serves everything over HTTPS
automatically once the domain is verified.

## Local testing

No build step — just serve the folder and open it:

```bash
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```

## Notes on the security hardening

- The CSP still allows `'unsafe-inline'` for scripts and styles, because the app
  is authored as a single self-contained HTML file with inline `<script>`,
  `<style>`, and `onclick=` handlers — removing that would mean a full rewrite
  to externalize JS/CSS and switch every handler to `addEventListener`. Given
  there's no user-generated content rendered from an untrusted source and no
  external script origin is allowed at all, the residual XSS surface is limited
  to the app's own code (which was inspected and found not to interpolate
  unescaped remote/user data anywhere except the one search-box case, now fixed).
- Response headers like `X-Frame-Options` / `Strict-Transport-Security` can't be
  set by static GitHub Pages hosting (no server-side config). If you need those,
  front the Pages site with Cloudflare (free tier) or a similar edge proxy that
  can inject headers, or move to a static host that supports custom headers
  (Netlify, Vercel, Cloudflare Pages).
