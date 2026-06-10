import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { z } from 'zod'
import { setupScrollReveal } from '@/lib/utils'
import { getProduct } from '@/data/catalog'
import { SITE_URL } from '@/lib/config'


// ─── Search params ────────────────────────────────────────────────────────────
// ?service=roller pre-fills the form when coming from a product card CTA
const contactSearchSchema = z.object({
  service: z.string().optional(),
  job: z.string().optional(),
})

export const Route = createFileRoute('/contact')({
  validateSearch: contactSearchSchema,
  head: () => ({
    meta: [
      { title: 'Contact iL Progetto LLC | Free Window Treatment Consultation San Diego' },
      {
        name: 'description',
        content:
          "Contact iL Progetto LLC for a free in-home window treatment consultation in San Diego. Call or text (858) 338-1678, email info@progettoshades.com, or fill out the form. We serve San Diego, Poway, Carlsbad, La Jolla, Del Mar, Chula Vista and all of Southern California.",
      },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { property: 'og:url', content: `${SITE_URL}/contact` },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Contact iL Progetto LLC | Free Window Treatment Consultation San Diego' },
      { property: 'og:description', content: 'Contact iL Progetto LLC for a free in-home window treatment consultation in San Diego.' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:title', content: 'Contact iL Progetto LLC | Free Consultation San Diego' },
      { name: 'twitter:description', content: 'Book a free in-home window treatment consultation. We come to you anywhere in San Diego.' },
      { name: 'robots', content: 'index, follow' },
    ],
    links: [{ rel: 'canonical', href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
})

// ─── Contact info items ────────────────────────────────────────────────────────
const CONTACT_INFO = [
  {
    label: 'Phone',
    value: '(858) 338-1678',
    sub: 'Call or text anytime',
    href: 'tel:+18583381678',
  },
  {
    label: 'Email',
    value: 'info@progettoshades.com',
    sub: 'We respond within 24 hours',
    href: 'mailto:info@progettoshades.com',
  },
  {
    label: 'Location',
    value: 'San Diego, CA 92127',
    sub: 'In-home consultations — at your convenience',
    href: undefined,
  },
  {
    label: 'License',
    value: 'Contractors License # 1127055',
    sub: 'Licensed & insured in California',
    href: undefined,
  },
]

// ─── ContactPage ──────────────────────────────────────────────────────────────
function ContactPage() {
  const { service, job } = Route.useSearch()
  const ref = useRef<HTMLDivElement>(null)

  // Form state
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const preselectedProduct = service ? getProduct(service) : undefined

  useEffect(() => {
    if (!ref.current) return
    return setupScrollReveal(ref.current)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('fname') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lname') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      address: (form.elements.namedItem('address') as HTMLInputElement).value,
      message: (form.querySelector('textarea') as HTMLTextAreaElement).value,
      service: service || '',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div ref={ref}>
      {/* ── Two-column layout ──────────────────────────────────────────────── */}
      <section
        className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]"
        aria-label="Contact iL Progetto"
      >
        {/* ── Left: info ───────────────────────────────────────────────────── */}
        <div
          className="flex flex-col justify-center px-4 md:px-10 lg:px-20 py-20"
          style={{ background: 'var(--ink)' }}
        >
          <p
            className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
            style={{ color: 'var(--sand-light)' }}
          >
            <span className="inline-block w-8 h-px bg-[var(--sand-light)]" aria-hidden="true" />
            We're Here to Help
          </p>
          <h1
            className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6 fade-up delay-1"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(40px, 5vw, 66px)',
              color: 'var(--cream)',
            }}
          >
            Let's Start Your{' '}
            <em className="italic" style={{ color: 'var(--sand-light)' }}>
              Project
            </em>
          </h1>
          <p
            className="fade-up delay-2 text-[15px] leading-[1.85] mb-12 max-w-[360px]"
            style={{ color: 'rgba(251,251,249,0.65)' }}
          >
            Book a free, no-obligation in-home consultation. Our designer visits your home with hundreds of samples — measurements and pricing at no cost.
          </p>

          {/* Contact details */}
          <div className="fade-up delay-3 space-y-6">
            {CONTACT_INFO.map(({ label, value, sub, href }) => (
              <div key={label}>
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-0.5"
                  style={{ color: 'rgba(251,251,249,0.4)' }}
                >
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-[15px] block hover:text-[var(--sand-light)] transition-colors"
                    style={{ color: 'rgba(251,251,249,0.85)' }}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-[15px]" style={{ color: 'rgba(251,251,249,0.85)' }}>
                    {value}
                  </p>
                )}
                <p className="text-[12px] mt-0.5" style={{ color: 'rgba(251,251,249,0.35)' }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: form ──────────────────────────────────────────────────── */}
        <div
          className="flex flex-col justify-center px-4 md:px-10 lg:px-20 py-20"
          style={{ background: 'var(--warm)' }}
        >
          <h2
            className="font-[400] mb-10 fade-up"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 2.5vw, 34px)' }}
          >
            Book a Free{' '}
            <em className="italic" style={{ color: 'var(--sand)' }}>
              Consultation
            </em>
          </h2>

          {status === 'sent' ? (
            <div
              className="p-8 border border-[var(--hairline)] text-center fade-up"
              style={{ background: 'var(--cream)' }}
              role="alert"
            >
              <p
                className="text-[22px] font-[300] mb-2"
                style={{ fontFamily: 'var(--serif)' }}
              >
                Request received.
              </p>
              <p className="text-[14px]" style={{ color: 'var(--mid)' }}>
                We'll be in touch within 24 hours to schedule your consultation.
              </p>
            </div>
          ) : status === 'error' ? (
            <div
              className="p-8 border border-[var(--hairline)] text-center fade-up"
              style={{ background: 'var(--cream)' }}
              role="alert"
            >
              <p
                className="text-[22px] font-[300] mb-2"
                style={{ fontFamily: 'var(--serif)', color: 'var(--sand)' }}
              >
                Something went wrong.
              </p>
              <p className="text-[14px]" style={{ color: 'var(--mid)' }}>
                Please call us at{' '}
                <a href="tel:+18583381678" style={{ color: 'var(--sand)' }}>(858) 338-1678</a>{' '}
                or email{' '}
                <a href="mailto:info@progettoshades.com" style={{ color: 'var(--sand)' }}>info@progettoshades.com</a>{' '}
                directly.
              </p>
            </div>
          ) : (
            <form
              name="consultation"
              onSubmit={handleSubmit}
              className="space-y-0"
              aria-label="Book consultation form"
            >
              {/* Pre-fill note if coming from a product */}
              {preselectedProduct && (
                <div
                  className="mb-6 px-4 py-3 border border-[var(--sand-light)] text-[13px]"
                  style={{ background: 'var(--sand-pale)', color: 'var(--mid)' }}
                >
                  Enquiring about: <strong style={{ color: 'var(--ink)' }}>{preselectedProduct.name}</strong>
                </div>
              )}

              {/* Job pre-fill */}
              {job && (
                <div
                  className="mb-6 px-4 py-3 border border-[var(--hairline)] text-[13px]"
                  style={{ background: 'var(--cream)', color: 'var(--mid)' }}
                >
                  Applying for: <strong style={{ color: 'var(--ink)' }}>
                    {job === 'installer' ? 'Window Treatment Installer' : 'Design Consultant & Sales Representative'}
                  </strong>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <FormField label="First Name" id="fname" type="text" required placeholder="Jane" />
                <FormField label="Last Name" id="lname" type="text" required placeholder="Smith" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <FormField label="Email" id="email" type="email" required placeholder="jane@email.com" />
                <FormField label="Phone" id="phone" type="tel" placeholder="(619) 555-0100" />
              </div>
              <div className="mb-4">
                <FormField
                  label="Property Address"
                  id="address"
                  type="text"
                  placeholder="1234 Coastal Drive, San Diego CA"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.18em] uppercase mb-2.5"
                  style={{ color: 'var(--mid)' }}
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={
                    preselectedProduct
                      ? `I'm interested in ${preselectedProduct.name} for my...`
                      : "I'm looking for motorized shades in my living room..."
                  }
                  className="w-full border border-[var(--hairline)] bg-[var(--cream)] px-4 py-3.5 text-[14px] font-[300] resize-vertical outline-none focus:border-[var(--sand)] transition-colors"
                  style={{ color: 'var(--ink)' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 text-[11px] tracking-[0.2em] uppercase transition-colors disabled:opacity-70"
                style={{
                  background: 'var(--ink)',
                  color: 'var(--cream)',
                }}
              >
                {status === 'sending' ? 'Sending…' : 'Book My Free Consultation'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Service area ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="area-heading"
        className="px-4 md:px-10 lg:px-20 py-24"
        style={{ background: 'var(--warm)' }}
      >
        <p
          className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5 fade-up"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Service Area
        </p>
        <h2
          id="area-heading"
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6 fade-up delay-1"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 3.5vw, 48px)' }}
        >
          We Serve All of{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Southern California
          </em>
        </h2>
        <p
          className="fade-up delay-2 text-[15px] leading-[1.85] max-w-[500px] mb-10"
          style={{ color: 'var(--mid)' }}
        >
          We serve all of San Diego County, Riverside, Orange
          County, or San Bernardino.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 fade-up delay-3">
          {(
            ['San Diego County', 'Riverside County', 'Orange County', 'San Bernardino County'] as const
          ).map((county) => (
            <div
              key={county}
              className="flex items-center gap-3.5 px-6 py-5 border border-[var(--hairline)] text-[14px]"
              style={{ background: 'var(--cream)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--sand)' }}
                aria-hidden="true"
              />
              {county}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ─── Reusable form field ──────────────────────────────────────────────────────
function FormField({
  label,
  id,
  type,
  required,
  placeholder,
}: {
  label: string
  id: string
  type: string
  required?: boolean
  placeholder?: string
}) {

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    'name': 'iL Progetto LLC',
    'telephone': '+18583381678',
    'email': 'info@progettoshades.com',
    'url': `${SITE_URL}/contact`,
    'image': `${SITE_URL}/images/og-image.jpg`,
    'priceRange': '$$',
    'openingHours': 'Mo-Sa 08:00-18:00',
    'address': { '@type': 'PostalAddress', 'addressLocality': 'San Diego', 'addressRegion': 'CA', 'postalCode': '92127', 'addressCountry': 'US' },
    'geo': { '@type': 'GeoCoordinates', 'latitude': '32.9595', 'longitude': '-117.0865' },
    'contactPoint': { '@type': 'ContactPoint', 'telephone': '+1-858-338-1678', 'contactType': 'customer service', 'areaServed': 'San Diego County', 'availableLanguage': 'English' },
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div>
      <label
        htmlFor={id}
        className="block text-[10px] tracking-[0.18em] uppercase mb-2.5"
        style={{ color: 'var(--mid)' }}
      >
        {label}
        {required && <span className="ml-1" style={{ color: 'var(--sand)' }} aria-label="required">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className="w-full border border-[var(--hairline)] bg-[var(--cream)] px-4 py-3.5 text-[14px] font-[300] outline-none focus:border-[var(--sand)] transition-colors"
        style={{ color: 'var(--ink)' }}
      />
    </div>
    </>
  )
}