// ─── FAQ Data ─────────────────────────────────────────────────────────────────
// Text is flat prose — renders directly as HTML for Googlebot.
// FAQPage JSON-LD schema is generated from this array in faq.tsx.

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: 'consultation' | 'products' | 'installation' | 'pricing' | 'smart-home' | 'commercial'
}

export const FAQ_ITEMS: FaqItem[] = [
  // ─── Consultation ────────────────────────────────────────────────────────
  {
    id: 'faq-consultation-1',
    category: 'consultation',
    question: 'How does the free in-home consultation work?',
    answer:
      'Our designer visits your home at a time that works for you, bringing hundreds of fabric samples, hardware options, and measuring tools. Seeing samples in your actual light — against your walls, with your furniture — is the most accurate way to make the right choice. We assess your light needs, privacy requirements, and design aesthetic, then provide a detailed quote on the spot. There is no obligation to purchase and no fee of any kind.'
  },
  {
    id: 'faq-consultation-2',
    category: 'consultation',
    question: 'How far in advance do I need to book?',
    answer:
      'We typically have availability within two to five business days. For larger projects — multiple rooms or commercial spaces — we recommend booking one to two weeks in advance. You can schedule directly through our booking page, or call us at (858) 338-1678 to find an immediate opening.'
  },
  {
    id: 'faq-consultation-3',
    category: 'consultation',
    question: 'Do you serve areas outside of San Diego?',
    answer:
      'Yes. We serve all of San Diego County, Riverside County, Orange County, and San Bernardino County. If you are in a nearby area not listed, call us — we accommodate requests outside our standard zone on a case-by-case basis.'
  },

  // ─── Products ────────────────────────────────────────────────────────────
  {
    id: 'faq-products-1',
    category: 'products',
    question: 'What is the difference between zebra shades and sheer shades?',
    answer:
      'Both offer daytime privacy with natural light, but they work differently. <a href="/catalog?product=zebra" style="color:var(--sand);text-decoration:underline">Zebra shades</a> use alternating horizontal stripes of sheer and solid fabric on a single panel — you control light and privacy by aligning or misaligning the bands. <a href="/catalog?product=sheer" style="color:var(--sand);text-decoration:underline">Sheer shades</a> suspend fabric vanes between two sheer layers, producing a softer, more luminous diffusion of light with a refined, drapery-like appearance. Sheer shades are the more elevated of the two and work especially well in living rooms and master bedrooms.'
  },
  {
    id: 'faq-products-2',
    category: 'products',
    question: 'Can I get blackout shades in any style?',
    answer:
      'Full blackout is achievable in <a href="/catalog?product=roller" style="color:var(--sand);text-decoration:underline">roller shades</a>, <a href="/catalog?product=roman" style="color:var(--sand);text-decoration:underline">Roman shades</a>, <a href="/catalog?product=cellular" style="color:var(--sand);text-decoration:underline">cellular honeycomb shades</a>, and <a href="/catalog?product=blackout-curtains" style="color:var(--sand);text-decoration:underline">blackout drapes</a>. Roller shades with side channels give the most complete light seal and are our top recommendation for bedrooms and media rooms. The styles that are not suitable for blackout are <a href="/catalog?product=zebra" style="color:var(--sand);text-decoration:underline">zebra shades</a>, <a href="/catalog?product=sheer" style="color:var(--sand);text-decoration:underline">sheer shades</a>, and <a href="/catalog?product=butterfly" style="color:var(--sand);text-decoration:underline">butterfly shades</a> — their open-weave construction is designed for light filtering, not light elimination.'
  },
  {
    id: 'faq-products-4',
    category: 'products',
    question: 'Do you offer cordless options? Are they safe for children?',
    answer:
      'Yes. Cordless and <a href="/catalog?product=motorized" style="color:var(--sand);text-decoration:underline">motorized operation</a> is available across our entire product line. Corded window treatments are a documented safety hazard for young children, and we strongly recommend <a href="/child-safety" style="color:var(--sand);text-decoration:underline">cordless</a> or motorized systems for any room a child under six may occupy. All our cordless mechanisms are tested to current ANSI/WCMA <a href="/child-safety" style="color:var(--sand);text-decoration:underline">child safety</a> standards.'
  },

  // ─── Installation ─────────────────────────────────────────────────────────
  {
    id: 'faq-installation-2',
    category: 'installation',
    question: 'How long does installation take?',
    answer:
      'A single room typically takes thirty to sixty minutes. A full home with eight to twelve windows takes half a day. We provide a precise time estimate after measuring. Our team works cleanly and removes all packaging and debris when finished.'
  },
  {
    id: 'faq-installation-3',
    category: 'installation',
    question: 'What happens if a shade arrives damaged or is measured incorrectly?',
    answer:
      'We remeasure and replace at no charge. Measurement errors are our responsibility — if we measured it and manufactured it, we fix it. If a product arrives from our supplier with a manufacturing defect, we coordinate the replacement directly. You should never need to contact a manufacturer yourself.'
  },

  // ─── Pricing ─────────────────────────────────────────────────────────────
  {
    id: 'faq-pricing-1',
    category: 'pricing',
    question: 'Do you offer financing?',
    answer:
      'Yes. We partner with Synchrony Financial to offer flexible promotional financing plans, including deferred interest and extended monthly payment options. You can apply at <a href="https://www.mysynchrony.com" target="_blank" rel="noopener noreferrer" style="color:var(--sand);text-decoration:underline">mysynchrony.com</a>, or ask your consultant at your free in-home visit.',
  },
  {
    id: 'faq-pricing-2',
    category: 'pricing',
    question: 'Can I get a rough estimate before the consultation?',
    answer:
      'If you can share approximate window dimensions and whether you prefer manual or <a href="/catalog?product=motorized" style="color:var(--sand);text-decoration:underline">motorized operation</a>, we can provide preliminary budgetary numbers before the visit. Exact pricing requires an on-site measurement, which is why we offer the <a href="/booking" style="color:var(--sand);text-decoration:underline">free in-home consultation</a> — it takes the guesswork out entirely.'
  },

  // ─── Smart Home ──────────────────────────────────────────────────────────
  {
    id: 'faq-smart-1',
    category: 'smart-home',
    question: 'Which smart home systems do your motorized shades work with?',
    answer:
      'Our <a href="/catalog?product=motorized" style="color:var(--sand);text-decoration:underline">motorized shades</a> integrate with <a href="/smart-home/alexa" style="color:var(--sand);text-decoration:underline">Amazon Alexa</a>, <a href="/smart-home/google-home" style="color:var(--sand);text-decoration:underline">Google Home</a>, <a href="/smart-home/apple-homekit" style="color:var(--sand);text-decoration:underline">Apple HomeKit</a>, SmartThings, and <a href="/smart-home/control4" style="color:var(--sand);text-decoration:underline">Control4</a>. We also offer standalone RF remote and app-only configurations for homes without a central <a href="/smart-home" style="color:var(--sand);text-decoration:underline">smart home hub</a>. We handle the full programming and integration — you do not need to configure anything yourself.'
  },
  {
    id: 'faq-smart-2',
    category: 'smart-home',
    question: 'What happens to motorized shades if the power goes out?',
    answer:
      'Battery-powered <a href="/catalog?product=motorized" style="color:var(--sand);text-decoration:underline">motorized shades</a> continue to function normally during a power outage — they run entirely on rechargeable lithium cells. Hardwired shades will not operate without power. We recommend battery-powered motors for most residential applications for this reason.'
  },

  // ─── Commercial ──────────────────────────────────────────────────────────
  {
    id: 'faq-commercial-1',
    category: 'commercial',
    question: 'Do you handle HOA and multi-unit residential projects?',
    answer:
      'Yes. We have completed uniform window treatment installations for HOA-managed communities in San Diego County. For multi-unit projects we offer volume pricing, phased installation scheduling to minimize disruption to residents, and documentation packages for property management records. Contact us for a commercial consultation.'
  },

  // ─── Pricing ─────────────────────────────────────────────────────────────
  {
    id: 'faq-pricing-4',
    category: 'pricing',
    question: 'How much do custom window treatments cost in San Diego?',
    answer:
      'Pricing varies widely based on fabric selection, design, window size, and whether you choose manual or <a href="/catalog?product=motorized" style="color:var(--sand);text-decoration:underline">motorized operation</a>. At iL Progetto we guarantee the best price in the market — if you have received another estimate for custom window coverings, we will match or beat it. Your <a href="/booking" style="color:var(--sand);text-decoration:underline">free in-home consultation</a> includes a same-visit quote with no obligation.'
  },
  {
    id: 'faq-pricing-3', category: 'pricing',
    question: 'Is there a minimum order or project size?',
    answer: 'No minimum. We handle single-window orders and full-home projects with equal care.',
  },
  {
    id: 'faq-products-8', category: 'products',
    question: 'What are the best window treatments for privacy without blocking light?',
    answer:
      '<a href="/catalog?product=zebra" style="color:var(--sand);text-decoration:underline">Zebra shades</a>, <a href="/catalog?product=sheer" style="color:var(--sand);text-decoration:underline">sheer shades</a>, and <a href="/catalog?product=butterfly" style="color:var(--sand);text-decoration:underline">butterfly shades</a> are all excellent choices — they maintain natural light while giving you daytime privacy. Solar roller shades with a 3–5% openness factor are ideal for rooms where you also want to reduce glare and preserve the view to the outdoors.',
  },
  {
    id: 'faq-products-5', category: 'products',
    question: "What are the best window treatments for San Diego's intense sun and UV?",
    answer: 'Solar shades are engineered specifically for this. A 3-5% openness factor blocks 95-97% of UV radiation and significantly reduces heat gain while preserving your view. Darker fabrics absorb more heat than light colors.',
  },
  {
    id: 'faq-products-6', category: 'products',
    question: 'How do I choose between inside mount and outside mount?',
    answer: "Inside mount sits within the window frame for a clean built-in appearance. Outside mount attaches to the wall above and outside the frame — better for shallow windows or achieving better blackout coverage. Our consultant will recommend for each window.",
  },
  {
    id: 'faq-products-7', category: 'products',
    question: 'What is the difference between plantation shutters and regular shutters?',
    answer: 'Plantation shutters have wide louvers — typically 2.5 to 4.5 inches — providing excellent light control and airflow. They are the dominant style in San Diego residential construction.',
  },
  {
    id: 'faq-installation-6', category: 'installation',
    question: 'Do I need to do anything to prepare for installation?',
    answer: 'Please clear at least four feet of space around each window — on the floor and any nearby furniture. This gives our installers room to work safely and efficiently. We handle all setup and clean up all packaging and debris before leaving.',
  },
  {
    id: 'faq-installation-4', category: 'installation',
    question: 'What warranty covers the installation?',
    answer: 'iL Progetto provides one year of full parts and labor coverage on all installations. Internal hardware mechanisms and brackets carry a lifetime manufacturer warranty. Motorization components are covered for three years by the manufacturer. See our full <a href="/warranty" style="color:var(--sand);text-decoration:underline">warranty page</a> for complete details.',
  },
  {
    id: 'faq-smart-home-3', category: 'smart-home',
    question: 'Can motorized shades be controlled without a smart home system?',
    answer: 'Yes. All motorized shade systems include a handheld remote or wall switch. Smart home integration is an optional add-on, not a requirement.',
  },
  {
    id: 'faq-smart-home-4', category: 'smart-home',
    question: 'How do you set sun-based schedules for motorized shades?',
    answer: 'All major smart home platforms support sunrise and sunset automation. We configure your initial schedule during the installation appointment.',
  },
  {
    id: 'faq-maintenance-1', category: 'products',
    question: 'How do I clean window shades and blinds?',
    answer:
      'Cleaning method depends on the material. For <strong>roller shades, zebra shades, and all fabric treatments</strong> — use only a soft brush or the brush attachment on a vacuum. Never use a damp cloth on fabric shades as moisture can cause warping, staining, or mold. For <strong>plantation shutters and faux wood blinds</strong> — a damp microfiber cloth works well; these hard-surface materials are designed for easy wiping. When in doubt, reach out to us and we will advise for your specific product.',
  },
]

export const FAQ_CATEGORIES: { id: FaqItem['category']; label: string }[] = [
  { id: 'consultation', label: 'Consultation' },
  { id: 'products', label: 'Products' },
  { id: 'installation', label: 'Installation' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'smart-home', label: 'Smart Home' },
  { id: 'commercial', label: 'Commercial' },
]
