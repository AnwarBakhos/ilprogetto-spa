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
      'Our designer visits your home at a time that works for you, bringing hundreds of fabric samples, hardware options, and measuring tools. Seeing samples in your actual light — against your walls, with your furniture — is the most accurate way to make the right choice. We assess your light needs, privacy requirements, and design aesthetic, then provide a detailed quote on the spot. There is no obligation to purchase and no fee of any kind.',
  },
  {
    id: 'faq-consultation-2',
    category: 'consultation',
    question: 'How far in advance do I need to book?',
    answer:
      'We typically have availability within two to five business days. For larger projects — multiple rooms or commercial spaces — we recommend booking one to two weeks in advance. You can schedule directly through our booking page, or call us at (858) 338-1678 to find an immediate opening.',
  },
  {
    id: 'faq-consultation-3',
    category: 'consultation',
    question: 'Do you serve areas outside of San Diego?',
    answer:
      'Yes. We serve all of San Diego County, Riverside County, Orange County, and San Bernardino County. If you are in a nearby area not listed, call us — we accommodate requests outside our standard zone on a case-by-case basis.',
  },

  // ─── Products ────────────────────────────────────────────────────────────
  {
    id: 'faq-products-1',
    category: 'products',
    question: 'What is the difference between zebra shades and Shangri-La shades?',
    answer:
      'Both are dual-layer shades, but they operate differently. Zebra shades use alternating horizontal stripes of sheer and solid fabric on a single layer — you adjust light by aligning or misaligning the bands. Shangri-La shades suspend fabric vanes between two separate sheer layers, similar to horizontal blinds inside a sheer curtain. The result is a softer, more luminous diffusion of light. Shangri-La is the more premium and drapery-like of the two.',
  },
  {
    id: 'faq-products-2',
    category: 'products',
    question: 'Can I get blackout shades in any style?',
    answer:
      'Blackout lining is available in roller shades, Roman shades, and cellular honeycomb shades. Full blackout is most naturally achieved with roller shades, which use a single panel of coated blackout fabric with side channels to eliminate light gaps. Roman shades can be lined with blackout fabric but may have small light gaps at the edges — ideal for nurseries and guest rooms but less suitable for home theater applications.',
  },
  {
    id: 'faq-products-3',
    category: 'products',
    question: 'How long do custom window treatments typically last?',
    answer:
      'With normal use and basic care, quality custom shades last between eight and fifteen years. Motorized systems have drive mechanisms that can be serviced or replaced independently of the fabric. We use commercial-grade components throughout, and all our products are sourced from manufacturers with established warranty programs.',
  },
  {
    id: 'faq-products-4',
    category: 'products',
    question: 'Do you offer cordless options? Are they safe for children?',
    answer:
      'Yes. Cordless and motorized operation is available across our entire product line. Corded window treatments are a documented safety hazard for young children, and we strongly recommend cordless or motorized systems for any room a child under six may occupy. All our cordless mechanisms are tested to current ANSI/WCMA child safety standards.',
  },

  // ─── Installation ─────────────────────────────────────────────────────────
  {
    id: 'faq-installation-1',
    category: 'installation',
    question: 'Who does the installation — your team, or a subcontractor?',
    answer:
      'Our own licensed installation team handles every job. We do not subcontract. The same people who measure your windows are involved in the installation, which eliminates the miscommunication errors common in subcontracted work. Our installers carry California Contractors License #1127055 and full liability insurance.',
  },
  {
    id: 'faq-installation-2',
    category: 'installation',
    question: 'How long does installation take?',
    answer:
      'A single room typically takes thirty to sixty minutes. A full home with eight to twelve windows takes half a day. We provide a precise time estimate after measuring. Our team works cleanly and removes all packaging and debris when finished.',
  },
  {
    id: 'faq-installation-3',
    category: 'installation',
    question: 'What happens if a shade arrives damaged or is measured incorrectly?',
    answer:
      'We remeasure and replace at no charge. Measurement errors are our responsibility — if we measured it and manufactured it, we fix it. If a product arrives from our supplier with a manufacturing defect, we coordinate the replacement directly. You should never need to contact a manufacturer yourself.',
  },

  // ─── Pricing ─────────────────────────────────────────────────────────────
  {
    id: 'faq-pricing-1',
    category: 'pricing',
    question: 'Do you offer financing?',
    answer:
      'Yes. We partner with Synchrony Financial to offer promotional financing plans. Depending on the project total, options include deferred interest promotions and extended monthly payment plans. You can apply directly through Synchrony at the link in our footer, or ask your consultant during your in-home visit.',
  },
  {
    id: 'faq-pricing-2',
    category: 'pricing',
    question: 'Can I get a rough estimate before the consultation?',
    answer:
      'Accurate pricing requires measuring your windows, which is why we offer the free in-home consultation. That said, our roller and zebra shades typically start around $150–$250 per window installed. Motorized systems start around $350 per window. Shangri-La and custom fabric Roman shades range from $250–$600 depending on size and fabric. Commercial projects are quoted by scope.',
  },

  // ─── Smart Home ──────────────────────────────────────────────────────────
  {
    id: 'faq-smart-1',
    category: 'smart-home',
    question: 'Which smart home systems do your motorized shades work with?',
    answer:
      'Our motorized shades integrate with Amazon Alexa, Google Home, Apple HomeKit, SmartThings, and Control4. We also offer standalone RF remote and app-only configurations for homes without a central smart home hub. Our in-house IT team handles the full programming and integration — you do not need to configure anything yourself.',
  },
  {
    id: 'faq-smart-2',
    category: 'smart-home',
    question: 'What happens to motorized shades if the power goes out?',
    answer:
      'Battery-powered motorized shades continue to function normally during a power outage — they run entirely on rechargeable lithium cells. Hardwired shades will not operate without power, though they can typically be manually overridden. We recommend battery-powered motors for most residential applications for this reason.',
  },

  // ─── Commercial ──────────────────────────────────────────────────────────
  {
    id: 'faq-commercial-1',
    category: 'commercial',
    question: 'Do you handle HOA and multi-unit residential projects?',
    answer:
      'Yes. We have completed uniform window treatment installations for HOA-managed communities in San Diego County. For multi-unit projects we offer volume pricing, phased installation scheduling to minimize disruption to residents, and documentation packages for property management records. Contact us for a commercial consultation.',
  },

  // ─── Pricing ─────────────────────────────────────────────────────────────
  {
    id: 'faq-pricing-1',
    category: 'pricing',
    question: 'How much do custom window treatments cost in San Diego?',
    answer:
      'Custom window treatment pricing in San Diego ranges widely based on product type, size, and quantity. As a general guide: roller shades run $150–$400 per window installed; plantation shutters $250–$600 per window; motorized shades $300–$700 per window; Roman shades $200–$500 per window; and exterior motorized shades $600–$1,200 per opening. These are installed prices including measurement, fabrication, and installation. We provide an exact quote at your free in-home consultation — there is no obligation to purchase.',
  },
  {
    id: 'faq-pricing-2',
    category: 'pricing',
    question: 'Do you offer financing for window treatments?',
    answer:
      'Yes. We partner with Synchrony Financial to offer flexible payment plans for qualified customers. Financing allows you to spread payments over time rather than paying the full project cost upfront. Ask about financing options at your consultation or call us at (858) 338-1678. We also accept all major credit cards and cash.',
  },
  {
    id: 'faq-pricing-3',
    category: 'pricing',
    question: 'Is there a minimum order or project size?',
    answer:
      'No minimum. We handle single-window orders and full-home projects with equal care. That said, most of our consultations cover multiple rooms — clients often find that while they originally planned to treat one room, seeing samples in context inspires a broader project. We will quote exactly what you ask for, with no pressure to expand scope.',
  },
  {
    id: 'faq-pricing-4',
    category: 'pricing',
    question: 'Are your prices competitive with Home Depot or IKEA blinds?',
    answer:
      'Big-box blinds are priced lower per unit but are not custom-measured — they come in standard sizes that rarely fit San Diego windows precisely, leaving light gaps and an imprecise appearance. When you add the cost of returns, remakes, and replacement (custom treatments typically last 10–20 years versus 3–5 for off-the-shelf), the long-term cost is often comparable or lower with custom. More importantly, the fit, fabric quality, and installed result are not comparable. We are happy to show you the difference at your consultation.',
  },

  // ─── Products (additional) ───────────────────────────────────────────────
  {
    id: 'faq-products-4',
    category: 'products',
    question: 'What are the best window treatments for privacy without blocking light?',
    answer:
      'Zebra shades, Shangri-La shades, and solar shades all provide daytime privacy while maintaining natural light and outward visibility. Daytime privacy works on a principle of contrast: when the interior is darker than the exterior, you can see out but others cannot easily see in. Solar shades with 3–5% openness are ideal for rooms where you want to reduce glare and maintain the view. For true two-way privacy regardless of light conditions, light-filtering cellular shades provide soft, diffused light with complete interior privacy.',
  },
  {
    id: 'faq-products-5',
    category: 'products',
    question: 'What are the best window treatments for San Diego\'s intense sun and UV?',
    answer:
      'Solar shades are engineered specifically for this problem. A 3–5% openness factor blocks 95–97% of UV radiation and significantly reduces heat gain, while preserving your view. For south and west-facing windows in San Diego — which receive the most intense direct sun — we recommend darker-colored solar fabrics (charcoal, bronze, graphite) as they absorb more heat than light colors. Honeycomb cellular shades are the best choice for energy efficiency on windows you want to keep covered — they create an insulating air pocket that significantly reduces heat transfer in both directions.',
  },
  {
    id: 'faq-products-6',
    category: 'products',
    question: 'How do I choose between inside mount and outside mount?',
    answer:
      'Inside mount sits within the window frame for a clean, built-in appearance — best when your window has at least 2 inches of depth for mounting hardware. Outside mount attaches to the wall or trim above and outside the frame — better for shallow windows, achieving better blackout coverage, or making a window appear larger. In San Diego\'s many older homes with irregular window reveals, outside mount often achieves a cleaner result. Our consultant will measure for both and show you which is recommended for each window.',
  },
  {
    id: 'faq-products-7',
    category: 'products',
    question: 'What is the difference between plantation shutters and regular shutters?',
    answer:
      'Plantation shutters have wide louvers — typically 2.5 to 4.5 inches wide — that provide excellent light control and airflow when open, and a clean panel appearance when closed. Traditional or café shutters have narrow louvers and a more colonial look. Plantation shutters are the dominant style in San Diego residential construction because they complement both contemporary and Spanish Colonial architecture, are durable in coastal conditions, and add measurable resale value. Our most popular shutter is a 3.5-inch louver in a white or off-white composite.',
  },

  // ─── Installation (additional) ──────────────────────────────────────────
  {
    id: 'faq-installation-2',
    category: 'installation',
    question: 'How long does installation take?',
    answer:
      'Most single-room installations take one to two hours. A full home of eight to twelve windows typically takes four to six hours and is completed in a single visit. For large projects or complex installations — motorized systems requiring programming, exterior shades, or specialty windows — we may schedule a multi-day installation. Lead time from consultation to installation is typically four to six weeks for custom products, though some in-stock options can be installed sooner.',
  },
  {
    id: 'faq-installation-3',
    category: 'installation',
    question: 'Do I need to do anything to prepare for installation?',
    answer:
      'Clear the windowsill and a few feet of floor space beneath each window. If we are replacing existing treatments, you can remove them beforehand or our team will handle it. For motorized installations, ensure there is a charged phone or tablet nearby for app setup and programming. We clean up all packaging and debris before leaving — your windows will be complete and your space tidy when we finish.',
  },
  {
    id: 'faq-installation-4',
    category: 'installation',
    question: 'What warranty covers the installation?',
    answer:
      'iL Progetto provides a one-year installation workmanship warranty on all installed products. If anything we installed — hardware, mounting, alignment — is not performing correctly within the first year, we return and correct it at no charge. This covers issues like shades that do not hang level, mounting hardware that loosens, or brackets that were installed in the wrong position. Product warranties are separate: our hardware mechanisms carry a lifetime warranty, fabrics and motors are covered for five years.',
  },

  // ─── Smart Home (additional) ────────────────────────────────────────────
  {
    id: 'faq-smart-home-3',
    category: 'smart-home',
    question: 'Can motorized shades be controlled without a smart home system?',
    answer:
      'Yes. All of our motorized shade systems include either a handheld remote control or a wall switch as standard. Smart home integration (Alexa, Google Home, Apple HomeKit, Control4) is an optional add-on, not a requirement. You can start with remote control and add smart home integration later — all of our motors are app-ready and compatible with major platforms without requiring a hardware swap.',
  },
  {
    id: 'faq-smart-home-4',
    category: 'smart-home',
    question: 'How do you set sun-based schedules for motorized shades?',
    answer:
      'All major smart home platforms (Alexa, Google Home, Apple HomeKit) support sunrise and sunset automation for motorized shades. You set the shade position for sunrise (fully open, or 50% open to gradually let light in) and sunset (closed for privacy and energy efficiency). These schedules automatically adjust throughout the year as day length changes. We configure your initial sunrise/sunset schedule during the installation appointment — it is typically a five-minute setup in the app.',
  },

  // ─── Products — Maintenance ──────────────────────────────────────────────
  {
    id: 'faq-maintenance-1',
    category: 'products',
    question: 'How do I clean window shades and blinds?',
    answer:
      'Most roller shades, solar shades, and cellular shades can be cleaned with a soft brush attachment on a vacuum — this is sufficient for routine dust removal. For spot cleaning, use a lightly damp cloth with mild soap; avoid saturating the fabric. Plantation shutters are best cleaned with a damp microfiber cloth wiped along each louver. Avoid commercial cleaning sprays on shutter paint finishes. For heavily soiled shades — particularly in kitchens — we can remove and professionally clean them; ask about our cleaning service at your next visit.',
  },
  {
    id: 'faq-maintenance-2',
    category: 'products',
    question: 'How long do window treatments last in San Diego\'s climate?',
    answer:
      'San Diego\'s intense UV — averaging 266 sunny days per year — is the primary factor affecting window treatment longevity. Plantation shutters in composite materials last 20–25 years. Quality roller shades last 7–12 years depending on sun exposure. Motorized components last 10+ years with rechargeable batteries replaced every 12–18 months. Solution-dyed acrylic fabrics (common in exterior shades and solar shades) resist UV degradation significantly better than standard fabrics and are worth the modest premium for south and west-facing windows in San Diego.',
  },
]

// ─── Categories for filter UI ─────────────────────────────────────────────────
export const FAQ_CATEGORIES: { id: FaqItem['category']; label: string }[] = [
  { id: 'consultation', label: 'Consultation' },
  { id: 'products', label: 'Products' },
  { id: 'installation', label: 'Installation' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'smart-home', label: 'Smart Home' },
  { id: 'commercial', label: 'Commercial' },
]
