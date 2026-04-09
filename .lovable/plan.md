
# Bakingo Clone – Online Cake Delivery Website

## Overview
A fully detailed UI clone of Bakingo.com – an online cake ordering and delivery platform with a red/white brand theme, featuring a rich navigation system, hero carousel, product cards, and multiple homepage sections.

## Color & Design System
- **Primary Red**: `#E23744` (Bakingo signature red)
- **White background** with light pink/cream accents (`#FFF5F5`, `#FCF8F5`)
- **Font**: Clean sans-serif (Inter/Poppins)
- **Border radius**: Rounded cards and buttons
- **Shadows**: Subtle card shadows for product cards

---

## Pages & Components

### 1. Header / Navbar (sticky)
- **Top bar**: Logo (text "bakingo" in red cursive), "Delivering To" dropdown with location pin icon, search bar ("Search For Cakes, Occasion, Flavour And More..."), Track Order icon, Cart icon with badge, Login/Signup with user icon
- **Navigation bar**: Horizontal menu items – Cakes, Theme Cakes, By Relationship, Desserts, Birthday, Hampers (with "New" badge), Anniversary, Occasions, Customized Cakes
- **Mega dropdown menus** on hover for each nav item:
  - **Cakes**: 4-column layout with sections – Trending Cakes, By Type, By Flavours, Delivery Cities
  - **Theme Cakes**: Kids Cakes, Character Cakes, Grown Up Cakes, More Cakes
  - **By Relationship**: For Him, For Her columns
  - **Desserts**: Single column list (Jar Cakes, Pastries, Cheesecakes, Cupcakes, Brownies, Cookies, Tea Cakes)
  - **Birthday**: Birthday cakes by age milestones
  - **Hampers**: Gift hamper options
  - **Anniversary**: By anniversary year
  - **Occasions**: Festive Celebrations, Special Milestones

### 2. Hero Section – Image Carousel
- Full-width auto-sliding banner with dot indicators
- Multiple slides with cake imagery and CTAs
- "NEVER STOP WISHING" tagline with "CLASSIC CAKES" heading and red "ORDER NOW" button
- Navigation dots at bottom

### 3. Category Quick Links ("What will you wish for?")
- Section title: "What will you wish for?"
- 6 circular/rounded category cards in a horizontal row:
  - CLASSIC, GOURMET, DESIGNER, PHOTO CAKES, Desserts, Hampers
- Each with a round cake image and label below

### 4. Bestsellers Section ("India Loves")
- Section header with star icon: "india loves" + subtitle "Bestsellers from across the country"
- Horizontal scrollable product card grid (showing ~5-6 at a time with scroll arrows)
- **Product Card** design:
  - Square cake image with hover effect
  - Wishlist heart icon (top-right overlay)
  - Cake name
  - Price (₹549 format), strikethrough original price + discount % when applicable
  - Star rating (e.g., 4.9★) + review count
- "View All" link button at the end

### 5. Video Banner Section
- Full-width promotional banner image/video thumbnail
- Links to YouTube video

### 6. "Our Promise" Section
- Title: "our promise" + subtitle "There's no secret spell—only honest, hard work!"
- 4 promise cards in a row:
  - ON-TIME DELIVERY – "Because no one likes late surprises."
  - 500+ DESIGNS – "Wishes come in all shapes and sizes."
  - 2 CR+ ORDERS – "You can close your eyes and trust us."
  - BAKED FRESH – "Spreading smiles, one slice at a time."
- Each with an icon illustration

### 7. Occasion Reminder Banner
- Promotional banner for occasion reminders with "UNLOCK NOW" CTA

### 8. Instagram Feed Section ("What's In Your Heart?")
- Title: "What's In Your Heart?" + subtitle "A glimpse from our social world!"
- Grid of Instagram-style cake photos (scrollable gallery)

### 9. SEO Content Section
- Rich text content about Bakingo, cake delivery, flavors, etc.
- Collapsible "Read More" section

### 10. Footer
- Multi-column layout:
  - **Column 1**: Quick links (About Us, Contact Us, Blog, Sitemap, etc.)
  - **Column 2**: Categories (Cakes, Desserts, Theme Cakes)
  - **Column 3**: Popular cities for delivery
  - **Column 4**: Download app badges (App Store, Google Play)
- Social media icons (Facebook, Instagram, Twitter, YouTube)
- Payment method icons
- Copyright text

---

## Interactive Features (UI-only, no backend)
- Mega menu dropdowns on hover with smooth transitions
- Hero carousel with auto-play and dot navigation
- Product card hover effects (image zoom, wishlist heart toggle)
- Horizontal scroll for bestseller products with arrow buttons
- Search bar with focus animation
- Mobile-responsive hamburger menu
- Smooth scroll animations on section entry

## Data
- All product data, categories, and menu items hardcoded as mock data matching the original site's structure
- Use placeholder cake images (Unsplash food/cake photos) since we can't use Bakingo's CDN images directly

## File Structure
- `src/components/Header.tsx` – Top bar + nav + mega menus
- `src/components/HeroCarousel.tsx` – Banner slider
- `src/components/CategoryLinks.tsx` – "What will you wish for?" section
- `src/components/BestsellerSection.tsx` – Product cards carousel
- `src/components/ProductCard.tsx` – Individual cake card
- `src/components/PromiseSection.tsx` – Our Promise section
- `src/components/InstagramFeed.tsx` – Social gallery
- `src/components/Footer.tsx` – Site footer
- `src/components/MegaMenu.tsx` – Dropdown menu component
- `src/data/products.ts` – Mock cake data
- `src/data/menuData.ts` – Navigation menu structure
- `src/pages/Index.tsx` – Home page composing all sections
