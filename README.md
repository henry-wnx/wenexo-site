# Wenexo Website

A clean, professional website for Wenexo consulting practice.

## Files

```
wenexo-website/
├── index.html      # Homepage (one-page scroll)
├── about.html      # About page (full narrative)
├── contact.html    # Contact page with calendar placeholder
├── styles.css      # All styles
├── script.js       # Navigation + animations
└── README.md       # This file
```

## How to Preview Locally

### Option 1: Just Open the File
Double-click `index.html` to open in your browser. Note: Some features may not work perfectly this way.

### Option 2: Use VS Code / Cursor Live Server (Recommended)
1. Open the folder in Cursor
2. Install "Live Server" extension if you haven't
3. Right-click `index.html` → "Open with Live Server"
4. Your site opens at `http://localhost:5500`

### Option 3: Python Simple Server
```bash
cd wenexo-website
python3 -m http.server 8000
# Open http://localhost:8000
```

## How to Deploy

### Option A: Netlify (Recommended - Free)
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Drag and drop the entire `wenexo-website` folder onto the Netlify dashboard
3. Done! You get a URL like `random-name.netlify.app`
4. Add your domain: Site Settings → Domain Management → Add custom domain
5. Point `wenexo.com` DNS to Netlify (they provide instructions)

### Option B: GitHub Pages (Free)
1. Create a GitHub account if you don't have one
2. Create a new repository called `wenexo-website`
3. Upload all files to the repository
4. Go to Settings → Pages → Select "main" branch
5. Your site will be at `yourusername.github.io/wenexo-website`
6. Add custom domain in the same settings

### Option C: Vercel (Free)
Similar to Netlify - drag and drop or connect to GitHub.

## To Do Before Launch

### 1. Add Calendly Embed
1. Create account at [calendly.com](https://calendly.com)
2. Create a "Discovery Call" event (30 min)
3. Get the embed code: Share → Add to Website → Inline Embed
4. In `contact.html`, replace the calendar placeholder div with the embed code

### 2. Verify LinkedIn URL
The site uses `linkedin.com/in/htrejgier` - verify this is correct.

### 3. Add Real Favicon (Optional)
Replace the simple "W" favicon with your own:
1. Create a 32x32 PNG icon
2. Save as `favicon.png` in the folder
3. Update the `<link rel="icon">` in all HTML files

### 4. Add Google Analytics (Optional)
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking code
3. Add before closing `</head>` tag in all HTML files

## Customization Quick Reference

### Colors (in styles.css)
```css
--navy: #1e3a5f;        /* Main brand color */
--navy-dark: #152a45;   /* Darker navy for hover */
--accent: #3d7ea6;      /* Accent blue */
```

### Fonts
Using Google Fonts:
- Headlines: Source Serif 4 (sophisticated, credibility)
- Body: Inter (clean, readable)

### Spacing
```css
--section-padding: 5rem 1.5rem;         /* Desktop */
--section-padding-mobile: 3rem 1.25rem; /* Mobile */
```

## Content Structure

### Homepage Sections
1. Hero - Main headline + CTA
2. Who I Help - Israeli, LatAm, Post-Seed to Series B
3. Augmented Execution - How AI amplifies experience (key differentiator)
4. What You Get - BD Infrastructure, Product-Market Fit, Operational Foundation
5. Track Record - Corporate (2001-2017), Israel (2018-2024), Current (2024+)
6. Availability - CTA section

### About Page Sections
1. The Journey (Carnival story, Gemalto years)
2. The Israel Chapter
3. The AI Revelation
4. Today
5. Track Record
6. How I Work (Augmented Execution, What's Included/Not Included)
7. Why Wenexo

## Need Help?

The site is intentionally simple HTML/CSS/JS - no frameworks, no build process. This means:
- Easy to edit in any text editor
- Fast loading
- Easy to deploy anywhere
- Easy to maintain

Any web developer (or AI assistant) can help you modify this.

---

**Ship it. Get traffic from LinkedIn. Convert visitors to calls. Build the pipeline.**
