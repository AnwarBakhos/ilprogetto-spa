import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { FAQ_ITEMS, FAQ_CATEGORIES } from '@/data/faq'
import type { FaqItem } from '@/data/faq'
import { SITE_URL } from '@/lib/config'


// SEO: Full question and answer text is in raw HTML. FAQPage JSON-LD schema is
// injected via a script tag — Googlebot reads both the visible text and the schema.

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: 'FAQ — Window Treatment Questions Answered | iL Progetto LLC San Diego' },
      {
        name: 'description',
        content:
          'Answers to every question about custom window treatments in San Diego — how consultations work, the difference between roller and zebra shades, motorized blind options, installation timelines, pricing, and financing. From iL Progetto LLC.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'FAQ — Window Treatment Questions Answered | iL Progetto LLC San Diego' },
      { property: 'og:description', content: 'Answers to every question about custom window treatments in San Diego — how consultations work, the difference between roller and zebra shades, motorized blind options, installation timelines, pricing, and financing. From iL Progetto LLC.' },
      { property: 'og:url', content: `${SITE_URL}/faq` },
      { property: 'og:image', content: `${SITE_URL}/images/og-image.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'FAQ — Window Treatment Questions Answered | iL Progetto LLC San Diego' },
      { name: 'twitter:description', content: 'Answers to every question about custom window treatments in San Diego — how consultations work, the difference between roller and zebra shades, motorized blind options, installation timelines, pricing, and financing. From iL Progetto LLC.' },
    ],
    links: [
      { rel: 'canonical', href: `${SITE_URL}/faq` },
    ],
  }),
  component: FaqPage,
})

// ─── FAQPage JSON-LD (server-side renderable as string) ───────────────────────
const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

// ─── Accordion item ───────────────────────────────────────────────────────────
function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="border-t"
      style={{ borderColor: 'var(--hairline)' }}
      itemScope
      itemType="https://schema.org/Question"
    >
      <button
        className="w-full flex items-center justify-between py-6 text-left gap-6 group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`answer-${item.id}`}
      >
        {/* Question text — raw HTML for crawler */}
        <h3
          itemProp="name"
          className="text-[18px] font-[400] leading-[1.4] transition-colors group-hover:text-[var(--sand)]"
          style={{ fontFamily: 'var(--serif)', color: open ? 'var(--sand)' : 'var(--ink)' }}
        >
          {item.question}
        </h3>

        {/* Chevron */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--sand)"
          strokeWidth="1.5"
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Answer — always in DOM for Googlebot, visually hidden when closed */}
      <div
        id={`answer-${item.id}`}
        role="region"
        aria-labelledby={`q-${item.id}`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '600px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p
          itemProp="text"
          className="pb-7 text-[15px] leading-[1.9] max-w-[68ch]"
          style={{ color: 'var(--mid)' }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

// ─── FaqPage ──────────────────────────────────────────────────────────────────
function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqItem['category'] | 'all'>('all')

  const filtered = activeCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((f) => f.category === activeCategory)

  return (
    <div>
      {/* JSON-LD — injected as a script tag for Googlebot rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      {/* ── Page header ───────────────────────────────────────────────── */}
      <header
        className="text-center px-10 py-20 md:py-28"
        style={{ background: 'var(--warm)' }}
        aria-label="FAQ introduction"
      >
        <p
          className="inline-flex items-center justify-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
          style={{ color: 'var(--sand)' }}
        >
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
          Help Center
          <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
        </p>
        <h1
          className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5vw, 66px)' }}
        >
          Frequently Asked{' '}
          <em className="italic" style={{ color: 'var(--sand)' }}>
            Questions
          </em>
        </h1>
        <p
          className="text-[16px] leading-[1.85] max-w-[520px] mx-auto"
          style={{ color: 'var(--mid)' }}
        >
          Everything you need to know about our window treatments, consultations, and installation
          process. Can't find your answer?{' '}
          <a href="tel:+18583381678" style={{ color: 'var(--sand)' }}>
            Call (858) 338-1678
          </a>
          .
        </p>
      </header>

      {/* ── Category filter ───────────────────────────────────────────── */}
      <nav
        aria-label="Filter FAQ by category"
        className="px-4 md:px-10 lg:px-20 py-8 border-b flex flex-wrap gap-2"
        style={{ borderColor: 'var(--hairline)', background: '#fff' }}
      >
        <button
          onClick={() => setActiveCategory('all')}
          className="px-4 py-2 text-[11px] tracking-[0.12em] uppercase border transition-colors"
          style={{
            background: activeCategory === 'all' ? 'var(--ink)' : 'transparent',
            borderColor: activeCategory === 'all' ? 'var(--ink)' : 'var(--hairline)',
            color: activeCategory === 'all' ? 'var(--cream)' : 'var(--mid)',
          }}
        >
          All ({FAQ_ITEMS.length})
        </button>
        {FAQ_CATEGORIES.map(({ id, label }) => {
          const count = FAQ_ITEMS.filter((f) => f.category === id).length
          return (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className="px-4 py-2 text-[11px] tracking-[0.12em] uppercase border transition-colors"
              style={{
                background: activeCategory === id ? 'var(--sand)' : 'transparent',
                borderColor: activeCategory === id ? 'var(--sand)' : 'var(--hairline)',
                color: activeCategory === id ? '#fff' : 'var(--mid)',
              }}
            >
              {label} ({count})
            </button>
          )
        })}
      </nav>

      {/* ── Accordion ─────────────────────────────────────────────────── */}
      <section
        key={activeCategory}
        aria-label="FAQ questions"
        className="px-4 md:px-10 lg:px-20 py-16 max-w-[860px]"
      >
        {filtered.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
        {/* Close border */}
        <div className="border-b" style={{ borderColor: 'var(--hairline)' }} />
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section
        className="px-4 md:px-10 lg:px-20 py-20 border-t"
        style={{ borderColor: 'var(--hairline)', background: 'var(--warm)' }}
        aria-label="Still have questions"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[860px]">
          <div>
            <p
              className="inline-flex items-center gap-3.5 text-[11px] tracking-[0.22em] uppercase mb-5"
              style={{ color: 'var(--sand)' }}
            >
              <span className="inline-block w-8 h-px bg-[var(--sand)]" aria-hidden="true" />
              Still Have Questions?
            </p>
            <h2
              className="font-[300] leading-[1.04] tracking-[-0.015em] mb-6"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 42px)' }}
            >
              Ask Us{' '}
              <em className="italic" style={{ color: 'var(--sand)' }}>
                Anything
              </em>
            </h2>
            <p className="text-[15px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
              Our designers are available for complex projects — commercial installations, HOA coordination, or smart home integration — a conversation with our team will answer questions this page can't.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/booking"
              className="flex items-center justify-center gap-2.5 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
              Book Free Consultation
            </Link>
            <a href="tel:+18583381678"
              className="flex items-center justify-center gap-2.5 py-4 text-[11px] tracking-[0.18em] uppercase border transition-colors"
              style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}>
              Call (858) 338-1678
            </a>
            <a href="mailto:info@ilprogettollc.com"
              className="text-center text-[13px] transition-colors"
              style={{ color: 'var(--mid)' }}>
              info@ilprogettollc.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
