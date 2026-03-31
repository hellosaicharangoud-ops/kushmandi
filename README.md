# Kush Mandi Restaurant Website

A modern, elegant website for Kush Mandi - an authentic Mandi restaurant in Gachibowli, Hyderabad.

## 📁 Project Structure

```
kush-mandi/
│
├── index.html          # Main homepage (all sections included)
├── css/
│   └── style.css       # Complete styling
├── js/
│   └── script.js       # All JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start Guide

### Option 1: Using VS Code with Live Server (Recommended)

1. **Open VS Code**

2. **Open the folder**:
   - File → Open Folder
   - Select the `kush-mandi` folder

3. **Install Live Server Extension**:
   - Click Extensions icon (Ctrl+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

4. **Launch the website**:
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Website opens automatically at `http://127.0.0.1:5500`

### Option 2: Direct Browser Opening

1. Navigate to the `kush-mandi` folder
2. Double-click `index.html`
3. Website opens in your default browser

## 🎨 Website Sections

### 1. Hero Section
- Dark, elegant background with overlay
- 4.0 Rating badge
- Main headline with gold accent
- Two CTA buttons (View Menu, Reserve Table)

### 2. Signature Dishes
- Grid of 4 signature dishes with images
- Price badges on each dish
- Hover effects for interactivity

### 3. About ("Where Flavor Meets Comfort")
- Compelling restaurant story
- Key statistics (5+ Years, 10,000+ Guests, 100% Fresh)
- Authentic Recipes highlight

### 4. Testimonials ("Loved by Locals")
- 3 customer reviews with ratings
- Google review badges
- Real customer names and feedback

### 5. Visit Us Section
- Address with location icon
- Operating hours (Dine-in & Takeout)
- Contact phone number
- "Get Directions" button

### 6. Footer
- Company description
- Quick links navigation
- Social media links
- Copyright information

## 🎨 Color Palette

```css
Primary Black:  #0D0D0D
Accent Gold:    #D4A574
Text White:     #FFFFFF
Text Gray:      #999999
Light Gray:     #CCCCCC
```

## 🔧 Customization Guide

### Changing Restaurant Information

**Phone Number:**
```html
<!-- In index.html, search for: -->
<a href="tel:+919392201156">+91 93922 01156</a>

<!-- Update both href and display text -->
```

**Address:**
```html
<!-- In index.html, Visit Us section: -->
<p>
    Building 12&13, Sri Balaji Complex,<br>
    1st Floor,<br>
    Gachibowli Rd, Hyderabad
</p>
```

**Operating Hours:**
```html
<!-- In index.html: -->
<div class="hours-item">
    <span>Dine-in:</span>
    <span>11:00 AM – 11:00 PM</span>
</div>
```

### Updating Menu Items

**To add/edit dishes** (in index.html, around line 95):

```html
<div class="dish-card">
    <div class="dish-image">
        <img src="YOUR_IMAGE_URL" alt="Dish Name">
        <span class="price-badge">from ₹399</span>
    </div>
    <div class="dish-info">
        <h3>Dish Name</h3>
        <p>Dish description goes here.</p>
    </div>
</div>
```

**Image Sources:**
- Use Unsplash URLs (free stock photos)
- Or add your own images to an `images` folder
- Update `src` attribute accordingly

### Changing Colors

Edit `css/style.css` (lines 10-16):

```css
:root {
    --primary-black: #0D0D0D;     /* Main dark background */
    --accent-gold: #D4A574;        /* Gold accent color */
    --text-white: #FFFFFF;         /* White text */
    --text-gray: #999999;          /* Gray text */
}
```

### Adding Your Own Images

1. **Create images folder**:
   ```
   kush-mandi/
   ├── images/
   │   ├── chicken-mandi.jpg
   │   ├── mutton-mandi.jpg
   │   └── hero-bg.jpg
   ```

2. **Update image references**:
   ```html
   <img src="images/chicken-mandi.jpg" alt="Chicken Mandi">
   ```

3. **Change hero background** (in css/style.css, line 140):
   ```css
   .hero {
       background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                   url('../images/hero-bg.jpg') center/cover;
   }
   ```

### Social Media Links

Update in `js/script.js` (around line 160):

```javascript
const socialLinks = {
    instagram: 'https://instagram.com/your_handle',
    facebook: 'https://facebook.com/your_page',
    zomato: 'https://zomato.com/your_restaurant',
    swiggy: 'https://swiggy.com/your_restaurant'
};
```

### Google Maps Integration

In index.html (Visit Us section):

**Current:** "Get Directions" button links to Google Maps search

**To customize:**
1. Get your exact Google Maps URL
2. Replace in the button:
   ```html
   <a href="YOUR_GOOGLE_MAPS_URL" target="_blank" class="btn btn-primary btn-large">
       Get Directions
   </a>
   ```

**To embed a map:**
Add below the Visit Us section:
```html
<div class="map-container" style="margin-top: 40px;">
    <iframe 
        src="YOUR_GOOGLE_MAPS_EMBED_URL"
        width="100%" 
        height="450" 
        style="border:0; border-radius: 12px;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

## 📱 Features Included

### Interactive Elements
✅ Mobile-responsive hamburger menu  
✅ Smooth scroll navigation  
✅ Active link highlighting  
✅ Hover effects on dishes and buttons  
✅ Scroll-to-top button  
✅ Parallax hero effect  
✅ Animated elements on scroll  
✅ Clickable phone numbers  
✅ Get Directions button  

### Responsive Design
✅ Desktop (1200px+)  
✅ Tablet (768px - 1199px)  
✅ Mobile (< 768px)  

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create GitHub account
2. Create new repository: `kush-mandi-website`
3. Upload all files
4. Go to Settings → Pages
5. Select main branch → Save
6. Site live at: `https://yourusername.github.io/kush-mandi-website`

### Option 2: Netlify (Free, Easy)
1. Go to [Netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag and drop your `kush-mandi` folder
4. Instant deployment!
5. Get free subdomain: `your-site.netlify.app`

### Option 3: Vercel (Free)
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import project
4. Auto-deploy
5. Get subdomain: `your-site.vercel.app`

### Option 4: Traditional Hosting
1. Buy hosting (Hostinger, Bluehost, etc.)
2. Upload files via FTP or cPanel
3. Put in `public_html` folder
4. Access via your domain

## 📦 Adding More Features

### Add a Reservation Form

Add after the Visit Us section:

```html
<section class="reservation-section">
    <div class="container">
        <h2>Reserve a Table</h2>
        <form class="reservation-form">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="tel" name="phone" placeholder="Phone Number" required>
            <input type="email" name="email" placeholder="Email">
            <input type="date" name="date" required>
            <input type="time" name="time" required>
            <select name="guests">
                <option>Number of Guests</option>
                <option>1-2</option>
                <option>3-4</option>
                <option>5+</option>
            </select>
            <button type="submit" class="btn btn-primary">Book Now</button>
        </form>
    </div>
</section>
```

### Add Gallery Section

```html
<section class="gallery-section" id="gallery">
    <div class="container">
        <h2>Gallery</h2>
        <div class="gallery-grid">
            <img src="images/gallery1.jpg" alt="Restaurant Interior">
            <img src="images/gallery2.jpg" alt="Food">
            <img src="images/gallery3.jpg" alt="Dining">
            <!-- Add more images -->
        </div>
    </div>
</section>
```

Add to CSS:
```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.gallery-grid img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery-grid img:hover {
    transform: scale(1.05);
}
```

### Add Online Ordering Integration

For Zomato/Swiggy integration, add this button:

```html
<div class="order-online">
    <a href="YOUR_ZOMATO_URL" class="btn btn-primary">Order on Zomato</a>
    <a href="YOUR_SWIGGY_URL" class="btn btn-primary">Order on Swiggy</a>
</div>
```

## 🔍 SEO Optimization

### Add Meta Tags

In `<head>` section of index.html:

```html
<meta name="description" content="Kush Mandi - Authentic Mandi Restaurant in Gachibowli, Hyderabad. Experience the true taste of traditional mandi, biryani, and seafood delights.">
<meta name="keywords" content="mandi, restaurant, Hyderabad, Gachibowli, biryani, seafood, authentic food">
<meta name="author" content="Kush Mandi">

<!-- Open Graph for Social Media -->
<meta property="og:title" content="Kush Mandi | Authentic Mandi Restaurant">
<meta property="og:description" content="Experience authentic mandi flavors in Gachibowli">
<meta property="og:image" content="YOUR_IMAGE_URL">
<meta property="og:url" content="YOUR_WEBSITE_URL">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Kush Mandi Restaurant">
<meta name="twitter:description" content="Authentic Mandi in Hyderabad">
```

### Add Favicon

1. Create or get a favicon (logo icon)
2. Save as `favicon.ico` in root folder
3. Add to `<head>`:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   ```

## 📞 Support & Contact

**Restaurant Contact:**
- Phone: +91 93922 01156
- Location: Gachibowli, Hyderabad

## 🐛 Troubleshooting

### Styles not loading?
- Check file path: `css/style.css`
- Clear browser cache (Ctrl+F5)
- Verify CSS folder exists

### JavaScript not working?
- Open browser console (F12)
- Check for errors
- Ensure `js/script.js` path is correct

### Images not showing?
- Verify image URLs are correct
- Check internet connection (for external URLs)
- Ensure image files exist in correct folder

### Mobile menu not working?
- Clear cache and reload
- Check browser console for errors
- Verify JavaScript is loaded

## 📱 Browser Compatibility

✅ Chrome (recommended)  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Opera  
⚠️ Internet Explorer (limited support)  

## 📋 Checklist Before Going Live

- [ ] Update phone number
- [ ] Update address
- [ ] Update operating hours
- [ ] Add your food images
- [ ] Update social media links
- [ ] Test all buttons and links
- [ ] Test on mobile device
- [ ] Add Google Maps embed
- [ ] Add favicon
- [ ] Test reservation buttons
- [ ] Verify all sections load properly
- [ ] Check spelling and grammar
- [ ] Test on different browsers
- [ ] Set up Google Analytics (optional)

## 🎯 Next Steps

1. ✅ Open in VS Code
2. ✅ Test with Live Server
3. ⬜ Add your actual content
4. ⬜ Replace placeholder images
5. ⬜ Update contact information
6. ⬜ Test all features
7. ⬜ Deploy to hosting
8. ⬜ Connect custom domain
9. ⬜ Submit to Google Search Console
10. ⬜ Share on social media

## 📄 License

This website template is provided for use by Kush Mandi restaurant.

---

**Built with ❤️ for Kush Mandi**

*Serving authentic mandi since 2019*

For technical support with this template, check the troubleshooting section above.
