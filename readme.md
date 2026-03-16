<div align="center">

<br/>

```
  ███████╗██╗  ██╗███████╗████████╗ ██████╗██╗  ██╗███████╗ ██████╗ ██████╗  ██████╗ ███████╗
  ██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝██╔════╝██║  ██║██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝
  ███████╗█████╔╝ █████╗     ██║   ██║     ███████║█████╗  ██║   ██║██████╔╝██║  ███╗█████╗  
  ╚════██║██╔═██╗ ██╔══╝     ██║   ██║     ██╔══██║██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝  
  ███████║██║  ██╗███████╗   ██║   ╚██████╗██║  ██║██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗
  ╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
                                           P  R  O
```

### Professional drawing app that runs in any browser — installable on mobile & desktop

<br/>

[![Live Demo](https://img.shields.io/badge/⚡_LIVE_DEMO-Open_App-c8ff00?style=for-the-badge&labelColor=07070b&color=c8ff00)](https://yourusername.github.io/sketchforge)
&nbsp;
[![PWA](https://img.shields.io/badge/📲_PWA-Installable-00e5ff?style=for-the-badge&labelColor=07070b)](https://yourusername.github.io/sketchforge)
&nbsp;
[![Zero Dependencies](https://img.shields.io/badge/📦_Zero-Dependencies-a855f7?style=for-the-badge&labelColor=07070b)](/)
&nbsp;
[![Offline](https://img.shields.io/badge/🔌_Works-Offline-ff6b35?style=for-the-badge&labelColor=07070b)](/)
&nbsp;
[![Single File](https://img.shields.io/badge/📄_Single-HTML_File-ff2d78?style=for-the-badge&labelColor=07070b)](/)

<br/>

> **Draw. Mirror. Layer. Record. Challenge. Install.**
> All in one 60KB HTML file. No app store. No build tools. No frameworks.

<br/>

</div>

---

## ⚡ What is SketchForge Pro?

SketchForge Pro is a **full-featured browser-based drawing application** built with pure HTML, CSS and Vanilla JavaScript. It packs professional features — layers with blend modes, mirror/symmetry drawing, pixel art mode, a physics-based gravity brush, speed replay timelapse, and a daily drawing challenge — all inside a **single file you can install on any device**.

Open it in a browser. Draw. Install it with one tap. Works forever — even offline.

---

## 🚀 Quick Start

```bash
# Option 1 — Just open the file
open index.html

# Option 2 — Local server (required for PWA install)
npx serve .
# → open http://localhost:3000

# Option 3 — Python
python -m http.server 8080
# → open http://localhost:8080
```

> **Note:** PWA installation requires HTTPS or localhost. GitHub Pages and Vercel both provide HTTPS automatically.

---

## 📲 Install as an App (PWA)

SketchForge Pro is a **Progressive Web App** — it installs like a native app, works fully offline, and opens in full screen with no browser UI.

### Android / Chrome
An **"Install Now"** banner appears automatically after 25 seconds, and an **⬇ Install App** button glows in the header. Tap either to install.

### iPhone / iPad (Safari)
1. Open the app URL in **Safari**
2. Tap the **Share** button `□↑`
3. Scroll down → tap **"Add to Home Screen"**
4. Tap **Add**

### Windows / Mac / Linux (Chrome or Edge)
Look for the **⊕** icon in the address bar, or tap the **⬇ Install App** button in the header.

| Platform | Method | Result |
|----------|--------|--------|
| Android | Auto banner / header button | Home screen icon, full screen |
| iPhone | Safari → Share → Add to Home Screen | Home screen icon, no browser bar |
| Windows | Chrome/Edge address bar ⊕ | Desktop app with taskbar icon |
| Mac | Chrome/Edge address bar ⊕ | Standalone app in Dock |
| iPad | Safari share menu | Full screen landscape support |

---

## 🎨 Features

### 🖌️ 16 Drawing Tools

| Tool | Key | Description |
|------|-----|-------------|
| **Pen** | `P` | Smooth continuous freehand lines |
| **Pencil** | `N` | Textured, semi-transparent sketchy strokes |
| **Brush** | `B` | Dynamic — thins at speed, widens slow |
| **Marker** | `M` | Wide flat semi-opaque strokes like a highlighter |
| **Spray** | `A` | Airbrush particle effect with adjustable spread |
| **Gravity Brush** | `G` | Strokes that physically drip downward like wet ink |
| **Line** | `L` | Straight lines with live preview |
| **Rectangle** | `R` | Rectangles with optional fill and dash |
| **Circle** | `C` | Ellipses and circles with live preview |
| **Triangle** | `T` | Filled or outlined triangles |
| **Arrow** | — | Directional arrows with arrowhead |
| **Star** | — | 5-pointed stars, fillable |
| **Eraser** | `E` | True pixel-level erasure |
| **Fill** | `F` | Smart flood-fill by color similarity |
| **Eyedropper** | `I` | Pick any color directly off the canvas |
| **Text** | `X` | Click-to-place text with font controls |

---

### 🪞 Mirror Mode — 4 Types

Draw once and it reflects in real time. Perfect for portraits, mandalas, and symmetrical art.

| Mode | What it does |
|------|-------------|
| **Horizontal** | Mirrors left ↔ right across vertical axis |
| **Vertical** | Mirrors top ↔ bottom across horizontal axis |
| **4-Way** | All four quadrants simultaneously |
| **Radial** | 8-way rotational symmetry — perfect for mandalas |

Cyan guide lines show you the mirror axes while drawing.

---

### 🎮 Pixel Art Mode

- Snaps every stroke to a pixel grid
- Quick presets: **8px**, **16px**, **32px** cells
- Custom cell size slider (4px–40px)
- Neon yellow grid overlay shows cell boundaries
- Combines with any tool — pixel pen, pixel fill, pixel eraser

---

### 💧 Gravity Brush

A physics-based tool unique to SketchForge. Draw a stroke and it seeds dozens of paint drops that:
- Accelerate downward with simulated gravity
- Fade as they fall
- Create drip effects, watercolor bleeds, paint trails

Press `G` or select **Gravity** from the tool panel.

---

### 🗂️ Layer System

Full multi-layer support similar to Photoshop or Procreate.

- ♾️ Unlimited layers
- **11 blend modes:** Normal · Multiply · Screen · Overlay · Hard Light · Soft Light · Difference · Color Dodge · Color Burn · Hue · Luminosity
- Per-layer **opacity** slider (0–100%)
- Toggle **visibility** per layer 👁
- **Delete** any layer
- All layers **flatten** automatically on export

---

### ▶️ Speed Replay — Draw Timelapse

Record every stroke you make and watch your drawing come to life.

**How to use:**
1. Click **● Record** in the header (button turns pink)
2. Draw anything — every stroke is captured
3. Click **■ Stop** — a toast shows your recording is ready
4. Click **▶ Watch** or **▶ Replay** to open the playback viewer

**Playback controls:**
- Scrubable timeline
- Speed: `0.5×` · `1×` · `2×` · `5×`
- Shows stroke count, drawing time, and total points

---

### 🎯 Daily Drawing Challenge

Get a random drawing prompt and race the clock.

- **24 unique prompts** — sunsets, dragons, robots, cities, and more
- **5-minute countdown** timer displayed on the canvas
- Timer turns red in the final 60 seconds
- When time runs out — Save dialog opens automatically so you can export your work

---

### 💾 Save / Export Options

| Format | Description |
|--------|-------------|
| **PNG** | Lossless, full quality (default) |
| **JPEG** | Compressed, smaller file size |
| **WebP** | Modern format — best quality/size ratio |
| **SVG** | Vector container (embeds PNG at native resolution) |

**Additional options:**
- 📋 **Copy to clipboard** — paste directly into messages, emails, or docs
- ↗ **Native share** — triggers phone's share sheet (WhatsApp, Instagram, etc.) on mobile
- 🔢 **Quality slider** for JPEG and WebP
- ✏️ **Custom filename**
- Live **file size estimate** before downloading

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Undo | `Ctrl + Z` |
| Redo | `Ctrl + Shift + Z` |
| Save dialog | `Ctrl + S` |
| Brush size smaller | `[` |
| Brush size larger | `]` |
| Clear active layer | `Delete` |
| **Pen** | `P` |
| **Pencil** | `N` |
| **Brush** | `B` |
| **Marker** | `M` |
| **Spray** | `A` |
| **Gravity** | `G` |
| **Line** | `L` |
| **Rectangle** | `R` |
| **Circle** | `C` |
| **Triangle** | `T` |
| **Eraser** | `E` |
| **Fill** | `F` |
| **Eyedropper** | `I` |
| **Text** | `X` |

---

## 📱 Mobile Experience

SketchForge is built mobile-first. On phones and tablets:

- **Bottom toolbar** with the most-used tools — thumb-friendly
- **Slide-up sheet** for all tools, colors, settings, mirror mode, pixel art, and recording
- **Pinch-to-zoom** with two fingers
- **No scroll interference** — canvas captures all touch events
- **Full-screen mode** when installed as PWA (no browser bars)
- **Portrait and landscape** both work

---

## 🔌 Offline Support

Once installed or visited once, SketchForge works **completely without internet:**

- App shell cached by service worker on first load
- Google Fonts cached for offline use
- All drawing, layers, tools work offline
- A subtle badge appears when offline: `⚡ Offline — app works without internet`
- Auto-updates silently when back online

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Drawing engine | HTML5 Canvas API (2D context) |
| Language | Vanilla JavaScript — zero dependencies |
| Styling | CSS3 — custom neon noir design system |
| PWA | Service Worker + Web App Manifest |
| Install | beforeinstallprompt API (Chrome/Edge/Android) |
| Clipboard | Clipboard API |
| Share | Web Share API |
| Fonts | Google Fonts (Bebas Neue + DM Mono) |

**Bundle size:** ~65KB (one HTML file) + ~2KB (manifest) + ~3KB (service worker)

---

## 📁 File Structure

```
sketchforge/
├── index.html      ← Entire app (HTML + CSS + JS)
├── manifest.json   ← PWA identity, icons, colors
├── sw.js           ← Service worker (offline cache)
└── README.md       ← This file
```

That's the whole project. Four files. No `node_modules`. No build step.

---

## 🚀 Deployment

### GitHub Pages (free, permanent)
```bash
# 1. Create a repo on github.com
# 2. Upload all 4 files
# 3. Settings → Pages → Branch: main → Save
# → Live at: https://yourusername.github.io/sketchforge
```

### Vercel (fastest CDN, auto-deploy)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project folder
cd sketchforge
vercel

# Or: drag & drop the folder at vercel.com/new
```

### Netlify (drag & drop)
```
1. Go to netlify.com
2. Drag the entire sketchforge/ folder onto the dashboard
3. Done — live in ~15 seconds
```

### Any static host
Since it's a pure static site, it works on:
- GitHub Pages ✅
- Vercel ✅
- Netlify ✅
- Cloudflare Pages ✅
- Firebase Hosting ✅
- Any web server that serves HTML files ✅

---

## 🔧 PWA Checklist

| Requirement | Status |
|-------------|--------|
| HTTPS | ✅ (provided by all free hosts above) |
| Web App Manifest | ✅ `manifest.json` |
| Service Worker | ✅ `sw.js` |
| Installable on Android | ✅ Auto banner + header button |
| Installable on iOS | ✅ Add to Home Screen guide |
| Installable on Desktop | ✅ Address bar prompt |
| Works Offline | ✅ Full canvas functionality cached |
| Responsive | ✅ Mobile + tablet + desktop |
| Standalone display | ✅ No browser UI when installed |

---

## 🤝 Contributing

Pull requests are welcome. Ideas for future features:

- [ ] GIF export of speed replay
- [ ] Collaborative real-time drawing (WebSockets)
- [ ] AI "finish my sketch" using Claude API
- [ ] Animation timeline (frame-by-frame)
- [ ] Custom brush stamp creator
- [ ] Cloud save / gallery

**To contribute:**
```bash
# 1. Fork the repo
# 2. Make your changes to index.html
# 3. Test locally with: npx serve .
# 4. Open a pull request
```

---

## 📄 License

MIT License — free to use, modify, and distribute for any purpose.

---

<div align="center">

<br/>

Built with ⚡ — pure HTML, CSS and JS — zero dependencies

**[⭐ Star this repo](https://github.com/yourusername/sketchforge)** if SketchForge helped you create something!

<br/>

`draw` · `mirror` · `layer` · `record` · `install` · `offline` · `free`

</div>