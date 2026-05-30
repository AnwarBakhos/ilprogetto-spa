// --- City & Product SEO Constants ---
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

// --- Slug -> Display name ---
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// --- City display name ---
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

// --- Product -> video file mapping ---
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

// --- Product -> catalog id mapping (links to /catalog?product=X) ---
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

// --- Product descriptions for landing pages ---
export const PRODUCT_DESCRIPTIONS: Record<string, {
  tagline: string
  intro: string
  features: string[]
  cta: string
}> = {
  'roller-shades': {
    tagline: 'Clean cassette mechanism. Blackout, light-filtering, or sheer.',
    intro: 'Roller shades are where most window treatment journeys begin -- one clean panel, total light control, available in dozens of fabrics from full blackout to gossamer sheer. Our custom-measured roller shades are professionally installed with side channels for complete light seal when needed.',
    features: ['100% blackout fabric options', 'Cordless, chain, or motorized lift', 'Side-channel light seal available', 'UV protection up to 99%', 'Free in-home measurement included'],
    cta: 'Get a Free Roller Shade Quote',
  },
  'zebra-shades': {
    tagline: 'Alternating sheer and solid bands -- infinite light adjustment.',
    intro: 'Zebra shades use alternating transparent and opaque horizontal bands to give you continuous control between full light diffusion and complete privacy. A contemporary aesthetic that works in any room.',
    features: ['Infinite light and privacy adjustment', 'Contemporary dual-layer design', 'Cordless and motorized options', 'Wide fabric and color range', 'Custom-measured for exact fit'],
    cta: 'Book a Zebra Shade Consultation',
  },
  'cellular-shades': {
    tagline: 'Honeycomb cells for thermal insulation and quiet diffused light.',
    intro: 'Cellular honeycomb shades are the most energy-efficient window treatment available. Their hexagonal air pockets trap thermal energy, measurably reducing cooling costs for Southern California homes -- especially effective in inland communities with high summer heat.',
    features: ['Single, double, and triple cell construction', 'R-3 to R-6 thermal resistance', 'Sound-dampening secondary benefit', 'Top-down/bottom-up operation available', 'Motorized compatible'],
    cta: 'Get a Free Energy Efficiency Consultation',
  },
  'roman-shades': {
    tagline: 'Tailored horizontal folds -- soft architectural drape.',
    intro: 'Roman shades fold into clean horizontal pleats when raised and hang as a flat panel when lowered. Hundreds of designer fabrics -- linen, cotton, silk blends -- with optional blackout lining. The warmest, most residential of all shade categories.',
    features: ['Flat, hobbled, and relaxed styles', 'Optional blackout lining', 'Hundreds of designer fabrics', 'Cordless child-safe operation', 'Custom width and length'],
    cta: 'Browse Roman Shade Fabrics',
  },
  'wood-aluminum-blinds': {
    tagline: 'Ladder-cord slats with precise tilt -- wood or matte aluminum.',
    intro: 'Horizontal blinds deliver the most precise light control of any window treatment. Real wood or faux wood slats tilt to any angle, from fully open to completely closed. A timeless choice for bedrooms, offices, and rooms where exact light management matters.',
    features: ['Real wood and faux wood options', 'Precise tilt control at any angle', 'Moisture-resistant faux wood for bathrooms', 'Cordless and top-down options', 'Affordable and durable'],
    cta: 'Get a Free Blind Measurement',
  },
  'shangri-la-shades': {
    tagline: 'Floating fabric vanes between sheer facings -- filtered light, sculpted depth.',
    intro: 'Shangri-La (Silhouette) shades suspend horizontal fabric vanes between two sheer facings, creating the visual depth of drapery with the functionality of a blind. The most refined light filtering available -- museum-quality diffusion that flatters any interior.',
    features: ['Floating vane construction', 'Full privacy when closed', 'Soft, luminous light diffusion', 'Available in motorized operation', 'Premium designer aesthetic'],
    cta: 'Schedule a Shangri-La Consultation',
  },
  'curtains-drapery': {
    tagline: 'Floor-grazing panels on hand-finished metal track.',
    intro: 'Custom drapery is the defining layer of an elevated interior. We design, source, and install custom panel drapery in hundreds of fabrics -- from sheer linen to blackout velvet -- on precision-engineered metal track systems that ensure smooth, quiet operation.',
    features: ['Blackout and sheer fabric options', 'Custom width and floor-to-ceiling length', 'Hand-finished metal track systems', 'Ripple-fold and pinch-pleat styles', 'Professional installation included'],
    cta: 'Book a Drapery Design Consultation',
  },
  'motorized-shading': {
    tagline: 'Whisper-quiet motors. App, voice, and scheduled automation.',
    intro: 'Motorized shading integrates with Alexa, Google Home, and Apple HomeKit to automate your light and privacy throughout the day. Our team handles complete installation and smart home programming -- you never touch a settings menu.',
    features: ['Works with Alexa, Google Home, HomeKit', 'App control from anywhere', 'Automated daily schedules', 'Battery or hardwired motors', 'Full IT integration included'],
    cta: 'Get a Free Smart Shading Quote',
  },
  'plantation-shutters': {
    tagline: 'Classic hardwood louvres -- timeless privacy and light control.',
    intro: 'Plantation shutters are the gold standard of window treatments for Southern California homes, combining architectural elegance with practical light control that no shade or blind can match. Custom-built to fit your exact window dimensions, our shutters install on precision hinges and feature wide louvres that tilt smoothly to any angle. Whether you are managing ocean glare in a coastal home or blocking afternoon heat in an inland neighborhood, plantation shutters provide year-round performance with zero fabric to fade or replace.',
    features: ['Custom-fitted hardwood and composite frames', 'Wide 3.5" and 4.5" louvre options', 'Full-height, cafe-style, and bi-fold configurations', 'Paint and stain-grade finishes', 'Lifetime structural warranty'],
    cta: 'Get a Free Plantation Shutter Quote',
  },
  'faux-wood-blinds': {
    tagline: 'The look of real wood -- built for humidity and direct sun.',
    intro: 'Faux wood blinds deliver the warmth and character of real wood at a fraction of the cost, with the added advantage of being completely moisture-resistant and UV-stable. Ideal for bathrooms, kitchens, and any room where Southern California humidity or direct afternoon sun would warp genuine wood. Our faux wood blinds are custom-cut to your window dimensions and feature the same ladder-cord tilt mechanism as premium wood blinds -- smooth operation, precise angle control, and a refined matte finish that coordinates with any interior palette.',
    features: ['Moisture-resistant composite construction', 'Will not warp, crack, or yellow in direct sun', '2" and 2.5" slat widths', 'Cordless and motorized lift options', 'Custom-cut to exact window size'],
    cta: 'Book a Free Faux Wood Blind Consultation',
  },
  'aluminum-blinds': {
    tagline: 'Slim metal slats -- commercial durability for residential spaces.',
    intro: 'Aluminum blinds are the most affordable precision light-control solution available, and they perform exceptionally well in Southern California garages, home offices, rental properties, and utility spaces where durability matters more than decor. Our custom-cut aluminum blinds feature powder-coated slats that resist moisture, salt air, and UV fading, making them particularly well-suited to coastal properties. Available in dozens of metallic and matte colors with cordless options for child safety.',
    features: ['Powder-coated moisture and UV resistance', 'Slim 1" slat profile for a clean look', 'Dozens of colors including metallic finishes', 'Cordless lift for child safety', 'Affordable custom-cut pricing'],
    cta: 'Get an Aluminum Blind Quote',
  },
  'vertical-blinds': {
    tagline: 'Floor-to-ceiling vertical louvres for sliders and large windows.',
    intro: 'Vertical blinds are the purpose-built solution for sliding glass doors and oversized windows -- the areas where horizontal blinds become impractical and curtains get in the way. Our custom vertical blinds feature smooth-gliding fabric or PVC louvres that stack neatly to the side when fully open, giving you complete access to your patio or yard. In San Diego homes where indoor-outdoor living defines the architecture, vertical blinds bridge the gap between light control and open-plan flow. Available in fabric, vinyl, and sheer options.',
    features: ['Designed for sliding doors and wide windows', 'Smooth stack-to-side operation', 'Fabric, vinyl, and sheer louvre options', 'Privacy and blackout fabric available', 'Custom-cut to exact width and height'],
    cta: 'Book a Free Vertical Blind Measurement',
  },
  'panel-track-blinds': {
    tagline: 'Wide fabric panels on a gliding track -- modern and minimal.',
    intro: 'Panel track blinds are the contemporary evolution of vertical blinds -- wide fabric panels glide smoothly along an overhead track to cover large windows, room dividers, and sliding doors with a clean, architectural look that feels at home in modern San Diego interiors. Unlike traditional vertical blinds with individual louvres, panel tracks use full-width fabric panels in any material from sheer linen to blackout weave, creating a gallery-like presentation of fabric. The result is a window wall that feels intentional and designed rather than functional and forgotten.',
    features: ['Wide fabric panels, no individual louvres', 'Smooth gliding track system', 'Sheer, light-filter, and blackout fabrics', 'Ideal for room dividers and large windows', 'Motorized track option available'],
    cta: 'Schedule a Panel Track Consultation',
  },
  'woven-wood-shades': {
    tagline: 'Natural bamboo, jute, and rattan -- organic texture, warm light.',
    intro: 'Woven wood shades bring the natural warmth of bamboo, jute, sea grass, and rattan into your home as a custom window treatment that filters light through its organic weave. Popular in San Diego beach communities and craftsman neighborhoods alike, woven wood shades create a relaxed, biophilic aesthetic that pairs beautifully with linen sofas and warm wood floors. Each shade is custom-woven and custom-measured, with optional fabric lining for increased privacy and UV protection without sacrificing the natural texture.',
    features: ['Natural bamboo, jute, sea grass, and rattan weaves', 'Optional blackout lining insert', 'Roman fold and roller operation options', 'Warm, organic light filtration', 'Unique natural texture in every piece'],
    cta: 'Explore Woven Wood Shade Fabrics',
  },
  'sheer-shades': {
    tagline: 'Diffused daylight without glare -- privacy without darkness.',
    intro: 'Sheer shades solve the hardest problem in window treatment design: how to keep a room bright and connected to the outdoors while eliminating harsh glare and maintaining daytime privacy. Using a single sheer fabric panel, these shades scatter and soften incoming sunlight across your interior without blocking it. In San Diego and coastal communities where natural light is prized, sheer shades let you live with your windows open to the view while protecting art, upholstery, and your eyes from the intensity of direct Southern California sun.',
    features: ['Light-diffusing sheer weave construction', 'Daytime privacy without room darkening', 'Reduces UV damage to floors and furniture', 'Cordless and motorized options', 'Available in dozens of neutral tones'],
    cta: 'Book a Sheer Shade Consultation',
  },
  'blackout-curtains': {
    tagline: '100% light block -- complete privacy, total sleep control.',
    intro: 'Blackout curtains are the only window treatment that delivers complete light elimination -- critical for nurseries, home theaters, night-shift workers, and anyone who needs restorative sleep in a sun-drenched San Diego home. Our custom blackout curtains use triple-pass blackout lining that seals every ray of light when drawn, combined with a front fabric in any designer color or pattern you choose. The result is a window treatment that performs like a blackout shade but installs and moves like elegant drapery.',
    features: ['Triple-pass blackout lining -- 100% light block', 'Designer front fabric in hundreds of options', 'Floor-to-ceiling custom lengths', 'Metal track or rod installation', 'Sound-dampening secondary benefit'],
    cta: 'Get a Custom Blackout Curtain Quote',
  },
  'sheer-drapes': {
    tagline: 'Floor-length linen panels -- luminous privacy for formal rooms.',
    intro: 'Sheer drapes bring the quiet luxury of filtered natural light and soft privacy to living rooms, dining rooms, and primary suites across Southern California. Unlike room-darkening window treatments, sheer drapes embrace sunlight -- diffusing it through a layer of fine linen, voile, or gauze into a warm, scattered glow that makes rooms feel larger and more peaceful. Our custom sheer drapes are cut floor-to-ceiling and installed on precision metal track or decorative rod systems that allow smooth, graceful operation day after day.',
    features: ['Fine linen, voile, and gauze fabric options', 'Floor-to-ceiling custom lengths', 'Ripple-fold, pinch-pleat, and tab-top styles', 'Pairs beautifully with blackout roller behind', 'Custom metal track or decorative rod'],
    cta: 'Schedule a Sheer Drape Consultation',
  },
  'motorized-exterior': {
    tagline: 'Outdoor roller screens -- block heat before it enters the glass.',
    intro: 'Motorized exterior shades are the most effective way to manage heat gain in a Southern California home -- stopping solar energy before it ever reaches the glass, rather than trying to contain it inside with interior treatments. Mounted on the outside of windows and doors, our motorized exterior screens deploy at the touch of a button or on an automated schedule, reducing interior temperatures by up to 15 degrees and cutting cooling costs significantly. Engineered for coastal salt air and inland UV exposure, these screens are built with commercial-grade components that last decades.',
    features: ['Blocks solar heat before it enters the glass', 'Commercial-grade UV and salt-air resistance', 'App, remote, and scheduled automation', 'Reduces cooling costs by 20-40%', 'Wind sensors for automatic retraction'],
    cta: 'Get a Free Exterior Shade Assessment',
  },
  'sun-screens': {
    tagline: 'Perforated solar mesh -- view preservation with glare elimination.',
    intro: 'Solar sun screen shades use a precision-engineered mesh fabric with an open-factor weave that blocks UV rays and reduces glare while preserving your outward view -- something no blackout or opaque treatment can do. In San Diego homes with ocean views, canyon vistas, or pool areas, sun screens let you keep that connection to the outdoors while making your interior livable in direct afternoon sun. Our sun screens are available in openness factors from 1% (maximum privacy) to 10% (maximum view), custom-measured and professionally installed.',
    features: ['Preserves outward view while blocking glare', '1% to 10% openness factor options', 'Reduces UV damage by up to 95%', 'Significantly lowers cooling load', 'Cordless, chain, and motorized operation'],
    cta: 'Book a Sun Screen Consultation',
  },
  'awnings': {
    tagline: 'Retractable fabric awnings -- shade your patio, protect your interior.',
    intro: 'Retractable awnings transform your outdoor living space into a comfortable, shaded retreat while simultaneously reducing the solar heat load on the windows and doors they cover. In San Diego where outdoor living is year-round, a motorized retractable awning effectively extends your livable square footage into the backyard or patio -- shielding furniture, flooring, and guests from direct sun without permanently blocking skylight when retracted. Our awnings feature commercial-grade aluminum arms, UV-stable Sunbrella fabric, and optional wind and sun sensors for fully automatic operation.',
    features: ['Motorized retractable operation', 'Commercial-grade aluminum arm mechanism', 'UV-stable Sunbrella fabric collection', 'Wind and sun sensor automation', 'Reduces patio temperatures by up to 20 degrees F'],
    cta: 'Get a Free Awning Estimate',
  },
}

// --- Product FAQs for landing pages ---
export const PRODUCT_FAQ: Record<string, Array<{ q: string; a: string }>> = {
  'roller-shades': [
    {
      q: 'How much do custom roller shades cost in San Diego?',
      a: 'Custom roller shades typically range from $150 to $450 per window depending on fabric, size, and lift system. Motorized rollers start around $350 per window. iL Progetto provides a detailed written quote during your free in-home consultation -- no surprises.',
    },
    {
      q: 'What is the difference between light-filtering and blackout roller shades?',
      a: 'Light-filtering roller shades diffuse sunlight, reducing glare while maintaining a soft, bright room feel and daytime privacy. Blackout roller shades use an opaque coated fabric that blocks 100% of light -- essential for bedrooms, nurseries, and home theaters. We carry both in dozens of colors.',
    },
    {
      q: 'Can roller shades be motorized?',
      a: 'Yes. We install battery-powered and hardwired motorized roller shades that integrate with Alexa, Google Home, and Apple HomeKit. You can set schedules so shades raise at sunrise and lower at sunset automatically, protecting your furniture and maintaining comfortable temperatures.',
    },
    {
      q: 'How long does roller shade installation take?',
      a: 'A typical roller shade installation takes 15-30 minutes per window. Most whole-home projects are completed in a single half-day appointment. Our installer arrives with all hardware pre-assembled to your measurements -- we do not drill test holes.',
    },
  ],
  'zebra-shades': [
    {
      q: 'What are zebra shades and how do they work?',
      a: 'Zebra shades use a single continuous loop of fabric with alternating sheer and opaque horizontal stripes. When you raise or lower the shade, the stripes align to create full opacity or full diffusion -- you can stop at any point between for infinite gradations of light and privacy.',
    },
    {
      q: 'Are zebra shades good for bedrooms?',
      a: 'Zebra shades provide excellent daytime privacy and light control, but for full blackout in a bedroom we recommend pairing them with a blackout liner or choosing a dedicated blackout roller. Zebra shades are most popular in living rooms, offices, and spaces where you want flexible lighting throughout the day.',
    },
    {
      q: 'Do zebra shades come in motorized options?',
      a: 'Yes. All of our zebra shades are available with battery or hardwired motors compatible with Alexa, Google Home, and HomeKit. Motorized zebra shades are particularly popular in living rooms where you want the convenience of adjusting light levels without leaving the sofa.',
    },
    {
      q: 'How do you clean zebra shades?',
      a: 'Zebra shades are best maintained with a soft brush vacuum attachment on a low setting or light dusting with a microfiber cloth. Spot-treat small stains with a slightly damp cloth. Avoid soaking the fabric. Most of our zebra shade fabrics are treated with a stain-resistant coating at the factory.',
    },
  ],
  'cellular-shades': [
    {
      q: 'Are cellular shades worth it in Southern California where it rarely gets cold?',
      a: 'Absolutely. Cellular shades work both ways -- they reduce solar heat gain in summer by trapping air between the fabric cells and the glass, and they add insulation value in winter. In San Diego inland communities like El Cajon and Escondido, where summer highs regularly exceed 95 degrees F, cellular shades measurably reduce air conditioning load.',
    },
    {
      q: 'What is the difference between single-cell and double-cell honeycomb shades?',
      a: 'Single-cell shades have one layer of hexagonal air pockets and provide good insulation at an affordable price. Double-cell shades have two layers of cells for higher thermal resistance (R-value) and are recommended for rooms with direct western or southern exposure. Triple-cell shades offer maximum insulation and are ideal for rooms where temperature control is critical.',
    },
    {
      q: 'Do cellular shades really reduce energy bills?',
      a: 'Yes. Studies by the U.S. Department of Energy show properly installed cellular shades can reduce heat loss through windows by up to 40% in winter and reduce solar heat gain in summer. In a San Diego home with many west-facing windows, the energy savings can offset the cost of cellular shades within 2-4 years.',
    },
    {
      q: 'Can cellular shades be used in bathrooms?',
      a: 'Yes, with the right fabric selection. We carry moisture-resistant cellular shade fabrics specifically rated for high-humidity environments like bathrooms and kitchens. These resist mold, mildew, and warping. Let your iL Progetto consultant know the room when you call -- we will recommend the appropriate fabric.',
    },
  ],
  'roman-shades': [
    {
      q: 'What fabric is best for Roman shades in a sunny San Diego room?',
      a: 'For sun-facing rooms, we recommend a medium-weight linen or cotton-linen blend with a light-filtering liner. This softens harsh sunlight without blocking it entirely, protecting your furniture while keeping the room warm and inviting. For west-facing rooms with intense afternoon sun, we often add a blackout lining behind the decorative fabric.',
    },
    {
      q: 'How do I measure for Roman shades?',
      a: 'You do not need to measure -- that is what our free in-home consultation is for. Our designer brings a laser measure and takes precise width and drop measurements for inside-mount or outside-mount installation. Roman shades require particularly precise measurement because the fabric has zero margin for error at the edges.',
    },
    {
      q: 'What is the difference between flat, hobbled, and relaxed Roman shades?',
      a: 'Flat Roman shades fold into clean horizontal pleats with no fabric between them when raised -- a crisp, tailored look. Hobbled (or looped) Romans have permanent horizontal folds of fabric that give a soft, sculptural appearance even when fully lowered. Relaxed Romans have a gentle curved bottom hem that creates a casual, unfussy drape -- popular in beach cottages and informal living rooms.',
    },
    {
      q: 'Are Roman shades child-safe?',
      a: 'All of our Roman shades are available in cordless operation, which is the safest option for homes with children under 6. We also offer motorized Roman shades for the ultimate in child safety and convenience. California law requires cordless or inaccessible cord options in all child-use spaces -- we ensure every installation is compliant.',
    },
  ],
  'wood-aluminum-blinds': [
    {
      q: 'Will real wood blinds warp in a San Diego coastal home?',
      a: 'In direct ocean-facing rooms with significant humidity fluctuation, real wood blinds can warp over time. For coastal properties in La Jolla, Del Mar, Coronado, and Solana Beach, we typically recommend faux wood blinds which are dimensionally stable in any humidity. Inland homes with stable HVAC environments handle real wood very well.',
    },
    {
      q: 'What slat width should I choose -- 2 inch or 2.5 inch?',
      a: '2-inch slats are the classic standard, suited to most residential windows, and allow more slats to stack for an unobstructed view when fully raised. 2.5-inch slats have a more contemporary look and let in slightly more light per tilt position. For large windows and sliding doors, 2.5-inch slats look more proportional. We will show you both options in your home during the consultation.',
    },
    {
      q: 'Can I get wood blinds in a custom color?',
      a: 'Yes. Our faux wood blinds are available in over 40 colors and finishes including white, off-white, grey, espresso, golden oak, and cherry. Real wood blinds can be stain-matched or paint-matched to your existing woodwork. Bring a paint chip or wood sample to your consultation and we will find the closest match in our collection.',
    },
    {
      q: 'How long do wood blinds last?',
      a: 'High-quality wood and faux wood blinds last 7-15 years with normal use and basic maintenance. The ladder cord and tilt mechanism are the first parts to show wear -- we carry replacement cords and mechanism parts for all the brands we install. Faux wood blinds in high-humidity areas often outlast real wood.',
    },
  ],
  'shangri-la-shades': [
    {
      q: 'What is a Shangri-La shade and how is it different from a regular roller shade?',
      a: 'A Shangri-La shade (also called a Silhouette shade) consists of two sheer fabric facings with horizontal fabric vanes suspended between them. When open, the vanes hang freely and the entire shade appears translucent. When the vanes are tilted closed, the shade provides full privacy. The result is an infinitely more refined and sculptural look than a standard roller shade.',
    },
    {
      q: 'Do Shangri-La shades provide UV protection?',
      a: 'Yes. Even with the vanes in the fully open position, the two sheer fabric layers block between 65-80% of UV radiation. When the vanes are tilted closed, UV blockage increases to over 95%. This makes Shangri-La shades an excellent choice for rooms with valuable art, rugs, or wood flooring that you want to protect from fading.',
    },
    {
      q: 'Can Shangri-La shades be motorized?',
      a: 'Absolutely. Motorized Shangri-La shades are among our most popular luxury installations. The motor controls both the raise-and-lower function and the vane tilt simultaneously. You can set scenes -- "morning light," "afternoon privacy," "evening warmth" -- and trigger them by voice, app, or schedule.',
    },
    {
      q: 'How do you clean Shangri-La shades?',
      a: 'Shangri-La shades should be vacuumed regularly with a soft brush attachment to prevent dust accumulation on the vanes. Spot-clean with a barely damp cloth for small stains. For deep cleaning, we recommend professional ultrasonic cleaning service, which we can arrange for you. Do not immerse Shangri-La shades in water.',
    },
  ],
  'curtains-drapery': [
    {
      q: 'How much do custom curtains cost in San Diego?',
      a: 'Custom drapery panels typically range from $200 to $800 per panel depending on fabric weight, lining, and pleat style. A complete living room window treatment with two panels and track hardware averages $600-$1,800 installed. iL Progetto quotes every project during a free in-home consultation -- no estimate fees.',
    },
    {
      q: 'What is the difference between ripple-fold and pinch-pleat curtains?',
      a: 'Ripple-fold curtains use evenly spaced clips on a specialized track that creates uniform S-shaped waves across the full width of the panel -- a contemporary, architectural look. Pinch-pleat curtains use hand-sewn pleats grouped at regular intervals -- the traditional look associated with formal rooms and classic European interiors. Both styles are available with our track systems.',
    },
    {
      q: 'Do you install curtain rods or curtain tracks?',
      a: 'We install both. Decorative rods suit traditional and transitional interiors -- they are visible and become a design element. Ceiling-mounted or recessed tracks are the modern standard, creating a cleaner line and allowing panels to traverse the full width without the visual interruption of a rod finial. We will recommend the right system for your space.',
    },
    {
      q: 'Can curtains be blackout?',
      a: 'Yes. We offer triple-pass blackout lining that can be applied to any of our decorative front fabrics. The blackout lining is sewn behind the visible fabric so you choose the color and texture facing your room, while still achieving complete light block. This is the most popular configuration for primary bedrooms in San Diego.',
    },
  ],
  'motorized-shading': [
    {
      q: 'What smart home systems do your motorized shades work with?',
      a: 'Our motorized shades integrate natively with Amazon Alexa, Google Home, and Apple HomeKit. We also install systems compatible with Lutron Caseta, Control4, and Crestron for whole-home automation setups. Our installer handles all programming during the installation appointment -- you will never need to configure an app from scratch.',
    },
    {
      q: 'Is battery or hardwired motor better for motorized shades?',
      a: 'Battery motors are easier to install (no electrical work needed), completely wireless, and last 1-3 years per charge depending on use frequency. Hardwired motors never need charging and are better for commercial or high-use installations. For most residential applications, battery motors are the practical choice -- we handle the annual recharge as part of our service follow-up.',
    },
    {
      q: 'Can existing manual shades be converted to motorized?',
      a: 'In many cases, yes. If your current shades use a standard roller tube, we can often retrofit a battery motor without replacing the shade itself. We assess convertibility during the in-home consultation. When the shade fabric or tube is incompatible, we quote a full replacement with the motor included.',
    },
    {
      q: 'How quiet are motorized shades?',
      a: 'Modern tubular motors are exceptionally quiet -- typically under 40 decibels, about the level of a refrigerator hum. You hear a faint mechanical movement as the shade travels but no buzzing, grinding, or clicking. For home theaters and bedrooms, the noise level is completely unobtrusive.',
    },
  ],
  'plantation-shutters': [
    {
      q: 'Are plantation shutters worth the investment in a San Diego home?',
      a: 'Plantation shutters consistently return value at resale -- they are classified as a permanent home improvement, not a furnishing, and appraiser data shows they add measurably to home value. They also require zero maintenance beyond occasional wiping, last decades, and never need replacement due to fabric fading or mechanical wear. In HOA communities throughout Rancho Santa Fe, Poway, and La Jolla, shutters are often specifically approved where other window treatments are not.',
    },
    {
      q: 'What is the difference between 3.5-inch and 4.5-inch louvres on plantation shutters?',
      a: '3.5-inch louvres are the traditional standard -- they look proportional on most residential windows and are the most popular choice for bedrooms and hallways. 4.5-inch louvres are the premium contemporary choice: wider, more dramatic, and they allow more light in when open. For larger windows and rooms with views, 4.5-inch louvres are the preferred specification.',
    },
    {
      q: 'Can plantation shutters be installed on sliding doors?',
      a: 'Yes -- we install bi-fold shutter panels specifically designed for sliding door openings. The panels fold back against each other to give you full access to the door when open. This is a popular solution in San Diego homes with glass sliders to the patio, combining the aesthetic of shutters with the practicality of full door access.',
    },
    {
      q: 'How long does plantation shutter installation take?',
      a: 'Custom plantation shutters typically require 4-6 weeks from measurement to installation, as each panel is built to order. Installation itself takes 2-4 hours for a typical home. We schedule a dedicated installation day and our installer completes the entire job in one visit, including hardware adjustment and operation demonstration.',
    },
  ],
  'faux-wood-blinds': [
    {
      q: 'Are faux wood blinds as good as real wood blinds?',
      a: 'For most San Diego homes, faux wood blinds outperform real wood in the rooms where blinds are most used -- bathrooms, kitchens, and any room with direct western or southern sun exposure. They are dimensionally stable in heat and humidity, never warp, and are UV-stable. The visual difference is minimal in most interior lighting conditions. Real wood has a slight edge in tactile feel and acoustic presence, but faux wood wins on durability and value.',
    },
    {
      q: 'What colors do faux wood blinds come in?',
      a: 'Our faux wood blind collection includes over 40 colors and finishes: bright whites, warm off-whites, greys, espresso, golden oak, cherry, and walnut tones. We can coordinate with most cabinet, trim, and flooring finishes. During your in-home consultation, we bring physical samples to match against your actual interior rather than relying on screen colors.',
    },
    {
      q: 'How wide can a faux wood blind be?',
      a: 'A single faux wood blind panel can typically span up to 96 inches wide. For windows wider than this, we use a center split with two panels on a shared headrail -- virtually invisible when closed and completely practical when operating. Our installer measures for the correct configuration during the in-home consultation.',
    },
    {
      q: 'Do faux wood blinds insulate against heat?',
      a: 'Faux wood blinds provide a moderate insulation benefit when fully closed -- the solid slats create a barrier that reduces convective heat transfer near the glass surface. For maximum thermal performance, we recommend pairing faux wood blinds with cellular shades or blackout drapery panels in rooms with extreme sun exposure.',
    },
  ],
  'aluminum-blinds': [
    {
      q: 'Where are aluminum blinds most commonly used?',
      a: 'Aluminum blinds excel in offices, garages, rental properties, utility rooms, and any space where durability and budget matter more than luxury aesthetics. They are also popular in bathrooms and laundry rooms because the powder-coated metal is completely moisture-proof. In coastal properties in San Diego, aluminum blinds handle salt air better than wood or fabric treatments.',
    },
    {
      q: 'Can aluminum blinds be custom sized?',
      a: 'Yes. All of our aluminum blinds are custom-cut to your exact window width and drop measurements. There is no standard-size shortcut -- we measure during the in-home visit and your blinds arrive cut precisely for each window. This ensures flush inside-mount installation without gaps at the edges.',
    },
    {
      q: 'Are aluminum blinds noisy?',
      a: 'Aluminum blinds with 1-inch slats can rattle if a window is open and air flows across them. For rooms where you frequently open windows, we recommend installing with a hold-down bracket at the bottom rail, which prevents movement in the breeze. Alternatively, a cordless roller shade or cellular shade avoids this issue entirely.',
    },
    {
      q: 'How long do aluminum blinds last?',
      a: 'With basic care, aluminum blinds last 5-10 years before the finish or slats show wear. The cord and tilt mechanism typically outlast the slats. When individual slats are bent or damaged, they can often be replaced without replacing the entire blind. We carry replacement slats for most aluminum blind brands we install.',
    },
  ],
  'vertical-blinds': [
    {
      q: 'Are vertical blinds still popular in San Diego homes?',
      a: 'Vertical blinds remain the practical standard for sliding glass doors and oversized windows in both residential and commercial settings. While the style has evolved -- modern fabric louvres replace the dated vinyl of earlier decades -- the functionality is unmatched for wide openings. Contemporary fabric vertical blinds in natural linen or textured weave look nothing like the vertical blinds of the 1990s.',
    },
    {
      q: 'What is the best material for vertical blind louvres?',
      a: 'Fabric louvres are the premium choice -- they drape softly, are available in hundreds of patterns and textures, and filter light more attractively than vinyl. Vinyl and PVC louvres are the most durable choice for high-moisture areas or direct sun exposure. We carry both and will recommend the right material based on your room, exposure, and maintenance preferences.',
    },
    {
      q: 'Can vertical blinds be motorized?',
      a: 'Yes. Motorized vertical blinds use a track motor that controls both the traverse (open/close) and tilt functions, giving you full automation of your sliding door or large window covering. This is particularly popular in San Diego homes where the sliding door is accessed multiple times a day -- automation removes the need to manually adjust.',
    },
    {
      q: 'How do vertical blinds compare to panel track blinds?',
      a: 'Vertical blinds have individual louvres that rotate for light control and tilt -- a practical, adjustable system. Panel track blinds use wide fabric panels that traverse like sliding panels of a wall, giving a cleaner, more contemporary look without individual louvres. Panel tracks offer fewer light-control options but a significantly more refined aesthetic for modern interiors.',
    },
  ],
  'panel-track-blinds': [
    {
      q: 'What size windows are panel track blinds best for?',
      a: 'Panel tracks are designed for large openings -- sliding doors, wide picture windows, and room divider applications. They are typically not practical for standard single windows under 60 inches wide, where the panel proportions become awkward. For large openings of 72 inches and wider, panel tracks are often the most architecturally appropriate choice.',
    },
    {
      q: 'Can panel track blinds be used as room dividers?',
      a: 'Yes -- this is one of the most popular applications. Ceiling-mounted panel track systems with 3-5 panels can divide a large open-plan living space, home office from bedroom, or dining room from kitchen. When retracted, all panels stack at one end and the room is fully open. When deployed, they create soft, defined zones with light-diffusing fabric.',
    },
    {
      q: 'What fabrics are available for panel track blinds?',
      a: 'We offer panel track fabrics in sheer, light-filtering, and blackout weaves across dozens of colors and textures. Natural linen blends are particularly popular in San Diego beach communities. Woven wood materials -- bamboo, jute, and sea grass -- are also available in panel track format for a biophilic, organic aesthetic.',
    },
    {
      q: 'How are panel track blinds installed?',
      a: 'Panel tracks are mounted on a ceiling or top-of-window rail system with multiple channels -- each panel hangs from its own channel and traverses independently. Installation requires precise ceiling or header mounting to ensure the track is level. Our installer handles all rail cutting, leveling, and panel attachment during the installation appointment.',
    },
  ],
  'woven-wood-shades': [
    {
      q: 'Do woven wood shades work in San Diego coastal homes?',
      a: 'Woven wood shades are extremely popular in San Diego coastal communities because their natural, relaxed texture complements the California coastal aesthetic perfectly -- linen sofas, whitewashed wood, and rattan accent pieces all coordinate effortlessly. Bamboo and sea grass weaves handle moderate coastal humidity well. We recommend adding a lining in rooms with direct ocean spray or extreme sun exposure.',
    },
    {
      q: 'How much light do woven wood shades block?',
      a: 'Unlined woven wood shades block approximately 60-80% of sunlight depending on the density of the weave -- they filter light rather than block it, creating a warm, amber-toned glow through the natural fibers. Adding an opaque liner increases privacy and light block to 95%+. For bedrooms requiring full blackout, we recommend adding a blackout roller behind the woven wood shade.',
    },
    {
      q: 'Are woven wood shades durable?',
      a: 'Yes, with proper care. Natural fiber shades should be kept out of standing water and protected from sustained direct rain. Occasional light vacuuming with a soft brush keeps dust from embedding in the weave. In indoor conditions, a quality woven wood shade lasts 7-12 years. Bamboo is the most durable natural fiber; sea grass and jute are slightly more delicate.',
    },
    {
      q: 'Can woven wood shades be motorized?',
      a: 'Yes. We install battery-powered motorized lift systems on woven wood shades in both Roman fold and roller configurations. Motorized woven wood shades are particularly popular in living rooms and primary bedrooms where you want the organic aesthetic without manual operation.',
    },
  ],
  'sheer-shades': [
    {
      q: 'What is the difference between sheer shades and sheer drapes?',
      a: 'Sheer shades are a functional window covering -- they mount inside the window frame like a blind and can be raised or lowered to control how much diffused light enters. Sheer drapes are fabric panels that hang from a rod or track and frame the window; they provide a softer, more formal aesthetic but are typically stationary decorative elements rather than adjustable privacy tools. Many San Diego homes layer both for maximum design flexibility.',
    },
    {
      q: 'Do sheer shades provide privacy?',
      a: 'Sheer shades provide excellent daytime privacy -- people outside cannot see through a sheer shade in daylight conditions because the exterior is brighter than the interior. At night with interior lights on, the privacy reverses: the sheer fabric becomes translucent. For night privacy, pair sheer shades with a blackout roller behind them.',
    },
    {
      q: 'Are sheer shades good for living rooms?',
      a: 'Sheer shades are ideal for living rooms where you want to maintain a bright, airy feel while reducing harsh glare on screens and protecting furniture from UV fading. In San Diego living rooms with western exposure, sheer shades are among our most commonly recommended solutions -- they make intense afternoon sun livable without darkening the room.',
    },
    {
      q: 'How do sheer shades affect television viewing?',
      a: 'Sheer shades significantly reduce glare on TV screens and computer monitors from windows -- scattered diffused light is far less reflective than direct beam sunlight. For home theater rooms or spaces with large televisions, we often recommend layering sheer shades with a secondary blackout roller that can be deployed during movie viewing for complete screen clarity.',
    },
  ],
  'blackout-curtains': [
    {
      q: 'What makes blackout curtains actually blackout?',
      a: 'True blackout curtains use a triple-pass coated fabric liner sewn behind the decorative front panel. The three-layer coating -- typically foam sandwiched between two outer layers -- physically blocks all light transmission. The liner is cut wider than the panel and installed with minimal side gaps. For complete room blackout, we also recommend a blackout cassette roller shade to fill the window gap that curtains cannot seal.',
    },
    {
      q: 'Are blackout curtains good for San Diego bedrooms?',
      a: 'Blackout curtains are highly effective in San Diego where year-round sun means bright mornings year-round. If you work night shifts, travel across time zones, have young children who nap, or simply prioritize sleep quality, blackout curtains in the bedroom are one of the highest-ROI home improvements you can make. Our custom blackout curtains are fitted to minimize light leak at edges -- the main failure point of off-the-shelf blackout curtains.',
    },
    {
      q: 'Do blackout curtains help with heat in summer?',
      a: 'Yes. Blackout curtains with thermal lining block solar heat gain significantly. In a south or west-facing San Diego bedroom, keeping blackout curtains closed during peak afternoon hours can reduce room temperature by 5-10 degrees, reducing the burden on your air conditioning. The energy savings over a summer can be meaningful in inland communities like Escondido and El Cajon.',
    },
    {
      q: 'Can blackout curtains look elegant rather than utilitarian?',
      a: 'Absolutely. The blackout function is in the liner -- the visible fabric facing your room can be any designer material you choose. We install blackout lining behind linen, velvet, jacquard, Belgian flax, and dozens of other premium fabrics. Your curtains look exactly as designed; the liner does its work invisibly from behind.',
    },
  ],
  'sheer-drapes': [
    {
      q: 'What rooms are sheer drapes best suited for?',
      a: 'Sheer drapes work beautifully in formal living rooms, dining rooms, primary bedrooms, and any space where you want to enhance natural light rather than control it. They add softness and height to rooms with high ceilings, frame views without blocking them, and create a sense of privacy while maintaining an airy, open feel. In San Diego homes with ocean or canyon views, sheer drapes frame the vista elegantly.',
    },
    {
      q: 'Do sheer drapes provide privacy?',
      a: 'Sheer drapes provide daytime visual privacy from street-level passing -- they blur detail while allowing silhouettes. They do not provide night privacy when interior lights are on. For rooms requiring privacy in the evening, we recommend layering sheer drapes over a functional roller shade or cellular shade that can be closed at night.',
    },
    {
      q: 'What length should sheer drapes be?',
      a: 'For maximum elegance, sheer drapes should be measured to just graze the floor -- within half an inch. Puddle styles (2-4 inches of extra length pooled on the floor) create a romantic, formal look but require more maintenance. For high-traffic areas, a clean floor clearance of 0.25 inches is practical and still looks intentional. We measure precisely during the in-home consultation.',
    },
    {
      q: 'Can sheer drapes be machine washed?',
      a: 'Many of our sheer drape fabrics are dry-clean only, particularly heavier linen weaves and embroidered voiles. Some lightweight polyester sheers are machine washable on a delicate cold cycle. We note the care requirements for every fabric we sell. When in doubt, professional cleaning is always the safe choice -- we can connect you with our preferred drapery cleaning service.',
    },
  ],
  'motorized-exterior': [
    {
      q: 'How much do motorized exterior shades cost in San Diego?',
      a: 'Motorized exterior roller shades typically range from $800 to $2,500 per opening depending on size, fabric specification, and motor type. While the upfront cost is higher than interior window treatments, exterior shades pay back through energy savings -- blocking heat before it enters the glass is far more effective than treating it after. We provide detailed project quotes during the free in-home consultation.',
    },
    {
      q: 'Will motorized exterior shades hold up in coastal San Diego weather?',
      a: 'Yes. We specify exterior shades with marine-grade hardware, UV-stable coated mesh fabrics, and stainless steel or powder-coated aluminum components rated for coastal salt air. All motors are IP-rated for outdoor weather exposure. In beachfront communities like Coronado, La Jolla, and Del Mar, we have installed exterior shades that have performed flawlessly for years with no corrosion or mechanical failure.',
    },
    {
      q: 'Do exterior shades come with wind protection?',
      a: 'Yes. We offer optional wind sensors that automatically retract exterior shades when wind speed exceeds a preset threshold -- typically 15-20 mph. This prevents fabric and mechanism damage during unexpected gusts. In San Diego coastal areas subject to Santa Ana wind events and marine layer afternoons, wind sensors are strongly recommended.',
    },
    {
      q: 'How do motorized exterior shades integrate with my smart home?',
      a: 'Our exterior shade motors are compatible with most major smart home platforms including Lutron, Somfy, and direct Wi-Fi apps. They can be scheduled to deploy during peak sun hours and retract at sunset automatically, or controlled by a physical remote or wall switch if you prefer. Our installer handles all configuration during the installation appointment.',
    },
  ],
  'sun-screens': [
    {
      q: 'What is the openness factor and which should I choose for my San Diego home?',
      a: 'Openness factor refers to the percentage of the fabric that is open -- essentially how much you can see through the screen and how much air and light pass through. A 1% openness fabric is nearly opaque, providing maximum glare reduction and privacy. A 5% fabric is the most popular balance between glare control and view preservation. A 10% fabric maximizes view clarity but reduces glare and UV less aggressively. For most San Diego living rooms and offices, we recommend 5%.',
    },
    {
      q: 'Can I still see out through a solar sun screen shade?',
      a: 'Yes -- this is the defining advantage of sun screens over blackout or opaque treatments. A 5% openness sun screen lets you clearly see your view, garden, or street from inside, while people outside see only a subtle mesh surface rather than your interior. The view is best in daylight when the exterior is brighter than the interior.',
    },
    {
      q: 'Do sun screens eliminate glare completely?',
      a: 'Sun screens dramatically reduce but do not completely eliminate glare. A 5% fabric reduces solar heat gain by approximately 75-85% and cuts glare to a comfortable level for most activities including TV viewing and computer work. For complete glare elimination, a blackout roller or room-darkening cellular shade is required. Many clients install sun screens as the primary shade with a blackout roller behind for total control.',
    },
    {
      q: 'Are sun screens energy efficient?',
      a: 'Yes. Solar screen shades are among the most cost-effective energy-saving upgrades for San Diego homes. By blocking 75-90% of solar heat before it enters through the glass, they significantly reduce air conditioning demand during San Diego summers. The energy savings are most pronounced in rooms with south and west-facing exposure -- the afternoon sun positions that drive peak cooling load.',
    },
  ],
  'awnings': [
    {
      q: 'How much does a retractable awning cost in San Diego?',
      a: 'A motorized retractable patio awning typically costs $2,500 to $6,000 installed depending on projection depth, width, and fabric selection. Smaller door awnings start around $1,200 installed. Given that a well-specified awning lasts 15-20 years and can reduce patio temperatures by up to 20 degrees F, the per-year cost is extremely competitive compared to patio cooling alternatives.',
    },
    {
      q: 'What is Sunbrella fabric and why do awnings use it?',
      a: 'Sunbrella is the industry-standard performance fabric for outdoor awnings and exterior soft furnishings. It is solution-dyed acrylic -- the color is woven into the fiber rather than printed on the surface -- which gives it exceptional fade resistance, even under intense Southern California UV. Sunbrella fabrics are also water-resistant, mold-resistant, and available in hundreds of colors and stripes. Our awning collection exclusively uses Sunbrella and equivalent commercial-grade materials.',
    },
    {
      q: 'Can an awning be installed on a second-story deck?',
      a: 'Yes. We install awnings at ground level, second-story balconies, and deck railings. Second-story installations require reinforced wall mounting brackets and often a longer projection arm -- both of which we carry. Our installer assesses the mounting surface during the in-home consultation to ensure the structural requirements are met before installation.',
    },
    {
      q: 'Do retractable awnings have wind ratings?',
      a: 'Yes. Most residential motorized awnings are rated to approximately 20-25 mph sustained wind. With an optional wind sensor, the awning retracts automatically before wind speed reaches the structural limit. In San Diego areas subject to Santa Ana events, we strongly recommend wind sensors on all awning installations. We do not install awnings without discussing wind safety with every client.',
    },
  ],
}

// --- City context descriptions for landing pages ---
export const CITY_CONTEXT: Record<string, string> = {
  'san-diego':       'San Diego homeowners contend with year-round intense UV, diverse neighborhood aesthetics from craftsman bungalows to modern high-rises, and a competitive real estate market where interior finishes are closely scrutinized.',
  'poway':           "Poway's inland valley location brings hot, dry summers with temperatures regularly exceeding 95 degrees F, making heat-blocking and energy-efficient window treatments especially valuable for managing cooling costs.",
  'carlsbad':        "Carlsbad's coastal climate produces mild temperatures but high UV and salt-air exposure, with many communities governed by HOAs that specify exterior appearance standards for window treatments.",
  'la-jolla':        "La Jolla's bluff-top and canyon-rim homes face intense ocean glare, premium interior aesthetics, and strict HOA or coastal commission guidelines that favor high-end treatments like plantation shutters and motorized shading.",
  'del-mar':         'Del Mar homeowners prioritize protecting valuable ocean views while managing intense coastal UV and marine-layer humidity, with a strong preference for low-profile treatments that do not obscure sightlines.',
  'encinitas':       'Encinitas blends laid-back beach culture with design-forward interiors, where organic materials like woven wood shades and natural linen drapery coordinate perfectly with the coastal landscape and biophilic home design.',
  'solana-beach':    "Solana Beach's tight beach community means windows facing neighbors and ocean light simultaneously, creating demand for daytime privacy solutions that still allow abundant natural light to fill the home.",
  'rancho-santa-fe': "Rancho Santa Fe's estate properties and strict architectural review board require window treatments that complement Mediterranean and Spanish Colonial architecture -- plantation shutters and custom drapery are the neighborhood standard.",
  'chula-vista':     "Chula Vista's rapidly growing residential communities and diverse architectural styles -- from 1960s tract homes to new-build master-planned developments -- create demand for flexible, affordable custom window treatment solutions.",
  'national-city':   "National City's dense urban grid and modest window sizes make space-efficient treatments like roller shades and aluminum blinds particularly well-suited, while the mild coastal climate reduces the need for heavy insulating treatments.",
  'coronado':        "Coronado's island location, historic Victorian and California Craftsman architecture, and proximity to naval operations create a market for high-quality, architecturally appropriate treatments that reflect the community's pride of place.",
  'el-cajon':        "El Cajon's inland valley position amplifies San Diego's heat -- summer temperatures regularly exceed 100 degrees F -- making cellular shades, solar screens, and motorized exterior shades critical investments for comfort and energy savings.",
  'escondido':       "Escondido's growing wine country character and mix of ranch properties and suburban neighborhoods favor warm, natural materials like woven wood shades and wood blinds that complement the inland Southern California landscape.",
  'san-marcos':      "San Marcos's master-planned communities and newer construction provide standard-sized windows that are well-suited to precision custom treatments, with strong demand from young families for child-safe cordless and motorized options.",
  'vista':           "Vista's hillside homes and eclectic mix of ranch and contemporary architecture create unique window treatment challenges, with a community that values practical, durable solutions for varied window sizes and orientations.",
  'temecula':        "Temecula's wine country setting, new-build suburban communities, and significant daily temperature swings between morning and afternoon make energy-efficient cellular shades and automated motorized systems highly popular.",
}

// --- Careers content ---
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
      'Mount hardware to various wall and window frame materials -- drywall, plaster, tile, and wood',
      'Program and configure motorized and smart home-integrated shading systems',
      "Maintain a clean, professional presence in clients' homes",
      'Communicate professionally with homeowners regarding installation details',
      'Manage tools, hardware inventory, and vehicle stock',
    ],
    qualifications: [
      '2+ years experience in window treatment installation, carpentry, or related field service',
      "Valid California driver's license and clean driving record",
      'Own reliable transportation preferred (company vehicle available)',
      'Comfortable working at heights with ladders',
      'Basic familiarity with smart home systems (Alexa, Google Home) a plus',
      'Bilingual English/Spanish a plus',
    ],
    keywords: ['low-voltage motorized shading installer', 'custom blind installer jobs', 'shutter installation technician', 'field service technician San Diego', 'carpentry and window hardware mounting', 'window treatment installer Southern California'],
    compensation: '$22-$34/hour depending on experience. Performance bonuses, mileage reimbursement, and tool allowance included.',
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
      "Valid California driver's license",
      'Experience with window treatments, home furnishings, or interior design preferred',
      'CRM experience a plus',
    ],
    keywords: ['interior design consultant jobs', 'window treatment sales representative', 'in-home sales consultant Poway', 'luxury showroom sales', 'client consultation and estimating', 'design sales consultant Southern California'],
    compensation: 'Base + commission. On-target earnings $55,000-$90,000/year. Top performers earn significantly more.',
  },
}
