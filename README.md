## Netlify Environment Variables

Set these in your Netlify dashboard for dynamic contact info:

- `WHATSAPP_NUMBER` (e.g. 263778105259)
- `CONTACT_EMAIL` (e.g. build@amanizw.com)

## Netlify Analytics

Netlify Analytics is enabled in `netlify.toml` for privacy-friendly traffic stats.
## Deploying with Git & Netlify

### 1. Initialize a Git repository (PowerShell)

```powershell
cd "<project-folder>"  # Replace with your actual folder path if needed
git init
git add .
git commit -m "Initial commit: Amani Construction Netlify site"
```

### 2. Create a new GitHub repo (in your browser)
- Go to https://github.com/new
- Name it (e.g. `amani-construction-site`), set to Public or Private, and **do not initialize with a README** (since you already have one).
- Copy the repo URL (e.g. `https://github.com/yourusername/amani-construction-site.git`)

### 3. Add the remote and push (PowerShell)

```powershell
git remote add origin https://github.com/yourusername/amani-construction-site.git
git branch -M main
git push -u origin main
```

### 4. Connect to Netlify
- In Netlify, click "Add new site" → "Import an existing project"
- Connect your GitHub account and select your new repo
- **Build command:** (leave blank)
- **Publish directory:** `/`
- Click "Deploy site"

### 5. Test your site
- Visit your Netlify URL (e.g. `https://amaniconstruction.netlify.app`)
- Submit a test form entry and check Netlify's Forms dashboard

---
# Amani Construction — Static Website

This folder contains a static, responsive marketing website for Amani Construction optimized for Netlify deployment.

Contents:
- `index.html` — The main page using Tailwind via CDN and some custom CSS in `assets/styles.css`.
- `assets/styles.css` — Small custom stylesheet.
- `netlify.toml` — Minimal Netlify config (static site; publish root).

Features implemented:
- Accessible, responsive navigation and mobile menu.
- Netlify-ready contact form (uses `data-netlify="true"`) so form submissions work when deployed to Netlify.
- Portfolio filtering, testimonial slider, and subtle UI transitions.
- SEO meta tags, Open Graph, and JSON-LD structured data.
- Lazy-loading images for better performance.

Recent improvements:
- Added a small SVG `assets/favicon.svg` and referenced it in `index.html`.
- Preloaded the hero image to improve Largest Contentful Paint (LCP).
- Added a floating CTA button (`#floating-cta`) for quick conversions.
- Added a `thank-you.html` page and wired the contact form to redirect there on successful submit (Netlify forms friendly).

Hero improvements:
- The hero now uses a responsive `<picture>` with `srcset` for multiple sizes and a preload to improve LCP. Replace placeholders with your real images (1600/1200/800 widths recommended).

Analytics:
- There's a commented Google Analytics (GA4) placeholder in `index.html`. Replace `MEASUREMENT_ID` and uncomment to enable tracking.

Netlify deployment extras:
- `sitemap.xml` is included at the site root for search engines.
- `robots.txt` references the sitemap and allows indexing.
- `_headers` contains recommended security headers and caching rules for Netlify. These will be applied automatically when you deploy to Netlify.

Deploying to Netlify:
1. Push the repository to GitHub (or GitLab/Bitbucket).
2. In Netlify, create a new site from Git and connect your repo. Branch: `main` (or whichever branch you use). Build command: _none_. Publish directory: `/`.
3. After the first successful deploy, visit `Site settings -> Forms` to confirm Netlify form submissions appear. Submit a test entry to confirm.

Optional: If you'd like, I can create and push a Git repository for you (I'll provide PowerShell commands and instructions — you'll run them locally). Or I can add image optimization assets next.

Deployment (quick):
1. Push this folder to a public Git provider (GitHub, GitLab, Bitbucket).
2. In Netlify, click "New site from Git" and connect your repository. Choose the branch and deploy. No build command required — publish directory should be `/`.

Or drag-and-drop:
1. Zip the project files or open the project folder.
2. Drag the folder into "Sites" → "Add new site" → "Deploy manually" on the Netlify app.

Notes — Netlify Forms:
- The contact form is configured to work with Netlify's built-in forms using `data-netlify="true"` and a hidden `form-name` input. You don't need a server.
- After your first deploy, visit your site and submit the form once to see it appear in the Netlify dashboard under Forms.

Customizations you might want next:
- Replace placeholder images with real project photos (use `loading="lazy"` and optimized sizes).
- Add a proper favicon and social images.
- Convert Tailwind to a build pipeline for PurgeCSS if you expand the site.

If you want, I can:
- Replace the placeholders with a small curated image set and optimize them.
- Create a Git repo and push these files for you (if you provide credentials or accept instructions).
