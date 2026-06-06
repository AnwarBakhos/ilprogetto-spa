import type { CatalogProduct } from '@/types/catalog'

// ─── Image path helper ────────────────────────────────────────────────────────
// Local images live in /public/images/products/{filename}.
// The filename must match EXACTLY what is in the selection-imgs folder,
// with the extension preserved (.jpg or .png as shown in the screenshot).
// File name → extension map from the screenshot:
//   .jpg: Aluminum, Faux Wood, Sheer Drapes, Sheer Shades, Woven Wood Shades
//   .png: Arched Shutters, Awnings, Blackout Curtains, Cafe Style Shutters, Cellular Shades,
//         Door Shutters, Motorized Exterior, Motorized Shades, Panel Track, Plantation Shutters, Roman Shades,
//         Sun Screens, Vertical, Wind-Resistant Exterior
const img = (filename: string) => `/images/products/${filename}`

// ─── Category type ────────────────────────────────────────────────────────────
export type ProductCategory = 'shades' | 'blinds' | 'shutters' | 'drapes' | 'exterior'

// ─── Mega menu structure — exactly 5 columns, 20 products ────────────────────
// Used by Nav for the mega menu dropdown.
// Used by catalog page for the category filter tabs.
export const MEGA_MENU: {
  category: ProductCategory
  label: string
  products: { id: string; label: string }[]
}[] = [
  {
    category: 'shades',
    label: 'Shades',
    products: [
      { id: 'roller', label: 'Roller Shades' },
      { id: 'zebra', label: 'Zebra Shades' },
      { id: 'motorized', label: 'Motorized Shades' },
      { id: 'cellular', label: 'Cellular Shades' },
      { id: 'roman', label: 'Roman Shades' },
      { id: 'woven-wood', label: 'Woven Wood Shades' },
      { id: 'sheer', label: 'Sheer Shades' },
    ],
  },
  {
    category: 'blinds',
    label: 'Blinds',
    products: [
      { id: 'faux-wood', label: 'Faux Wood' },
      { id: 'aluminum', label: 'Aluminum' },
      { id: 'vertical', label: 'Vertical' },
      { id: 'panel-track', label: 'Panel Track' },
    ],
  },
  {
    category: 'shutters',
    label: 'Shutters',
    products: [
      { id: 'plantation', label: 'Plantation Shutters' },
      { id: 'cafe-style', label: 'Cafe Style Shutters' },
      { id: 'door', label: 'Door Shutters' },
      { id: 'arched', label: 'Arched Shutters' },
    ],
  },
  {
    category: 'drapes',
    label: 'Drapes & Textiles',
    products: [
      { id: 'blackout-curtains', label: 'Blackout Curtains' },
      { id: 'sheer-drapes', label: 'Sheer Drapes' },
      { id: 'butterfly', label: 'Butterfly Shades' },
    ],
  },
  {
    category: 'exterior',
    label: 'Exterior',
    products: [
      { id: 'motorized-exterior', label: 'Motorized Exterior' },
      { id: 'wind-resistant', label: 'Wind-Resistant Exterior' },
      { id: 'sun-screens', label: 'Sun Screens' },
      { id: 'awnings', label: 'Awnings' },
    ],
  },
]

// ─── Product definitions — 20 items, exactly matching the asset folder ────────
// coverImage and detailImage reference local files via the img() helper.
// When the user drops their selection-imgs folder into /public/images/products/,
// these paths will resolve automatically with no code changes needed.
export const PRODUCTS: CatalogProduct[] = [

  // ════════════════════════════════════════════════════════
  // SHADES (8)
  // ════════════════════════════════════════════════════════
  {
    id: 'roller',
    name: 'Roller Shades',
    shortName: 'Roller Shades',
    eyebrow: 'Clean & Modern',
    tagline: 'Clean cassette tube mechanism. Modern panels in blackout, light-filtering, or sheer.',
    description:
      'A single fabric panel rolls cleanly from a discreet cassette headrail. Available in blackout, light-filtering, and sheer fabrics — our most versatile and popular shade.',
    detailCopy:
      'Roller shades are where most window treatment journeys begin. One clean panel, one mechanism, total light control from sheer to full blackout. Cordless, chain, or motorized lift. Side channels available for complete light seal in media rooms and bedrooms.',
    features: [
      'Blackout, light-filtering, and sheer fabric options',
      'Cordless, chain, or motorized operation',
      'Side-channel option for zero light gaps',
      'UV protection to safeguard furniture and floors',
      'Our most accessible price point',
    ],
    seoTags: ['Roller Shades San Diego', 'Blackout Roller Shades', 'Custom Roller Blinds San Diego'],
    coverImage: img('Roller Shades.png'),
    detailImage: img('Roller Shades.png'),
    galleryDriveIds: [],
  },
  {
    id: 'zebra',
    name: 'Zebra Shades',
    shortName: 'Zebra Shades',
    eyebrow: 'Dual-Layer Control',
    tagline: 'Alternating sheer and solid bands. Tune privacy and daylight with a single pull.',
    description:
      'Alternating horizontal stripes of sheer and solid fabric let you dial in exactly how much light and privacy you want — any position between fully open and fully closed.',
    detailCopy:
      'Zebra shades use two layers of fabric with alternating transparent and opaque bands. Align the bands for privacy; offset them for a filtered, diffused light effect. A contemporary look that reads as designer at any budget. Available cordless or motorized.',
    features: [
      'Alternating sheer and solid bands',
      'Infinite, fluid light and privacy adjustment',
      'Contemporary dual-layer aesthetic',
      'Cordless and motorized operation available',
      'Wide range of fabric colors and weights',
    ],
    seoTags: ['Zebra Shades San Diego', 'Banded Shades San Diego', 'Dual Layer Blinds San Diego'],
    coverImage: img('Zebra Shades.png'),
    detailImage: img('Zebra Shades.png'),
    galleryDriveIds: [],
  },
  {
    id: 'motorized',
    name: 'Motorized Shades',
    shortName: 'Motorized Shades',
    eyebrow: 'Smart Home Ready',
    tagline: 'Voice, app, and schedule control — seamlessly integrated.',
    description:
      'Control your shades by voice, phone, or a schedule that follows the sun. Works with Alexa, Google Home, and Apple HomeKit. Our IT team handles full installation and programming.',
    detailCopy:
      'Motorized shades raise at sunrise, lower at sunset, and respond to a word or a tap. Battery and hardwired options available across every shade type we carry. Our in-house IT team handles complete smart home integration — you never need to configure anything yourself.',
    features: [
      'Works with Alexa, Google Home, and Apple HomeKit',
      'App control from anywhere with internet access',
      'Automated daily and seasonal schedules',
      'Child-safe cordless operation',
      'Battery or hardwired motor options',
    ],
    seoTags: ['Motorized Shades San Diego', 'Smart Blinds', 'Alexa Shades', 'HomeKit Blinds'],
    coverImage: img('Motorized Shades.png'),
    detailImage: img('Motorized Shades.png'),
    galleryDriveIds: [],
  },
  {
    id: 'cellular',
    name: 'Cellular Shades',
    shortName: 'Cellular Shades',
    eyebrow: 'Energy Efficiency',
    tagline: 'The most energy-efficient window treatment we sell.',
    description:
      'Honeycomb cells trap a buffer of air against the glass, measurably reducing both cooling and heating costs year-round across Southern California homes.',
    detailCopy:
      'Single, double, and triple cell constructions available. Top-down/bottom-up operation lets you control light from either direction. Sound-dampening properties make them ideal for offices and nurseries.',
    features: [
      'Single, double, and triple cell constructions',
      'Measurable reduction in cooling and heating costs',
      'Sound-dampening — ideal for offices and nurseries',
      'Top-down / bottom-up operation available',
      'Both blackout and light-filtering fabrics',
    ],
    seoTags: ['Honeycomb Shades San Diego', 'Cellular Shades', 'Energy Efficient Blinds'],
    coverImage: img('Cellular Shades.png'),
    detailImage: img('Cellular Shades.png'),
    galleryDriveIds: [],
  },
  {
    id: 'roman',
    name: 'Roman Shades',
    shortName: 'Roman Shades',
    eyebrow: 'Classic Fabric Elegance',
    tagline: 'Tailored fabric panels with timeless, room-warming presence.',
    description:
      'Fabric panels that fold into clean horizontal pleats. Hundreds of designer textiles — from linen to cotton to full blackout — with optional blackout lining.',
    detailCopy:
      'Flat, hobbled, and relaxed styles with optional blackout lining tucked behind the face fabric. Cordless, child-safe operation. Best for kitchens, bedrooms, and reading nooks.',
    features: [
      'Flat, hobbled, and relaxed styles available',
      'Optional blackout lining behind face fabric',
      'Cordless, child-safe operation',
      'Hundreds of designer fabric choices',
      'Ideal for kitchens, bedrooms, and dens',
    ],
    seoTags: ['Roman Shades San Diego', 'Fabric Blinds', 'Custom Window Coverings'],
    coverImage: img('Roman Shades.png'),
    detailImage: img('Roman Shades.png'),
    galleryDriveIds: [],
  },
  {
    id: 'woven-wood',
    name: 'Woven Wood Shades',
    shortName: 'Woven Wood Shades',
    eyebrow: 'Natural Texture',
    tagline: 'Organic materials that bring warmth and texture to any room.',
    description:
      'Crafted from reeds, grasses, jute, and bamboo — woven wood shades add natural warmth and artisan texture that fabric and synthetic materials cannot replicate.',
    detailCopy:
      'Each woven wood shade is unique in texture and tone. Light filters beautifully through natural weaves, creating a warm, dappled effect. Available with liner options for added privacy.',
    features: [
      'Natural materials: bamboo, jute, reed, and grass',
      'Each piece has unique natural variation',
      'Liner options available for increased privacy',
      'Cordless lift operation',
      'Ideal for living rooms, sunrooms, and offices',
    ],
    seoTags: ['Woven Wood Shades San Diego', 'Bamboo Shades', 'Natural Window Treatments'],
    coverImage: img('Woven Wood Shades.jpg'),
    detailImage: img('Woven Wood Shades.jpg'),
    galleryDriveIds: [],
  },
  {
    id: 'sheer',
    name: 'Sheer Shades',
    shortName: 'Sheer Shades',
    eyebrow: 'Soft Light Diffusion',
    tagline: 'Preserve your view while softening harsh sunlight.',
    description:
      'Sheer shades diffuse direct sunlight into soft, even illumination — eliminating glare and UV damage while keeping your connection to the outdoors.',
    detailCopy:
      'Available in roller and Shangri-La (Silhouette) configurations. Shangri-La shades suspend horizontal vanes between twin sheers for museum-quality light diffusion with full privacy when closed.',
    features: [
      'Eliminates glare without blocking the view',
      'UV protection for furniture and flooring',
      'Shangri-La and roller configurations available',
      'Wide range of fabric opacities',
      'Motorized operation available',
    ],
    seoTags: ['Sheer Shades San Diego', 'Shangri-La Shades', 'Light Filtering Shades'],
    coverImage: img('Sheer Shades.jpg'),
    detailImage: img('Sheer Shades.jpg'),
    galleryDriveIds: [],
  },

  // ════════════════════════════════════════════════════════
  // BLINDS (4)
  // ════════════════════════════════════════════════════════
  {
    id: 'faux-wood',
    name: 'Faux Wood Blinds',
    shortName: 'Faux Wood',
    eyebrow: 'Durable & Moisture-Resistant',
    tagline: 'The warmth of wood without the moisture sensitivity.',
    description:
      'Faux wood blinds deliver a rich, authentic wood look while resisting humidity and warping — the perfect choice for kitchens, bathrooms, and coastal San Diego homes.',
    detailCopy:
      'PVC composite slats resist moisture, UV fading, and scratching. Available in a wide range of wood-tone finishes. Easier to clean than real wood and more durable in high-humidity rooms.',
    features: [
      'Moisture and humidity resistant',
      'Wide range of wood-tone finishes',
      'Easy to clean and maintain',
      'Available with valance and tilt wand',
      'Great for kitchens and bathrooms',
    ],
    seoTags: ['Faux Wood Blinds San Diego', 'Blinds San Diego', 'Moisture Resistant Blinds'],
    coverImage: img('Faux Wood.jpg'),
    detailImage: img('Faux Wood.jpg'),
    galleryDriveIds: [],
  },
  {
    id: 'aluminum',
    name: 'Aluminum Blinds',
    shortName: 'Aluminum',
    eyebrow: 'Sleek & Affordable',
    tagline: 'The most cost-effective light control available.',
    description:
      'Aluminum blinds are precise, durable, and available in dozens of colors. An excellent value for offices, rentals, and commercial applications.',
    detailCopy:
      'Lightweight aluminum slats tilt to any angle for precise light control. Corrosion-resistant finish makes them suitable for high-humidity areas. Available in 1" and 2" slat widths.',
    features: [
      '1" and 2" slat widths available',
      'Dozens of color options',
      'Corrosion-resistant finish',
      'Precise light control via tilt wand',
      'Most affordable blind option',
    ],
    seoTags: ['Aluminum Blinds San Diego', 'Mini Blinds San Diego'],
    coverImage: img('Aluminum.jpg'),
    detailImage: img('Aluminum.jpg'),
    galleryDriveIds: [],
  },
  {
    id: 'vertical',
    name: 'Vertical Blinds',
    shortName: 'Vertical',
    eyebrow: 'Sliding Door Specialists',
    tagline: 'The standard solution for sliding glass doors and large windows.',
    description:
      'Vertical blinds are the practical choice for sliding glass doors and wide windows. Slats traverse left, right, or split to control light and access.',
    detailCopy:
      'Available in fabric, PVC, and aluminum vanes. Fabric vanes offer a softer appearance while PVC is more durable and moisture-resistant. Ideal for patio doors throughout San Diego County.',
    features: [
      'Fabric, PVC, and aluminum vane options',
      'Left, right, or split traverse operation',
      'Ideal for sliding glass patio doors',
      'Available in blackout or light-filtering fabrics',
      'Custom-sized to any width',
    ],
    seoTags: ['Vertical Blinds San Diego', 'Sliding Door Blinds San Diego'],
    coverImage: img('Vertical.png'),
    detailImage: img('Vertical.png'),
    galleryDriveIds: [],
  },
  {
    id: 'panel-track',
    name: 'Panel Track Blinds',
    shortName: 'Panel Track',
    eyebrow: 'Modern & Architectural',
    tagline: 'Large-format fabric panels for contemporary spaces.',
    description:
      'Panel track systems use wide fabric panels that glide on ceiling-mounted tracks — a modern, architectural alternative to vertical blinds for large openings.',
    detailCopy:
      'Panels can be layered for different opacity levels throughout the day. Available in hundreds of fabric options. Works beautifully as a room divider as well as a window treatment.',
    features: [
      'Wide panel format — ideal for large windows',
      'Works as a room divider',
      'Hundreds of fabric options',
      'Smooth glide on ceiling-mounted tracks',
      'Modern alternative to vertical blinds',
    ],
    seoTags: ['Panel Track Blinds San Diego', 'Large Window Blinds San Diego'],
    coverImage: img('Panel Track.png'),
    detailImage: img('Panel Track.png'),
    galleryDriveIds: [],
  },

  // ════════════════════════════════════════════════════════
  // SHUTTERS (4)
  // ════════════════════════════════════════════════════════
  {
    id: 'plantation',
    name: 'Plantation Shutters',
    shortName: 'Plantation Shutters',
    eyebrow: 'Classic & Permanent',
    tagline: 'The most enduring window treatment investment you can make.',
    description:
      'Plantation shutters are the only window treatment that adds resale value to a home. Custom-crafted for a perfect fit, they last the life of the house.',
    detailCopy:
      'Wide 2.5" to 4.5" louvers tilt for precise light control. Available in painted wood and poly-satin composite for moisture-prone rooms. A single installation lasts the life of the home.',
    features: [
      '2.5", 3.5", and 4.5" louver options',
      'Adds resale value to your home',
      'Poly-satin option for bathrooms and kitchens',
      'Custom-sized for a built-in appearance',
      'Lifetime investment — never needs replacing',
    ],
    seoTags: ['Plantation Shutters San Diego', 'Wood Shutters San Diego', 'Interior Shutters'],
    coverImage: img('Plantation Shutters.png'),
    detailImage: img('Plantation Shutters.png'),
    galleryDriveIds: [],
  },
  {
    id: 'cafe-style',
    name: 'Cafe Style Shutters',
    shortName: 'Cafe Style Shutters',
    eyebrow: 'Privacy + Light',
    tagline: 'Cover the lower half, keep the light and sky above.',
    description:
      'Cafe style shutters cover only the lower half of the window — giving you street-level privacy while keeping the upper half open to natural light and sky views.',
    detailCopy:
      'A classic European treatment that works beautifully in kitchens, dining rooms, and street-facing living rooms. Can be paired with a drapery or valance above for a layered look.',
    features: [
      'Lower-half coverage only',
      'Maximum privacy at street level',
      'Upper window open for daylight',
      'Works beautifully in kitchens and dining rooms',
      'Pairs well with drapery above',
    ],
    seoTags: ['Cafe Style Shutters San Diego', 'Half Shutters San Diego'],
    coverImage: img('Cafe Style Shutters.png'),
    detailImage: img('Cafe Style Shutters.png'),
    galleryDriveIds: [],
  },
  {
    id: 'door',
    name: 'Door Shutters',
    shortName: 'Door Shutters',
    eyebrow: 'French & Panel Doors',
    tagline: 'Purpose-built shutters for French doors and door panels.',
    description:
      'Door shutters are hinged and bifold designs built specifically for French doors, entry doors with glass panels, and door-adjacent sidelites.',
    detailCopy:
      'Hinged panels move with the door while remaining operable for light control. Bi-fold track options available for stationary door panels. Custom-measured to fit any door configuration.',
    features: [
      'Moves with the door — not attached to the frame',
      'Hinged and bi-fold options',
      'Works with French doors and sidelites',
      'All wood and poly-satin finishes available',
      'Custom-measured for any door',
    ],
    seoTags: ['Door Shutters San Diego', 'French Door Window Treatments San Diego'],
    coverImage: img('Door Shutters.png'),
    detailImage: img('Door Shutters.png'),
    galleryDriveIds: [],
  },
  {
    id: 'arched',
    name: 'Arched Shutters',
    shortName: 'Arched Shutters',
    eyebrow: 'Custom Specialty',
    tagline: 'Custom-crafted shutters for arched and specialty windows.',
    description:
      'Arched windows deserve a treatment that fits their shape. Our arched shutters are custom-built to follow your exact window geometry, stationary or with movable louvers.',
    detailCopy:
      'We measure and build to your precise arch shape — half-round, eyebrow, quarter-round, or custom. Stationary or operable louvers available. Finishes match any existing shutter installation.',
    features: [
      'Custom-built to exact arch geometry',
      'Stationary or operable louver options',
      'Matches existing shutter finishes',
      'Works with half-round, eyebrow, and quarter-round arches',
      'Professionally installed',
    ],
    seoTags: ['Arched Shutters San Diego', 'Specialty Window Treatments San Diego'],
    coverImage: img('Arched Shutters.png'),
    detailImage: img('Arched Shutters.png'),
    galleryDriveIds: [],
  },

  // ════════════════════════════════════════════════════════
  // DRAPES & TEXTILES (2)
  // ════════════════════════════════════════════════════════
  {
    id: 'blackout-curtains',
    name: 'Blackout Curtains',
    shortName: 'Blackout Curtains',
    eyebrow: 'Complete Darkness',
    tagline: 'Total light elimination for bedrooms and media rooms.',
    description:
      'Blackout curtains combine fabric-forward design with 100% light-blocking performance. Available in hundreds of colors and textures to complement any interior.',
    detailCopy:
      'Triple-pass blackout lining blocks 100% of incoming light. Side panels channel the remaining light at the edges. Available in rod pocket, back tab, and pinch pleat header styles.',
    features: [
      '100% blackout with triple-pass lining',
      'Hundreds of fabric and color options',
      'Rod pocket, back tab, and pinch pleat styles',
      'Noise-dampening as a secondary benefit',
      'Custom-length available',
    ],
    seoTags: ['Blackout Curtains San Diego', 'Blackout Drapes San Diego', 'Bedroom Blackout'],
    coverImage: img('Blackout Curtains.png'),
    detailImage: img('Blackout Curtains.png'),
    galleryDriveIds: [],
  },
  {
    id: 'sheer-drapes',
    name: 'Sheer Drapes',
    shortName: 'Sheer Drapes',
    eyebrow: 'Soft & Elegant',
    tagline: 'A soft, luminous layer that transforms room atmosphere.',
    description:
      'Sheer drapes filter direct sunlight into a warm, even glow while maintaining your connection to the outdoors. The defining layer of any elevated interior.',
    detailCopy:
      'Available in linen, silk, voile, and synthetic sheers in dozens of weights. Works beautifully as a solo treatment or layered with blackout panels for full flexibility.',
    features: [
      'Linen, silk, voile, and synthetic options',
      'Filters glare without losing outdoor connection',
      'Works alone or layered with blackout',
      'Custom width and length',
      'Professional installation included',
    ],
    seoTags: ['Sheer Drapes San Diego', 'Sheer Curtains San Diego', 'Window Drapes San Diego'],
    coverImage: img('Sheer Drapes.jpg'),
    detailImage: img('Sheer Drapes.jpg'),
    galleryDriveIds: [],
  },

  {
    id: 'butterfly',
    name: 'Butterfly Shades',
    shortName: 'Butterfly',
    eyebrow: 'Day & Night Control',
    tagline: 'Alternating opaque and sheer horizontal bands for precise light layering.',
    description:
      'Butterfly shades feature stacked horizontal fabric bands that alternate between opaque and sheer layers. Shift the bands to align for privacy, offset for soft filtered light, or raise fully for an open view.',
    detailCopy:
      'A sophisticated evolution of the roller shade. Two layers of alternating solid and translucent horizontal bands glide independently — align them for full privacy, offset them for a soft diffused glow, or raise the shade completely. Clean, modern aesthetic that works in any room.',
    features: [
      'Alternating opaque and sheer horizontal bands',
      'Full privacy, soft light, or open view — one shade',
      'Cordless and motorized options available',
      'Clean modern profile, minimal headrail',
      'Custom width and length',
    ],
    seoTags: ['Butterfly Shades San Diego', 'Day Night Blinds San Diego', 'Dual Layer Shades San Diego', 'Combi Blinds San Diego'],
    coverImage: img('Butterfly.jpeg'),
    detailImage: img('Butterfly.jpeg'),
    galleryDriveIds: [],
  },

  // ════════════════════════════════════════════════════════
  // EXTERIOR (4)
  // ════════════════════════════════════════════════════════
  {
    id: 'motorized-exterior',
    name: 'Motorized Exterior Shades',
    shortName: 'Motorized Exterior',
    eyebrow: 'Outdoor Living',
    tagline: 'Extend your outdoor living season with motorized exterior shades.',
    description:
      'Motorized exterior shades mount outside the window or on patio structures, blocking heat before it enters the glass — the most effective approach to solar gain control.',
    detailCopy:
      'Exterior shades reduce interior temperatures more effectively than any interior shade because they stop solar heat at the source. Motorized with wind sensors that retract automatically in gusts.',
    features: [
      'Blocks heat before it enters the glass',
      'Motorized with optional wind sensors',
      'Weather-rated fabrics for outdoor exposure',
      'Works with smart home systems',
      'Dramatically reduces AC load',
    ],
    seoTags: ['Exterior Shades San Diego', 'Outdoor Motorized Shades San Diego', 'Patio Shades'],
    coverImage: img('Motorized Exterior.png'),
    detailImage: img('Motorized Exterior.png'),
    galleryDriveIds: [],
  },
  {
    id: 'wind-resistant',
    name: 'Wind-Resistant Exterior Shades',
    shortName: 'Wind-Resistant Exterior',
    eyebrow: 'Coastal Engineered',
    tagline: 'Engineered to stay in place when coastal winds arrive.',
    description:
      'Wind-resistant exterior shades use side-channel guide systems and reinforced fabric to maintain their position in the coastal gusts common throughout San Diego County.',
    detailCopy:
      'Side channels lock the fabric to the frame, preventing billowing and flutter. Tested to withstand sustained winds up to 55 mph. Ideal for coastal Del Mar, La Jolla, and Carlsbad properties.',
    features: [
      'Side-channel guide system prevents billowing',
      'Tested to 55 mph sustained wind',
      'Reinforced fabric construction',
      'Ideal for coastal San Diego properties',
      'Motorized or manual operation',
    ],
    seoTags: ['Wind Resistant Shades San Diego', 'Coastal Exterior Shades', 'Outdoor Shades La Jolla'],
    coverImage: img('Wind-Resistant Exterior.png'),
    detailImage: img('Wind-Resistant Exterior.png'),
    galleryDriveIds: [],
  },
  {
    id: 'sun-screens',
    name: 'Sun Screens',
    shortName: 'Sun Screens',
    eyebrow: 'View Preservation',
    tagline: 'Eliminate glare and UV while keeping your view.',
    description:
      'Solar screen fabrics block 80–90% of incoming UV and heat while remaining nearly see-through from the inside. Your view stays, the glare disappears.',
    detailCopy:
      'Available in 1%, 3%, 5%, and 10% openness factors. Lower openness means more glare reduction but slightly reduced view. Our designers will help you choose the right balance for each window.',
    features: [
      '1%, 3%, 5%, and 10% openness options',
      'Blocks up to 90% of UV radiation',
      'View preserved from inside',
      'Significantly reduces AC load',
      'Interior or exterior mount available',
    ],
    seoTags: ['Sun Screen Shades San Diego', 'Solar Screen San Diego', 'UV Blocking Shades'],
    coverImage: img('Sun Screens.png'),
    detailImage: img('Sun Screens.png'),
    galleryDriveIds: [],
  },
  {
    id: 'awnings',
    name: 'Awnings',
    shortName: 'Awnings',
    eyebrow: 'Outdoor Shade Structures',
    tagline: 'Shade your patio, deck, or entry without blocking the view.',
    description:
      'Retractable and fixed awnings extend your usable outdoor space by creating shaded areas for patios, decks, windows, and entryways throughout the year.',
    detailCopy:
      'Motorized retractable awnings include wind and sun sensors. Fixed awnings are powder-coated aluminum with weather-rated fabric. Custom sizing and fabric selection for any property.',
    features: [
      'Motorized retractable with wind sensors',
      'Fixed aluminum frame options',
      'Weather-rated outdoor fabric',
      'Custom sizing for any space',
      'Extends usable outdoor living area',
    ],
    seoTags: ['Awnings San Diego', 'Patio Awnings San Diego', 'Retractable Awnings San Diego'],
    coverImage: img('Awnings.png'),
    detailImage: img('Awnings.png'),
    galleryDriveIds: [],
  },
]

// ─── Lookup helpers ────────────────────────────────────────────────────────────
export const getProduct = (id: string): CatalogProduct | undefined =>
  PRODUCTS.find((p) => p.id === id)

export const getProductsByCategory = (category: ProductCategory): CatalogProduct[] =>
  PRODUCTS.filter((p) => {
    const col = MEGA_MENU.find((m) => m.category === category)
    return col?.products.some((mp) => mp.id === p.id)
  })

// ─── Homepage featured — one per category ────────────────────────────────────
// Picks the first product from each of the 5 categories for the services grid.
export const FEATURED_PRODUCTS: CatalogProduct[] = MEGA_MENU.map(
  (col) => PRODUCTS.find((p) => p.id === col.products[0]!.id)!
)
