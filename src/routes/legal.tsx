import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'

const legalSearch = z.object({
  tab: z.enum(['privacy', 'terms', 'accessibility']).optional().default('privacy'),
})

export const Route = createFileRoute('/legal')({
  validateSearch: legalSearch,
  head: (ctx) => {
    const tab = (ctx.match?.search as any)?.tab ?? 'privacy'
    const titles = {
      privacy: 'Privacy Policy | iL Progetto LLC',
      terms: 'Terms & Conditions | iL Progetto LLC',
      accessibility: 'Accessibility Statement | iL Progetto LLC',
    }
    return {
      meta: [
        { title: (titles as any)[tab] ?? titles.privacy },
        { name: 'description', content: 'Legal information for iL Progetto LLC — a custom window treatment company based in San Diego, CA.' },
        { name: 'robots', content: 'noindex, follow' },
      ],
      links: [{ rel: 'canonical', href: 'https://ilprogetto-spa.vercel.app/legal' }],
    }
  },
  component: LegalPage,
})

function LegalPage() {
  const { tab } = Route.useSearch()
  const tabs: { id: 'privacy' | 'terms' | 'accessibility'; label: string }[] = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'accessibility', label: 'Accessibility' },
  ]

  return (
    <div>
      <header className="px-10 md:px-20 py-16 border-b" style={{ background: 'var(--warm)', borderColor: 'var(--hairline)' }}>
        <h1 className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Legal Information
        </h1>
        <nav aria-label="Legal sections" className="flex flex-wrap gap-2">
          {tabs.map(({ id, label }) => (
            <Link key={id} to="/legal" search={{ tab: id }}
              className="px-5 py-2.5 text-[11px] tracking-[0.14em] uppercase border transition-colors"
              style={{ background: tab === id ? 'var(--ink)' : 'transparent', borderColor: tab === id ? 'var(--ink)' : 'var(--hairline)', color: tab === id ? 'var(--cream)' : 'var(--mid)' }}>
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="px-10 md:px-20 py-16 max-w-[740px]">
        {tab === 'privacy' && (
          <article aria-label="Privacy Policy">
            <p className="text-[13px] mb-10" style={{ color: 'var(--mid)' }}><em>Last updated: January 2025</em></p>
            <Section title="Information We Collect"><p>When you submit a consultation request or booking through our website, we collect your name, email address, phone number, and property address. We collect this information solely to schedule and confirm your appointment.</p><p>We do not collect payment information through this website. All financing applications are processed through Synchrony Financial on their own platform.</p></Section>
            <Section title="How We Use Your Information"><p>We use the information you provide to contact you regarding your consultation, send appointment confirmations, and follow up on your window treatment project. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p></Section>
            <Section title="Email Communications"><p>Transactional emails are sent via Resend, a third-party email delivery service. Your email address is shared with Resend solely for the purpose of delivering these messages.</p></Section>
            <Section title="Cookies & Analytics"><p>This website does not use tracking cookies or advertising pixels. We do not use Google Analytics, Facebook Pixel, or similar third-party tracking tools.</p></Section>
            <Section title="Data Retention"><p>Consultation request data is retained for up to twelve months for project coordination and warranty purposes. You may request deletion of your information at any time by emailing info@ilprogettollc.com.</p></Section>
            <Section title="Contact"><p>For any privacy-related questions or requests, contact us at info@ilprogettollc.com or call (858) 338-1678.</p></Section>
          </article>
        )}

        {tab === 'terms' && (
          <article aria-label="Terms and Conditions">
            <p className="text-[13px] mb-10" style={{ color: 'var(--mid)' }}><em>Last updated: January 2025</em></p>
            <Section title="Services"><p>iL Progetto LLC provides custom window treatment consultation, measurement, and installation services in San Diego County, Riverside County, Orange County, and San Bernardino County. All consultations are provided at no cost and with no obligation to purchase.</p></Section>
            <Section title="Quotes & Pricing"><p>Written quotes provided during or following a consultation are valid for thirty days from the date of issue. Prices are subject to change after this period due to material costs and availability.</p></Section>
            
            <Section title="Down Payment & California CSLB Rules">
              <p>In accordance with California Contractors State License Board (CSLB) regulations, iL Progetto LLC does not collect a down payment exceeding 10% of the total contract price or $1,000, whichever is less. Any deposit required to begin a project will be clearly stated in your written contract prior to the start of work. Our California Contractors License number is #1127055.</p>
            </Section>
            <Section title="Installation"><p>Installation is performed by iL Progetto LLC employees holding California Contractors License #1127055. We carry full general liability insurance and workers' compensation coverage. We do not subcontract installation work.</p></Section>
            <Section title="Warranty"><p>All products carry the manufacturer's warranty applicable to the specific item. Our workmanship is warranted for one year from the installation date.</p></Section>
            <Section title="Cancellations & Rescheduling"><p>Consultations may be cancelled or rescheduled at no charge with at least 24 hours' notice. Please call (858) 338-1678 or email info@ilprogettollc.com to reschedule.</p></Section>
            <Section title="Limitation of Liability"><p>iL Progetto LLC's liability for any claim arising from our services is limited to the amount paid for the specific product or service giving rise to the claim.</p></Section>
          </article>
        )}

        {tab === 'accessibility' && (
          <article aria-label="Accessibility Statement">
            <p className="text-[13px] mb-10" style={{ color: 'var(--mid)' }}><em>Last updated: May 2026</em></p>
            <Section title="Our Commitment"><p>iL Progetto LLC is committed to making this website usable by everyone, including people with visual, auditory, motor, and cognitive disabilities. We actively work to meet WCAG 2.1 Level AA.</p></Section>
            <Section title="Conformance Status"><p>This website is designed to partially conform to WCAG 2.1 Level AA. We are actively working toward full conformance and conduct ongoing reviews.</p></Section>
            <Section title="Technical Measures Implemented">
              <p>The following accessibility features have been implemented:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', lineHeight: '2' }}>
                <li>Skip to main content link at the top of every page</li>
                <li>Semantic HTML5 landmarks: nav, main, header, footer, article, section</li>
                <li>ARIA labels, roles, and live regions on all interactive components</li>
                <li>All form fields have visible or screen-reader-accessible labels</li>
                <li>All images carry descriptive alt text; decorative images use aria-hidden</li>
                <li>Focus indicators visible on all interactive elements (WCAG 2.4.7)</li>
                <li>Color contrast ratios meet 4.5:1 for normal text and 3:1 for large text</li>
                <li>Keyboard-accessible navigation throughout</li>
                <li>Modal dialogs trap focus and return focus to the trigger on close</li>
              </ul>
            </Section>
            <Section title="Known Limitations">
              <ul style={{ marginTop: '12px', paddingLeft: '20px', lineHeight: '2' }}>
                <li>Some product images are served from Google Drive and may introduce latency for assistive technologies.</li>
                <li>Video content on the homepage product grid does not currently include captions. All product information is available in text form.</li>
                <li>The booking calendar may not be fully optimized for all screen readers. An accessible alternative is available by calling (858) 338-1678.</li>
              </ul>
            </Section>
            <Section title="Feedback">
              <ul style={{ marginTop: '12px', paddingLeft: '20px', lineHeight: '2' }}>
                <li>Email: <a href="mailto:info@ilprogettollc.com" style={{ color: 'var(--sand)' }}>info@ilprogettollc.com</a></li>
                <li>Phone: <a href="tel:+18583381678" style={{ color: 'var(--sand)' }}>(858) 338-1678</a></li>
              </ul>
            </Section>
          </article>
        )}

        <div className="mt-16 pt-10 border-t" style={{ borderColor: 'var(--hairline)' }}>
          <Link to="/" className="inline-flex items-center gap-2 text-[12px] tracking-[0.14em] uppercase" style={{ color: 'var(--mid)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-[400] mb-4" style={{ fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--ink)' }}>{title}</h2>
      <div className="space-y-4 text-[15px] leading-[1.9]" style={{ color: 'var(--mid)' }}>{children}</div>
    </section>
  )
}
