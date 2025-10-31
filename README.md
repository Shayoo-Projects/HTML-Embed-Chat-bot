# Google Apps Script Embed (Vite Static Site)

This project demonstrates how to embed a Google Apps Script web app in a static site using Vite, with the script URL managed via a `.env` file for easy configuration.

---

## Features
- **Vite-powered static site**
- **Google Apps Script URL via `.env`**
- **Minimal code: iframe fills the whole page**
- **Ready to deploy on Render, Netlify, Vercel, GitHub Pages, etc.**

---

## Quick Start

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd Apps-Script-Html-Embed
npm install
```

### 2. Configure the Google Apps Script URL
Create a `.env` file in the project root:
```
VITE_GSCRIPT_URL=https://script.google.com/macros/s/AKfycbx-nklIvBet4MIK7n474PctSgTQyiTUrUmIWpKse1KminVajUFev8TDvUSreUlRskGqYg/exec
```

### 3. Run Locally
```bash
npm run dev
```
Open the local URL (usually http://localhost:5173) to preview.

### 4. Build for Production
```bash
npm run build
```
The static site will be in the `dist/` folder.

---

### ⚡️ Deploying on Render (Recommended Settings)

In your Render Static Site settings, use:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

**Why?**
- The build command ensures Vite generates your static site into the `dist` folder.
- Render serves your site from the `dist` directory after building.

---

### 5. Deploy
Upload the contents of `dist/` to any static host:
- **Render**: Set Publish Directory to `dist` (see above)
- **Netlify/Vercel**: Drag and drop or connect your repo
- **GitHub Pages**: Use `dist/` as your site root

---

## Project Structure
```
Apps-Script-Html-Embed/
  ├── .env          # Google Apps Script URL (not committed)
  ├── .gitignore    # Ignores node_modules, dist, .env, etc.
  ├── index.html    # Minimal HTML, loads src/main.js
  ├── package.json  # Vite config and scripts
  └── src/
      └── main.js   # JS that inserts the iframe using the env variable
```

---

## How it Works
- The iframe source is set using `import.meta.env.VITE_GSCRIPT_URL` in `src/main.js`.
- The iframe covers the entire page.
- The `.env` file is **not** committed (see `.gitignore`).
- Vite replaces the env variable at build time, so the output is fully static.

---

## Customization
- To change the embedded script, just update `.env` and rebuild.
- You can add CSS, loading spinners, or error handling in `main.js` or `index.html` as needed.

---

## Security Note
- **Never commit your `.env` file** if it contains sensitive URLs or keys.

---

## License
MIT

2. Click **New +** → **Static Site**.
3. Connect your GitHub repo.
4. Configure:
   - **Name:** (your choice)
   - **Build Command:** *(leave blank)*
   - **Publish Directory:** `.` (just a dot)
5. Click **Create Static Site**.

Render will deploy your HTML page and give you a public URL!

---

## Project Structure
```
Maketing-appscript/
  ├── index.html      # Main HTML page with embedded Google Apps Script
  ├── README.md       # This file
  └── (optional: favicon, images, css, etc.)
```

---

## Customization
- **Change the script URL**: Edit the `src` attribute of the `<iframe>` in `index.html`
- **Modify styles**: Edit the `<style>` section in `index.html`
- **Add assets**: Add images, CSS, or JS files as needed

---

## Troubleshooting
- **Script not loading**: Ensure your Google Apps Script is deployed as a web app and set to "Anyone" access
- **CORS issues**: Google Apps Script should handle CORS automatically when embedded in an iframe
- **Mobile display issues**: The page is responsive, but you can adjust the CSS if needed

---


