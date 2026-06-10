import { useState, useRef } from 'react'
import type { BookingFormData, BookingStatus, BookingApiResponse } from '@/types/booking'
import { PRODUCTS } from '@/data/catalog'
import { useAddressAutocomplete } from '@/lib/useAddressAutocomplete'

// ─── Types ────────────────────────────────────────────────────────────────────
interface BookingState {
  status: BookingStatus
  selectedDate: string | null
  selectedTime: string | null
  form: Partial<BookingFormData>
  confirmation: { id: string } | null
  errorMessage: string | null
}

// ─── Step indicator — hidden until date/time integration ─────────────────────
// (intentionally removed; will be re-added when scheduling is wired up)

// ─── Form field component ─────────────────────────────────────────────────────
function Field({
  label, id, type = 'text', required, placeholder, value, onChange, error,
}: {
  label: string; id: string; type?: string; required?: boolean
  placeholder?: string; value: string; onChange: (v: string) => void; error?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] tracking-[0.18em] uppercase mb-2"
        style={{ color: 'var(--mid)' }}
      >
        {label}{required && <span style={{ color: 'var(--sand)' }} aria-label="required"> *</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border px-4 py-3 text-[14px] font-[300] outline-none transition-colors"
        style={{
          borderColor: error ? '#c0392b' : 'var(--hairline)',
          background: 'var(--cream)',
          color: 'var(--ink)',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = error ? '#c0392b' : 'var(--sand)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = error ? '#c0392b' : 'var(--hairline)')}
      />
      {error && <p className="mt-1 text-[11px]" style={{ color: '#c0392b' }}>{error}</p>}
    </div>
  )
}

// ─── Address field with Google Places autocomplete ───────────────────────────
function AddressField({
  value, onChange, error,
}: {
  value: string; onChange: (v: string) => void; error?: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  useAddressAutocomplete(inputRef, onChange)

  return (
    <div>
      <label
        htmlFor="address"
        className="block text-[10px] tracking-[0.18em] uppercase mb-2"
        style={{ color: 'var(--mid)' }}
      >
        Property Address<span style={{ color: 'var(--sand)' }} aria-label="required"> *</span>
      </label>
      <input
        ref={inputRef}
        type="text"
        id="address"
        name="address"
        required
        autoComplete="street-address"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border px-4 py-3 text-[14px] font-[300] outline-none transition-colors"
        style={{
          borderColor: error ? '#c0392b' : 'var(--hairline)',
          background: 'var(--cream)',
          color: 'var(--ink)',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = error ? '#c0392b' : 'var(--sand)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = error ? '#c0392b' : 'var(--hairline)')}
      />
      {error && <p className="mt-1 text-[11px]" style={{ color: '#c0392b' }}>{error}</p>}
    </div>
  )
}

// ─── Validation helpers ───────────────────────────────────────────────────────
function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}
function isValidPhone(v: string) {
  return v.replace(/\D/g, '').length >= 10
}

// ─── BookingCalendar ──────────────────────────────────────────────────────────
export function BookingCalendar({ preselectedService }: { preselectedService?: string }) {
  const [state, setState] = useState<BookingState>({
    status: 'filling-form',
    selectedDate: null,
    selectedTime: null,
    form: {
      service: preselectedService ?? 'general',
      firstName: '', lastName: '', email: '', phone: '', address: '', notes: '',
    },
    confirmation: null,
    errorMessage: null,
  })
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({})

  function validateFields(): boolean {
    const errors: { email?: string; phone?: string } = {}
    const email = state.form.email ?? ''
    const phone = state.form.phone ?? ''
    if (email && !isValidEmail(email)) errors.email = 'Please enter a valid email address.'
    if (phone && !isValidPhone(phone)) errors.phone = 'Phone must have at least 10 digits.'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  // ─── Handlers ─────────────────────────────────────────────────────────────
  function updateForm(field: keyof BookingFormData, value: string) {
    setState((s) => ({ ...s, form: { ...s.form, [field]: value } }))
  }

  async function handleFlexibleSubmit() {
    const { firstName, lastName, email, address } = state.form
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !address?.trim()) return
    if (!validateFields()) return

    setState((s) => ({ ...s, status: 'submitting', errorMessage: null }))

    const booking: BookingFormData = {
      firstName: state.form.firstName ?? '',
      lastName: state.form.lastName ?? '',
      email: state.form.email ?? '',
      phone: state.form.phone ?? '',
      address: state.form.address ?? '',
      service: state.form.service ?? 'general',
      notes: state.form.notes ?? '',
      date: 'flexible',
      time: 'flexible',
    }

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ booking }),
      })
      const data = await res.json() as BookingApiResponse
      if (data.ok) {
        setState((s) => ({ ...s, status: 'flexible-confirmed' }))
      } else {
        setState((s) => ({ ...s, status: 'error', errorMessage: data.error ?? 'Something went wrong. Please call (858) 338-1678.' }))
      }
    } catch {
      setState((s) => ({ ...s, status: 'error', errorMessage: 'Network error. Please call (858) 338-1678.' }))
    }
  }

  async function submitBookingWith(time: string) {
    if (!state.selectedDate) return

    setState((s) => ({ ...s, selectedTime: time, status: 'submitting', errorMessage: null }))

    const booking: BookingFormData = {
      firstName: state.form.firstName ?? '',
      lastName: state.form.lastName ?? '',
      email: state.form.email ?? '',
      phone: state.form.phone ?? '',
      address: state.form.address ?? '',
      service: state.form.service ?? 'general',
      notes: state.form.notes ?? '',
      date: state.selectedDate,
      time,
    }

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ booking }),
      })
      const data = await res.json() as BookingApiResponse

      if (data.ok && data.id) {
        const params = new URLSearchParams({
          id:    data.id,
          date:  booking.date,
          time:  booking.time,
          email: booking.email,
          name:  `${booking.firstName} ${booking.lastName}`.trim(),
        })
        window.location.href = `/booking/confirmed?${params.toString()}`
      } else if (res.status === 409) {
        setState((s) => ({
          ...s,
          status: 'conflict',
          selectedTime: null,
          errorMessage: data.error ?? 'Slot conflict. Please choose another time.',
        }))
      } else {
        setState((s) => ({
          ...s,
          status: 'error',
          errorMessage: data.error ?? 'Something went wrong. Please call (858) 338-1678.',
        }))
      }
    } catch {
      setState((s) => ({
        ...s,
        status: 'error',
        errorMessage: 'Network error. Please check your connection or call (858) 338-1678.',
      }))
    }
  }

  // ─── Confirmed state ───────────────────────────────────────────────────────
  if (state.status === 'flexible-confirmed') {
    return (
      <div
        className="text-center py-16 px-8 border"
        style={{ borderColor: 'var(--hairline)', background: 'var(--cream)' }}
        role="alert"
        aria-live="polite"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'var(--sand)' }}
          aria-hidden="true"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.1 2.18 2 2 0 012.1.02h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </div>
        <h2
          className="font-[300] leading-[1.1] mb-3"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--ink)' }}
        >
          We'll Be in Touch
        </h2>
        <p className="text-[16px] mb-5 max-w-[400px] mx-auto leading-[1.7]" style={{ color: 'var(--mid)' }}>
          Your request has been received. A member of our team will contact{' '}
          <strong style={{ color: 'var(--ink)' }}>{state.form.email}</strong>{' '}
          within 24 hours to find a time that works for you.
        </p>
        <div
          className="inline-block px-5 py-3 border text-[11px] tracking-[0.14em] uppercase mb-6"
          style={{ borderColor: 'var(--sand-light)', color: 'var(--sand)', background: 'var(--sand-pale)' }}
        >
          No scheduling required — we've got your details
        </div>
        <p className="text-[13px]" style={{ color: 'var(--mid)' }}>
          Prefer to call now?{' '}
          <a href="tel:+18583381678" className="hover:text-[var(--ink)] transition-colors" style={{ color: 'var(--sand)' }}>
            (858) 338-1678
          </a>
        </p>
      </div>
    )
  }

  // 'confirmed' state reserved for future date/time integration

  return (
    <div>
      {/* Error banner */}
      {state.errorMessage && (
        <div
          className="px-5 py-4 mb-6 text-[14px]"
          style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#991b1b' }}
          role="alert"
          aria-live="assertive"
        >
          {state.errorMessage}
        </div>
      )}

      {/* ── Survey / info form ──────────────────────────────────────────── */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleFlexibleSubmit() }}
        aria-label="Consultation request form"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="First Name" id="firstName" required
              value={state.form.firstName ?? ''} onChange={(v) => updateForm('firstName', v)} />
            <Field label="Last Name" id="lastName" required
              value={state.form.lastName ?? ''} onChange={(v) => updateForm('lastName', v)} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email" id="email" type="email" required
              value={state.form.email ?? ''} onChange={(v) => { updateForm('email', v); setFieldErrors((e) => ({ ...e, email: undefined })) }}
              error={fieldErrors.email} />
            <Field label="Phone" id="phone" type="tel"
              value={state.form.phone ?? ''} onChange={(v) => { updateForm('phone', v); setFieldErrors((e) => ({ ...e, phone: undefined })) }}
              error={fieldErrors.phone} />
          </div>
          <AddressField
            value={state.form.address ?? ''}
            onChange={(v) => updateForm('address', v)} />

          {/* Service multi-select */}
          <div>
            <p className="block text-[10px] tracking-[0.18em] uppercase mb-2" style={{ color: 'var(--mid)' }}>
              I'm Interested In <span style={{ color: 'var(--sand)' }}>— select all that apply</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {[{ id: 'general', name: 'Not Sure Yet / Other' }, ...PRODUCTS].map((p) => {
                const selected = (state.form.service ?? 'general').split(',').includes(p.id)
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      const current = (state.form.service ?? 'general').split(',')
                      let next: string[]
                      if (p.id === 'general') {
                        next = ['general']
                      } else {
                        const without = current.filter(x => x !== 'general')
                        next = without.includes(p.id)
                          ? without.filter(x => x !== p.id)
                          : [...without, p.id]
                        if (next.length === 0) next = ['general']
                      }
                      updateForm('service', next.join(','))
                    }}
                    className="px-3 py-2 text-[11px] tracking-[0.1em] uppercase border transition-all"
                    style={{
                      background: selected ? 'var(--sand)' : 'var(--cream)',
                      borderColor: selected ? 'var(--sand)' : 'var(--hairline)',
                      color: selected ? '#fff' : 'var(--ink)',
                    }}
                  >
                    {p.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-[10px] tracking-[0.18em] uppercase mb-2"
              style={{ color: 'var(--mid)' }}
            >
              Notes (optional)
            </label>
            <textarea
              id="notes"
              rows={3}
              placeholder="Number of windows, style preferences, any access notes..."
              value={state.form.notes ?? ''}
              onChange={(e) => updateForm('notes', e.target.value)}
              className="w-full border px-4 py-3 text-[14px] font-[300] resize-none outline-none"
              style={{ borderColor: 'var(--hairline)', background: 'var(--cream)', color: 'var(--ink)' }}
            />
          </div>

          <button
            type="submit"
            disabled={state.status === 'submitting'}
            className="w-full py-4 text-[11px] tracking-[0.2em] uppercase transition-colors btn-interactive"
            style={{ background: 'var(--ink)', color: 'var(--cream)', opacity: state.status === 'submitting' ? 0.6 : 1 }}
          >
            {state.status === 'submitting' ? 'Sending…' : 'Request a Consultation →'}
          </button>

          <p className="text-[12px] text-center leading-[1.6]" style={{ color: 'var(--mid)' }}>
            We'll contact you within 24 hours to confirm your appointment.
          </p>
        </div>
      </form>
    </div>
  )
}
