# TORRNAMA V4 — Interactive Network Explorer

Created by **Peshbin Kamran**. Supervised by **M. Dana Hasan**.

A static, deployable bilingual Sorani/English learning website. It includes 21 protocols, detailed lessons, steps, timeline/sequence visualizations, packet flow tables, illustrated protocol-specific topologies, a customizable isometric practice lab, and an **in-browser local draft editor**.

## Usage / Hosting

Unzip, open the `torrnama-v4` folder, then open `index.html` or use a static development server. For a public website upload **the same folder (whose root contains index.html)** to your **existing Netlify site's Deploys**, not a new project, to keep the existing domain.

The Google Public DNS-over-HTTPS and JSONPlaceholder requests are live only when network/CORS permissions allow them. All other traffic animations and the Ping/DNS/HTTP practice lab are **educational simulations**, not real packet captures or ICMP probes. The 3D-like diagrams are **isometric SVG**, not free-orbit WebGL.

## Admin/editor limitations

The editor is **not secured by login**. Its changes are local to the visitor's browser and may be exported/imported as JSON. They do not modify the hosted site for other users. A real owner-only online administration system requires an authenticated backend, authorization checks, a database, and deployment configuration; never put a private API key or password in client JavaScript.

## PWA install

Includes `manifest.webmanifest`, custom user-provided icon assets, and a service worker for cached static resources. On HTTPS, Chrome may offer **Install app** or **Add to home screen**. Install availability depends on browser/platform.

### Refined signal animation (V4 base)
- Request and reply use visually separate directional tracks.
- The green packet travels gradually, drawing only the route behind it.
- The moving bilingual message card follows the active packet.
- The default speed is slower (1×); 0.75×, 1.5× and 2× remain available.
- Redeploy this folder to the *existing* Netlify project to keep the same URL.
