# Amani Construction — Premium Marketing Website

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![Status](https://img.shields.io/badge/status-production%20ready-success.svg)
![Platform](https://img.shields.io/badge/platform-Netlify-00C7B7.svg)

> World-class marketing website for Zimbabwe's #1 construction and renovation company. Optimized for Google Ads lead generation.

## 🚀 Quick Start

### Deploy to Netlify

1. **Connect Repository**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Build Settings**
   - **Build command**: (leave blank - this is a static site)
   - **Publish directory**: `.` (root directory)
   - **Branch to deploy**: `main`

3. **Environment Variables** (Optional)
   Set these in Netlify dashboard under Site settings → Environment variables:
   ```
   WHATSAPP_NUMBER=263778105259
   CONTACT_EMAIL=build@amanizw.com
   ```

4. **Deploy!**
   - Click "Deploy site"
   - Your site will be live in seconds!

### Manual Deployment

Alternatively, drag and drop the entire project folder into Netlify's manual deploy interface.

## ✨ Features

### 🎯 Conversion-Optimized Design
- **Hero Section** with trust badges (4.9★ rating, 127+ reviews)
- **Clear CTAs** throughout the page for maximum conversions
- **Lead Magnet** - Free Home Renovation Guide download
- **Dual Contact Methods** - Form submissions + WhatsApp quick contact
- **Social Proof** - Client testimonials and project portfolio

### 📱 Mobile-First Responsive
- Optimized for all devices (mobile, tablet, desktop)
- Touch-friendly navigation and CTAs
- Fast loading with minimal dependencies

### 🔒 Security & Performance
- Security headers configured (XSS protection, content sniffing prevention)
- Optimized caching for static assets
- HTTPS enforced with HSTS
- Clean, semantic HTML5

### 📊 Analytics & Tracking
- Google Ads conversion tracking (ID: AW-17653858383)
- Netlify Analytics enabled
- Form submission tracking
- WhatsApp click tracking ready

### 📝 Netlify Forms Integration
- Contact form with spam protection (honeypot)
- Lead magnet form for guide downloads  
- Automatic form submission handling
- No server-side code required

## 🏗️ Services Offered

1. **Kitchen Renovations** - Custom kitchens & modern fittings
2. **Waterproofing** - Permanent leak protection
3. **Expert Tiling** - Floors, walls, splashbacks & patios
4. **Professional Painting** - Interior & exterior solutions
5. **Paving Solutions** - Driveways, patios & walkways
6. **Interior Design** - Modern, functional spaces
7. **Blinds & Curtain Rods** - Window treatments
8. **Aluminum Products** - Doors, windows & custom work

## 📁 Project Structure

```
amani-construction/
├── index.html                  # Main homepage (fully modernized)
├── thank-you.html             # Form confirmation page
├── _redirects                 # URL redirects configuration
├── _headers                   # Security & caching headers
├── netlify.toml              # Netlify deployment config
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Search engine directives
├── assets/
│   ├── amani-logo.svg        # Company logo
│   ├── styles.css            # Custom CSS
│   └── *.pdf                 # Downloadable resources
├── services/                 # Individual service pages
│   ├── kitchen-renovations.html
│   ├── waterproofing.html
│   ├── expert-tiling.html
│   ├── professional-painting.html
│   ├── paving-solutions.html
│   ├── interior-design.html
│   ├── blinds-and-curtain-rods.html
│   └── aluminum-products.html
└── replit.md                 # Project documentation
```

## 🔗 URL Structure

### Canonical Service URLs
All service pages follow this clean structure:
- `/services/kitchen-renovations.html`
- `/services/waterproofing.html`
- `/services/expert-tiling.html`
- And so on...

### Automatic Redirects
Old URLs automatically redirect to canonical versions (configured in `_redirects`):
- `/services/aluminium-products` → `/services/aluminum-products.html`
- `/services/curtain-rods-blinds` → `/services/blinds-and-curtain-rods.html`
- `/services/painting` → `/services/professional-painting.html`
- And more...

## 🎨 Design System

### Colors
- **Primary Blue**: #1e40af (headers, CTAs)
- **Secondary Blue**: #3b82f6 (accents)
- **Success Green**: #10b981 (WhatsApp)
- **Text**: Gray-900 for headings, Gray-600 for body

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300-900 for flexibility

### Components
- Modern gradient backgrounds
- Rounded corners (xl, 2xl, full)
- Shadow system for depth
- Smooth transitions and hover effects

## 📈 Google Ads Optimization

### Landing Page Best Practices
✅ Clear value proposition above the fold  
✅ Trust signals prominently displayed  
✅ Multiple conversion paths (form, phone, WhatsApp)  
✅ Fast loading time (<3s)  
✅ Mobile-optimized experience  
✅ Relevant keywords in headlines  

### Conversion Tracking Setup
```javascript
// Google Ads tag already configured in <head>
gtag('config', 'AW-17653858383');
```

## 🛠️ Technical Stack

- **HTML5** - Semantic, accessible markup
- **Tailwind CSS** - Utility-first CSS (via CDN for rapid development)
- **Vanilla JavaScript** - No framework dependencies
- **Netlify Forms** - Backend form handling
- **Google Fonts** - Inter typeface
- **SVG Icons** - Scalable graphics

## 📱 Contact Information

- **Phone**: [+263 77 810 5259](tel:+263778105259)
- **Email**: [build@amanizw.com](mailto:build@amanizw.com)
- **WhatsApp**: [Chat Now](https://wa.me/263778105259)
- **Office**: 49 Electra House, Samora Machel, Harare, Zimbabwe
- **Hours**: Mon-Fri 8AM-6PM, Sat 9AM-2PM

## 🚢 Deployment Checklist

Before going live, ensure:

- [ ] Google Ads tracking ID is correct
- [ ] WhatsApp number is updated
- [ ] Contact email is configured
- [ ] All service page links work
- [ ] Forms submit successfully
- [ ] Mobile experience is smooth
- [ ] SSL certificate is active
- [ ] Custom domain is configured (if applicable)
- [ ] Netlify Forms are enabled
- [ ] Analytics are tracking

## 🔄 Recent Updates

### Version 2.0 - October 2024
- ✨ Complete homepage redesign with modern, conversion-focused layout
- 🎯 Added lead magnet (Free Home Renovation Guide)
- 🔗 Fixed all broken links and duplicate pages
- 📱 Enhanced mobile responsiveness
- 🛡️ Configured security headers
- ⚡ Optimized performance and caching
- 🗺️ Updated sitemap for better SEO

## 🎯 Business Goals

1. **Lead Generation** - Convert Google Ads traffic into qualified leads
2. **Brand Authority** - Position as #1 construction company in Zimbabwe
3. **Trust Building** - Showcase 5-year warranty and on-time guarantee
4. **Service Showcase** - Highlight expertise across 8 service categories

## 🔮 Future Enhancements

### Phase 2 (Recommended)
- [ ] Convert Tailwind CDN to optimized build process
- [ ] Replace placeholder images with real project photos
- [ ] Add video testimonials
- [ ] Implement blog for content marketing
- [ ] Integrate CRM (e.g., HubSpot, Pipedrive)
- [ ] Add live chat widget
- [ ] Create case study pages with ROI metrics

### Phase 3 (Advanced)
- [ ] Multi-language support (English + Shona)
- [ ] Project cost calculator
- [ ] Customer portal for project tracking
- [ ] Before/after image galleries with sliders
- [ ] Online payment integration

## 📞 Support

For technical support or questions about this website:
- Check `replit.md` for detailed documentation
- Review Netlify dashboard for deployment status
- Test forms in Netlify Forms panel

---

**Built with ❤️ for Amani Construction**  
*Quality Craftsmanship Since 2010*

## 📄 License

Copyright © 2024 Amani Construction. All rights reserved.
