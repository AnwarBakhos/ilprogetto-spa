// ─── City-Product FAQ + Feature Bullets — Batch 4 ────────────────────────────
// Cities: escondido, san-marcos, vista, temecula × 20 products = 80 entries
// Each entry: faq_q, faq_a, feature

export interface CityProductFaqEntry {
  faq_q: string
  faq_a: string
  feature: string
}

export const CITY_PRODUCT_FAQ: Record<string, CityProductFaqEntry> = {

  // ─── ESCONDIDO ──────────────────────────────────────────────────────────────

  'escondido:roller-shades': {
    faq_q: `What roller shade fabric works best for Escondido's hot summers without blocking my hillside view?`,
    faq_a: `Escondido's inland heat — regularly topping 95°F in summer — demands a solar-mesh roller fabric with a 5% or lower openness factor on south and west exposures. That tighter weave rejects the majority of radiant heat before it enters the room while still letting you see across the Hidden Valley ridgeline or your Harmony Grove property's natural landscape. iL Progetto selects fabrics with a dual coating that reflects UV on the exterior face, which meaningfully cuts cooling load compared to interior-only light filtering.`,
    feature: `Solar-mesh fabric calibrated for Escondido's 95°F+ inland summer heat`,
  },

  'escondido:zebra-shades': {
    faq_q: `Are zebra shades a good fit for a ranch-style Escondido home with warm wood tones throughout?`,
    faq_a: `Zebra shades are an excellent fit for Escondido's ranch and hillside homes precisely because they come in earthy linen weaves, warm taupes, and natural sand tones that coordinate with the exposed beam ceilings and warm-wood cabinetry common in the Hidden Valley and Felicita neighborhoods. The alternating sheer and solid bands give you view-through in the morning hours and privacy as the afternoon heat builds, which matches how Escondido residents actually use their spaces across the day. iL Progetto carries zebra fabrics in a dedicated wine-country palette selected specifically for inland North County interiors.`,
    feature: `Earth-tone zebra fabrics curated for Escondido ranch-home interiors`,
  },

  'escondido:cellular-shades': {
    faq_q: `Will cellular shades actually help with the temperature swings between Escondido's hot summer days and cool winter nights?`,
    faq_a: `Yes — cellular shades are one of the few window treatments that provide measurable benefit in both directions. Escondido's thermal swing is significant: summer afternoons can be 30–40°F warmer than winter nights, and a dual-cell honeycomb construction maintains an insulating air pocket that resists heat entry in July and slows heat loss in December. Homes in the Harmony Grove and Felicita areas, where natural surroundings make tightly sealed construction less common, benefit especially from the additional thermal buffer at the glass. iL Progetto offers top-down/bottom-up cellular options so you can admit the cool morning sky view while keeping lower-half privacy.`,
    feature: `Dual-cell insulation handles Escondido's wide seasonal temperature range`,
  },

  'escondido:roman-shades': {
    faq_q: `What roman shade fabric complements the wine country aesthetic in my Escondido home?`,
    faq_a: `Escondido's growing wine country identity — anchored by estates along the Escondido Creek corridor and the hillside ranches above Hidden Valley — has shifted interior design preferences toward linen-cotton blends in warm stone, sage, and terracotta tones. Roman shades in these fabrics fold into structured horizontal pleats that add artisanal texture without fussiness, complementing the natural stone counters and reclaimed-wood accents common in Escondido's more design-forward remodels. iL Progetto sources wine-country-appropriate fabrics from trade-only mills and fabricates each shade to your exact window dimension in our San Diego workroom.`,
    feature: `Linen-cotton blends in Escondido wine country palette, custom fabricated`,
  },

  'escondido:wood-aluminum-blinds': {
    faq_q: `Can real wood blinds handle the dry summer heat in my Escondido hillside home?`,
    faq_a: `Escondido's low summer humidity — sometimes dropping below 15% RH during Santa Ana conditions — actually dries real wood slats and causes them to crack and split over time, especially on south-facing windows that spend hours in direct sun. iL Progetto recommends the hybrid wood-aluminum line for Escondido ranch and hillside homes: the visible face delivers the warm grain appearance that suits wine country interiors, while an aluminum composite backing prevents the warping and splitting that pure wood develops in Escondido's climate extremes. The result looks identical to real wood from every interior angle.`,
    feature: `Hybrid construction survives Escondido's low-humidity Santa Ana conditions`,
  },

  'escondido:shangri-la-shades': {
    faq_q: `Do Shangri-La shades work well in Escondido living rooms that face a valley or vineyard view?`,
    faq_a: `Shangri-La shades are among the best products iL Progetto installs for Escondido rooms with a valley or vineyard outlook. The floating horizontal vane construction softens and diffuses direct inland sun — which is more intense than coastal light without the marine layer to moderate it — while preserving the layered view of Escondido's distinctive terrain below. In the late afternoon when sunlight comes in low off the western ridgeline, tilting the vanes slightly manages the glare without closing down the view entirely. The organic, textured appearance of the sheer outer fabric also coordinates naturally with Escondido's warm-material interior design aesthetic.`,
    feature: `Vane-tilt glare control preserves hillside and valley views all day`,
  },

  'escondido:curtains-drapery': {
    faq_q: `What drapery styles work in Escondido's ranch homes that have lower ceilings and exposed wood beams?`,
    faq_a: `Escondido's ranch-style homes — particularly in the Felicita and Hidden Valley neighborhoods — typically have 8-foot or 8.5-foot ceilings with exposed Douglas fir or pine beams that set a specific aesthetic register: organic, warm, and grounded. Floor-to-ceiling drapery in this context works best in light-to-medium weight linen or textured cotton in earthy neutrals that complement the wood rather than competing with it. iL Progetto fabricates panels with a relaxed, unstructured header — a simple rod-pocket or soft pleat — that reads as casual and intentional rather than formal, which is the right register for an Escondido wine country ranch interior.`,
    feature: `Rod-pocket linen panels scaled for Escondido ranch beam ceilings`,
  },

  'escondido:motorized-shading': {
    faq_q: `Is motorized shading worth it for a hillside Escondido home where some windows are hard to reach?`,
    faq_a: `Absolutely — Escondido's hillside homes, particularly those in Harmony Grove and the ranches above Felicita Park, frequently have clerestory windows, staircase windows, or vaulted great room windows that are physically inaccessible for manual adjustment. Battery-powered motorized systems from iL Progetto require no electrical work and retrofit to any existing window without permits. For Escondido's intense afternoon sun, automated schedules that deploy shades on the west and south exposures between 1 and 5 p.m. reduce cooling load significantly and are far more consistent than manual operation.`,
    feature: `Battery motors retrofit hard-to-reach hillside and clerestory windows`,
  },

  'escondido:plantation-shutters': {
    faq_q: `Are plantation shutters a good long-term investment for an Escondido ranch home I plan to sell in a few years?`,
    faq_a: `Plantation shutters consistently rank among the top window treatments for resale value in the inland North County market, and Escondido buyers specifically respond to them because they present a clean, finished exterior appearance that reads as quality from the street. For ranch homes in Felicita and Hidden Valley, the wide 4.5-inch louver in a warm white or antique white finish complements the single-story ranch proportions and the earthy exterior palettes common in those neighborhoods. iL Progetto fabricates in solid basswood for dry Escondido interiors and in composite for laundry rooms and baths where humidity is a factor.`,
    feature: `Wide-louvre basswood shutters maximize Escondido ranch resale appeal`,
  },

  'escondido:faux-wood-blinds': {
    faq_q: `My Escondido garage conversion has west-facing windows that get brutal afternoon heat — what blinds hold up?`,
    faq_a: `West-facing windows in Escondido's converted garages and casitas face temperatures that routinely exceed 100°F in the cavity space between glass and shade during July and August, a condition that causes PVC-heavy faux wood to warp over time. iL Progetto specifies a high-density composite faux wood for Escondido's hottest exposures — a construction with a higher distortion threshold than standard PVC that holds its flat profile through multiple summer cycles. The reflective slat surface also bounces radiant heat back toward the glass rather than absorbing it, reducing the interior heat gain that makes these spaces uncomfortable.`,
    feature: `High-density composite rated for Escondido's 100°F+ west-window heat`,
  },

  'escondido:aluminum-blinds': {
    faq_q: `What's the most durable window blind for an Escondido barn or workshop conversion with rough use?`,
    faq_a: `For Escondido's working ranch properties, barn conversions, and workshop spaces — common in the agricultural parcels around Harmony Grove and east Escondido — commercial-gauge aluminum blinds are the practical answer. The metal construction handles dust, grit, and physical contact that would destroy fabric alternatives, and individual slats can be replaced without removing the entire blind when one gets bent. iL Progetto supplies heavier-gauge aluminum blinds than the hardware-store standard, with a tilt mechanism designed for daily heavy use. The reflective finish also helps manage the significant solar gain these south- and west-facing outbuildings receive during Escondido's long, hot summers.`,
    feature: `Commercial-gauge slats handle Escondido ranch outbuilding abuse`,
  },

  'escondido:vertical-blinds': {
    faq_q: `Do vertical blinds work on the large sliding doors that open to a covered patio in my Escondido home?`,
    faq_a: `Vertical blinds are the most space-efficient solution for the wide glass sliders common in Escondido's ranch-style homes, where the patio door often spans 8–12 feet connecting to a covered outdoor living area. iL Progetto installs fabric vertical vanes in earthy neutral weaves that complement Escondido's warm interior aesthetic and manage the bright afternoon glare that floods into south- and west-facing great rooms. The vane carriers we specify for Escondido installations are UV-stabilized to handle the intense inland sun that degrades cheaper vanes within a few seasons, and the track headrail is heavy-gauge aluminum that doesn't sag across wide openings.`,
    feature: `Heavy-gauge track spans wide Escondido ranch slider openings without sagging`,
  },

  'escondido:panel-track-blinds': {
    faq_q: `Are panel track blinds a good option for an Escondido home with wide picture windows overlooking a valley?`,
    faq_a: `Panel track blinds are one of iL Progetto's top recommendations for Escondido homes with wide picture windows — particularly those oriented toward the Escondido Creek valley or the hillside vineyards east of Hidden Valley Road. A single wide fabric panel across a 6-foot or 8-foot fixed window reads as an intentional design element rather than a blind, and the panel can be selected in a sheer solar weave that maintains the view while eliminating the afternoon glare that makes those west-facing rooms uncomfortable between 2 and 5 p.m. The overhead track hardware holds flat with no sagging across wide spans.`,
    feature: `Solar-weave panels preserve Escondido valley views on wide picture windows`,
  },

  'escondido:woven-wood-shades': {
    faq_q: `Do woven wood shades fit the natural material aesthetic of an Escondido wine country home?`,
    faq_a: `Woven wood shades are one of the most thematically resonant treatments for Escondido's wine country aesthetic — the bamboo, reed, and jute constructions carry exactly the organic warmth that the region's design direction has been moving toward. In homes along the Harmony Grove corridor and the hillside parcels above Felicita Park, where interior design draws on the same natural-material vocabulary as the surrounding landscape, a woven shade feels like a continuation of the architecture rather than an addition to it. iL Progetto adds blackout liners to bedroom installations while leaving living area shades unlined so the warm, filtered light comes through the weave naturally.`,
    feature: `Bamboo-and-reed weaves echo Escondido's wine country natural aesthetic`,
  },

  'escondido:sheer-shades': {
    faq_q: `How do sheer shades perform in an Escondido home where I want light but also afternoon privacy from the road?`,
    faq_a: `Escondido's hillside and ranch properties often sit close enough to rural roads and neighboring parcels that afternoon privacy matters, even on properties that feel secluded. Sheer shades solve the Escondido privacy challenge elegantly: the semi-transparent S-vane construction diffuses the strong inland afternoon sun into soft ambient light while the fabric face provides a privacy screen against road-level sightlines. When vanes are tilted to the closed position, the shade provides full privacy without eliminating natural light entirely — a meaningful quality-of-life difference in the long Escondido summer afternoons.`,
    feature: `Vane adjustment provides road privacy without blocking Escondido's warm afternoon light`,
  },

  'escondido:blackout-curtains': {
    faq_q: `Escondido summers are so bright — will blackout curtains actually work in my bedroom that faces east?`,
    faq_a: `Escondido's clear inland skies mean east-facing bedrooms receive intense, unfiltered morning light as early as 5:15 a.m. in summer — and without genuine blackout coverage, that translates to disrupted sleep. iL Progetto fabricates true blackout curtains using triple-pass blackout lining with wraparound ceiling-mount brackets that eliminate the edge bleed that defeats most off-the-shelf room-darkening products. For Escondido homes, we also seal any gap at the bottom with a weighted hem that lies flat against the sill, blocking the low-angle early-morning light that comes in below a standard curtain panel. The face fabric can be any material in our collection — the blackout function is entirely internal.`,
    feature: `Weighted hem and wraparound brackets seal Escondido's early intense sunrise`,
  },

  'escondido:sheer-drapes': {
    faq_q: `Will sheer drapes hold up in Escondido where the UV is much stronger than on the coast?`,
    faq_a: `Escondido's UV index regularly exceeds that of coastal San Diego neighborhoods by a measurable margin — the inland location means there is no marine-layer filter softening the radiation, and fabrics deteriorate faster as a result. iL Progetto selects sheer drape fabrics with UV-inhibitor treatments for Escondido installations, using solution-dyed polyester-linen blends rather than undyed or surface-printed sheers that fade and yellow within a few seasons of direct inland sun. The result is a sheer panel that maintains its color and structural integrity through multiple years of Escondido's strong UV environment while still delivering the soft, diffused light effect that makes sheer drapery so appealing.`,
    feature: `UV-inhibitor solution-dyed sheers resist Escondido's intense inland radiation`,
  },

  'escondido:motorized-exterior': {
    faq_q: `Can motorized exterior shades withstand Escondido's Santa Ana winds and hot summer conditions?`,
    faq_a: `Escondido sits directly in the path of Santa Ana wind events that can sustain 40–50 mph with gusts above 60 mph, making wind-sensor automation a non-negotiable specification for exterior motorized shading in this location. iL Progetto installs Somfy-motor exterior shade systems for Escondido homes with integrated anemometer sensors that automatically retract the shade at a programmed wind threshold — typically 22 mph — before gusts can cause damage to the fabric or mounting brackets. The exterior fabric selections we use for Escondido are UV-stabilized acrylic mesh rated for sustained high temperatures and designed to breathe in the dry inland heat rather than trap it.`,
    feature: `Anemometer wind-sensor auto-retract standard for Escondido Santa Ana events`,
  },

  'escondido:sun-screens': {
    faq_q: `Are solar sun screens effective on the south-facing windows of my Escondido ranch home during summer?`,
    faq_a: `South-facing windows on Escondido ranch homes receive near-perpendicular summer sun for most of the midday hours, making them the highest-priority exposure for solar intervention. An exterior sun screen at 5% openness intercepts 75–85% of radiant solar energy before it reaches the glass, reducing the interior surface temperature of the window and the cooling load on the HVAC system simultaneously. iL Progetto installs powder-coated aluminum frame sun screens for Escondido properties in charcoal mesh that preserves outward views of the landscape while reflecting heat away from the home. These frames are custom-fabricated to your window dimension and mount into stucco or wood siding with appropriate anchors.`,
    feature: `Exterior-mount charcoal mesh cuts 80% solar gain on Escondido south exposures`,
  },

  'escondido:awnings': {
    faq_q: `What awning fabric holds up best against Escondido's combination of strong sun and occasional Santa Ana winds?`,
    faq_a: `Escondido patios face two distinct challenges: months of intense inland UV that bleaches inferior fabrics, and episodic Santa Ana events that can gust above 50 mph with no coastal friction to slow them down. iL Progetto installs retractable lateral-arm awnings for Escondido properties using solution-dyed acrylic Sunbrella fabrics that carry a 10-year UV-fade warranty — the dye is locked into the fiber rather than surface-printed, so color retention is genuine rather than cosmetic. Wind-sensor motorization is standard on all Escondido awning installations, automatically retracting the awning when wind speed exceeds the safe operating threshold. For Escondido's ranch and hillside homes, projection depths of 10–14 feet create genuinely comfortable outdoor rooms during the long warm season.`,
    feature: `Sunbrella solution-dyed fabric with auto-retract for Escondido Santa Ana gusts`,
  },

  // ─── SAN MARCOS ─────────────────────────────────────────────────────────────

  'san-marcos:roller-shades': {
    faq_q: `What roller shades are best for the standard windows in a San Elijo Hills new construction home?`,
    faq_a: `San Elijo Hills and Discovery Hills homes are built to relatively consistent window specifications, which actually works in the homeowner's favor — iL Progetto has installed hundreds of roller shades in these communities and knows exactly which fabric weights and openness factors suit the east, south, and west exposures in the standard floor plans. Light-filtering fabrics in warm whites and soft naturals are the most popular choice for San Marcos master-planned interiors, where the design aesthetic tends toward transitional and clean-lined. Cordless lift is standard on all San Marcos roller shade installations because of the density of young families in these communities.`,
    feature: `Cordless lift standard on all San Marcos roller shades for family safety`,
  },

  'san-marcos:zebra-shades': {
    faq_q: `Are zebra shades child-safe for our San Marcos home where our kids play right next to the windows?`,
    faq_a: `Child safety is the first specification iL Progetto addresses in San Marcos consultations, and zebra shades are available in fully cordless and motorized configurations that eliminate any dangling cord hazard entirely. The motorized option — increasingly popular in San Elijo Hills and Discovery Hills — uses a simple remote or smart-phone app for up/down/stop and is the choice most San Marcos families make when they have children under eight. Cordless spring-lift versions are the manual alternative, requiring no cord at all for daily operation. Both configurations meet and exceed the current ANSI/WCMA safety standards for homes with young children.`,
    feature: `Motorized and cordless options eliminate cord hazards in San Marcos family homes`,
  },

  'san-marcos:cellular-shades': {
    faq_q: `Do cellular shades reduce energy bills in a two-story San Marcos home where upstairs bedrooms overheat?`,
    faq_a: `Two-story homes in San Marcos's master-planned communities — San Elijo Hills in particular — have upper-floor bedrooms that absorb significantly more heat than the ground floor because roof and wall surface area amplifies thermal gain at the top level. Dual-cell cellular shades on those upper bedroom windows create an insulating air buffer that meaningfully reduces the rate at which solar heat enters the room, keeping the upstairs cooler and reducing the load on the HVAC system. iL Progetto specifies top-down/bottom-up cellular configurations for San Marcos children's bedrooms, allowing parents to lower the shade from the top for daytime light filtering while the bottom half remains closed for privacy.`,
    feature: `Top-down/bottom-up lift ideal for San Marcos two-story bedroom heat management`,
  },

  'san-marcos:roman-shades': {
    faq_q: `What roman shade styles work in a transitional San Marcos home with white cabinets and neutral finishes?`,
    faq_a: `The transitional interiors dominant in San Marcos's newer construction — white shaker cabinetry, quartz counters, light wood floors — respond best to roman shades in flat-fold construction with minimal embellishment, allowing the fabric texture to carry the interest rather than the pleating style. iL Progetto carries a dedicated collection of performance linen weaves, cotton texturals, and subtle geometric prints in warm whites, cream, and soft greige that complement San Marcos's standard builder palettes without looking like an afterthought. Light-filtering liner is recommended behind most fabric choices given San Marcos's strong afternoon sun, and all operating hardware is cordless for family safety.`,
    feature: `Flat-fold cordless roman shades in neutral weaves for San Marcos transitional interiors`,
  },

  'san-marcos:wood-aluminum-blinds': {
    faq_q: `Are wood blinds a good idea for a San Marcos home near Lake San Marcos where humidity can be higher?`,
    faq_a: `Homes near Lake San Marcos and the golf course corridors experience enough moisture cycling — particularly morning fog and irrigation-driven humidity in the warmer months — to cause real wood slat blinds to cup and bow over time. iL Progetto recommends the hybrid wood-aluminum construction for these locations: the visible face delivers the warm wood grain appearance that suits San Marcos's warmer-toned interiors, while the aluminum composite backing resists the moisture absorption that causes warping. The result looks indistinguishable from solid wood at normal viewing distances and outperforms it in San Marcos's variable humidity environment.`,
    feature: `Moisture-resistant hybrid slats for San Marcos lakeside humidity conditions`,
  },

  'san-marcos:shangri-la-shades': {
    faq_q: `Will Shangri-La shades hold up in a San Marcos home where the kids are rough on window treatments?`,
    faq_a: `Shangri-La shades are a considered choice for San Marcos family homes — the operating mechanism is continuous-cord lift or motorized, and the fabric vanes themselves are protected between two sheer panels rather than exposed like individual blind slats. iL Progetto recommends the motorized configuration for San Marcos homes with young children: a single remote or wall switch operates the shade with no accessible cords, the motor soft-stops at the travel limits to prevent fabric stress, and the system is smart-home compatible for scheduling and remote operation. The transitional aesthetic of Shangri-La shades suits San Marcos's clean-lined interiors particularly well.`,
    feature: `Motor soft-stop protects fabric in high-traffic San Marcos family rooms`,
  },

  'san-marcos:curtains-drapery': {
    faq_q: `What drapery is appropriate for a San Marcos home in a community with HOA exterior appearance rules?`,
    faq_a: `Several San Marcos communities — including portions of San Elijo Hills — have CC&R provisions that regulate the exterior-facing appearance of window treatments, requiring neutral linings visible from the street. iL Progetto reviews HOA documentation before any drapery fabrication order and selects exterior lining colors within the approved palette for each community. The interior face fabric can be any design the homeowner chooses — the HOA compliance is addressed entirely in the lining layer. This allows San Marcos homeowners to have the custom-designed interior drapery they want without risking a compliance notice from the association.`,
    feature: `HOA-compliant neutral lining standard on all San Marcos drapery orders`,
  },

  'san-marcos:motorized-shading': {
    faq_q: `Is motorized shading a practical upgrade for a busy San Marcos family household?`,
    faq_a: `Motorized shading is one of the most genuinely practical smart-home upgrades for busy San Marcos families — the ability to adjust every shade in the house with a single scene command or automated schedule eliminates the daily friction of manually opening and closing a dozen windows. iL Progetto programs San Marcos installations with morning wake scenes that raise bedroom shades gradually and afternoon scenes that deploy living room shades during peak sun hours, all running automatically without any user input. Battery-powered motors require no electrical permit and retrofit to any existing window, making them accessible for San Marcos homes at any stage of ownership. Smart-home integration includes Alexa, Google, and Apple HomeKit.`,
    feature: `Pre-programmed school-day schedules auto-adjust all shades in San Marcos homes`,
  },

  'san-marcos:plantation-shutters': {
    faq_q: `Are plantation shutters worth the investment in a San Marcos new construction home I just bought?`,
    faq_a: `Plantation shutters are among the highest-ROI window treatments in the San Marcos market, consistently cited by real estate agents in San Elijo Hills and Discovery Hills as a feature that commands buyer attention at listing. Unlike removable window treatments, shutters are mounted to the window frame and convey with the house — meaning the investment stays with the property. iL Progetto fabricates shutters in composite materials for San Marcos's variable climate, and the child-safe cordless operation is inherent in the shutter design, making them an ideal fit for the large family demographic in these master-planned communities.`,
    feature: `Frame-mounted shutters convey with home — top San Marcos resale ROI product`,
  },

  'san-marcos:faux-wood-blinds': {
    faq_q: `What faux wood blind is safe and durable for a San Marcos playroom or kids' bedroom?`,
    faq_a: `Faux wood blinds for San Marcos children's rooms should be specified as cordless from the outset — iL Progetto makes cordless lift the default configuration on every faux wood blind ordered for a residential San Marcos installation, not an optional upgrade. The composite slats are also significantly more durable than real wood when it comes to accidental contact from children's toys and everyday rough handling, as the PVC construction doesn't dent or chip the way finished wood does. In San Marcos's standard new-construction window sizes, our cordless faux wood blinds fit most openings from standard measurements, making them a cost-effective and safe solution for outfitting multiple rooms.`,
    feature: `Cordless lift default — no cord hazard in San Marcos children's rooms`,
  },

  'san-marcos:aluminum-blinds': {
    faq_q: `Are aluminum blinds a good option for a San Marcos home office that needs to control screen glare without looking cold?`,
    faq_a: `Aluminum blinds in micro-slat profiles (1-inch or half-inch) are highly effective for screen-glare management in San Marcos home offices because the individual slat angle can be set precisely to cut the sun angle without fully closing the blind. iL Progetto carries aluminum blinds in warm matte finishes — champagne, warm taupe, antique white — that avoid the sterile institutional look that standard silver aluminum gives a room. For the converted-bedroom home offices common in San Marcos's master-planned communities, these finishes coordinate naturally with the transitional interior palette rather than reading as commercial equipment.`,
    feature: `Warm matte finishes avoid the corporate look in San Marcos home offices`,
  },

  'san-marcos:vertical-blinds': {
    faq_q: `Can I replace the standard builder vertical blinds in my San Marcos home with something that looks more finished?`,
    faq_a: `Builder-grade vertical blinds in San Marcos new construction are typically white vinyl with minimal fabric weight — functional but visually flat. iL Progetto replaces them throughout San Elijo Hills and Discovery Hills with fabric-vane vertical systems in textured linen weaves and soft wovens that immediately elevate the appearance of the room without the cost of a complete treatment change. The fabric vanes we carry are cordless-traversing where possible, and the headrail hardware is heavier than the builder standard, which means the system continues to operate smoothly for years rather than dropping off track within the first couple of seasons.`,
    feature: `Fabric-vane upgrade replaces San Marcos builder vertical blinds affordably`,
  },

  'san-marcos:panel-track-blinds': {
    faq_q: `What's the best way to cover the wide sliding glass door and fixed window combination in my San Marcos great room?`,
    faq_a: `The wide slider-plus-fixed-window combinations common in San Marcos's newer open-plan great rooms — often spanning 12–16 feet in total — are exactly the configuration panel track blinds are designed for. iL Progetto configures panel track systems with separate operating panels over the sliding door and fixed panels over the stationary glass, so the door remains fully accessible while the entire wall presents a cohesive, designed appearance. Solar-weave panel fabrics admit natural light while cutting the afternoon glare that makes south- and west-facing San Marcos great rooms uncomfortable from 1 to 4 p.m. Panel width is calibrated to the specific opening so the stacked position is neat and unobtrusive.`,
    feature: `Door-accessible panel configuration for San Marcos wide slider + fixed glass`,
  },

  'san-marcos:woven-wood-shades': {
    faq_q: `Do woven wood shades work in a San Marcos home where the design is more modern farmhouse than traditional?`,
    faq_a: `Modern farmhouse interiors in San Marcos — a strong design trend in San Elijo Hills new construction — are characterized by warm wood tones, matte white surfaces, and natural material textures that woven wood shades complement almost perfectly. The bamboo and jute weaves carry the organic warmth that distinguishes modern farmhouse from sterile contemporary, and the woven texture adds visual interest at the window without requiring patterned wallcovering or complex drapery. iL Progetto adds privacy liners behind all San Marcos bedroom woven shades, ensuring the natural material look isn't compromised by the need for privacy after dark.`,
    feature: `Bamboo-jute weaves complement San Marcos modern farmhouse interiors naturally`,
  },

  'san-marcos:sheer-shades': {
    faq_q: `Are sheer shades practical in a San Marcos living room where I need both light and privacy from neighbors?`,
    faq_a: `San Marcos's master-planned communities pack homes relatively tightly — neighbor sightlines are a real consideration in San Elijo Hills and Discovery Hills, where homes on adjacent lots can see directly into living rooms at close range. Sheer shades solve the San Marcos privacy challenge without sacrificing natural light: the semi-transparent vane construction diffuses the view from outside while maintaining the bright, airy atmosphere inside. In the afternoon when backlighting reverses and interiors become more visible from the street, a slight vane adjustment provides additional privacy without changing the shade's open appearance. Cordless lift is standard on all San Marcos sheer shade installations.`,
    feature: `Vane privacy adjustment manages close neighbor sightlines in San Marcos communities`,
  },

  'san-marcos:blackout-curtains': {
    faq_q: `What blackout curtains work best for a San Marcos toddler room where nap time is a necessity?`,
    faq_a: `Consistent nap schedules for toddlers in San Marcos — where summer afternoons are bright and warm well past 7 p.m. — require genuine blackout coverage that eliminates light from the edges as thoroughly as through the fabric itself. iL Progetto fabricates blackout panels for San Marcos children's rooms with ceiling-mount tracks and side returns that close against the wall surface, eliminating the edge glow that wakes children even through eyelids. The fabric face is available in any of our collection's child-appropriate patterns and solids; the blackout function is entirely in the triple-pass lining layer. Machine-washable fabric options are available — a practical consideration for the San Marcos family demographic.`,
    feature: `Side-return ceiling track eliminates edge glow in San Marcos toddler rooms`,
  },

  'san-marcos:sheer-drapes': {
    faq_q: `Can sheer drapes work in a San Marcos dining room where I want a soft, airy look without giving up privacy?`,
    faq_a: `Sheer drapes in San Marcos dining rooms work best when layered over a roller or cellular shade that handles the privacy and light-control duties, with the sheer panels serving as a softening element that adds textile warmth and visual depth to the window. iL Progetto installs this two-layer configuration throughout San Elijo Hills homes, using ripple-fold sheer panels on a ceiling-mount track that keeps the fabric neat even when the dining room air conditioning creates a slight indoor air current. The combination allows the room to feel open and luminous during the day while the shade layer provides whatever privacy level the homeowner prefers in the evening.`,
    feature: `Layered sheer + roller system provides San Marcos dining room daytime softness`,
  },

  'san-marcos:motorized-exterior': {
    faq_q: `Are motorized exterior shades worth it for the west-facing patio in my San Marcos backyard?`,
    faq_a: `West-facing patios in San Marcos receive the most intense and sustained direct sun of any orientation — from early afternoon through sunset, which can be 5 to 6 hours of usable patio time lost to heat and glare. Motorized exterior shades from iL Progetto reduce the patio surface temperature by intercepting solar radiation before it reaches the concrete or pavers, making outdoor dining and play areas usable through the late afternoon. Battery-motor options require no outdoor electrical work, and the wind-sensor integration automatically retracts the shade when gusts exceed safe operating thresholds. The outdoor fabric selections are solution-dyed acrylic with mold-resistance treatment suitable for San Marcos's variable humidity.`,
    feature: `Wind-sensor auto-retract and battery motor — no electrical permit needed`,
  },

  'san-marcos:sun-screens': {
    faq_q: `How effective are solar screens at keeping my San Marcos home cooler without air conditioning running constantly?`,
    faq_a: `Solar sun screens on west and south-facing windows in San Marcos homes intercept solar radiation before it enters the glass, reducing interior temperatures by 10–15°F on exposed elevations during peak afternoon hours. For the standard two-story Discovery Hills and San Elijo Hills floor plans, iL Progetto typically prioritizes the upper-floor west-facing bedrooms and the great room south/west glass where heat gain is highest. The 5% openness factor mesh we most commonly specify for San Marcos provides excellent heat rejection while maintaining enough outward visibility to preserve the view of the community landscape. Frames are powder-coated aluminum in colors matched to your window frame finish.`,
    feature: `5% mesh on San Marcos upper-floor west windows cuts 10–15°F heat gain`,
  },

  'san-marcos:awnings': {
    faq_q: `Does my San Marcos HOA typically allow retractable awnings on south-facing patios?`,
    faq_a: `Many San Marcos HOA communities — including portions of San Elijo Hills — require architectural review approval for exterior additions including retractable awnings. iL Progetto prepares all HOA documentation for San Marcos awning projects, including scaled drawings, fabric color samples within community-approved palettes, and hardware finish specifications, ensuring the submittal is complete and approval is granted before installation day. Our experience with San Marcos community associations means we know which awning configurations and fabric colors have precedent for approval, reducing the back-and-forth of a first-time submittal significantly.`,
    feature: `Complete HOA submittal documentation prepared for San Marcos awning approvals`,
  },

  // ─── VISTA ──────────────────────────────────────────────────────────────────

  'vista:roller-shades': {
    faq_q: `My Vista home sits above Shadowridge and my neighbor's second story looks directly into my living room — what roller shade blocks that view?`,
    faq_a: `Vista's hillside topography creates privacy challenges that flat-community window treatments never encounter: neighbors at a higher elevation have sightlines into your home that a standard same-level privacy screen doesn't address. iL Progetto's approach for Vista's Shadowridge and Brengle Terrace hillside homes is to specify roller shades with a privacy-rated fabric — typically a 3% or 1% openness mesh — that appears opaque from the elevated neighbor's angle without making the room feel closed off from the inside. Solar mesh fabrics in these low-openness factors also block the intense south and west sun that Vista's exposed hillside lots receive throughout the afternoon.`,
    feature: `Low-openness mesh blocks elevated neighbor sightlines on Vista hillside lots`,
  },

  'vista:zebra-shades': {
    faq_q: `Will zebra shades give me privacy from the neighbors uphill from my Vista home in the Rancho Minerva area?`,
    faq_a: `Zebra shades manage same-level privacy effectively, but in Vista's Rancho Minerva and Brengle Terrace neighborhoods where neighbors at higher elevation look down into your windows, the solid band position is the relevant control. When the solid bands align, the zebra shade is opaque at any angle — including from above — which is the configuration Vista hillside residents use during the afternoon hours when uphill neighbor visibility is highest. iL Progetto installs zebra shades in Vista with this specific elevated-neighbor challenge in mind, selecting band widths and fabric opacities appropriate to the lot's specific exposure angle.`,
    feature: `Solid-band position blocks downward sightlines from Vista's uphill neighbors`,
  },

  'vista:cellular-shades': {
    faq_q: `My Vista home faces a different sun angle than my neighbor because of how the lots are cut — can cellular shades help with uneven heat gain?`,
    faq_a: `Vista's hillside lot geometry creates exactly the kind of uneven solar exposure you're describing — one house on a north-facing slope and the next on a south-facing one, separated by a hundred feet. iL Progetto measures solar angles for each individual Vista installation and specifies cellular shade opacity by exposure: rooms with direct afternoon sun on south or west-facing slopes get double-cell room-darkening cellular shades; rooms that face north or east on shaded slopes may need only a single-cell light-filtering fabric to stay comfortable. The insulating air pocket is valuable in all configurations for Vista's cooler winter nights, which arrive faster than coastal areas when the sun drops below the ridge.`,
    feature: `Opacity specified per room based on Vista's lot-specific solar angle`,
  },

  'vista:roman-shades': {
    faq_q: `I have an eclectic ranch-style home in Vista Village — what roman shade fabric complements exposed brick and vintage wood floors?`,
    faq_a: `Vista Village's eclectic mix of mid-century, ranch, and craftsman homes provides rich texture and material history that a roman shade can either honor or fight depending on fabric choice. iL Progetto recommends textured cotton or linen weaves in warm, slightly muted tones — aged flax, warm cream, or earthy terracotta — for rooms with exposed brick and vintage hardwood floors in Vista Village homes. The structured horizontal folds of a roman shade echo the horizontal coursing of brick and add another layer of intentional craftsmanship to a room that already has strong material character. Unlined versions admit warm filtered light that suits these spaces; blackout lining is available for bedrooms.`,
    feature: `Textured linen weaves complement Vista Village brick-and-wood eclectic interiors`,
  },

  'vista:wood-aluminum-blinds': {
    faq_q: `Is real wood or faux wood better for a Vista home that sits on a north slope where mornings are cooler and damper?`,
    faq_a: `North-facing slopes in Vista — common in the Shadowridge hills and portions of Brengle Terrace — stay significantly cooler and retain morning dew longer than south-facing lots in the same neighborhood. This repeated moisture exposure cycles real wood slats through expansion and contraction that eventually causes cupping and finish failure. iL Progetto recommends the hybrid wood-aluminum construction for these north-slope Vista homes: the warm wood grain face delivers the aesthetic these homes deserve, and the aluminum backing resists the moisture that real wood can't. On exposed west-facing rooms of the same Vista homes, the heat differential is reversed — and the aluminum construction handles that extreme equally well.`,
    feature: `Hybrid wood-aluminum slats handle Vista hillside north-slope morning damp`,
  },

  'vista:shangri-la-shades': {
    faq_q: `Do Shangri-La shades work in a contemporary Vista home that has large fixed windows with no view but a lot of glare?`,
    faq_a: `Contemporary homes in Vista's Shadowridge neighborhood often have large fixed glass panes that were positioned for indoor light rather than a specific view — and those windows generate significant glare across the day as the sun tracks across the hillside. Shangri-La shades are the ideal treatment for this situation: the floating vane construction transforms the harsh incoming light into a soft, even luminosity that fills the room without glare rather than flooding it with sharp contrast. The vane tilt gives precise control as the sun shifts through Vista's varied hillside angles, and the visual depth of the floating vanes adds design presence to the window wall that a flat shade can't replicate.`,
    feature: `Vane tilt manages Vista hillside sun-track glare on large fixed glass`,
  },

  'vista:curtains-drapery': {
    faq_q: `What drapery works in a Vista hillside home where rooms face different elevations and I need varied privacy at each window?`,
    faq_a: `Vista's hillside homes on streets like Mesa Drive and the Brengle Terrace area often have rooms with completely different privacy requirements from window to window — one bedroom faces a blank hillside, another overlooks a neighbor's rooftop deck, and the living room has a sightline straight down to the street below. iL Progetto designs each drapery panel for the specific privacy requirement of its window: sheer for views facing open hillside, room-darkening lined for windows facing neighbor activity zones, and blackout-lined for bedrooms. Custom track configurations allow panels to traverse the full width or stack narrowly to one side, adapting to each Vista room's unique geometry.`,
    feature: `Per-window opacity selected for Vista's varied hillside neighbor sightlines`,
  },

  'vista:motorized-shading': {
    faq_q: `Can motorized shades adjust automatically as the sun moves across my Vista hillside property throughout the day?`,
    faq_a: `Vista's hillside orientation means the sun hits different elevations of the same home at different times — east-facing rooms receive morning sun that west-facing rooms don't see until afternoon, and south-facing windows may be in partial shade from the ridge above until midday. iL Progetto programs motorized shade systems for Vista homes with per-room schedules that account for the specific solar geometry of each exposure, deploying shades on east windows at sunrise and on west windows at noon rather than running every shade on the same schedule. Somfy and Lutron systems both support this per-zone programming and integrate with Alexa and Google Home for manual override.`,
    feature: `Per-room solar schedules account for Vista hillside varied exposure timing`,
  },

  'vista:plantation-shutters': {
    faq_q: `Are plantation shutters a good option for a Vista ranch home where I want to control the unusual privacy angles from the road above?`,
    faq_a: `Vista ranch homes on hillside streets where the road passes above the roofline face an unusual privacy angle — the road-level observer is looking slightly down into the home rather than straight in. Plantation shutters address this challenge effectively because the louver angle can be set precisely to block the downward sightline from the road while still admitting sky light from above. iL Progetto installs Vista shutters with this specific tilt geometry in mind, and the sturdy frame construction means the louver angle holds precisely year after year rather than drifting as cheaper plastic alternatives do. The wide louver format — 4.5-inch — is particularly effective for managing these angular Vista privacy situations.`,
    feature: `Louver angle set to block downward road sightlines on Vista hillside ranches`,
  },

  'vista:faux-wood-blinds': {
    faq_q: `My Vista home near Vista Village gets morning moisture from the valley below — will faux wood blinds warp?`,
    faq_a: `The valleys around Vista Village and portions of Shadowridge draw in morning moisture from the coastal influence that moves inland overnight, and rooms with east or north-facing windows can experience condensation on the glass interior surface during the cooler months. iL Progetto specifies a high-density composite faux wood for Vista homes with known moisture exposure — a construction that resists the humidity cycling that causes standard PVC faux wood to bow over time. The hardware components we use are anodized aluminum rather than steel, which handles the repeated exposure without the rusting that corrodes standard tilt mechanisms and causes operational failure.`,
    feature: `Anodized hardware and dense composite resist Vista valley moisture cycling`,
  },

  'vista:aluminum-blinds': {
    faq_q: `What window blind is best for the west-facing garage conversion in my Vista Shadowridge home?`,
    faq_a: `Converted garages in Vista's Shadowridge area frequently face west, turning them into the hottest rooms in the house during summer afternoons when the sun drops directly on the glass. Aluminum blinds are the practical solution for these spaces: the reflective metal slat face bounces radiant heat back toward the glass rather than absorbing it, and the commercial-gauge construction iL Progetto supplies handles the physical wear of a busy workshop, home gym, or home office environment. At $40–60 per opening, aluminum blinds are also the most cost-effective treatment for utility spaces — allowing budget to be directed toward living areas where design matters more.`,
    feature: `Reflective slats bounce heat in Vista Shadowridge west-facing converted garages`,
  },

  'vista:vertical-blinds': {
    faq_q: `Are vertical blinds appropriate for the sliding door on my Vista home that opens to a hillside view?`,
    faq_a: `Vertical blinds are the most practical solution for sliding doors in Vista hillside homes where the view is a primary asset. Unlike horizontal blinds that must be raised fully to open the door, vertical vanes traverse to the side with the door panel, keeping them out of the traffic path while still providing full coverage when the door is closed. iL Progetto installs Vista slider vertical blinds in light-filtering fabric vanes that manage the hillside glare during peak sun hours without blocking the valley or ridgeline view that Vista residents prize. The headrail hardware is heavy-gauge aluminum that spans wide openings without deflection, which matters on the 8-foot and 10-foot sliders common in Vista's ranch and split-level homes.`,
    feature: `Vane traverse clears Vista slider door path while preserving hillside view`,
  },

  'vista:panel-track-blinds': {
    faq_q: `How do I cover a wide window that looks toward a neighbor's house at the same elevation in my Vista home?`,
    faq_a: `Vista's hillside neighborhoods create situations where same-elevation neighbors have direct window-to-window sightlines across a narrow street or lot line — a privacy challenge that wide panel track blinds address better than most alternatives. iL Progetto configures panel tracks for Vista homes with room-darkening or opaque fabric panels that provide complete privacy coverage at that specific horizontal angle while a sheer fabric in the adjacent panel zones still admits daylight. The wide panel format also provides proportionally appropriate coverage for the large windows common in contemporary Vista homes, looking designed rather than improvised.`,
    feature: `Mixed sheer and opaque panels address Vista's same-elevation neighbor sightlines`,
  },

  'vista:woven-wood-shades': {
    faq_q: `Would woven wood shades work in a Vista home that has an eclectic mix of mid-century and craftsman elements?`,
    faq_a: `Woven wood shades are one of the most versatile treatments for Vista's eclectic architectural mix — the bamboo, sea grass, and jute constructions carry a natural material character that bridges craftsman warmth and mid-century simplicity without committing hard to either. In the mixed-vintage homes common near Vista Village, Brengle Terrace, and Rancho Minerva, a woven shade reads as a considered design choice rather than a trend. iL Progetto selects weave densities appropriate to each room's privacy needs — tighter weaves for street-facing rooms, open weaves for hillside views — and adds blackout liners to bedrooms without compromising the exterior natural weave appearance.`,
    feature: `Natural weave bridges Vista craftsman-to-mid-century eclectic design mix`,
  },

  'vista:sheer-shades': {
    faq_q: `My Vista home gets a lot of glare because the neighbor's windows reflect sun at an angle — do sheer shades help?`,
    faq_a: `Reflected glare from neighboring windows is a genuine problem in Vista's hillside neighborhoods where homes at different elevations have glass surfaces that act as secondary reflectors throughout the day. Sheer shades soften this reflected glare by dispersing the incoming light through a semi-transparent vane layer that distributes it evenly rather than allowing the concentrated reflected beam to track across the room. iL Progetto specifies sheer shade fabrics with higher UV-blocking capability for Vista homes experiencing this reflected-glare issue, since glass-reflected UV can be as intense as direct exposure and fades furnishings accordingly.`,
    feature: `High-UV-block vane fabric addresses Vista hillside reflected-glare problem`,
  },

  'vista:blackout-curtains': {
    faq_q: `My Vista bedroom faces a street light that's slightly uphill and shines directly into my window at night — how do I block it completely?`,
    faq_a: `Uphill street lights are a uniquely Vista problem — the hillside elevation of the light source means it shines at a downward angle into bedroom windows that a standard shade or curtain leaves partially exposed at the top. iL Progetto solves this with ceiling-mount blackout curtain tracks that position the panel's top edge flush against the ceiling surface, eliminating the gap above the window that allows the angled light to enter. The triple-pass blackout lining blocks the light source regardless of its angle, and side returns close the curtain against the wall on both sides so no edge bleed occurs. For Vista homes on hillside streets this ceiling-mount approach is the only fully effective solution.`,
    feature: `Ceiling-mount track blocks Vista's elevated-angle street light entry`,
  },

  'vista:sheer-drapes': {
    faq_q: `Can sheer drapes soften a Vista home's interior that gets harsh uneven light depending on which side of the hill the room is on?`,
    faq_a: `Vista homes on the east face of a ridge can have harsh, direct morning sun in east rooms while west rooms remain dim until afternoon — a lighting imbalance that makes the home feel inconsistent from room to room. Sheer drapes standardize the light quality across the home by diffusing harsh direct sun on the bright side and softening what light there is on the shaded side, creating a uniform luminous atmosphere regardless of exposure. iL Progetto uses performance sheer fabrics with consistent light-transmission values for Vista homes, ensuring the effect is repeatable across multiple rooms regardless of the varying sun angles that Vista's hillside topography creates.`,
    feature: `Consistent-transmission sheer fabric standardizes light across Vista hillside rooms`,
  },

  'vista:motorized-exterior': {
    faq_q: `Can exterior motorized shades handle the wind exposure on the top of the Shadowridge ridge in Vista?`,
    faq_a: `Shadowridge ridge homes in Vista are among the windiest residential locations in North County — the exposure is unbroken from the northwest during onshore flow events and from the east during Santa Ana episodes. iL Progetto's exterior motorized shading for Vista ridge properties uses wind-sensor anemometers set to retract the shade at 18–22 mph, which is conservative enough to protect the fabric and mechanism through the sustained gusts that Vista ridgeline lots experience. The zip-guide cassette systems we specify for Vista's most exposed applications use a fabric-to-guide seal that prevents the shade from billowing and flapping at intermediate wind speeds, adding a layer of wind resistance before the auto-retract threshold is reached.`,
    feature: `Zip-guide cassette resists Vista ridge wind billowing before auto-retract activates`,
  },

  'vista:sun-screens': {
    faq_q: `My south-facing Vista home bakes all day because there's no tree cover — will solar screens make a noticeable difference?`,
    faq_a: `South-facing Vista hillside homes with unobstructed sun exposure — common on Shadowridge's south-facing slopes — receive near-continuous direct radiation from sunrise to sunset, making exterior solar screens one of the most impactful single upgrades available. iL Progetto installs 5% and 3% openness exterior sun screens for Vista's south exposures, intercepting 80–90% of incoming solar radiation before it reaches the glass. The difference in interior temperature on a fully exposed Vista south wall is typically 12–18°F at peak afternoon, enough to significantly reduce air conditioning runtime. iL Progetto fabricates the frames to match existing Vista window profiles in powder-coated aluminum.`,
    feature: `Exterior screen cuts 80–90% radiation on Vista unshaded south-facing slopes`,
  },

  'vista:awnings': {
    faq_q: `Will a retractable awning work on my Vista hillside patio where the angle of the sun changes a lot throughout the year?`,
    faq_a: `Vista's hillside patios experience significant solar angle variation between summer and winter — in summer the sun is high and relatively directly overhead, while in winter the low southern sun comes in at a sharp angle that a standard awning projection may not intercept. iL Progetto designs Vista awnings with adjustable pitch cassette hardware that allows the awning projection angle to be changed seasonally, maximizing shade coverage during both the high-summer and low-winter sun positions. The solution-dyed acrylic fabrics we specify for Vista handle the wind exposure that ridge-adjacent patios experience and retract cleanly into the protective cassette housing when not in use.`,
    feature: `Adjustable pitch cassette accounts for Vista hillside seasonal sun angle variation`,
  },

  // ─── TEMECULA ────────────────────────────────────────────────────────────────

  'temecula:roller-shades': {
    faq_q: `What roller shades handle Temecula's 40-degree temperature swings without warping or losing tension?`,
    faq_a: `Temecula's summer temperature swings — from 65°F at sunrise to over 100°F by mid-afternoon — put extraordinary stress on roller shade fabric and tube mechanisms through repeated thermal expansion and contraction. iL Progetto selects dimensionally stable fabrics with tight weave construction specifically rated for high-thermal environments, and specifies aluminum tube cores rather than PVC for Temecula installations because metal maintains its circular form through repeated heating cycles where plastic gradually deforms. The operating clutch mechanisms we use are rated for sustained temperatures above 120°F, which the inside of a south-facing window cavity in Temecula regularly reaches in July.`,
    feature: `Aluminum tube and heat-rated clutch handle Temecula's 100°F+ thermal swings`,
  },

  'temecula:zebra-shades': {
    faq_q: `Do zebra shades work well in Temecula's Spanish-style homes in communities like Wolf Creek and Redhawk?`,
    faq_a: `Temecula's Spanish and Mediterranean-style homes in Wolf Creek, Redhawk, and Paloma del Sol have interior design vocabularies built on warm terracottas, aged woods, and textured plasters — an aesthetic that zebra shades complement well when specified in the right fabric tones. iL Progetto carries zebra fabrics in warm sand, aged linen, and soft terracotta-adjacent weaves that tie into the Spanish interior palette naturally. The practical benefit in Temecula is also significant: the alternating sheer and solid bands allow residents to manage the extreme afternoon heat gain during the hot months while still connecting the interior to the vineyard and hillside views that Temecula's wine country setting provides.`,
    feature: `Wine-country palette zebra fabrics coordinate with Temecula Spanish interiors`,
  },

  'temecula:cellular-shades': {
    faq_q: `With Temecula's huge daily temperature swings, will cellular shades help keep the house comfortable without running the AC all day?`,
    faq_a: `Temecula's 40°F daily temperature swing in summer is precisely the condition dual-cell cellular shades were designed to address. The double honeycomb construction maintains its insulating air buffer even when the glass surface temperature reaches 130°F on a south-facing Temecula window, slowing the rate at which that heat enters the living space and giving the HVAC system time to manage rather than react. iL Progetto recommends the dual-cell construction as the minimum specification for Temecula primary living spaces; for rooms used during the hottest hours — west-facing master bedrooms, for example — triple-cell construction provides additional performance that residents with sensitive heat tolerance appreciate.`,
    feature: `Triple-cell construction option for Temecula's most extreme west-facing exposures`,
  },

  'temecula:roman-shades': {
    faq_q: `What roman shade fabric holds up in Temecula where the UV is extreme and the temperature cycles are severe?`,
    faq_a: `Temecula's inland UV intensity — unfiltered by any coastal marine layer — and the severe daily thermal cycling together create one of the most demanding window treatment environments in Southern California. iL Progetto specifies solution-dyed performance fabrics for Temecula roman shade installations: the dye is part of the fiber structure rather than a surface coating, so UV exposure doesn't fade the fabric and the thermal cycling doesn't crack or peel the color finish. Light-filtering lining is standard behind all roman shade face fabrics for Temecula, adding a UV-blocking layer that extends the face fabric's life and manages afternoon heat gain on south and west exposures in Redhawk and Wolf Creek homes.`,
    feature: `Solution-dyed UV-stable fabric with light-filtering lining for Temecula's inland intensity`,
  },

  'temecula:wood-aluminum-blinds': {
    faq_q: `Can wood blinds survive Temecula's combination of extreme summer heat and cool, damp winter mornings near the vineyards?`,
    faq_a: `Temecula's wine country microclimate creates genuinely challenging conditions for wood blinds in both directions: July afternoons of 105°F drive moisture out of wood slats, causing cracking, while January mornings of 35°F with fog rolling off the vineyards reintroduce moisture and cause swelling. iL Progetto recommends the hybrid wood-aluminum construction for all Temecula primary living areas — the appearance is identical to real wood from any normal viewing distance, but the aluminum composite backing resists both the extreme drying heat and the seasonal rehydration that would destroy solid wood slats within a few years. This is not a cautious upsell; it is the appropriate material choice for this specific climate.`,
    feature: `Hybrid construction survives Temecula's extreme heat-to-damp seasonal cycle`,
  },

  'temecula:shangri-la-shades': {
    faq_q: `Will Shangri-La shades hold up in Temecula where the south windows get brutal afternoon sun for most of the year?`,
    faq_a: `Temecula's afternoon sun on south and west exposures is among the most demanding in San Diego County — the inland location removes any coastal moderation, and summer UV values regularly hit 10–11 on the UV index. iL Progetto specifies Shangri-La shades with UV-resistant vane fabrics and heat-rated operating mechanisms for Temecula installations. The vane tilt capability is especially valuable in Temecula: during peak afternoon hours, vanes can be angled to intercept the steep sun angle coming from the south while still allowing the vane-framed view of the De Luz hills or wine country ridgeline. The sheer outer fabric is solution-dyed for UV stability and the tube hardware is aluminum, not PVC.`,
    feature: `UV-resistant vanes and aluminum tube rated for Temecula's UV index 10–11 days`,
  },

  'temecula:curtains-drapery': {
    faq_q: `What drapery looks right in a Temecula Mediterranean-style home and also handles the summer heat on west-facing windows?`,
    faq_a: `Temecula's Mediterranean and Spanish colonial homes in Redhawk, Wolf Creek, and Old Town's surrounding residential neighborhoods have interior design traditions that favor warm textures, tile accents, and rich earth tones — a vocabulary that heavy linen, cotton-viscose blends, and textured jacquards serve well in drapery form. For west-facing rooms in Temecula where afternoon sun is genuinely extreme, iL Progetto adds a thermal interlining behind the face fabric that provides meaningful heat resistance, significantly slowing the solar gain that makes these rooms uncomfortable from 2 to 5 p.m. The interlining also prevents the UV exposure from degrading the face fabric, extending the life of the custom drapery investment in Temecula's demanding climate.`,
    feature: `Thermal interlining slows west-window heat gain in Temecula wine country homes`,
  },

  'temecula:motorized-shading': {
    faq_q: `Is motorized shading actually a practical necessity in Temecula rather than just a luxury feature?`,
    faq_a: `In Temecula, motorized shading crosses from convenience into genuine climate management necessity. The 40°F daily temperature swing means optimal shade position changes multiple times per day — open at sunrise to admit cool morning light, deployed by 10 a.m. on south exposures, all west shades down by 1 p.m., then progressively raised again as the sun drops after 5 p.m. No household manages this manual protocol consistently, and the cost of leaving shades in the wrong position for an hour at peak is a measurable increase in cooling demand. iL Progetto programs Temecula installations with solar-angle-based automation that runs this protocol without any user interaction, and the ROI in reduced cooling costs is observable within the first summer.`,
    feature: `Solar-schedule automation runs Temecula's critical midday shade deployment protocol`,
  },

  'temecula:plantation-shutters': {
    faq_q: `Are plantation shutters appropriate for the Spanish architecture of my Temecula home in the Paloma del Sol community?`,
    faq_a: `Plantation shutters are one of the most historically and architecturally appropriate window treatments for Spanish colonial and Mediterranean homes — the shutter style traces its functional lineage to exactly these architecture types, where the ability to completely close heavy shutters against the midday heat is a practical design feature. For Paloma del Sol and similar Temecula communities, iL Progetto installs composite plantation shutters rather than solid wood — the composite material handles Temecula's extreme thermal cycling without cracking, and the wider 4.5-inch louver format suits the scale of Temecula's larger window openings in the community's typical 4-bedroom floor plans. The louver angle can be set to admit morning air and exclude afternoon heat simultaneously.`,
    feature: `Composite louvers handle Temecula thermal cycling without cracking or warping`,
  },

  'temecula:faux-wood-blinds': {
    faq_q: `My Temecula home faces west toward the vineyards and the afternoon heat is extreme — which faux wood blind survives that?`,
    faq_a: `West-facing windows overlooking Temecula's De Luz and wine country vineyards receive some of the most intense sustained afternoon sun in North County, with glass cavity temperatures regularly exceeding 120°F on clear summer afternoons. Standard PVC faux wood blinds soften and deform at those temperatures, causing slats to cup and tilt mechanisms to bind. iL Progetto specifies a high-density composite faux wood for Temecula west exposures — a construction with a heat-distortion threshold above 150°F that holds its profile through multiple summer cycles. The reflective slat finish also contributes to heat management by bouncing radiant energy back toward the glass rather than absorbing it into the slat.`,
    feature: `150°F heat-distortion threshold handles Temecula vineyard west-window extremes`,
  },

  'temecula:aluminum-blinds': {
    faq_q: `Are aluminum blinds a good option for a wine country Temecula casita or guest house near the vines?`,
    faq_a: `Casitas and guest houses on Temecula wine country properties face extreme temperature conditions — ambient heat from surrounding vineyard surfaces amplifies the baseline summer temperature, and these secondary structures often lack the insulation of the main residence. Aluminum blinds are the right specification for these utility-plus applications: the metal construction doesn't deform in high heat the way PVC-based alternatives can, the reflective surface bounces radiant heat away from the glass, and the cost per window is low enough to outfit a secondary structure without significant budget impact. iL Progetto supplies heavier-gauge aluminum blinds than the hardware-store standard for Temecula wine country installations, with a more robust tilt mechanism that handles the repeated daily cycling Temecula's temperature swings demand.`,
    feature: `Heavy-gauge metal resists deformation in Temecula vineyard-adjacent heat extremes`,
  },

  'temecula:vertical-blinds': {
    faq_q: `What vertical blind vane material holds up best in Temecula's extreme heat on large south-facing sliding doors?`,
    faq_a: `Fabric vertical vanes on south-facing Temecula sliders receive the same intense thermal cycling as any other treatment in this climate, but with one additional stress: the daily operation cycle — open when the door is in use, traverse to closed position when not — adds mechanical wear to the heat exposure. iL Progetto specifies coated polyester-fabric vanes for Temecula's high-demand south and west sliding door installations — a heavier vane weight that maintains its flat hang even after repeated heat cycles and resists the curling at the vane edges that lighter fabrics develop in extreme heat. The headrail hardware includes UV-stabilized nylon carriers rather than standard polypropylene, which becomes brittle in sustained high-temperature environments.`,
    feature: `UV-stabilized nylon carriers prevent brittleness on Temecula's hot south sliders`,
  },

  'temecula:panel-track-blinds': {
    faq_q: `Do panel track blinds work on the large window walls in Temecula's newer wine country homes?`,
    faq_a: `Temecula's newer construction in Wolf Creek, Redhawk, and Paloma del Sol commonly features large window walls designed to frame the wine country landscape — 12-foot and wider openings that conventional blinds can't address effectively. Panel track systems are the purpose-built solution for these spans, and iL Progetto specifies the track hardware for Temecula installations in heavy-gauge aluminum that doesn't deflect in high heat the way lighter aluminum sections do. Fabric panels in solar-weave construction manage the intense Temecula afternoon heat while maintaining the view of the vineyard ridgeline, and the motorized track option integrates with smart-home automation for the solar-schedule management that Temecula's temperature swings make necessary.`,
    feature: `Heavy-gauge track resists thermal deflection on Temecula's wide wine country windows`,
  },

  'temecula:woven-wood-shades': {
    faq_q: `Do woven wood shades fit the organic wine country aesthetic of a Temecula home near the De Luz vineyards?`,
    faq_a: `Woven wood shades are one of the thematically strongest treatments for Temecula wine country homes — the bamboo, reed, and sea grass constructions share the same organic material vocabulary as wine country architecture and interior design. In the hillside homes near De Luz and the estate properties east of Old Town, woven shades read as an extension of the landscape rather than an interior product. iL Progetto adds blackout liners to Temecula bedroom woven shades, both for privacy and to provide an additional thermal layer on windows facing the vineyard west — the liner meaningfully slows the radiant heat transfer that an unlined woven shade, with its open weave, does little to resist on its own.`,
    feature: `Blackout liner adds thermal resistance to Temecula vineyard-west woven shades`,
  },

  'temecula:sheer-shades': {
    faq_q: `Can sheer shades provide enough protection from Temecula's intense afternoon sun while still showing the wine country view?`,
    faq_a: `Sheer shades in Temecula wine country homes perform best when specified with the solar heat gain coefficient in mind — not all sheer fabrics are equal in their UV and heat rejection capability. iL Progetto selects sheer shade fabrics for Temecula with higher-UV-inhibitor treatment and denser vane weave than standard, providing meaningful heat management while still maintaining the view-through quality that makes sheer shades appealing for Temecula's vineyard and hillside outlook windows. The vane tilt allows angular adjustment as the afternoon sun drops from high overhead to a lower southwest angle, continuing to intercept direct radiation as the geometry changes through the peak heat hours.`,
    feature: `High-UV-inhibitor vane fabric manages Temecula heat while preserving vineyard views`,
  },

  'temecula:blackout-curtains': {
    faq_q: `Temecula gets really bright summer mornings — what blackout solution actually works in a bedroom facing east?`,
    faq_a: `Temecula's clear inland skies and low humidity mean east-facing bedrooms receive brilliant, unfiltered morning light from the first moment the sun clears the Palomar Mountain ridgeline. iL Progetto's blackout curtain solution for Temecula combines triple-pass blackout lining with a ceiling-mount ripple-fold track that closes the top gap, side returns that seal against the wall, and weighted hems that press flat against the sill against the low-angle early morning light. This is a more thorough installation than the standard rod-and-ring approach, but it is the only configuration that achieves genuine darkness in Temecula's high-light-level environment. Machine-washable face fabric options are available for the regular laundering that Temecula's dust levels make necessary.`,
    feature: `Ceiling track + side returns + weighted hem for Temecula's clear inland mornings`,
  },

  'temecula:sheer-drapes': {
    faq_q: `Will sheer drapes fade quickly in Temecula's strong sun, and is there a variety that holds its color?`,
    faq_a: `Standard sheer drapery fabrics — particularly undyed polyesters and surface-printed linens — fade visibly within one or two Temecula summers due to the inland UV intensity that coastal homes never experience. iL Progetto specifies solution-dyed performance sheers for Temecula installations: the color is part of the fiber extrusion rather than a surface treatment, making it chemically resistant to UV degradation. These fabrics maintain their color and structural integrity through years of Temecula's direct sun exposure. For west-facing wine country rooms, iL Progetto pairs sheer drapes with a solar roller shade on the same track so the sheer provides softness and texture while the shade handles the peak afternoon heat management.`,
    feature: `Solution-dyed performance sheers resist Temecula's UV without fading`,
  },

  'temecula:motorized-exterior': {
    faq_q: `Is motorized exterior shading a practical investment for a Temecula home where the temperature swings require constant shade adjustment?`,
    faq_a: `In Temecula, motorized exterior shading is the single highest-impact window treatment investment available — not because of convenience, but because exterior shades intercept heat before it enters the building envelope rather than managing it from inside. On a Temecula west-facing elevation on a 105°F July afternoon, an interior shade reduces the sensation of heat while the surface temperature of the window glass continues to radiate into the room; an exterior shade prevents that temperature from building in the first place. iL Progetto installs motorized exterior zip-guide shading systems for Temecula homes with wind-sensor auto-retract and Somfy motor integration, programming daily solar schedules that deploy the shades automatically during peak heat hours and retract them when temperatures moderate.`,
    feature: `Exterior intercept eliminates Temecula west-wall heat buildup before it enters`,
  },

  'temecula:sun-screens': {
    faq_q: `What openness factor solar screen works best for Temecula south windows where I want to keep the vineyard view?`,
    faq_a: `For Temecula south-facing windows with a vineyard or hillside view, iL Progetto typically recommends a 10% openness factor sun screen as the optimal balance between heat rejection and view preservation. The 10% mesh blocks approximately 70–75% of solar heat gain while maintaining enough transparency that the landscape beyond reads clearly from inside the home. If heat rejection is the absolute priority over view quality — as it often is in Temecula's peak July conditions — the 5% factor jumps to 80–85% heat rejection and is still transparent enough to distinguish the outline of De Luz hills and vineyard rows. All sun screen frames are custom-fabricated in powder-coated aluminum matched to Temecula's most common window frame finishes.`,
    feature: `10% openness balances Temecula vineyard view with 70–75% heat rejection`,
  },

  'temecula:awnings': {
    faq_q: `Can a retractable awning make a real difference on a Temecula patio where summer afternoons regularly hit 105°F?`,
    faq_a: `A correctly sized and positioned retractable awning can reduce the surface temperature of a Temecula patio by 20–25°F during peak afternoon hours — the difference between an unusable outdoor space and a genuinely comfortable shaded area. iL Progetto designs Temecula awning projections specifically to intercept the sun at the critical 1–5 p.m. angle when temperatures peak, using projection depths of 12–16 feet to cast shade across the patio and the adjacent glass door. Solution-dyed acrylic Sunbrella fabrics are standard for Temecula's high-UV environment, and wind-sensor motorization is particularly important here because afternoon thermal winds in the De Luz and Redhawk areas are unpredictable and can exceed safe operating wind speeds without warning.`,
    feature: `12–16 ft projection engineered for Temecula's 1–5 p.m. peak heat sun angle`,
  },

}
