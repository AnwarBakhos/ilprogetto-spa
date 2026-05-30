// ─── City & Product SEO Constants ────────────────────────────────────────────
// Used by dynamic landing pages for city+product and careers routes.

export const CITY_SLUGS = [
  'san-diego', 'poway', 'carlsbad', 'la-jolla', 'del-mar',
  'encinitas', 'solana-beach', 'rancho-santa-fe', 'chula-vista',
  'national-city', 'coronado', 'el-cajon', 'escondido', 'san-marcos',
  'vista', 'temecula',
] as const

export type CitySlug = typeof CITY_SLUGS[number]

export const PRODUCT_SLUGS: Record<string, string> = {
  'roller-shades':       'Roller Shades',
  'zebra-shades':        'Zebra Shades',
  'cellular-shades':     'Cellular Shades',
  'roman-shades':        'Roman Shades',
  'wood-aluminum-blinds':'Wood & Aluminum Blinds',
  'shangri-la-shades':   'Shangri-La Shades',
  'curtains-drapery':    'Curtains & Drapery',
  'motorized-shading':   'Motorized Shading',
  'plantation-shutters': 'Plantation Shutters',
  'faux-wood-blinds':    'Faux Wood Blinds',
  'aluminum-blinds':     'Aluminum Blinds',
  'vertical-blinds':     'Vertical Blinds',
  'panel-track-blinds':  'Panel Track Blinds',
  'woven-wood-shades':   'Woven Wood Shades',
  'sheer-shades':        'Sheer Shades',
  'blackout-curtains':   'Blackout Curtains',
  'sheer-drapes':        'Sheer Drapes',
  'motorized-exterior':  'Motorized Exterior Shades',
  'sun-screens':         'Sun Screens',
  'awnings':             'Awnings',
}

export const POSITION_SLUGS: Record<string, string> = {
  'technician': 'Window Treatment Installation Technician',
  'sales':      'Design & Sales Consultant',
}

// ─── Slug → Display name ──────────────────────────────────────────────────────
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// ─── City display name ────────────────────────────────────────────────────────
export function cityName(slug: string): string {
  const overrides: Record<string, string> = {
    'la-jolla':       'La Jolla',
    'del-mar':        'Del Mar',
    'solana-beach':   'Solana Beach',
    'rancho-santa-fe':'Rancho Santa Fe',
    'chula-vista':    'Chula Vista',
    'national-city':  'National City',
    'el-cajon':       'El Cajon',
    'san-marcos':     'San Marcos',
    'san-diego':      'San Diego',
  }
  return overrides[slug] ?? slugToTitle(slug)
}

// ─── Product → video file mapping ─────────────────────────────────────────────
export const PRODUCT_VIDEO: Record<string, string> = {
  'roller-shades':        '/videos/products/Roller S.mp4',
  'zebra-shades':         '/videos/products/Zebra S.mp4',
  'cellular-shades':      '/videos/products/Cellular S.mp4',
  'roman-shades':         '/videos/products/Roman S.mp4',
  'wood-aluminum-blinds': '/videos/products/Wood & Aluminum Blinds.mp4',
  'shangri-la-shades':    '/videos/products/Shangri-La S.mp4',
  'curtains-drapery':     '/videos/products/Drapery.mp4',
  'motorized-shading':    '/videos/products/Motorized S.mp4',
}

// ─── Product → catalog id mapping (links to /catalog?product=X) ──────────────
export const PRODUCT_CATALOG_ID: Record<string, string> = {
  'roller-shades':        'roller',
  'zebra-shades':         'zebra',
  'cellular-shades':      'cellular',
  'roman-shades':         'roman',
  'wood-aluminum-blinds': 'faux-wood',
  'shangri-la-shades':    'sheer',
  'curtains-drapery':     'blackout-curtains',
  'motorized-shading':    'motorized',
  'plantation-shutters':  'plantation',
  'faux-wood-blinds':     'faux-wood',
  'aluminum-blinds':      'aluminum',
  'vertical-blinds':      'vertical',
  'panel-track-blinds':   'panel-track',
  'woven-wood-shades':    'woven-wood',
  'sheer-shades':         'sheer',
  'blackout-curtains':    'blackout-curtains',
  'sheer-drapes':         'sheer-drapes',
  'motorized-exterior':   'motorized-exterior',
  'sun-screens':          'sun-screens',
  'awnings':              'awnings',
}

// ─── Product descriptions for landing pages ───────────────────────────────────
export const PRODUCT_DESCRIPTIONS: Record<string, {
  tagline: string
  intro: string
  features: string[]
  cta: string
}> = {
  'roller-shades': {
    tagline: 'Clean cassette mechanism. Blackout, light-filtering, or sheer.',
    intro: 'Roller shades are where most window treatment journeys begin — one clean panel, total light control, available in dozens of fabrics from full blackout to gossamer sheer. Our custom-measured roller shades are professionally installed with side channels for complete light seal when needed.',
    features: ['100% blackout fabric options', 'Cordless, chain, or motorized lift', 'Side-channel light seal available', 'UV protection up to 99%', 'Free in-home measurement included'],
    cta: 'Get a Free Roller Shade Quote',
  },
  'zebra-shades': {
    tagline: 'Alternating sheer and solid bands — infinite light adjustment.',
    intro: 'Zebra shades use alternating transparent and opaque horizontal bands to give you continuous control between full light diffusion and complete privacy. A contemporary aesthetic that works in any room.',
    features: ['Infinite light and privacy adjustment', 'Contemporary dual-layer design', 'Cordless and motorized options', 'Wide fabric and color range', 'Custom-measured for exact fit'],
    cta: 'Book a Zebra Shade Consultation',
  },
  'cellular-shades': {
    tagline: 'Honeycomb cells for thermal insulation and quiet diffused light.',
    intro: 'Cellular honeycomb shades are the most energy-efficient window treatment available. Their hexagonal air pockets trap thermal energy, measurably reducing cooling costs for Southern California homes — especially effective in inland communities with high summer heat.',
    features: ['Single, double, and triple cell construction', 'R-3 to R-6 thermal resistance', 'Sound-dampening secondary benefit', 'Top-down/bottom-up operation available', 'Motorized compatible'],
    cta: 'Get a Free Energy Efficiency Consultation',
  },
  'roman-shades': {
    tagline: 'Tailored horizontal folds — soft architectural drape.',
    intro: 'Roman shades fold into clean horizontal pleats when raised and hang as a flat panel when lowered. Hundreds of designer fabrics — linen, cotton, silk blends — with optional blackout lining. The warmest, most residential of all shade categories.',
    features: ['Flat, hobbled, and relaxed styles', 'Optional blackout lining', 'Hundreds of designer fabrics', 'Cordless child-safe operation', 'Custom width and length'],
    cta: 'Browse Roman Shade Fabrics',
  },
  'wood-aluminum-blinds': {
    tagline: 'Ladder-cord slats with precise tilt — wood or matte aluminum.',
    intro: 'Horizontal blinds deliver the most precise light control of any window treatment. Real wood or faux wood slats tilt to any angle, from fully open to completely closed. A timeless choice for bedrooms, offices, and rooms where exact light management matters.',
    features: ['Real wood and faux wood options', 'Precise tilt control at any angle', 'Moisture-resistant faux wood for bathrooms', 'Cordless and top-down options', 'Affordable and durable'],
    cta: 'Get a Free Blind Measurement',
  },
  'shangri-la-shades': {
    tagline: 'Floating fabric vanes between sheer facings — filtered light, sculpted depth.',
    intro: 'Shangri-La (Silhouette) shades suspend horizontal fabric vanes between two sheer facings, creating the visual depth of drapery with the functionality of a blind. The most refined light filtering available — museum-quality diffusion that flatters any interior.',
    features: ['Floating vane construction', 'Full privacy when closed', 'Soft, luminous light diffusion', 'Available in motorized operation', 'Premium designer aesthetic'],
    cta: 'Schedule a Shangri-La Consultation',
  },
  'curtains-drapery': {
    tagline: 'Floor-grazing panels on hand-finished metal track.',
    intro: 'Custom drapery is the defining layer of an elevated interior. We design, source, and install custom panel drapery in hundreds of fabrics — from sheer linen to blackout velvet — on precision-engineered metal track systems that ensure smooth, quiet operation.',
    features: ['Blackout and sheer fabric options', 'Custom width and floor-to-ceiling length', 'Hand-finished metal track systems', 'Ripple-fold and pinch-pleat styles', 'Professional installation included'],
    cta: 'Book a Drapery Design Consultation',
  },
  'motorized-shading': {
    tagline: 'Whisper-quiet motors. App, voice, and scheduled automation.',
    intro: 'Motorized shading integrates with Alexa, Google Home, and Apple HomeKit to automate your light and privacy throughout the day. Our team handles complete installation and smart home programming — you never touch a settings menu.',
    features: ['Works with Alexa, Google Home, HomeKit', 'App control from anywhere', 'Automated daily schedules', 'Battery or hardwired motors', 'Full IT integration included'],
    cta: 'Get a Free Smart Shading Quote',
  },
}

// ─── Careers content ──────────────────────────────────────────────────────────
export const CAREERS_CONTENT: Record<string, {
  title: string
  intro: string
  responsibilities: string[]
  qualifications: string[]
  keywords: string[]
  compensation: string
}> = {
  'technician': {
    title: 'Window Treatment Installation Technician',
    intro: 'We are looking for skilled installation technicians to join our field service team. You will be responsible for the professional measurement and installation of custom window treatments in high-end residential and commercial properties across Southern California.',
    responsibilities: [
      'Measure and install custom roller shades, cellular shades, Roman shades, plantation shutters, and motorized systems',
      'Mount hardware to various wall and window frame materials — drywall, plaster, tile, and wood',
      'Program and configure motorized and smart home-integrated shading systems',
      'Maintain a clean, professional presence in clients\' homes',
      'Communicate professionally with homeowners regarding installation details',
      'Manage tools, hardware inventory, and vehicle stock',
    ],
    qualifications: [
      '2+ years experience in window treatment installation, carpentry, or related field service',
      'Valid California driver\'s license and clean driving record',
      'Own reliable transportation preferred (company vehicle available)',
      'Comfortable working at heights with ladders',
      'Basic familiarity with smart home systems (Alexa, Google Home) a plus',
      'Bilingual English/Spanish a plus',
    ],
    keywords: ['low-voltage motorized shading installer', 'custom blind installer jobs', 'shutter installation technician', 'field service technician San Diego', 'carpentry and window hardware mounting', 'window treatment installer Southern California'],
    compensation: '$22–$34/hour depending on experience. Performance bonuses, mileage reimbursement, and tool allowance included.',
  },
  'sales': {
    title: 'Design & Sales Consultant',
    intro: 'We are looking for a client-focused design and sales consultant to conduct in-home consultations with homeowners across Southern California. You will represent iL Progetto LLC in client homes, presenting our complete collection and guiding clients to the perfect custom window treatment solution.',
    responsibilities: [
      'Conduct free in-home consultations with homeowners across our service area',
      'Present and recommend window treatment solutions based on client needs, budget, and aesthetic',
      'Measure windows accurately and prepare detailed project quotes',
      'Follow up with prospects and manage the pipeline from consultation to installation',
      'Build relationships with interior designers, real estate agents, and property managers',
      'Attend product training sessions to maintain current knowledge of our catalog',
    ],
    qualifications: [
      '2+ years in in-home sales, interior design consultation, or luxury retail',
      'Strong presentation and interpersonal skills',
      'Self-motivated with a track record of meeting sales targets',
      'Valid California driver\'s license',
      'Experience with window treatments, home furnishings, or interior design preferred',
      'CRM experience a plus',
    ],
    keywords: ['interior design consultant jobs', 'window treatment sales representative', 'in-home sales consultant Poway', 'luxury showroom sales', 'client consultation and estimating', 'design sales consultant Southern California'],
    compensation: 'Base + commission. On-target earnings $55,000–$90,000/year. Top performers earn significantly more.',
  },
}
