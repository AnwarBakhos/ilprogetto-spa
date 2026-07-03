import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { PRODUCTS, MEGA_MENU } from '@/data/catalog'
import { STUDIO_NOTES } from '@/data/studio-notes'

// ─── Hero photography ─────────────────────────────────────────────────────────
// Real room photography for the page hero (the catalog PNGs are product
// renders — stretched as a cover background they look washed out).
const HERO_PHOTOS: Record<string, string> = {
  roller:              '/images/inspiration/lr-solar-roller-warm.webp',
  zebra:               '/images/inspiration/lr-zebra-natural-modern.webp',
  motorized:           '/images/inspiration/out-motorized-estate.webp',
  cellular:            '/images/inspiration/lr-cellular-topdown-family.webp',
  roman:               '/images/inspiration/bd-drapery-midcentury.webp',
  'woven-wood':        '/images/inspiration/out-bamboo-patio-cover.webp',
  sheer:               '/images/inspiration/lr-vertical-sheer-highrise.webp',
  'faux-wood':         '/images/inspiration/kt-roller-sink-window.webp',
  aluminum:            '/images/inspiration/of-roller-home-office.webp',
  vertical:            '/images/inspiration/lr-vertical-sheer-highrise.webp',
  'panel-track':       '/images/inspiration/bd-drapery-ripple-detail.webp',
  plantation:          '/images/inspiration/bd-shutters-garden-view.webp',
  'cafe-style':        '/images/inspiration/kt-zebra-farmhouse-sink.webp',
  door:                '/images/inspiration/bd-shutters-garden-view.webp',
  arched:              '/images/inspiration/bd-shutters-garden-view.webp',
  'blackout-curtains': '/images/inspiration/bd-blackout-roller-accent.webp',
  'sheer-drapes':      '/images/inspiration/bd-drapery-ripple-detail.webp',
  butterfly:           '/images/inspiration/bd-drapery-midcentury.webp',
  'motorized-exterior':'/images/inspiration/out-motorized-estate.webp',
  'wind-resistant':    '/images/inspiration/out-motorized-estate.webp',
  'sun-screens':       '/images/inspiration/of-solar-commercial-1.webp',
  awnings:             '/images/inspiration/out-bamboo-patio-cover.webp',
}
const HERO_FALLBACK = '/images/hero.webp'
import type { CatalogProduct } from '@/types/catalog'
import { BookingCalendar } from '@/components/BookingCalendar'
import { SITE_URL } from '@/lib/config'

// ─── Product-specific FAQ data ────────────────────────────────────────────────
const PRODUCT_FAQS: Record<string, { q: string; a: string }[]> = {
  roller: [
    { q: 'What is the difference between blackout and light-filtering roller shades?', a: 'Blackout roller shades use a solid, opaque fabric that blocks 100% of incoming light — ideal for bedrooms and media rooms. Light-filtering roller shades use a semi-opaque or open-weave fabric that softens and diffuses sunlight without blocking the view. Sheer roller shades allow the most light through while still providing daytime privacy. We bring all three fabric types on your in-home consultation so you can see the difference in your actual light.' },
    { q: 'Can roller shades be motorized?', a: 'Yes. Every roller shade we carry is available with a quiet DC motor that can be controlled by wall switch, remote, app, or voice command (Alexa, Google Home, Apple HomeKit). Battery motors require no wiring and are ideal for retrofits; hardwired motors are preferred for new construction or full smart-home integration. Our IT team handles all programming.' },
    { q: 'What are side channels and do I need them?', a: 'Side channels are aluminum tracks that run the full height of the window and hold the fabric edges, creating a complete light seal. They eliminate the gap of light that typically shows on the left and right sides of a standard roller shade. They are essential for true blackout in bedrooms and home theaters, and optional elsewhere. Side channels also provide a significant upgrade in appearance, giving the shade a built-in, architectural look.' },
    { q: 'How are roller shades measured and installed?', a: 'We measure every window ourselves during your in-home consultation — you never need to measure anything. Roller shades can be inside-mounted (fitting within the window frame for a clean look) or outside-mounted (covering the full frame, which is better for light control). Custom fabrication takes 2–3 weeks, after which our installation team returns for a typically 30-minute-per-window installation.' },
  ],
  zebra: [
    { q: 'How do zebra shades control privacy?', a: 'Zebra shades use two layers of fabric with alternating transparent (sheer) and opaque (solid) horizontal bands. When you align the sheer bands, light filters through freely. When you align the solid bands, they stack to create full privacy. Any position between fully open and fully closed gives you a gradient of light and privacy — more control than a single-layer shade.' },
    { q: 'Are zebra shades good for San Diego\'s coastal light?', a: 'Excellent. Zebra shades handle Southern California\'s intense, flat coastal light better than most treatments. The sheer bands diffuse glare while preserving outdoor views; the solid bands deliver full privacy when needed. They\'re particularly effective in west-facing rooms that take a late-afternoon sun hit along the coast.' },
    { q: 'Can zebra shades be motorized?', a: 'Yes — motorized zebra shades are one of our most popular combinations. A single motor controls both the raise/lower function and the band alignment, giving you complete light management from your phone, remote, or voice. Works with Alexa, Google Home, and Apple HomeKit.' },
    { q: 'How do zebra shades compare to regular roller shades in price?', a: 'Zebra shades cost slightly more than standard single-layer roller shades — typically 20–30% more — because of the dual-layer construction. They offer significantly more light-control flexibility in return. If you find yourself frequently wanting to let some light in but keep some privacy, zebra shades are worth the difference.' },
  ],
  motorized: [
    { q: 'Do I need existing wiring to get motorized shades?', a: 'No. Battery-powered motors require no wiring whatsoever and can be installed in any home, including rentals. Rechargeable battery motors run 6–18 months per charge via a USB-C cable. For a whole-home installation or if you prefer not to recharge, hardwired motors connect to your home\'s 110V power — we coordinate with your electrician or can recommend one.' },
    { q: 'Which smart home systems do your motorized shades work with?', a: 'Our motorized shades integrate with Amazon Alexa, Google Home, and Apple HomeKit natively. For more advanced control — scene programming, sensor integration, time-of-day automation — we also support Lutron Caséta, Somfy, and Control4. Our in-house IT team handles all hub pairing, scene creation, and testing during installation.' },
    { q: 'Can I motorize existing shades I already have?', a: 'In most cases, no — motorization requires a motor to be built into the headrail at the time of fabrication. However, there are aftermarket solutions (like retrofit motors for some roller shades) that we can evaluate during a consultation. If your existing shades are due for replacement, new motorized shades are usually the cleanest and most reliable solution.' },
    { q: 'What happens if the power goes out or the app goes down?', a: 'All our motorized shades include a manual override. Battery motors can be operated by pulling a manual cord or using the wall remote. Hardwired motors retain their last programmed position and can be operated via physical switch even without internet connectivity. You are never locked out of your shades.' },
  ],
  cellular: [
    { q: 'What is the difference between single, double, and triple cell honeycomb shades?', a: 'The cell count refers to the number of air pockets stacked in the fabric cross-section. Single-cell shades have one honeycomb layer — affordable and effective for light control. Double-cell shades trap two layers of air and offer significantly better thermal and sound insulation. Triple-cell shades add a third layer for maximum energy performance — our recommendation for rooms with single-pane glass or extreme sun exposure. Most San Diego homes benefit most from double-cell.' },
    { q: 'How much energy do cellular shades actually save?', a: 'The U.S. Department of Energy estimates that cellular shades can reduce window heat gain and loss by up to 40%, depending on cell count, fabric opacity, and mounting. In San Diego, where air conditioning accounts for a significant share of utility bills, properly fitted double-cell shades on west-facing windows can meaningfully reduce cooling costs — especially in summer.' },
    { q: 'What is top-down/bottom-up operation?', a: 'Top-down/bottom-up (TDBU) shades can be operated from either the top or the bottom of the window independently. Lower the shade from the top to let in sky light from above while keeping the lower portion private. Raise the shade from the bottom to let light in from below while blocking the view at eye level. This is particularly useful in bathrooms, street-facing bedrooms, and any room where you want light and privacy simultaneously.' },
    { q: 'Are cellular shades good for noise reduction?', a: 'Yes — cellular shades are the best-performing window treatment for sound dampening, though they are not soundproofing. The honeycomb air cells absorb and dampen high-frequency sound transmission through the glass. Double and triple cell configurations offer noticeably better acoustic performance than single-cell. Customers in homes near roads or with active households in adjacent rooms frequently notice the difference.' },
  ],
  roman: [
    { q: 'What is the difference between flat, hobbled, and relaxed Roman shade styles?', a: 'Flat Roman shades fold into clean, horizontal pleats when raised and hang as a perfectly smooth panel when lowered — the most contemporary look. Hobbled (or "waterfall") Romans have permanent, cascading folds sewn into the face fabric so they show even when the shade is fully lowered — more textural and traditional. Relaxed Romans have a soft, bowed bottom hem that curves gently even when lowered — a casual, organic alternative to the crisp flat style. We bring fabric and style samples to your home so you can see each style in your light.' },
    { q: 'Can Roman shades be blackout?', a: 'Yes. Any Roman shade can be made with a blackout lining that sits behind the face fabric. The face fabric determines the room\'s visual look; the lining blocks all incoming light. Blackout-lined Roman shades are a popular choice for bedrooms because they offer the warmth of fabric with full light control.' },
    { q: 'How do I clean Roman shades?', a: 'Most Roman shade fabrics are dust-able with a soft brush attachment on a vacuum. Spot cleaning with a damp cloth handles small marks. We recommend a professional upholstery cleaning service for full cleaning, which most Roman shades only need every few years. We provide fabric care instructions with every installation and can recommend cleaning services.' },
    { q: 'What rooms are Roman shades best suited for?', a: 'Roman shades work beautifully in any room where you want the softness of fabric but prefer the cleaner profile of a shade over full drapery. They are particularly popular in kitchens (where drapes can collect cooking grease), dining rooms, bedrooms, and home offices. They are less common in bathrooms — moisture-prone environments — though performance fabrics and blackout linings can handle moderate humidity.' },
  ],
  'woven-wood': [
    { q: 'Do woven wood shades provide privacy?', a: 'Natural woven wood shades filter light beautifully but allow some visibility through the weave — they do not provide complete privacy on their own, particularly at night when interior lights are on. For privacy, we can add a fabric liner behind the natural weave — a white or blackout liner is common. The liner is visible from the room side but maintains the natural material appearance from the street.' },
    { q: 'Are woven wood shades moisture-resistant?', a: 'Natural woven wood shades — made from bamboo, rattan, jute, and sea grass — are not ideal for rooms with standing moisture (bathrooms, laundry rooms). For kitchens and areas with occasional humidity, they work well with good ventilation. Coastal humidity in San Diego does not typically pose a problem; the salt air environment suits natural materials well.' },
    { q: 'Will woven wood shades fade in San Diego\'s sunlight?', a: 'All natural materials will develop a patina with prolonged direct UV exposure. In San Diego\'s intense sunlight, we recommend positioning woven wood shades where they receive indirect rather than direct daily sun. A UV-blocking liner behind the shade significantly slows any fading. Most customers find the slight natural darkening that occurs over time adds to the organic character of the material.' },
    { q: 'What is the look of woven wood shades in a modern interior?', a: 'Woven wood shades are one of the most versatile natural design elements available — they read as contemporary in minimalist interiors, coastal in beachy homes, and warm in transitional spaces. The key is fabric selection: tighter weaves in lighter tones feel modern and airy; looser, darker weaves feel more organic and rustic. We bring an extensive sample collection and can show you several options against your existing palette.' },
  ],
  sheer: [
    { q: 'What is the difference between sheer shades and sheer drapes?', a: 'Sheer drapes are fabric panels hung from a rod that traverse open and closed. Sheer shades are a functional shade mechanism — they raise and lower like a roller shade but diffuse light through a translucent fabric. The key difference is light control: sheer shades can be raised completely out of the window for an unobstructed view, whereas sheer drapes always hang in the window opening to some degree.' },
    { q: 'What are Shangri-La shades?', a: 'Shangri-La shades (also called Silhouette shades) are the most sophisticated form of sheer shading. They suspend horizontal fabric vanes between two sheer panels. With the vanes open, soft filtered light diffuses throughout the room. With the vanes closed, the sheer panels layer to create privacy. When raised, the shade disappears into a compact headrail. The effect is architectural — like floating fabric — and much more tailored than standard sheer drapes.' },
    { q: 'Do sheer shades provide UV protection?', a: 'Yes — even in their open, light-filtering position, quality sheer shades block 80–90% of UV radiation. This is critical in San Diego where intense sun can fade furniture, flooring, and artwork quickly. Sheer shades deliver UV protection while maintaining natural light and view — a balance that heavy blackout treatments cannot achieve.' },
    { q: 'Can sheer shades be motorized?', a: 'Yes, and motorized sheer shades are exceptional. A quiet motor raises and tilts the vanes (in Shangri-La configurations) from your phone or voice. Programming the shades to open at sunrise and close at the intense afternoon sun angle means your home manages its light automatically, without you thinking about it.' },
  ],
  'faux-wood': [
    { q: 'What is the difference between faux wood and real wood blinds?', a: 'Real wood blinds offer genuine wood grain character and a premium feel, but they are susceptible to moisture — they can warp and discolor in kitchens, bathrooms, and coastal homes with salt air humidity. Faux wood blinds use a PVC composite that looks nearly identical to wood but resists moisture, warping, UV fading, and scratching. For San Diego\'s coastal and semi-coastal environment, faux wood is often the more practical long-term investment.' },
    { q: 'Are faux wood blinds heavy?', a: 'Faux wood blinds are slightly heavier than aluminum or real wood at the same slat width, but the weight is not noticeable in normal operation. For very wide windows (over 72"), we recommend wider-slat options or installing two blinds side by side to prevent the center slat from bowing.' },
    { q: 'What slat widths are available?', a: 'We offer faux wood blinds in 2" and 2.5" slat widths. Wider slats (2.5") have a more traditional, substantial look and allow more light through each gap when the slats are open. Narrower slats (2") feel more contemporary and refined. We bring samples of both to your consultation so you can compare in your actual window.' },
    { q: 'Can faux wood blinds be installed in a bathroom?', a: 'Yes — faux wood blinds are the right choice for bathrooms precisely because they resist moisture. Real wood would be inappropriate here. PVC composite slats will not warp, swell, or discolor from shower steam or humidity. We install them in bathrooms regularly and they perform extremely well.' },
  ],
  aluminum: [
    { q: 'Are aluminum blinds a good long-term choice?', a: 'Aluminum blinds are among the most durable window treatments available. The finish resists corrosion, the slats do not warp or discolor, and replacement slats are available if one is damaged. They are particularly well-suited for offices, commercial spaces, garages, rental properties, and any environment where cost-effectiveness and durability matter more than luxury aesthetics.' },
    { q: 'What colors are available for aluminum blinds?', a: 'We carry aluminum blinds in over 50 colors — from crisp white and off-white to neutrals, charcoals, and metallics. Custom paint-matched options are available for commercial projects. Because aluminum blinds are inexpensive, changing the color by replacing a window treatment every few years as styles change is practical and affordable.' },
    { q: 'What is the difference between 1" and 2" slat aluminum blinds?', a: '1" slats give a finer, more tailored look with a slightly more closed appearance when viewed straight on. They are popular in offices and rooms where a clean, unobtrusive look is preferred. 2" slats have a more open feel, allow more light through, and look slightly bolder. 1" is the more common residential choice; 2" works well in spaces where you want a bit more visual presence.' },
    { q: 'Can aluminum blinds be installed in coastal areas?', a: 'Yes. Aluminum blinds use a corrosion-resistant baked finish that handles salt air well — they are one of the few treatments we recommend for garages, laundry rooms, and utility spaces with high humidity. They are not typically chosen for living spaces and bedrooms where aesthetics are a priority, but they perform reliably in any humidity condition.' },
  ],
  vertical: [
    { q: 'Are vertical blinds the best treatment for sliding glass doors?', a: 'Vertical blinds are the most practical treatment for sliding glass patio doors because they traverse laterally — matching the direction the door opens. They do not interfere with door operation, provide full-width coverage, and are available in materials that handle high-traffic areas well. Alternative treatments include panel track systems (a more modern look) and sliding panels.' },
    { q: 'What materials are available for vertical blinds?', a: 'We offer vertical blinds in fabric, PVC, and aluminum vanes. Fabric vanes provide a softer, more residential appearance and come in blackout and light-filtering options. PVC vanes are the most durable and moisture-resistant choice for high-humidity areas or heavy-use doors. Aluminum vanes offer a clean, commercial look with excellent durability.' },
    { q: 'Can vertical blinds be motorized?', a: 'Yes — motorized vertical blind systems are available and particularly useful for large or heavy sliding doors where manual operation is cumbersome. Motorized track systems allow the vanes to traverse and tilt with a remote or app command, which is useful when the door track makes it difficult to reach the wand control.' },
    { q: 'How do I keep vertical blinds from swinging in a breeze when the door is open?', a: 'We offer a bottom-chain weighting system that links the vanes at the bottom and keeps them from separating in a breeze when the door is open. It is a standard option we recommend for any patio door installation where the door will be frequently opened to ocean or canyon breeze — common in San Diego County homes.' },
  ],
  'panel-track': [
    { q: 'What is the difference between panel track and vertical blinds?', a: 'Both cover large openings, but they achieve it differently. Vertical blinds use individual narrow vanes that hang from a single track and tilt like traditional blinds. Panel track systems use wide fabric panels (typically 12"–24" wide) that glide along parallel ceiling-mounted tracks, stacking behind each other when open. Panel track has a dramatically more contemporary, architectural look — the panels read as a soft wall element. Vertical blinds are more utilitarian; panel track is a design statement.' },
    { q: 'Can panel track be used as a room divider?', a: 'Yes — and this is one of its most popular applications. Panel track systems can be installed on a room-spanning ceiling track to divide an open-plan space into zones. When open, the panels stack neatly to one side; when closed, they create a full-height fabric partition. It is a popular choice for open-plan living/dining rooms and home offices inside larger rooms.' },
    { q: 'What fabrics are available for panel track?', a: 'Panel track can be made with any fabric we carry — sheer, light-filtering, or blackout — in hundreds of colors and textures. The wide panel format particularly suits textured fabrics, bold colors, and large-scale patterns that would be difficult to appreciate in a narrower shade. Woven wood panels are also available for a natural, organic alternative.' },
    { q: 'How wide can a panel track system be?', a: 'Panel track systems can cover virtually any width. For very large openings, we install multiple panels that stack in layers behind each other on parallel tracks. There is no practical width limit — we have installed systems covering 20+ feet of glass in open-plan homes. The ceiling-mounted track ensures smooth operation regardless of width.' },
  ],
  plantation: [
    { q: 'What louver size should I choose for plantation shutters?', a: 'Louver width determines how much light comes through and affects the overall visual scale of the shutter. 2.5" louvers are the most traditional — refined and detailed. 3.5" louvers are our best-seller: they allow significantly more light through when open and provide a cleaner sightline when tilted. 4.5" louvers are the most dramatic — wide open views and a bold architectural presence. For rooms with a view, 3.5" or 4.5" are ideal. For rooms where traditional elegance is the priority, 2.5" is appropriate.' },
    { q: 'Do plantation shutters add resale value to a home?', a: 'Yes — plantation shutters are widely recognized by real estate professionals as a value-adding feature. Unlike most window treatments that convey with the house but are not counted as permanent improvements, shutters are built into the window frame and are counted as a structural feature. They are consistently cited in listing marketing materials and appraised as a feature by home valuers.' },
    { q: 'What is the difference between wood and poly-satin shutters?', a: 'Wood shutters are the traditional choice — genuine painted wood gives a natural, premium feel. Poly-satin (composite) shutters are made from a polymer that is molded and painted to look identical to wood but is completely moisture-resistant. Poly-satin is our recommendation for kitchens, bathrooms, laundry rooms, and any room with significant humidity. It will not crack, warp, or discolor. In dry living areas, either material works beautifully.' },
    { q: 'How long does shutter installation take?', a: 'Shutters are custom-built to your exact window dimensions, which takes 3–4 weeks after the initial consultation. Installation itself is typically 45–60 minutes per window. The installation team will be in and out of most homes in half a day. Because shutters are attached to the window frame, installation is more involved than shades or blinds — but the result is a permanent, built-in fixture.' },
  ],
  'cafe-style': [
    { q: 'What is the purpose of cafe style shutters?', a: 'Cafe style shutters cover only the lower half of the window — the panel sits at the midpoint of the glass and is hinged to swing open from the frame. The upper half of the window remains completely open at all times. The effect: complete privacy at street level (the portion where passersby can see in) while the upper half brings in full sky light. It is one of the few treatments that gives you both maximum privacy and maximum daylight simultaneously.' },
    { q: 'How high should cafe shutters sit on the window?', a: 'The standard placement covers the lower half — the midpoint of the glass. We also customize the split point depending on your specific sightlines: if you are standing in the kitchen at the sink, for example, we\'ll determine exactly where eye level is and position the shutter panel to sit just above that line. This ensures privacy from the specific angles that matter, while the placement feels natural for your use of the room.' },
    { q: 'Can cafe shutters be paired with something for the upper half?', a: 'Yes — cafe shutters pair beautifully with drapery panels, valances, or roller shades above. A popular combination is cafe shutters on the lower half and a neutral linen drape panel on either side of the upper portion, creating a layered treatment with full light control capability. We can design and install the full layered treatment together.' },
    { q: 'Are cafe style shutters more affordable than full-length shutters?', a: 'Yes. Because cafe shutters cover only the lower half of the window, they use less material than a full shutter installation. The cost is typically 40–55% of a full-height shutter for the same window, making them an excellent way to get the premium look and feel of plantation shutters at a significantly lower investment.' },
  ],
  door: [
    { q: 'How do door shutters attach — to the door or the frame?', a: 'Door shutters are engineered specifically to mount to the door itself, not the surrounding frame. They are hinged to the door panel and swing open independently, allowing the door to open and close normally without the shutter interfering. This is a critical design consideration that differentiates door shutters from standard window shutters — a standard window shutter mounted to a frame would block door operation.' },
    { q: 'What door types can receive shutters?', a: 'We install door shutters on French doors (single and double), entry doors with glass panels, Dutch doors, and door-adjacent sidelites and transoms. We custom-measure every door configuration and build panels to fit precisely. For bifold or sliding glass door-adjacent panels, we use a track-mounted bifold shutter system rather than a hinged design.' },
    { q: 'Do door shutters come in the same finishes as window shutters?', a: 'Yes — door shutters are available in all the same paint colors, wood species, and poly-satin composites as our window shutters. If you already have plantation shutters elsewhere in the home and want to match them exactly, we can match the louver size, paint color, and material perfectly.' },
    { q: 'Do door shutters affect the thermal performance of the door?', a: 'Slightly — shutters add a buffer layer of still air between the glass and the living space, which provides a small insulating benefit. On doors with single-pane glass panels, the improvement can be meaningful. On modern double-pane doors, the shutter\'s primary benefit is aesthetic and privacy rather than thermal.' },
  ],
  arched: [
    { q: 'Can any arch shape be fitted with shutters?', a: 'Nearly any arch geometry can be accommodated with custom-built shutters. The most common configurations are half-round (a perfect semicircle), eyebrow (a shallow, flattened arch), quarter-round (a corner arch), and full circle. We measure the exact geometry during your in-home consultation using a template or digital measurement and build to those precise dimensions at our manufacturing partner.' },
    { q: 'Are arched shutters stationary or can the louvers move?', a: 'Both options are available. Stationary arched shutters have fixed louvers at a set angle — typically 45°, which provides a classic look with good light diffusion. Operable arched shutters have louvers that tilt, giving you light control in the arch panel. Operable louvers require a more complex hinge geometry in curved sections and cost more, but are worth it in rooms where you want to control the light coming through the arch independently.' },
    { q: 'How long does it take to make custom arched shutters?', a: 'Arched shutters require custom fabrication and take 4–6 weeks from measurement to installation — slightly longer than standard rectangular shutters. The additional time allows for precise template verification and any needed geometry adjustments before fabrication begins. The result is a shutter that fits your arch so precisely it appears to have been built with the house.' },
    { q: 'Do arched shutters need to match the shutters on adjacent rectangular windows?', a: 'For the most cohesive look, yes — we recommend matching louver size, material, and finish. If you have existing plantation shutters on nearby windows, we will source the same finish and louver size for the arch panels. If the arch window is standalone (a focal feature on a gable end, for example), you have more design flexibility to let it read as a design element on its own.' },
  ],
  'blackout-curtains': [
    { q: 'What makes a curtain truly blackout versus just "room darkening"?', a: '"Room darkening" is a marketing term that means the fabric reduces, but does not eliminate, incoming light. True blackout curtains use a triple-pass lining sewn behind the face fabric — three coats of opaque compound applied to the back of the lining fabric. This achieves complete light elimination through the panel itself. However, light still enters at the sides, top, and bottom where the panel does not cover the wall or window frame — to address this, we recommend ceiling-mount installation with extended brackets that bring the panel close to the wall.' },
    { q: 'What header styles are available and how do they affect the look?', a: 'We offer rod pocket, back tab, pinch pleat (double and triple), and eyelet/grommet headers. Rod pocket and back tab create soft, gathered panels with a relaxed, residential feel. Pinch pleat headers produce structured, formal columns of fabric — classic and elegant. Eyelet headers create bold, uniform folds with a more contemporary look. We bring samples of all header styles to your consultation.' },
    { q: 'How long should blackout curtains be?', a: 'For the best light control and the most elegant appearance, we recommend floor-length curtains that either touch the floor precisely or puddle 1–4 inches. Panels that end above the floor leave a visible gap at the bottom that allows light in. For blackout performance, ceiling-to-floor installation with the rod mounted 6–12 inches above the window frame gives the most complete light seal and makes ceilings appear taller.' },
    { q: 'Can blackout curtains also reduce sound?', a: 'Yes — blackout curtains with a heavy triple-pass lining provide meaningful sound dampening as a secondary benefit. They do not soundproof a room, but they soften echoes and reduce the transmission of higher-frequency sounds (traffic, neighbors, ambient noise). Bedrooms that face a street often benefit noticeably from the combination of blackout and acoustic performance.' },
  ],
  'sheer-drapes': [
    { q: 'What is the best sheer fabric for San Diego\'s intense sunlight?', a: 'For San Diego\'s coastal and inland light, we recommend linen-blend or polyester voile sheer fabrics with a tighter weave and a slight UV-blocking finish. Pure silk sheers are beautiful but degrade faster with direct UV exposure. Belgian linen sheers hold their color and texture far longer. For rooms with direct western or southern exposure, we pair sheer drapes with a solar roller shade behind them for complete flexibility from fully open to fully closed.' },
    { q: 'Should sheer drapes be wider than the window?', a: 'Yes — for a full, gathered look that reads as intentional rather than sparse, sheer drapes should be 2–3 times the window width. This "fullness ratio" determines how full and soft the fabric falls when the panels are closed. We calculate the correct fabric quantity based on your window width and your chosen fullness preference during the consultation. Panels that are barely wider than the window read as flat and inexpensive.' },
    { q: 'Can I layer sheer drapes with other treatments?', a: 'Layering is one of the highest-impact design moves in a room. Sheer drapes paired with a blackout roller shade behind them give you complete flexibility: roller shade down for full blackout, sheer drapes closed for soft filtered light, both open for an unobstructed view. Sheer drapes also layer beautifully with cafe shutters below, drapery hardware above, or Roman shades for a fully dressed window.' },
    { q: 'How do I keep sheer drapes looking fresh?', a: 'Sheer drapes attract dust and should be shaken out or vacuumed with a brush attachment every few months. Most polyester and synthetic sheer fabrics are machine-washable on a gentle cycle — we confirm the care method for every fabric before installation. Linen and silk sheers require dry cleaning. Storing them properly on the rod (never folded) prevents permanent crease lines.' },
  ],
  butterfly: [
    { q: 'How are butterfly shades different from zebra shades?', a: 'They look similar at first glance — both alternate sheer and opaque horizontal bands — but the mechanism differs. Zebra shades stack both layers on a single roller and the bands slide past each other as you raise or lower. Butterfly shades use a separate front and back layer that operate together but produce a slightly different light quality — the layers are further apart, creating more depth in the bands. The visual effect of butterfly shades is slightly more three-dimensional and sculptural. Both are excellent; the choice often comes down to the specific look you prefer when you see samples in your home.' },
    { q: 'What room types work best with butterfly shades?', a: 'Butterfly shades are particularly well-suited to living rooms, dining rooms, and home offices — spaces where you want daytime privacy with filtered natural light but also need the option to fully open or close. Their modern, structured aesthetic also works well in contemporary bedrooms. They are less common in kitchens (where moisture and grease are a concern) and bathrooms.' },
    { q: 'Are butterfly shades available motorized?', a: 'Yes. Motorized butterfly shades are an excellent pairing — the motor controls both the raise/lower function, giving you app, remote, or voice control over your light and privacy. Works with Alexa, Google Home, and Apple HomeKit.' },
    { q: 'How do butterfly shades compare in price to zebra shades?', a: 'Butterfly shades and zebra shades are in a similar price range — both involve dual-layer construction and are priced at a modest premium over single-layer roller shades. The price difference between the two is typically minor. The choice should be based on which look and mechanism you prefer, not cost.' },
  ],
  'motorized-exterior': [
    { q: 'Why is exterior shading more effective than interior shading?', a: 'Heat enters a window as infrared radiation through the glass. Interior shades absorb this radiation inside the room — the heat is already in your space. Exterior shades intercept the sun\'s energy before it reaches the glass, reflecting or absorbing it outside where it dissipates in moving air. Studies consistently show exterior shading reduces solar heat gain by 60–90% compared to the same fabric installed inside. For a south or west-facing room in San Diego, the cooling load reduction is dramatic.' },
    { q: 'What happens to motorized exterior shades in high winds?', a: 'All our motorized exterior shades include optional wind sensors that automatically retract the shade when sustained wind speeds reach a programmable threshold — typically 20–35 mph. This protects the shade from wind damage and prevents stress on the mounting brackets. The shade lowers again automatically when wind speeds drop. For coastal properties in Del Mar, La Jolla, and Carlsbad where offshore winds are common, wind sensors are standard, not optional.' },
    { q: 'Can motorized exterior shades be used on a patio structure?', a: 'Yes — and patio mounting is one of their most popular applications. We mount motorized exterior shading on pergolas, covered patios, and post-supported outdoor structures to create shaded living areas that retract when not needed. The shades extend your usable outdoor living season by blocking afternoon heat and intense sun while allowing airflow.' },
    { q: 'What fabric options are available for exterior shades?', a: 'Exterior shades require weather-rated fabrics that resist UV degradation, moisture, and repeated wetting and drying. We carry fiberglass-woven solar screen fabrics in multiple openness factors (1%, 3%, 5%, 10%) and colors. These fabrics are rated for continuous outdoor exposure, resist mold and mildew, and maintain their color and tension over years of use. Standard interior fabrics are not appropriate for exterior mounting.' },
  ],
  'wind-resistant': [
    { q: 'How do side channels prevent wind billowing?', a: 'Standard roller shades and screen shades hang freely — the fabric edges are exposed to wind and can billow and whip. Side channels are aluminum extrusions that run the full height of the window or door opening; the shade fabric edge is guided inside a narrow slot in the channel as the shade is raised and lowered. The fabric is captured on both sides, which prevents it from catching wind. With side channels, the shade holds its flat plane even in sustained coastal gusts.' },
    { q: 'How wind-resistant are these shades exactly?', a: 'Our wind-resistant exterior shades with full side channels are tested to withstand sustained winds up to 55 mph before reaching retraction thresholds. Individual performance varies by installation geometry, fabric weight, and channel design. For La Jolla, Del Mar, and Carlsbad coastal properties that experience regular Santa Ana conditions or strong marine afternoon winds, we recommend the full side-channel system as standard.' },
    { q: 'Can wind-resistant exterior shades be motorized?', a: 'Yes — and motorization is particularly valuable for wind-resistant exterior shades. A motorized system with integrated wind sensor retracts the shades automatically when wind speeds exceed a safe threshold and lowers them again when conditions improve. This protects the shades from damage during unexpected gusts and extends the life of the installation significantly.' },
    { q: 'Are wind-resistant shades appropriate for inland San Diego properties?', a: 'Yes. Wind-resistant shades are not exclusive to coastal installations. Canyon-adjacent properties in Rancho Santa Fe, Escondido, and El Cajon can experience significant wind events, particularly during Santa Ana conditions. Any property where exterior shading would experience wind pressure — including upper-story installations — benefits from side-channel stabilization.' },
  ],
  'sun-screens': [
    { q: 'What does "openness factor" mean on solar screens?', a: 'Openness factor is the percentage of the screen fabric that is open space (as opposed to solid fiber). A 1% openness screen has very tight weave — excellent glare and UV reduction but slightly reduced view clarity. A 10% openness screen is very open — maximum view through the screen with less heat and glare reduction. 3% and 5% openness are our most popular choices for San Diego, delivering a clear outward view with significant glare and UV reduction. We bring fabric samples to your consultation so you can compare the view through each openness factor.' },
    { q: 'Can I see through sun screens at night when interior lights are on?', a: 'This is the most important thing to understand about solar screen fabrics: they work by creating a contrast difference between inside and outside. During the day, the bright exterior makes the screen nearly transparent from inside while the darker interior is obscured from outside. At night, when interior lights are on and it is dark outside, this contrast reverses — the screen provides almost no privacy. For rooms where nighttime privacy matters, we pair solar screens with a room-darkening or blackout shade behind them.' },
    { q: 'How much UV do sun screens block?', a: 'Our solar screen fabrics block 80–95% of UV radiation, depending on openness factor. Tighter weaves (1%, 3%) block more UV; looser weaves (10%) block slightly less but still far more than unprotected glass. This level of UV protection significantly reduces the rate of fading in furniture, flooring, and artwork — a significant concern in San Diego\'s year-round sun.' },
    { q: 'Can sun screens be used on the interior?', a: 'Yes — solar screen fabric is also available for interior roller shades. Interior mounting is significantly less expensive than exterior and easier to install and maintain. The tradeoff is that interior solar screens intercept heat after it has already passed through the glass into your space. For maximum energy efficiency, exterior mounting is superior; for convenience and cost, interior solar roller shades are an excellent and popular choice.' },
  ],
  awnings: [
    { q: 'What is the difference between a retractable and fixed awning?', a: 'Fixed awnings are permanent structures with a solid aluminum frame and weather-rated fabric — they provide permanent shade and weather protection year-round. Retractable awnings can be extended when shade is desired and retracted to restore full sunlight and sky view when not needed. Retractable awnings are motorized, can include wind and sun sensors, and are the most popular choice for San Diego patios where you want flexibility between full sun and full shade.' },
    { q: 'Can awnings be integrated with a smart home system?', a: 'Yes. Motorized retractable awnings connect to the same smart home ecosystem as our interior shades — Alexa, Google Home, and Apple HomeKit. Wind and sun sensors add intelligence: the awning extends automatically when the sensor detects strong sun and retracts when wind speeds exceed a safe threshold. You can also program time-of-day schedules so the awning extends before peak afternoon sun without any manual operation.' },
    { q: 'What size awning do I need for my patio?', a: 'The right awning size depends on the sun angle at your patio\'s orientation and the size of the area you want to shade. During your in-home consultation, we assess the patio dimensions, the direction it faces, and the sun angle at your latitude (San Diego sits at 32°N) to determine the projection depth needed to shade your seating area at peak sun hours. There is no rule-of-thumb shortcut — the calculation requires your specific geometry.' },
    { q: 'How long do awning fabrics last in San Diego?', a: 'Quality acrylic awning fabrics (we use Sunbrella and equivalent brands) are rated for 8–12 years of continuous outdoor exposure. San Diego\'s climate is actually ideal for awning longevity — the lack of extreme cold, snow, and ice significantly extends fabric and frame life compared to most other US markets. We recommend rolling up or removing fabric panels during unusually severe weather events, which are rare in San Diego.' },
  ],
}

// ─── Related products per product ────────────────────────────────────────────
const RELATED: Record<string, string[]> = {
  roller:              ['zebra', 'motorized', 'cellular'],
  zebra:               ['roller', 'butterfly', 'motorized'],
  motorized:           ['roller', 'zebra', 'sheer'],
  cellular:            ['roller', 'roman', 'sheer'],
  roman:               ['sheer-drapes', 'blackout-curtains', 'cellular'],
  'woven-wood':        ['roman', 'sheer-drapes', 'sheer'],
  sheer:               ['sheer-drapes', 'zebra', 'motorized'],
  'faux-wood':         ['aluminum', 'plantation', 'vertical'],
  aluminum:            ['faux-wood', 'vertical', 'panel-track'],
  vertical:            ['panel-track', 'faux-wood', 'motorized-exterior'],
  'panel-track':       ['vertical', 'sheer-drapes', 'motorized'],
  plantation:          ['cafe-style', 'door', 'arched'],
  'cafe-style':        ['plantation', 'sheer-drapes', 'roman'],
  door:                ['plantation', 'cafe-style', 'vertical'],
  arched:              ['plantation', 'door', 'cafe-style'],
  'blackout-curtains': ['sheer-drapes', 'roman', 'roller'],
  'sheer-drapes':      ['blackout-curtains', 'sheer', 'roman'],
  butterfly:           ['zebra', 'roller', 'motorized'],
  'motorized-exterior':['wind-resistant', 'sun-screens', 'awnings'],
  'wind-resistant':    ['motorized-exterior', 'sun-screens', 'awnings'],
  'sun-screens':       ['motorized-exterior', 'wind-resistant', 'roller'],
  awnings:             ['motorized-exterior', 'wind-resistant', 'sun-screens'],
}

// ─── Route ────────────────────────────────────────────────────────────────────
export const Route = createFileRoute('/products/$productId')({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.id === params.productId)
    if (!product) throw notFound()
    return { product }
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product
    if (!p) return { meta: [{ title: 'Not Found' }] }
    return {
      meta: [
        { title: `${p.name} San Diego | Custom Window Treatments | iL Progetto LLC` },
        { name: 'description', content: `${p.description} Custom-measured and professionally installed across San Diego County. Free in-home consultation. License #1127055.` },
        { name: 'robots',   content: 'index, follow' },
        { name: 'keywords', content: `${p.name} San Diego, ${(p.seoTags ?? []).join(', ')}, custom window treatments San Diego, iL Progetto LLC` },
        { property: 'og:type',        content: 'website' },
        { property: 'og:site_name',   content: 'iL Progetto LLC' },
        { property: 'og:title',       content: `${p.name} | iL Progetto LLC San Diego` },
        { property: 'og:description', content: `${p.description} Free in-home consultation across San Diego County.` },
        { property: 'og:image',       content: `${SITE_URL}${p.coverImage}` },
        { property: 'og:url',         content: `${SITE_URL}/products/${p.id}` },
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: `${p.name} | iL Progetto` },
        { name: 'twitter:description', content: p.description },
        { name: 'twitter:image',       content: `${SITE_URL}${p.coverImage}` },
        {
          'script:ld+json': {
            '@context': 'https://schema.org',
            '@type': ['Service', 'Product'],
            name: `${p.name} — iL Progetto LLC`,
            description: p.description,
            image: `${SITE_URL}${p.coverImage}`,
            url: `${SITE_URL}/products/${p.id}`,
            brand: { '@type': 'Brand', name: 'iL Progetto LLC' },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'LocalBusiness', name: 'iL Progetto LLC', telephone: '+18583381678' },
            },
            areaServed: { '@type': 'AdministrativeArea', name: 'San Diego County, CA' },
          },
        },
        {
          'script:ld+json': {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: (PRODUCT_FAQS[p.id] ?? []).map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          },
        },
      ],
      links: [
        { rel: 'canonical', href: `${SITE_URL}/products/${p.id}` },
      ],
    }
  },
  component: ProductPage,
})

// ─── Category label helper ────────────────────────────────────────────────────
function getCategoryLabel(productId: string): string {
  for (const col of MEGA_MENU) {
    if (col.products.some((p) => p.id === productId)) return col.label
  }
  return 'Products'
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y" style={{ borderColor: 'var(--hairline)' }}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="text-[15px] font-[400] leading-[1.5]" style={{ color: 'var(--ink)' }}>
              {item.q}
            </span>
            <span
              className="shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-200"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', color: 'var(--sand)' }}
              aria-hidden="true"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="pb-5 pr-8">
              <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
function ProductPage() {
  const { product: p } = Route.useLoaderData()
  const faqs = PRODUCT_FAQS[p.id] ?? []
  const relatedIds = RELATED[p.id] ?? []
  const relatedProducts = relatedIds
    .map((id) => PRODUCTS.find((pr) => pr.id === id))
    .filter(Boolean) as typeof PRODUCTS
  const categoryLabel = getCategoryLabel(p.id)
  const bookingRef = useRef<HTMLDivElement>(null)

  // Scroll-reveal
  const pageRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const els = pageRef.current?.querySelectorAll<HTMLElement>('[data-reveal]') ?? []
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = '1'; (e.target as HTMLElement).style.transform = 'translateY(0)'; obs.unobserve(e.target) } }),
      { threshold: 0.08 },
    )
    els.forEach((el) => { el.style.opacity = '0'; el.style.transform = 'translateY(24px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; obs.observe(el) })
    return () => obs.disconnect()
  }, [p.id])

  function scrollToBooking() {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div ref={pageRef} style={{ background: 'var(--cream)', color: 'var(--ink)' }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: 'clamp(480px, 60vh, 700px)' }}>
        {/* Background photography — matches homepage hero treatment */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_PHOTOS[p.id] ?? HERO_FALLBACK})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'var(--ink)',
          }}
        />
        {/* Gradient overlay — same ink ramp as the homepage */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(28,28,28,0.94) 0%, rgba(28,28,28,0.55) 50%, rgba(28,28,28,0.25) 100%)' }}
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full px-6 sm:px-12 lg:px-20 pb-16 pt-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 text-[11px] tracking-[0.15em] uppercase" aria-label="Breadcrumb">
            <Link to="/" style={{ color: 'rgba(255,255,255,0.5)' }} className="hover:text-white transition-colors">Home</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <Link to="/catalog" style={{ color: 'rgba(255,255,255,0.5)' }} className="hover:text-white transition-colors">Catalog</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{p.name}</span>
          </nav>

          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-[10px] tracking-[0.2em] uppercase w-fit"
            style={{ background: 'var(--sand)', color: '#fff' }}
          >
            {p.eyebrow}
          </div>

          {/* Headline */}
          <h1
            className="font-[300] leading-[1.05] mb-4 text-white"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 72px)', maxWidth: '700px' }}
          >
            {p.name}
          </h1>
          <p
            className="mb-8 font-[300] leading-[1.6]"
            style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(15px, 1.8vw, 18px)', maxWidth: '520px' }}
          >
            {p.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
              style={{ background: 'var(--sand)', color: '#fff' }}
            >
              Book Free Consultation
            </button>
            <Link
              to="/catalog"
              className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase border transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust bar ──────────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--ink)', color: 'rgba(255,255,255,0.6)' }}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[10px] tracking-[0.18em] uppercase">
          {['Free In-Home Consultation', 'Custom Measured & Made', 'Professional Installation', 'San Diego License #1127055'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span style={{ color: 'var(--sand)' }}>—</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Overview ───────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div data-reveal>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--sand)' }}>
              {categoryLabel} · {p.name}
            </p>
            <h2
              className="font-[300] mb-6 leading-[1.15]"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3.5vw, 44px)', color: 'var(--ink)' }}
            >
              Precision-made for<br /><em className="italic" style={{ color: 'var(--sand)' }}>San Diego homes.</em>
            </h2>
            <p className="text-[15px] leading-[1.9] mb-8" style={{ color: 'var(--mid)' }}>
              {p.detailCopy}
            </p>
            <button
              onClick={scrollToBooking}
              className="px-7 py-3 text-[11px] tracking-[0.18em] uppercase transition-opacity hover:opacity-80"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}
            >
              Request a Consultation →
            </button>
          </div>
          {/* Image */}
          <div data-reveal className="relative aspect-[4/3] overflow-hidden" style={{ border: '1px solid var(--hairline)' }}>
            <img
              src={p.detailImage}
              alt={p.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-4 text-[11px] tracking-[0.14em] uppercase"
              style={{ background: 'rgba(26,26,26,0.72)', color: 'rgba(255,255,255,0.7)' }}
            >
              {p.name} · Custom-measured and professionally installed
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#F0EDE7' }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20">
          <div data-reveal className="mb-12">
            <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--sand)' }}>Key Features</p>
            <h2
              className="font-[300] leading-[1.1]"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--ink)' }}
            >
              What makes our {p.shortName}<br />worth choosing.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(p.features ?? []).map((feature, i) => (
              <div
                key={i}
                data-reveal
                className="p-6"
                style={{ background: 'var(--cream)', border: '1px solid var(--hairline)' }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center mb-4 text-[13px] font-[300]"
                  style={{ background: 'var(--sand)', color: '#fff' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-[14px] leading-[1.7]" style={{ color: 'var(--ink)' }}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Note ────────────────────────────────────────────────────── */}
      {STUDIO_NOTES[p.id] && (
        <section aria-label="A note from the studio" style={{ background: 'var(--ink)' }}>
          <div className="max-w-4xl mx-auto px-6 sm:px-12 py-20 lg:py-24 text-center">
            <p data-reveal className="text-[10px] tracking-[0.24em] uppercase mb-8" style={{ color: 'var(--sand)' }}>
              A Note from the Studio
            </p>
            <blockquote
              data-reveal
              className="font-[300] italic leading-[1.6] mb-9"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(19px, 2.4vw, 27px)', color: 'var(--cream)' }}
            >
              “{STUDIO_NOTES[p.id]}”
            </blockquote>
            <div data-reveal className="flex items-center justify-center gap-4">
              <span className="inline-block w-9 h-px" style={{ background: 'var(--sand)' }} aria-hidden="true" />
              <cite className="not-italic text-[11px] tracking-[0.2em] uppercase" style={{ color: 'rgba(251,251,249,0.55)' }}>
                The iL Progetto Studio · San Diego
              </cite>
              <span className="inline-block w-9 h-px" style={{ background: 'var(--sand)' }} aria-hidden="true" />
            </div>
          </div>
        </section>
      )}

      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div data-reveal className="mb-12 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--sand)' }}>How It Works</p>
          <h2
            className="font-[300] leading-[1.1]"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--ink)' }}
          >
            From first call to final installation.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: '01', title: 'Free Consultation', body: 'A designer visits your home with our full collection of samples. You see every fabric and finish in your own light, against your walls.' },
            { n: '02', title: 'Precise Measurement', body: 'We measure every window ourselves. No estimation, no guesswork — exact dimensions guaranteed for a perfect fit.' },
            { n: '03', title: 'Custom Fabrication', body: `Your ${p.shortName} are manufactured to your exact specifications. Lead time is typically 2–3 weeks.` },
            { n: '04', title: 'Professional Install', body: 'Our licensed installation team handles everything. Most windows take 30–45 minutes. We leave no mess behind.' },
          ].map((step) => (
            <div key={step.n} data-reveal className="relative">
              <div
                className="text-[42px] font-[300] mb-3 leading-[1]"
                style={{ fontFamily: 'var(--serif)', color: 'var(--hairline)' }}
              >
                {step.n}
              </div>
              <h3 className="text-[13px] tracking-[0.1em] uppercase mb-2" style={{ color: 'var(--sand)' }}>
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.75]" style={{ color: 'var(--mid)' }}>{step.body}</p>
              {step.n !== '04' && (
                <div
                  className="hidden lg:block absolute top-6 -right-4 w-8 h-px"
                  style={{ background: 'var(--hairline)' }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section style={{ background: '#F0EDE7' }}>
          <div className="max-w-3xl mx-auto px-6 sm:px-12 py-20">
            <div data-reveal className="mb-10">
              <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--sand)' }}>Common Questions</p>
              <h2
                className="font-[300] leading-[1.1]"
                style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--ink)' }}
              >
                {p.name} — answered.
              </h2>
            </div>
            <div data-reveal>
              <FaqAccordion items={faqs} />
            </div>
            <div data-reveal className="mt-10 pt-8" style={{ borderTop: '1px solid var(--hairline)' }}>
              <p className="text-[13px] mb-4" style={{ color: 'var(--mid)' }}>
                Have a question we didn't answer? Call or text us directly.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+18583381678"
                  className="px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase"
                  style={{ background: 'var(--sand)', color: '#fff' }}
                >
                  (858) 338-1678
                </a>
                <Link
                  to="/faq"
                  className="px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase border"
                  style={{ borderColor: 'var(--hairline)', color: 'var(--ink)' }}
                >
                  Full FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Booking survey ─────────────────────────────────────────────────── */}
      <section ref={bookingRef} className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: pitch */}
          <div data-reveal>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--sand)' }}>Free Consultation</p>
            <h2
              className="font-[300] leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 42px)', color: 'var(--ink)' }}
            >
              See {p.shortName} in your<br />own light.
            </h2>
            <p className="text-[14px] leading-[1.85] mb-8" style={{ color: 'var(--mid)' }}>
              Our designer brings the complete {p.shortName} collection to your home — every fabric, every finish, in your actual light, against your walls. No showroom visit, no commitment. The consultation is completely free.
            </p>
            {/* Social proof */}
            <div className="space-y-3">
              {[
                'Consultation available within 2–5 business days',
                'We measure every window — you do nothing',
                'Detailed written quote provided same day',
                'No obligation to purchase',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--sand)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-[13px]" style={{ color: 'var(--mid)' }}>{t}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: form */}
          <div
            data-reveal
            className="p-8"
            style={{ background: '#F0EDE7', border: '1px solid var(--hairline)' }}
          >
            <BookingCalendar preselectedService={p.id} />
          </div>
        </div>
      </section>

      {/* ── Related products ────────────────────────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section style={{ background: 'var(--ink)' }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20">
            <div data-reveal className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--sand)' }}>You Might Also Like</p>
                <h2
                  className="font-[300] leading-[1.1] text-white"
                  style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2.5vw, 34px)' }}
                >
                  Related treatments.
                </h2>
              </div>
              <Link
                to="/catalog"
                className="shrink-0 text-[11px] tracking-[0.15em] uppercase border px-5 py-2.5 transition-colors hover:bg-white hover:text-[var(--ink)]"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
              >
                Full Catalog
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to="/products/$productId"
                  params={{ productId: rp.id }}
                  className="group block overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={rp.coverImage}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--sand)' }}>{rp.eyebrow}</p>
                    <p className="text-[15px] font-[300] text-white mb-1">{rp.name}</p>
                    <p className="text-[12px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.45)' }}>{rp.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA strip ───────────────────────────────────────────────────────────────────── */}
      <div className="py-12 px-6 text-center" style={{ background: 'var(--sand)' }}>
        <p className="text-[12px] tracking-[0.2em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
          iL Progetto LLC · San Diego, CA · License #1127055
        </p>
        <p className="text-white font-[300] mb-4" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>
          Free in-home consultation. No obligation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToBooking}
            className="px-7 py-3 text-[11px] tracking-[0.18em] uppercase bg-white transition-opacity hover:opacity-80"
            style={{ color: 'var(--sand)' }}
          >
            Book Consultation
          </button>
          <a
            href="tel:+18583381678"
            className="px-7 py-3 text-[11px] tracking-[0.18em] uppercase border border-white text-white transition-opacity hover:opacity-80"
          >
            (858) 338-1678
          </a>
        </div>
      </div>

    </div>
  )
}
