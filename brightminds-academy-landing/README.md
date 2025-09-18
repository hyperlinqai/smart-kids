# BrightMinds Academy Landing Page Theme

A complete WordPress landing page theme designed for educational platforms targeting parents of children ages 5-15. Features personalized learning programs, parent testimonials, and conversion-optimized design.

## Features

- 🎨 **Educational Color Palette**: #f5fcff, #ff914d, #c9e265, #68cef5, #ec104d
- 📱 **Mobile-First Responsive Design**
- ♿ **Accessibility Optimized** (WCAG 2.1 compliant)
- 🔍 **SEO Ready** with JSON-LD schema markup
- 📧 **Contact Form 7 Integration**
- 🎯 **Conversion Optimized** for educational services
- ⚡ **Performance Optimized** with lazy loading and optimized images

## Installation

### Step 1: Upload Theme

1. Download and zip the `brightminds-academy-landing` folder
2. Go to WordPress Admin → Appearance → Themes
3. Click "Add New" → "Upload Theme"
4. Upload the zip file and activate the theme

### Step 2: Required Plugins

Install and activate these plugins for full functionality:

#### Essential Plugins:
- **Contact Form 7** (Required for enrollment forms)
- **Yoast SEO** or **Rank Math** (For enhanced SEO)

#### Recommended Plugins:
- **ShortPixel Image Optimizer** (Image optimization)
- **WP Rocket** or **W3 Total Cache** (Caching)
- **Akismet** (Spam protection)
- **UpdraftPlus** (Backups)

### Step 3: Contact Form Setup

1. Install and activate Contact Form 7
2. Go to Contact → Contact Forms
3. Create a new form called "BrightMinds Enrollment Form"
4. Copy the form code from `contact-form-7-template.txt`
5. Paste the shortcode `[contact-form-7 id="X" title="BrightMinds Enrollment Form"]` where needed
6. Configure email settings to receive form submissions

### Step 4: Create Landing Page

#### Option 1: Use Page Template
1. Create a new page called "Landing Page"
2. Select "Landing Page" template from Page Attributes
3. Publish the page

#### Option 2: Use Gutenberg Blocks
1. Create a new page
2. Switch to HTML view in Gutenberg editor
3. Copy content from `gutenberg-blocks.html`
4. Paste and switch back to Visual editor
5. Customize content as needed

### Step 5: Menu Setup

1. Go to Appearance → Menus
2. Create a new menu called "Primary Menu"
3. Add pages: Home, Programs, About, Testimonials, Contact
4. Assign to "Primary Menu" location

### Step 6: Customize Content

1. Replace placeholder images with your own educational photos
2. Update contact information in footer.php
3. Modify testimonials and program descriptions
4. Add your school's actual contact details

## Theme Structure

```
brightminds-academy-landing/
├── style.css                           # Main stylesheet with theme header
├── functions.php                       # Theme functions and setup
├── index.php                          # Main template
├── page-landing.php                   # Landing page template
├── header.php                         # Header template
├── footer.php                         # Footer template
├── screenshot.png                     # Theme screenshot
├── assets/
│   └── images/                        # Educational stock images
├── templates/
│   └── partials/
│       ├── block-hero.php            # Hero section
│       ├── block-features.php        # Features section
│       ├── block-testimonials.php    # Testimonials section
│       ├── block-cta.php            # Call-to-action section
│       └── block-footer-cta.php     # Final CTA section
├── contact-form-7-template.txt       # Contact Form 7 setup code
├── gutenberg-blocks.html             # Gutenberg block markup
└── README.md                         # This file
```

## Customization

### Colors
The theme uses CSS custom properties for easy color customization. Edit the `:root` section in `style.css`:

```css
:root {
  --primary-light: #f5fcff;    /* Light blue background */
  --primary-orange: #ff914d;   /* Energetic orange for CTAs */
  --primary-green: #c9e265;    /* Fresh green for growth */
  --primary-blue: #68cef5;     /* Sky blue for trust */
  --primary-red: #ec104d;      /* Bold red for urgency */
}
```

### Content
- Edit section content in `templates/partials/` files
- Modify testimonials in `block-testimonials.php`
- Update program features in `block-features.php`
- Customize CTAs in `block-cta.php` and `block-footer-cta.php`

### Images
Replace images in `/assets/images/` folder with your own:
- Use high-quality educational photos
- Maintain similar aspect ratios
- Optimize for web (WebP format recommended)
- Include alt text for accessibility

## SEO Optimization

The theme includes comprehensive SEO features:

### Meta Tags
- Automatic title and description generation
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Schema Markup
- EducationalOrganization JSON-LD schema
- Course information markup
- Contact information schema

### Performance
- Lazy loading images
- Optimized CSS and JavaScript
- Minification ready
- Cache-friendly structure

## Analytics Integration

Add Google Analytics/GA4 tracking:

1. Install Google Analytics plugin or add tracking code to `functions.php`
2. The theme includes event tracking for:
   - Form submissions
   - CTA button clicks
   - Phone number clicks
   - Newsletter signups

Example tracking code in footer.php:
```javascript
gtag('event', 'enrollment_inquiry', {
    'event_category': 'conversion',
    'event_label': 'contact_form'
});
```

## Accessibility Features

- Skip links for keyboard navigation
- ARIA labels and attributes
- High contrast color ratios
- Screen reader friendly structure
- Keyboard navigation support
- Focus indicators
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari 12+
- Android Chrome 80+

## Performance Checklist

### After Installation:
- [ ] Install caching plugin
- [ ] Optimize images (use WebP format)
- [ ] Enable GZIP compression
- [ ] Minify CSS/JS
- [ ] Set up CDN (optional)
- [ ] Configure lazy loading
- [ ] Test mobile pagespeed

### SEO Checklist:
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business listing
- [ ] Configure social media meta tags
- [ ] Add structured data testing
- [ ] Check mobile-friendliness
- [ ] Verify page loading speed

## Support & Development

### Troubleshooting

**Contact Form not working:**
1. Ensure Contact Form 7 is installed and activated
2. Check form shortcode is correct
3. Verify email settings in WordPress
4. Test with anti-spam plugins disabled

**Images not displaying:**
1. Check file permissions on uploads folder
2. Verify image paths in template files
3. Ensure images are uploaded to correct directory

**Styling issues:**
1. Clear browser and plugin caches
2. Check for plugin conflicts
3. Verify CSS file is loading correctly

### Development Notes

- Built with WordPress 6.0+ compatibility
- Uses modern CSS Grid and Flexbox
- Mobile-first responsive approach
- Follows WordPress coding standards
- Includes security best practices

## License

This theme is designed for educational institutions and includes:
- Educational stock photos (Pexels license)
- Custom CSS and PHP code
- WordPress GPL v2 or later licensing

## Changelog

### Version 1.0
- Initial release
- Complete landing page functionality
- Contact Form 7 integration
- SEO optimization
- Accessibility features
- Mobile responsive design

---

**Need Help?** 
For support or customization requests, contact our development team or refer to WordPress documentation at https://wordpress.org/support/