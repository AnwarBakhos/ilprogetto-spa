import { createFileRoute, notFound } from '@tanstack/react-router'
import { useState } from 'react'
import { CITY_SLUGS, POSITION_SLUGS, cityName, CAREERS_CONTENT } from '@/data/seo'

export const Route = createFileRoute('/careers/$city/$position')({
  loader: ({ params }) => {
    if (!CITY_SLUGS.includes(params.city as typeof CITY_SLUGS[number])) throw notFound()
    if (!POSITION_SLUGS[params.position]) throw notFound()
    return { city: params.city, position: params.position }
  },
  head: ({ loaderData }: any) => {
    if (!loaderData) return {}
    const { city, position } = loaderData
    const pName = POSITION_SLUGS[position] ?? position
    const cName = cityName(city)
    const content = CAREERS_CONTENT[position]
    return {
      meta: [
        { title: `Now Hiring: ${pName} in ${cName}, CA | iL Progetto LLC` },
        { name: 'description', content: `iL Progetto LLC is hiring a ${pName} in ${cName}, CA. Join our expert team handling high-end custom window treatment installations across Southern California. Apply now.` },
        { name: 'keywords', content: content?.keywords.join(', ') ?? '' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: `${pName} Job in ${cName}, CA | iL Progetto LLC` },
        { property: 'og:description', content: `Now hiring a ${pName} to serve ${cName} and surrounding communities. Competitive pay, great team.` },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${pName} Job in ${cName}, CA | iL Progetto LLC` },
        { name: 'twitter:description', content: `Now hiring a ${pName} to serve ${cName} and surrounding communities. Competitive pay, great team.` },
        { name: 'robots', content: 'index, follow' },
      ],
      links: [
        { rel: 'canonical', href: `https://www.ilprogettollc.com/careers/${city}/${position}` },
      ],
    }
  },
  component: CareersPage,
})

// ─── Step indicator ────────────────────────────────────────────────────────────
function StepDot({ num, label, active, done }: { num: number; label: string; active: boolean; done: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-[500] flex-shrink-0"
           style={{
             background: done || active ? 'var(--sand)' : 'transparent',
             border: `1px solid ${done || active ? 'var(--sand)' : 'var(--hairline)'}`,
             color: done || active ? '#fff' : 'var(--mid)',
           }}>
        {done ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> : num}
      </div>
      <span className="text-[11px] tracking-[0.1em] uppercase hidden sm:block"
            style={{ color: active ? 'var(--ink)' : 'var(--mid)' }}>{label}</span>
    </div>
  )
}

// ─── Application multi-step form ───────────────────────────────────────────────
function ApplicationForm({ city, position }: { city: string; position: string }) {
  const [step,        setStep]        = useState(1)
  const [experience,  setExperience]  = useState('')
  const [hasLicense,  setHasLicense]  = useState<boolean|null>(null)
  const [hasTools,    setHasTools]    = useState<boolean|null>(null)
  const [name,        setName]        = useState('')
  const [email,       setEmail]       = useState('')
  const [phone,       setPhone]       = useState('')
  const [notes,       setNotes]       = useState('')
  const [status,      setStatus]      = useState<'idle'|'sending'|'done'|'error'>('idle')
  const [err,         setErr]         = useState('')

  const cName = cityName(city)
  const pName = POSITION_SLUGS[position] ?? position
  const content = CAREERS_CONTENT[position]

  async function submitFinal(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setStatus('sending'); setErr('')
    try {
      const res = await fetch('/api/newsletter', { // reuse for lead capture, or wire to a careers endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          // Extra fields logged in the note
          _type: 'careers_application',
          _position: pName,
          _city: cName,
          _name: name.trim(),
          _phone: phone.trim(),
          _experience: experience,
          _hasLicense: hasLicense,
          _hasTools: hasTools,
          _notes: notes,
        }),
      })
      const data = await res.json() as { ok: boolean; error?: string }
      data.ok ? setStatus('done') : (setStatus('error'), setErr(data.error ?? 'Something went wrong.'))
    } catch {
      setStatus('error'); setErr('Network error. Please email info@ilprogettollc.com directly.')
    }
  }

  if (status === 'done') return (
    <div className="text-center py-10 px-6 border" style={{ borderColor: 'var(--hairline)', background: 'var(--cream)' }}>
      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
           style={{ background: 'var(--sand)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 className="font-[300] mb-2" style={{ fontFamily: 'var(--serif)', fontSize: '24px' }}>Application received.</h3>
      <p className="text-[14px]" style={{ color: 'var(--mid)' }}>
        Thank you, {name.split(' ')[0]}. We'll review your application and reach out within 3–5 business days.
      </p>
    </div>
  )

  return (
    <div className="border" style={{ borderColor: 'var(--hairline)', background: 'var(--cream)' }}>
      {/* Step indicator */}
      <div className="flex items-center gap-4 px-8 py-5 border-b" style={{ borderColor: 'var(--hairline)' }}>
        <StepDot num={1} label="Overview"      active={step===1} done={step>1} />
        <div className="flex-1 h-px" style={{ background: step>1 ? 'var(--sand)' : 'var(--hairline)' }} />
        <StepDot num={2} label="Qualification" active={step===2} done={step>2} />
        <div className="flex-1 h-px" style={{ background: step>2 ? 'var(--sand)' : 'var(--hairline)' }} />
        <StepDot num={3} label="Apply"         active={step===3} done={false} />
      </div>

      <div className="p-8">
        {/* ── Step 1: Role overview ── */}
        {step === 1 && content && (
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--sand)' }}>Role Overview</p>
            <h3 className="font-[300] mb-4" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>{pName}</h3>
            <p className="text-[14px] leading-[1.85] mb-6" style={{ color: 'var(--mid)' }}>{content.intro}</p>
            <p className="text-[11px] tracking-[0.16em] uppercase mb-3" style={{ color: 'var(--mid)' }}>Key Responsibilities</p>
            <ul className="flex flex-col gap-2.5 mb-6 list-none">
              {content.responsibilities.map(r => (
                <li key={r} className="flex items-start gap-3 text-[13px]" style={{ color: 'var(--mid)' }}>
                  <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24"
                       fill="none" stroke="var(--sand)" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-[13px] mb-6 px-4 py-3 border-l-2"
               style={{ borderColor: 'var(--sand)', color: 'var(--mid)', background: 'var(--sand-pale)' }}>
              <strong style={{ color: 'var(--ink)' }}>Compensation:</strong> {content.compensation}
            </p>
            <button onClick={() => setStep(2)}
                    className="w-full py-3.5 text-[11px] tracking-[0.2em] uppercase hover:opacity-90"
                    style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
              Continue to Qualifications →
            </button>
          </div>
        )}

        {/* ── Step 2: Qualification gating ── */}
        {step === 2 && (
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--sand)' }}>Quick Qualification</p>
            <h3 className="font-[300] mb-6" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>
              Tell us a bit about yourself
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-[12px] tracking-[0.14em] uppercase mb-3" style={{ color: 'var(--mid)' }}>
                  Years of relevant experience
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {['0–1 years', '1–3 years', '3+ years'].map(opt => (
                    <button key={opt} type="button" onClick={() => setExperience(opt)}
                            className="py-3 text-[12px] border transition-colors"
                            style={{
                              borderColor: experience === opt ? 'var(--sand)' : 'var(--hairline)',
                              background:  experience === opt ? 'var(--sand-pale)' : 'transparent',
                              color: experience === opt ? 'var(--ink)' : 'var(--mid)',
                            }}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[12px] tracking-[0.14em] uppercase mb-3" style={{ color: 'var(--mid)' }}>
                  Valid California driver's license?
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {([true, false] as const).map(v => (
                    <button key={String(v)} type="button" onClick={() => setHasLicense(v)}
                            className="py-3 text-[12px] border transition-colors"
                            style={{
                              borderColor: hasLicense === v ? 'var(--sand)' : 'var(--hairline)',
                              background:  hasLicense === v ? 'var(--sand-pale)' : 'transparent',
                              color: hasLicense === v ? 'var(--ink)' : 'var(--mid)',
                            }}>
                      {v ? 'Yes' : 'No'}
                    </button>
                  ))}
                </div>
              </div>

              {position === 'technician' && (
                <div>
                  <p className="text-[12px] tracking-[0.14em] uppercase mb-3" style={{ color: 'var(--mid)' }}>
                    Own basic installation tools?
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {([true, false] as const).map(v => (
                      <button key={String(v)} type="button" onClick={() => setHasTools(v)}
                              className="py-3 text-[12px] border transition-colors"
                              style={{
                                borderColor: hasTools === v ? 'var(--sand)' : 'var(--hairline)',
                                background:  hasTools === v ? 'var(--sand-pale)' : 'transparent',
                                color: hasTools === v ? 'var(--ink)' : 'var(--mid)',
                              }}>
                        {v ? 'Yes' : 'No'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={() => setStep(1)}
                      className="flex-1 py-3.5 text-[11px] tracking-[0.16em] uppercase border"
                      style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}>
                ← Back
              </button>
              <button onClick={() => setStep(3)} disabled={!experience || hasLicense === null}
                      className="flex-1 py-3.5 text-[11px] tracking-[0.2em] uppercase hover:opacity-90 disabled:opacity-40"
                      style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Final form ── */}
        {step === 3 && (
          <form onSubmit={submitFinal}>
            <p className="text-[10px] tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--sand)' }}>Final Step</p>
            <h3 className="font-[300] mb-6" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>
              Complete your application
            </h3>

            {[
              { label: 'Full Name',     type: 'text',  ph: 'Jane Smith',       val: name,  set: setName,  req: true  },
              { label: 'Email Address', type: 'email', ph: 'jane@email.com',   val: email, set: setEmail, req: true  },
              { label: 'Phone Number',  type: 'tel',   ph: '(619) 555-0100',   val: phone, set: setPhone, req: false },
            ].map(({ label, type, ph, val, set, req }) => (
              <div key={label} className="mb-3">
                <label className="block text-[10px] tracking-[0.18em] uppercase mb-1.5" style={{ color: 'var(--mid)' }}>
                  {label}{req && <span style={{ color: 'var(--sand)' }}> *</span>}
                </label>
                <input type={type} required={req} placeholder={ph} value={val}
                       onChange={e => set(e.target.value)}
                       className="w-full border px-3.5 py-2.5 text-[13px] outline-none"
                       style={{ fontFamily: type === 'tel' ? 'var(--sans)' : 'inherit', borderColor: 'var(--hairline)', background: 'white', color: 'var(--ink)' }}
                       onFocus={e => (e.currentTarget.style.borderColor = 'var(--sand)')}
                       onBlur={e  => (e.currentTarget.style.borderColor = 'var(--hairline)')} />
              </div>
            ))}

            <div className="mb-5">
              <label className="block text-[10px] tracking-[0.18em] uppercase mb-1.5" style={{ color: 'var(--mid)' }}>
                Why iL Progetto? (optional)
              </label>
              <textarea rows={3} placeholder="Tell us a bit about your background and why you're interested..."
                        value={notes} onChange={e => setNotes(e.target.value)}
                        className="w-full border px-3.5 py-2.5 text-[13px] outline-none resize-none"
                        style={{ borderColor: 'var(--hairline)', background: 'white', color: 'var(--ink)' }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--sand)')}
                        onBlur={e  => (e.currentTarget.style.borderColor = 'var(--hairline)')} />
            </div>

            {status === 'error' && (
              <p className="text-[12px] mb-3 px-3 py-2" style={{ background: '#fef2f2', color: '#991b1b' }}>{err}</p>
            )}

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)}
                      className="flex-1 py-3.5 text-[11px] tracking-[0.16em] uppercase border"
                      style={{ borderColor: 'var(--hairline)', color: 'var(--mid)' }}>
                ← Back
              </button>
              <button type="submit" disabled={status === 'sending'}
                      className="flex-1 py-3.5 text-[11px] tracking-[0.2em] uppercase hover:opacity-90 disabled:opacity-50"
                      style={{ background: 'var(--sand)', color: '#fff' }}>
                {status === 'sending' ? 'Submitting…' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
function CareersPage() {
  const { city, position } = Route.useLoaderData() as any
  const cName   = cityName(city)
  const pName   = POSITION_SLUGS[position] ?? position
  const content = CAREERS_CONTENT[position]

  return (
    <div>
      {/* ── Hero ── */}
      <header className="px-10 md:px-20 py-20" style={{ background: 'var(--ink)' }}>
        <p className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase mb-5"
           style={{ color: 'var(--sand-light)' }}>
          <span className="inline-block w-8 h-px bg-current" aria-hidden="true" />
          {cName}, California · Now Hiring
        </p>
        <h1 className="font-[300] leading-[1.04] tracking-[-0.015em] mb-5"
            style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 4.5vw, 58px)', color: 'var(--cream)' }}>
          Now Hiring:{' '}
          <em className="italic" style={{ color: 'var(--sand-light)' }}>
            {pName}
          </em>
          <br />in {cName}, CA
        </h1>
        <p className="text-[16px] leading-[1.85] max-w-[600px]" style={{ color: 'rgba(251,251,249,0.65)' }}>
          Join our expert field service team handling high-end custom window treatment
          installations across {cName} and surrounding communities.
          {content && ` ${content.compensation}`}
        </p>
      </header>

      {/* ── Content + form ── */}
      <section className="px-10 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12">
        {/* Left — qualifications */}
        <div>
          {content && (
            <>
              <p className="text-[10px] tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--sand)' }}>
                What we're looking for
              </p>
              <h2 className="font-[300] mb-5" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2.5vw, 30px)' }}>
                Qualifications
              </h2>
              <ul className="flex flex-col gap-3 list-none mb-10">
                {content.qualifications.map(q => (
                  <li key={q} className="flex items-start gap-3 text-[14px]" style={{ color: 'var(--mid)' }}>
                    <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24"
                         fill="none" stroke="var(--sand)" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {q}
                  </li>
                ))}
              </ul>

              {/* Hidden SEO keyword block */}
              <p className="text-[11px] leading-[2] mb-6" style={{ color: 'rgba(28,28,28,0.35)' }}>
                {content.keywords.join(' · ')}
              </p>

              {/* Company pitch */}
              <div className="p-6 border" style={{ borderColor: 'var(--hairline)', background: 'var(--warm)' }}>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--sand)' }}>
                  About iL Progetto LLC
                </p>
                <p className="text-[14px] leading-[1.85]" style={{ color: 'var(--mid)' }}>
                  iL Progetto LLC is San Diego's premier mobile window treatment company.
                  We serve high-end residential and commercial clients across San Diego County,
                  Riverside County, and Orange County. Our team is small, skilled, and growing.
                  California License #1127055.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Right — application form */}
        <div>
          <ApplicationForm city={city} position={position} />
        </div>
      </section>
    </div>
  )
}
