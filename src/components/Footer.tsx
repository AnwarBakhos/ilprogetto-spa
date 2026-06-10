import { Link } from '@tanstack/react-router'
import { MEGA_MENU } from '@/data/catalog'
import { CITY_SLUGS, PRODUCT_SLUGS, POSITION_SLUGS, cityName } from '@/data/seo'

const LOGO_WHITE =
  '/images/logo-300.png'

// ─── Social Icons ─────────────────────────────────────────────────────────────
const Icons = {
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Facebook: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  Yelp: () => (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      {/* Yelp burst — 5 rounded petal shapes rotated around center */}
      <g transform="translate(16,16)">
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(0)" />
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(72)" />
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(144)" />
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(216)" />
        <path d="M-2.5,-13 Q0,-16 2.5,-13 L3.5,-4 Q0,-2 -3.5,-4 Z" transform="rotate(288)" />
      </g>
    </svg>
  ),
  Star: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="bg-[var(--ink)]"
      style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 pt-12 md:pt-20 pb-10">

        {/* ── Top section: Brand + Nav + Products (by category) + Contact ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_1.2fr] gap-16 mb-16">

          {/* ── Brand column ── */}
          <div>
            <img
              src={LOGO_WHITE}
              alt="iL Progetto LLC"
              className="mb-8 opacity-95"
              style={{
                filter: 'brightness(0) invert(1)',
                height: '110px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <p
              className="text-[13px] leading-[1.9] mb-5 max-w-[240px]"
              style={{ color: 'rgba(251,251,249,0.55)' }}
            >
              Where luxury meets affordability. Custom window treatments for homes and offices
              across Southern California.
            </p>
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-8"
              style={{ color: 'var(--sand-light)' }}
            >
              Contractors License # 1127055
            </p>

            {/* Navigate links */}
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-4"
              style={{ color: 'rgba(251,251,249,0.35)' }}
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-2.5 list-none mb-6">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/catalog', label: 'All Selections' },
                { to: '/booking', label: 'Book Consultation' },
                { to: '/faq', label: 'FAQ' },
                { to: '/blog/' as any, label: 'Journal' },
                { to: '/smart-home/' as any, label: 'Smart Home' },
                { to: '/inspiration' as any, label: 'Style Inspiration' },
                { to: '/warranty' as any, label: 'Warranty' },
                { to: '/commercial' as any, label: 'Commercial & Trade' },
                { to: '/child-safety' as any, label: 'Child Safety' },
                { to: '/contact', label: 'Contact' },
                { to: '/reviews', label: '★ Leave a Review' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to as any}
                    className="text-[13px] transition-colors hover:text-[var(--sand-light)]"
                    style={{ color: 'rgba(251,251,249,0.6)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Products by category — 5-column grid ── */}
          <div>
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-6"
              style={{ color: 'rgba(251,251,249,0.35)' }}
            >
              Products
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-8">
              {MEGA_MENU.map((col) => (
                <div key={col.category}>
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-3 font-[500]"
                    style={{ color: 'var(--sand)' }}
                  >
                    {col.label}
                  </p>
                  <ul className="flex flex-col gap-2 list-none">
                    {col.products.map((item) => (
                      <li key={item.id}>
                        <Link
                          to="/catalog"
                          search={{ product: item.id }}
                          resetScroll={false}
                          className="text-[12px] leading-[1.5] transition-colors hover:text-[var(--sand-light)]"
                          style={{ color: 'rgba(251,251,249,0.55)' }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Contact & Legal ── */}
          <div className="lg:text-right lg:ml-auto text-left">
            <p
              className="text-[10px] tracking-[0.22em] uppercase mb-6"
              style={{ color: 'rgba(251,251,249,0.35)' }}
            >
              Contact & Legal
            </p>
            <div
              className="flex flex-col gap-2.5 text-[13px] mb-8"
              style={{ color: 'rgba(251,251,249,0.65)' }}
            >
              <a href="tel:+18583381678" className="hover:text-[var(--sand-light)] transition-colors">
                (858) 338-1678
              </a>
              <a href="mailto:info@progettoshades.com" className="hover:text-[var(--sand-light)] transition-colors">
                info@progettoshades.com
              </a>
              <p style={{ color: 'rgba(251,251,249,0.4)' }}>San Diego, CA 92127</p>
            </div>
            <div
              className="flex flex-col gap-2"
              style={{ color: 'rgba(251,251,249,0.38)' }}
            >
              <Link to="/legal" search={{ tab: 'privacy' as const }}
                className="text-[12px] hover:text-[var(--sand-light)] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal" search={{ tab: 'terms' as const }}
                className="text-[12px] hover:text-[var(--sand-light)] transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/legal" search={{ tab: 'accessibility' as const }}
                className="text-[12px] hover:text-[var(--sand-light)] transition-colors">
                Accessibility
              </Link>
              <Link to={'/warranty' as any} className="text-[12px] hover:text-[var(--sand-light)] transition-colors">
                Warranty
              </Link>
              <Link to={'/child-safety' as any} className="text-[12px] hover:text-[var(--sand-light)] transition-colors">
                Child Safety
              </Link>
            </div>
          </div>
        </div>

        {/* ── SEO city/product links ── */}
        <div className="border-t pt-8 md:pt-12 mb-8 md:mb-12" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <p className="text-[10px] tracking-[0.22em] uppercase"
               style={{ color: 'rgba(251,251,249,0.25)' }}>
              Local Service Areas
            </p>
            <a href="/locations"
               className="text-[10px] tracking-[0.14em] uppercase hover:text-[var(--sand-light)] transition-colors"
               style={{ color: 'rgba(197,165,114,0.5)' }}>
              ← All Service Areas
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {CITY_SLUGS.map(city => (
              <a key={city} href={`/locations/${city}`}
                 className="text-[11px] tracking-[0.12em] uppercase hover:text-[var(--sand-light)] transition-colors"
                 style={{ color: 'rgba(251,251,249,0.45)' }}>
                {cityName(city)}
              </a>
            ))}
          </div>
        </div>

        {/* ── Careers links ── */}
        <div className="border-t pt-8 mb-10" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] tracking-[0.22em] uppercase"
               style={{ color: 'rgba(251,251,249,0.25)' }}>Careers</p>
            <a href="/careers/" className="text-[10px] tracking-[0.14em] uppercase hover:text-[var(--sand-light)] transition-colors"
               style={{ color: 'rgba(197,165,114,0.5)' }}>
              View All Positions →
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5">
            {CITY_SLUGS.slice(0, 8).flatMap(city =>
              Object.keys(POSITION_SLUGS).map(position => (
                <a key={`${city}-${position}`}
                   href={`/careers/${city}/${position}`}
                   className="text-[10px] transition-colors hover:text-[var(--sand-light)]"
                   style={{ color: 'rgba(251,251,249,0.25)' }}>
                  {cityName(city)} {position === 'technician' ? 'Installer' : 'Sales'}
                </a>
              ))
            )}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p className="text-[11px]" style={{ color: 'rgba(251,251,249,0.28)' }}>
            &copy; {year} iL Progetto LLC. All rights reserved &middot; License # 1127055
          </p>

          <div className="flex flex-wrap gap-2.5">
            {(
              [
                {
                  href: 'https://web.facebook.com/profile.php?id=61561253288372',
                  label: 'Facebook',
                  Icon: Icons.Facebook,
                  hoverColor: '#1877F2',
                },
                {
                  href: 'https://www.instagram.com/ilprogetto.design',
                  label: 'Instagram',
                  Icon: Icons.Instagram,
                  hoverColor: '#E1306C',
                },
                {
                  href: 'https://yelp.to/fuCV4NqXEu',
                  label: 'Yelp',
                  Icon: Icons.Yelp,
                  hoverColor: '#C41200',
                },
                {
                  href: '/reviews',
                  label: 'Leave a Review',
                  Icon: Icons.Star,
                  hoverColor: 'var(--sand)',
                },
              ] as const
            ).map(({ href, label, Icon, hoverColor }) => {
              const isInternal = href.startsWith('/')
              const sharedProps = {
                'aria-label': label,
                className:
                  'group inline-flex items-center gap-2 px-4 py-2 border rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-200 hover:scale-[1.03]',
                style: {
                  borderColor: 'rgba(255,255,255,0.18)',
                  color: 'rgba(251,251,249,0.6)',
                },
                onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.borderColor = hoverColor
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.background = hoverColor + '22'
                },
                onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.color = 'rgba(251,251,249,0.6)'
                  e.currentTarget.style.background = 'transparent'
                },
              }
              return isInternal ? (
                <Link key={label} to="/reviews" {...sharedProps}>
                  <Icon />
                  {label}
                </Link>
              ) : (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
                  <Icon />
                  {label}
                </a>
              )
            })
          }
               </div>
        </div>
      </div>
    </footer>
  )
}
