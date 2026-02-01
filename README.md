# WalkPod Marketing Site (local)

Simple static marketing landing page scaffold. To view locally, run a static HTTP server from the `walkpodweb` folder.

Commands:

```powershell
cd c:\Users\Dell\Desktop\walkpodweb
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Files:

- index.html — main page
- styles.css — site styles
- script.js — tiny form handler

Notes:

- Place your assets in the `assets` folder next to `index.html`.
- Required asset names used by the page:
	- `assets/logo.png` — site logo (will be used as-is)
	- `assets/screenshot.png` — app screenshot for hero
	- `assets/badge-google-play.png` — Google Play badge image
	- `assets/badge-app-store.png` — App Store badge image

If you want, I can add placeholder badges or inline SVGs; otherwise copy your image files into `assets` and reload the page.
