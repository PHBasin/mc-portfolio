# 📸 Portfolio Maxime Colin

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![Tech](https://img.shields.io/badge/Stack-HTML%20%7C%20Tailwind%20%7C%20AlpineJS-blue?style=flat-square)

### 🌍 **[Access Live Website](https://phbasin.github.io/mc-portfolio/)**

A high-performance static portfolio built for speed and simplicity.

---

## 🚀 Features

*   **⚡️ Static Power:** Fully static architecture. Zero backend. Deploys anywhere (`GitHub Pages`, `AWS S3`).
*   **🧩 Modular Design:** Header/Footer injected dynamically via **Alpine.js**. No copy-pasting HTML.
*   **📂 Centralized Data:**
    *   `categories.js` →  Gallery Content
    *   `gallery_images.js` → Auto-generated Manifest
    *   `awards.js` → Awards List

---

## 🏗 Project Architecture

```mermaid
graph TD
    B(Scripts) -->|Scan| A[Assets Folder]
    B -->|Generate| C[gallery_images.js]
    C -->|Load| D[Gallery Page]
    E[Categories.js] -->|Define| F[Index & Navigation]
    G[Layout.js] -->|Inject| H[Header & Footer]
```

## 📂 Directory Structure

```plaintext
📦 mc-portfolio
 ┣ 📂 assets
 ┃ ┣ 📂 gallery                        # Categories
 ┃ ┗ 📂 awards                         # Trophy images
 ┣ 📂 scripts
 ┃ ┣ 📜 generate-gallery-manifest.js   # Scans folder -> Updates JS
 ┣ 📂 src
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📜 categories.js                # The "Database"
 ┃ ┃ ┣ 📜 gallery_images.js            # Generated file list
 ┃ ┃ ┗ 📜 layout.js                    # Shared components (header & footer)
 ┃ ┗ 📜 input.css                      # Tailwind Source
 ┗ 📜 *.html                           # Static Pages
```

---

## 🛠 Development

### 1️⃣ Install
```bash
npm install
```

### 2️⃣ Watch Mode
```bash
npm run watch:css
```

### 3️⃣ Update the website manifest
Added new photos to `assets/gallery/`? Just Run:

```bash
node scripts/generate-gallery-manifest.js
```

---

## 🚀 Deployment

The project auto-deploys to **GitHub Pages** 🌐.

| Workflow | Trigger | Source |
| :--- | :--- | :--- |
| `.github/workflows/deploy.yml` | `git push origin main` | Root Directory (`.`) |
