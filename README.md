# Arun Gaikwad — AI Thought Leader (Portfolio SPA)

A minimal, executive-style portfolio website built as a **React + Vite SPA** designed to deploy cleanly on **GitHub Pages**.

## What you get
- Home (hero + credibility strip + photos + CTAs)
- About (placeholders)
- Case Studies (anonymized, structured JSON)
- Articles (Markdown, tag filters, opens inside the site)
- AI Lab / Operating Manual / Now / Resources
- SEO basics: metadata, robots.txt, sitemap.xml (generated)
- GitHub Pages SPA routing workaround (404.html + index.html script)
- Optional admin at `/admin` (Decap CMS config included; requires OAuth proxy to actually log in)

---

## Prerequisites (do not skip)
1. **Node.js 20+** installed  
   - Check: `node -v` should be `v20.x` or higher  
2. **npm** installed  
   - Check: `npm -v`

---

## Run locally
```bash
npm install
npm run dev
```

Then open the URL Vite prints in the terminal (commonly `http://localhost:5173`).

---

## Build locally
```bash
npm run build
npm run preview
```

Preview prints a local URL to validate the production build.

---

## Content editing (simple system)
### Site settings
Edit:
- `src/data/site.json`

### Case studies
Edit:
- `src/data/case-studies.json`

### Articles (Markdown)
Add or edit Markdown files here:
- `src/content/articles/*.md`

Each article uses frontmatter:
```md
---
title: "Title"
date: "2026-02-11T13:00:00Z"
tags: ["Governance", "Delivery"]
summary: "Short summary"
sourceUrl: "https://optional-link-to-original"
---
Body...
```

---

## GitHub Pages deployment (recommended)
This repo includes a GitHub Actions workflow:
- `.github/workflows/deploy.yml`

### Steps
1. Create a GitHub repo named: `arungaikwad-AIThoughtLeader`
2. Push this code to `main`
3. In GitHub:
   - **Settings → Pages**
   - **Build and deployment → Source: GitHub Actions**
4. Push any commit to `main` (or run the workflow manually)

When the workflow completes, your site will be available at:
`https://<YOUR_GITHUB_USERNAME>.github.io/arungaikwad-AIThoughtLeader/`

---

## Important: base path
This project is configured as a GitHub Pages *project site* with:
- `vite.config.ts` → `base: '/arungaikwad-AIThoughtLeader/'`

If you rename the repo, you **must** update `vite.config.ts` accordingly.

---

## Sitemap + robots
This project generates sitemap and updates robots automatically.

### Generate locally
```bash
GH_USERNAME=<YOUR_GITHUB_USERNAME> npm run sitemap
```

Outputs:
- `public/sitemap.xml`
- updates `public/robots.txt` with the correct sitemap URL

### Generate in GitHub Actions
The workflow already does:
`GH_USERNAME=${{ github.repository_owner }} npm run sitemap`

---

## SPA routing on GitHub Pages (why 404.html exists)
GitHub Pages does not support server-side rewrite rules.  
To make deep links work (like `/articles/my-post`), this project includes:
- `public/404.html` (redirects to `/?/path`)
- `index.html` script (restores the path)

This is required for SPA routing on GitHub Pages.

---

## Admin (`/admin`) note (non-technical editing)
The folder exists:
- `public/admin/index.html`
- `public/admin/config.yml`

But GitHub Pages is static hosting. For Decap CMS auth you usually need an **OAuth proxy**.
If you do not set up an OAuth proxy, `/admin` will load but **cannot authenticate**.

If you want the simplest path: edit JSON + Markdown directly in GitHub.

---

## Replace placeholder images
Replace these files with real images:
- `public/images/uploads/banner-placeholder.jpg`
- `public/images/uploads/headshot-placeholder.jpg`

And keep the paths in:
- `src/data/site.json`

---

## Troubleshooting
- If you see blank page after deploy:
  - confirm repo name matches Vite base path in `vite.config.ts`
- If deep links 404:
  - confirm `public/404.html` exists in repo and is deployed
- If articles list is empty:
  - confirm `.md` files exist under `src/content/articles/`

---

## License
Personal portfolio project. Use freely for your own portfolio.
