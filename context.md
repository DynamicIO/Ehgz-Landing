Build a complete, production-ready landing page for a mobile app 
called "Ehgz" (Arabic: إحجز — meaning "Reserve/Book") using the 
following stack:

TECH STACK:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (all animations and transitions)
- next/font (Google Fonts — Syne for display, Inter for body)
- next/image (optimized images)
- Vercel deployment ready (vercel.json if needed)

---

BRAND:
- Name: Ehgz / إحجز
- Tagline: "Discover. Book. Experience."
- Tone: Premium, modern, warm, confident
- Colors:
  --black: #0A0805
  --gold: #C9973A
  --gold-light: #E8B860
  --gold-dim: #8B6520
  --sand: #F2E8D9
  --white: #FDFAF6
  --card-bg: #111008
  --border: rgba(201,151,58,0.15)
- Fonts: Syne (800 weight for display/headings), 
  Inter (300/400/600 for body)

---

FOLDER STRUCTURE:
/app
  layout.tsx        ← root layout, fonts, metadata
  page.tsx          ← imports and assembles all sections
/components
  Navbar.tsx
  Hero.tsx
  Stats.tsx
  HowItWorks.tsx
  FeaturedVenues.tsx
  WhyEhgz.tsx
  ForVenues.tsx
  Download.tsx
  Footer.tsx
/lib
  venues.ts         ← venue data array (typed)
/types
  index.ts          ← shared TypeScript types

---

SECTION SPECIFICATIONS:

1. NAVBAR (Navbar.tsx)
- Fixed top, blur backdrop (backdrop-blur-md)
- Logo left: "Ehgz" in Syne 800, gold color
  Subtitle below: "إحجز · CAIRO" small, muted
- CTA right: "List Your Venue" pill button, gold background
- On mobile: same layout, smaller text
- Framer Motion: fade in from top on mount

2. HERO (Hero.tsx)
- Full viewport height (100svh)
- Background: deep black with animated radial gold gradients
- Animated CSS grid lines overlay (very subtle, low opacity)
- 3 floating blur orbs animating with Framer Motion 
  (useAnimate or keyframes, infinite loop, y-axis float)
- Content center-aligned:
  · Eyebrow pill: "● Now live in Cairo" — gold, pulsing dot
  · H1: "Ehgz" — Syne 800, massive (clamp 56px to 100px)
  · Arabic subtitle: "إحجز" — muted gold, letter-spaced
  · Subheading paragraph — muted white, Inter 300
  · Two CTA buttons: "Download the App" (gold filled) 
    and "Explore Venues" (ghost/outline)
- 3D Phone Mockup component below CTAs:
  · Built in pure Tailwind/CSS — no image needed
  · Shows fake app UI: Ehgz header, 3 venue cards, book button
  · Framer Motion: entrance animation (y + rotateX)
  · Continuous bob animation (y float loop)
  · Mouse/touch parallax tilt using useMotionValue and 
    useTransform from Framer Motion (rotateX, rotateY)
  · Gold glow beneath phone
- Scroll indicator arrow at bottom, animated
- Framer Motion: staggered children entrance on mount

3. STATS (Stats.tsx)
- Full width strip, subtle gold-tinted background
- 3 stats in a row: "18 Venues", "9 Areas", "1 Platform"
- Numbers animate count-up when scrolled into view
  (use useInView from Framer Motion + useEffect counter)
- Vertical dividers between stats
- Mobile: same 3-column layout, smaller

4. HOW IT WORKS (HowItWorks.tsx)
- Max width container, left aligned
- Section label + large heading + body text
- 3 steps in a vertical list:
  Step 1: Discover — browse curated venues
  Step 2: Choose — filter by area, vibe, cuisine
  Step 3: Book — instant table reservation
- Each step: numbered box (gold border, gold number) 
  + title + description
- Framer Motion: each step slides in from left with stagger
  on scroll (useInView trigger)
- Hover: numbered box fills gold, number turns black

5. FEATURED VENUES (FeaturedVenues.tsx)
- Section label + heading
- Horizontally scrollable card track (overflow-x: auto, 
  scroll-snap-x mandatory, hide scrollbar)
- Draggable on desktop (useDragControls or drag prop 
  in Framer Motion)
- 7 venue cards, each:
  · Image area: colored gradient placeholder 
    (unique warm gradient per card, no broken images)
  · Venue type badge (bottom left of image)
  · Venue name (Syne font)
  · Area + cuisine/vibe (gold, small)
  · "Book a Table →" button (ghost, fills gold on hover)
- Cards fade+slide up on scroll into view with stagger
- Card hover: lifts (y: -4px), gold border glow

Venues to include:
  1. Khufu's Restaurant | Giza | Pyramid View
  2. Babel | New Cairo | Lebanese
  3. Nine Pyramids Lounge | Giza | Rooftop
  4. Pier88 Nile River | Gezira | Nile View
  5. ESCĀ Cueva | New Giza | Fine Dining
  6. Crimson Bar & Grill | Zamalek | Bar & Grill
  7. Kazoku | New Cairo | Japanese

6. WHY EHGZ (WhyEhgz.tsx)
- Section label + heading
- 4 cards in a 2x2 grid (1 column on mobile)
- Each card: emoji icon in gold-tinted box + title + desc
  · 📵 No more WhatsApp bookings
  · ✦ Every venue is curated and verified
  · 🗺 Built for tourists and locals
  · ⚡ One app, all of Cairo
- Framer Motion: cards fade+scale in on scroll with stagger
- Card hover: gold border glow

7. FOR VENUES (ForVenues.tsx)
- Gold-tinted section background
- Section label + heading "Partner with Ehgz"
- Body paragraph
- 4 perks in a 2x2 grid (icon + text each)
- CTA button: "List Your Venue — It's Free" 
  (mailto:hello@ehgz.app)
- Framer Motion: content slides up on scroll

8. DOWNLOAD (Download.tsx)
- Center aligned
- Pulsing circular glow element with Arabic "إ" 
  character inside (large, gold)
- Heading + subtext
- Two app store badge buttons (Apple + Google Play)
  styled as dark pill buttons with icons
- Framer Motion: glow pulses on loop, 
  content fades in on scroll

9. FOOTER (Footer.tsx)
- Gold top border
- Logo + tagline centered
- Nav links row: About | For Venues | Contact | 
  Privacy Policy | Terms
- Social icons row: Instagram + TikTok 
  (styled square buttons)
- Copyright: "© 2026 Ehgz. Cairo, Egypt. · إحجز"

---

GLOBAL ANIMATION RULES:
- All scroll-triggered animations use Framer Motion useInView
  with { once: true, margin: "-80px" }
- Entrance animations: opacity 0→1, y 24→0, 
  duration 0.7s, ease [0.16, 1, 0.3, 1]
- Stagger children: 0.08s between each
- Hover transitions: 0.2s ease
- Page load sequence: navbar → hero eyebrow → h1 → 
  subtitle → body → buttons → phone (staggered, 0.15s apart)
- Cursor glow: follows mouse on desktop only 
  (check window width, skip on touch devices)
- Respect prefers-reduced-motion: wrap all motion 
  in useReducedMotion check

---

MOBILE REQUIREMENTS:
- Mobile-first Tailwind breakpoints (sm: md: lg:)
- Touch-based tilt on phone mockup 
  (touchmove event → rotateX/rotateY)
- Horizontal venue track is touch-swipeable natively
- Buttons stack vertically on mobile
- App store badges stack on mobile
- Min tap target 44x44px everywhere
- No horizontal overflow on any screen size
- Test breakpoints: 375px, 390px, 430px, 768px, 1280px

---

PERFORMANCE:
- next/image for any real images added later
- No layout shift (set explicit dimensions)
- Fonts preloaded via next/font
- Framer Motion imported per-component 
  (not globally) to keep bundle lean
- No unused Tailwind classes

---

SEO (layout.tsx):
metadata = {
  title: "Ehgz — Discover. Book. Experience Cairo.",
  description: "The only curated restaurant, café, and bar 
    discovery and booking app built for Cairo. 
    For tourists and locals who know the difference.",
  keywords: ["Cairo restaurants", "Cairo dining", 
    "Egypt food", "Cairo booking", "Ehgz", "إحجز",
    "Cairo cafes", "Egypt tourism", "restaurant booking Egypt"],
  openGraph: {
    title: "Ehgz — Discover. Book. Experience Cairo.",
    description: "...",
    url: "https://ehgz.app",
    siteName: "Ehgz",
    locale: "en_US",
  }
}

---

QUALITY BAR:
Every component should look like it was built by a 
senior frontend engineer at a funded Cairo startup. 
Pixel precise. Smooth. Fast. No placeholder lorem ipsum — 
use the real Ehgz copy throughout.

The final result should be indistinguishable from a 
$15,000 agency-built landing page.