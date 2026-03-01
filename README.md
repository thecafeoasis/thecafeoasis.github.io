# Café Oasis - Static Website

A beautiful, responsive static website for Café Oasis coffee shop featuring a landing page, menu display, and careers page.

## Files Included

- **index.html** - Landing page with hero section and menu preview
- **menu.html** - Full menu page with category tabs
- **careers.html** - Careers/We're Hiring page with job listings
- **styles.css** - All styling for the website
- **menu-data.js** - Menu items data
- **menu.js** - JavaScript for menu functionality
- **README.md** - This file

## Features

### Landing Page (index.html)
- Hero section with call-to-action buttons
- Feature highlights (Premium Beans, Sustainable, Fresh Daily)
- Menu category preview
- Responsive design

### Menu Page (menu.html)
- 8 menu categories with tabs:
  - Coffee
  - Frappe
  - Non-Coffee
  - Refreshment
  - Tea
  - Breakfast Combo (with time notice: 7-10:30am)
  - All-Day-Brunch
  - Bakery
- 52 menu items with pricing
- Interactive category filtering
- Responsive grid layout

### Careers Page (careers.html)
- 5 job listings with details:
  - Barista
  - Shift Manager
  - Pastry Chef
  - Customer Service Associate
  - Marketing Specialist
- Job requirements and salary ranges
- Contact information for applications

## Color Scheme

- **Primary Color**: #95A776 (Sage Green)
- **Accent Color**: #FFDB58 (Gold)
- **Text Color**: #828273 (Taupe)
- **Background**: #F5F5F5 (Light Gray)

## How to Use

1. Extract the zip file to your desired location
2. Open `index.html` in your web browser
3. Navigate between pages using the header navigation
4. No server or installation required - it's a fully static website

## Customization

### Changing Menu Items
Edit `menu-data.js` to add, remove, or modify menu items. Each item has:
- `id` - Unique identifier
- `name` - Item name
- `price` - Item price
- `category` - Category name

### Changing Colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
  --primary-color: #95A776;
  --accent-color: #FFDB58;
  --text-color: #828273;
  --light-bg: #F5F5F5;
}
```

### Changing Contact Information
Edit the footer section in each HTML file to update:
- Email address
- Phone number
- Social media links

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Design

The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small Mobile (< 480px)

## Deployment

You can deploy this website to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

Simply upload all files to your hosting service.

## License

© 2026 Café Oasis. All rights reserved.

## Support

For questions or modifications, please contact: info@cafeoasis.com
