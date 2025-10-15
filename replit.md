# Amani Construction - Static Marketing Website

## Project Overview
This is a static, responsive marketing website for Amani Construction, a construction services company in Harare, Zimbabwe. The site showcases their services including kitchen renovations, waterproofing, tiling, painting, paving, interior design, and more.

## Tech Stack
- **Frontend**: Static HTML5 with Tailwind CSS (via CDN)
- **Server**: Node.js with `serve` package for static file serving
- **Deployment**: Configured for Replit autoscale deployment

## Project Structure
```
/
├── index.html              # Main landing page
├── services/              # Service detail pages
│   ├── kitchen-renovations.html
│   ├── waterproofing.html
│   ├── tiling.html
│   ├── painting.html
│   ├── paving.html
│   └── interior-design.html
├── assets/                # Static assets
│   ├── amani-logo.svg
│   ├── favicon.svg
│   ├── styles.css
│   └── free-home-renovation-guide.pdf
├── poor-to-great-forge/   # Separate web app (not currently in use)
└── package.json           # Node.js dependencies
```

## Replit Setup (Completed)
- ✅ Node.js 20 installed
- ✅ Static file server (`serve`) installed
- ✅ Workflow configured to serve on port 5000
- ✅ Deployment configuration set (autoscale)
- ✅ .gitignore includes node_modules

## Running Locally
The website is automatically served on port 5000 via the "Static Website" workflow.

## Features
- Responsive design with mobile menu
- Service portfolio with filtering
- Contact form (Netlify-ready with `data-netlify="true"`)
- Testimonials slider
- SEO optimized with meta tags, Open Graph, and JSON-LD structured data
- Lazy-loading images
- Google Analytics (GA4) placeholder
- Sitemap and robots.txt included

## Deployment
The site is configured for Replit's autoscale deployment, which is perfect for static websites. When published, it will automatically serve the static files on the Replit domain.

## Original Deployment Target
This site was originally designed for Netlify deployment. The following files support Netlify features but work fine on Replit:
- `netlify.toml` - Netlify configuration
- `_headers` - Security headers
- `_redirects` - URL redirects
- Contact form with `data-netlify="true"` attribute

## Recent Changes (Oct 15, 2025)
- Configured for Replit environment
- Set up Node.js static file server
- Created workflow to serve on port 5000
- Configured autoscale deployment
