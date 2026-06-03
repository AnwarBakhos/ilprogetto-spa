import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { getDay, isSlotAvailable, formatTime, getAvailableDates } from '@/data/availability'
import type { BookingFormData, BookingStatus, BookingApiResponse } from '@/types/booking'
import { PRODUCTS } from '@/data/catalog'

// ─── Types ────────────────────────────────────────────────────────────────────
interface BookingState {
  status: BookingStatus
  selectedDate: string | null
  selectedTime: string | null
  form: Partial<BookingFormData>
  confirmation: { id: string } | null
  errorMessage: string | null
}

// ─── Step indicator ───────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: 1 | 2 | 3 }) {
  const steps = ['Your Details', 'Select Date', 'Select Time']
  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map((label, i) => {
        const num = i + 1
        const done = num < current
        const active = num === current
        return (
          <div key={label} className="flex items-center">
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-[500] transition-colors"
                style={{
                  background: done || active ? 'var(--sand)' : 'transparent',
                  border: `1px solid ${done || active ? 'var(--sand)' : 'var(--hairline)'}`,
                  color: done || active ? '#fff' : 'var(--mid)',
                }}
              >
                {done ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : num}
              </div>
              <span
                className="text-[11px] tracking-[0.1em] uppercase hidden sm:block"
                style={{ color: active ? 'var(--ink)' : 'var(--mid)' }}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className="w-8 lg:w-16 h-px mx-3"
                style={{ background: done ? 'var(--sand)' : 'var(--hairline)' }}
                aria-hidden="true"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Form field component ─────────────────────────────────────────────────────
function Field({
  label, id, type = 'text', required, placeholder, value, onChange,
}: {
  label: string; id: string; type?: string; required?: boolean
  placeholder?: string; value: string; onChange: (v: string) => void
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
          borderColor: 'var(--hairline)',
          background: 'var(--cream)',
          color: 'var(--ink)',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--sand)')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--hairline)')}
      />
    </div>
  )
}

// ─── BookingCalendar ──────────────────────────────────────────────────────────
export function BookingCalendar({ preselectedService }: { preselectedService?: string }) {
  const navigate       = useNavigate()
  const availableDates = getAvailableDates()

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

  // ─── Derived step ─────────────────────────────────────────────────────────
  const step: 1 | 2 | 3 =
    state.status === 'filling-form' ? 1
    : state.status === 'selecting-date' ? 2
    : state.status === 'selecting-time' || state.status === 'conflict' || state.status === 'submitting' ? 3
    : 3

  // ─── Handlers ─────────────────────────────────────────────────────────────
  function selectDate(date: string) {
    setState((s) => ({ ...s, selectedDate: date, selectedTime: null, status: 'selecting-time' }))
  }

  function selectTime(time: string) {
    // Guard: re-check availability (stale UI prevention)
    if (!isSlotAvailable(state.selectedDate!, time)) {
      setState((s) => ({
        ...s,
        status: 'conflict',
        errorMessage: 'That slot is no longer available. Please choose another.',
      }))
      return
    }
    submitBookingWith(time)
  }

  function updateForm(field: keyof BookingFormData, value: string) {
    setState((s) => ({ ...s, form: { ...s.form, [field]: value } }))
  }

  function handleFormStep(e: React.FormEvent) {
    e.preventDefault()
    const { firstName, lastName, email, address } = state.form
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !address?.trim()) {
      return
    }
    setState((s) => ({ ...s, status: 'selecting-date' }))
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
  if (state.status === 'confirmed') {
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
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2
          className="font-[300] leading-[1.1] mb-3"
          style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 38px)', color: 'var(--ink)' }}
        >
          Consultation Confirmed
        </h2>
        <p className="text-[15px] mb-2" style={{ color: 'var(--mid)' }}>
          {state.selectedDate} at {formatTime(state.selectedTime!)}
        </p>
        <p className="text-[14px] mb-8" style={{ color: 'var(--mid)' }}>
          A confirmation email with a calendar invitation has been sent to{' '}
          <strong style={{ color: 'var(--ink)' }}>{state.form.email}</strong>.
        </p>
        <p className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--sand)' }}>
          Booking ID: {state.confirmation?.id}
        </p>
        <p className="text-[13px] mt-6" style={{ color: 'var(--mid)' }}>
          Questions? Call{' '}
          <a href="tel:+18583381678" style={{ color: 'var(--sand)' }}>(858) 338-1678</a>
        </p>
      </div>
    )
  }

  return (
    <div>
      <StepIndicator current={step} />

      {/* Error / conflict banner */}
      {state.errorMessage && (
        <div
          className="px-5 py-4 mb-6 text-[14px]"
          style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#991b1b' }}
          role="alert"
          aria-live="assertive"
        >
          {state.errorMessage}
          {state.status === 'conflict' && (
            <button
              className="block mt-2 text-[12px] underline"
              onClick={() => setState((s) => ({ ...s, status: 'selecting-time', errorMessage: null }))}
            >
              Choose a different time →
            </button>
          )}
        </div>
      )}

      {/* ── STEP 1: Booking form ────────────────────────────────────────── */}
      {step === 1 && (
        <form onSubmit={handleFormStep} aria-label="Booking details form">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="First Name" id="firstName" required placeholder="Jane"
                value={state.form.firstName ?? ''} onChange={(v) => updateForm('firstName', v)} />
              <Field label="Last Name" id="lastName" required placeholder="Smith"
                value={state.form.lastName ?? ''} onChange={(v) => updateForm('lastName', v)} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Email" id="email" type="email" required placeholder="jane@email.com"
                value={state.form.email ?? ''} onChange={(v) => updateForm('email', v)} />
              <Field label="Phone" id="phone" type="tel" placeholder="(619) 555-0100"
                value={state.form.phone ?? ''} onChange={(v) => updateForm('phone', v)} />
            </div>
            <Field label="Property Address" id="address" required placeholder="1234 Coastal Drive, San Diego CA"
              value={state.form.address ?? ''} onChange={(v) => updateForm('address', v)} />

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
                        const current = (state.form.service ?? 'general').split(',').filter(Boolean)
                        const isGeneral = p.id === 'general'
                        let next: string[]
                        if (isGeneral) {
                          next = selected ? [] : ['general']
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
              className="w-full py-4 text-[11px] tracking-[0.2em] uppercase transition-colors btn-interactive"
              style={{ background: 'var(--ink)', color: 'var(--cream)' }}
            >
              Continue — Choose a Date →
            </button>

            <p className="text-[12px] text-center" style={{ color: 'var(--mid)' }}>
              A confirmation email with a calendar invitation will be sent to your address.
            </p>
          </div>
        </form>
      )}

      {/* ── STEP 2: Date selection ──────────────────────────────────────── */}
      {step === 2 && (
        <div>
          <button
            onClick={() => setState((s) => ({ ...s, status: 'filling-form' }))}
            className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase mb-6"
            style={{ color: 'var(--mid)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Edit Your Details
          </button>

          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            Available Dates
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {availableDates.map((date) => {
              const d = new Date(date + 'T00:00:00')
              return (
                <button
                  key={date}
                  onClick={() => selectDate(date)}
                  className="flex flex-col items-center py-4 px-3 border transition-all hover:border-[var(--sand)] hover:bg-[var(--sand-pale)]"
                  style={{ borderColor: 'var(--hairline)', background: 'var(--cream)' }}
                >
                  <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: 'var(--mid)' }}>
                    {d.toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                  <span
                    className="text-[28px] font-[300] leading-none my-1"
                    style={{ fontFamily: 'var(--serif)', color: 'var(--ink)' }}
                  >
                    {d.getDate()}
                  </span>
                  <span className="text-[11px]" style={{ color: 'var(--mid)' }}>
                    {d.toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ── STEP 3: Time selection ──────────────────────────────────────── */}
      {step === 3 && state.selectedDate && (
        <div>
          <button
            onClick={() => setState((s) => ({ ...s, status: 'selecting-date', selectedTime: null }))}
            className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase mb-6"
            style={{ color: 'var(--mid)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {new Date(state.selectedDate + 'T00:00:00').toLocaleDateString('en-US', {
              weekday: 'long', month: 'long', day: 'numeric',
            })}
          </button>

          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-5"
            style={{ color: 'var(--sand)' }}
          >
            Available Times
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(getDay(state.selectedDate)?.slots ?? []).map(({ time, status }) => {
              const available = status === 'available'
              return (
                <button
                  key={time}
                  onClick={() => available && selectTime(time)}
                  disabled={!available}
                  aria-disabled={!available}
                  className="py-4 px-3 border text-[14px] font-[300] transition-all"
                  style={{
                    borderColor: available ? 'var(--hairline)' : 'transparent',
                    background: available ? 'var(--cream)' : 'var(--warm)',
                    color: available ? 'var(--ink)' : 'var(--light, #ccc)',
                    cursor: available ? 'pointer' : 'not-allowed',
                    textDecoration: status === 'booked' ? 'line-through' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (available) {
                      e.currentTarget.style.borderColor = 'var(--sand)'
                      e.currentTarget.style.background = 'var(--sand-pale)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (available) {
                      e.currentTarget.style.borderColor = 'var(--hairline)'
                      e.currentTarget.style.background = 'var(--cream)'
                    }
                  }}
                >
                  {formatTime(time)}
                  {!available && (
                    <span className="block text-[10px] tracking-[0.1em] mt-0.5" style={{ color: 'var(--mid)' }}>
                      {status === 'booked' ? 'Taken' : 'Unavailable'}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
