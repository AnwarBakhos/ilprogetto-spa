import { useState, useEffect, useRef } from 'react'

// ─── Preferences stored in localStorage ──────────────────────────────────────
interface A11yPrefs {
  fontSize: 'normal' | 'large' | 'larger'
  contrast: 'normal' | 'high'
  motion: 'normal' | 'reduced'
  spacing: 'normal' | 'wide'
}

const STORAGE_KEY = 'ilp_a11y_prefs'

const DEFAULTS: A11yPrefs = {
  fontSize: 'normal',
  contrast: 'normal',
  motion: 'normal',
  spacing: 'normal',
}

function loadPrefs(): A11yPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) }
  } catch {/* ignore */}
  return { ...DEFAULTS }
}

function savePrefs(prefs: A11yPrefs) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)) } catch {/* ignore */}
}

// ─── Apply prefs to <html> via data-attributes + CSS vars ────────────────────
function applyPrefs(prefs: A11yPrefs) {
  const html = document.documentElement

  // Font size — data-fontsize attribute drives CSS rules that scale html font-size.
  // 'normal' removes the attribute entirely so existing styles are untouched.
  if (prefs.fontSize === 'normal') {
    html.removeAttribute('data-fontsize')
  } else {
    html.setAttribute('data-fontsize', prefs.fontSize)
  }

  // High contrast — toggle attribute picked up by CSS
  html.setAttribute('data-contrast', prefs.contrast)

  // Reduced motion
  html.setAttribute('data-motion', prefs.motion)

  // Letter/word spacing
  html.setAttribute('data-spacing', prefs.spacing)
}

// ─── AccessibilityToolbar ─────────────────────────────────────────────────────
export function AccessibilityToolbar() {
  const [open, setOpen]   = useState(false)
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULTS)
  const panelRef          = useRef<HTMLDivElement>(null)
  const triggerRef        = useRef<HTMLButtonElement>(null)

  // Load & apply saved prefs on mount
  useEffect(() => {
    const saved = loadPrefs()
    setPrefs(saved)
    applyPrefs(saved)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      if (!panelRef.current?.contains(e.target as Node) &&
          !triggerRef.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Close on Escape, return focus to trigger
  useEffect(() => {
    if (!open) return
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  function update(patch: Partial<A11yPrefs>) {
    const next = { ...prefs, ...patch }
    setPrefs(next)
    savePrefs(next)
    applyPrefs(next)
  }

  function resetAll() {
    setPrefs({ ...DEFAULTS })
    savePrefs({ ...DEFAULTS })
    applyPrefs({ ...DEFAULTS })
  }

  const hasChanges =
    prefs.fontSize !== 'normal' ||
    prefs.contrast !== 'normal' ||
    prefs.motion   !== 'normal' ||
    prefs.spacing  !== 'normal'

  return (
    <>
      {/* ── Floating trigger button ─── */}
      <button
        ref={triggerRef}
        onClick={() => setOpen(v => !v)}
        aria-label="Accessibility options"
        aria-expanded={open}
        aria-controls="a11y-panel"
        title="Accessibility options"
        style={{
          position: 'fixed',
          bottom: '80px',          // above mobile bottom bar
          right: '16px',
          zIndex: 902,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: hasChanges ? 'var(--sand)' : 'rgba(28,28,28,0.85)',
          border: '1.5px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          transition: 'background 0.2s',
        }}
      >
        {/* Accessibility icon (person with circle) */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M12 8c-1.1 0-2 .9-2 2v4l-2.5 4.5c-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4L11 16h2l1.7 3.5c.2.4.6.7 1 .7.2 0 .3 0 .5-.1.5-.3.7-.9.4-1.4L14 14v-4c0-1.1-.9-2-2-2z" />
        </svg>
        {/* Active dot */}
        {hasChanges && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#fff',
              border: '1.5px solid var(--sand)',
            }}
          />
        )}
      </button>

      {/* ── Panel ─── */}
      <div
        id="a11y-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-label="Accessibility settings"
        style={{
          position: 'fixed',
          bottom: '132px',
          right: '16px',
          zIndex: 901,
          width: '280px',
          background: 'rgba(18,18,16,0.97)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(12px)',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'transform 0.22s cubic-bezier(0.4,0,0.2,1), opacity 0.22s',
          transformOrigin: 'bottom right',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sand)', margin: 0 }}>
            Accessibility
          </p>
          <button
            onClick={() => { setOpen(false); triggerRef.current?.focus() }}
            aria-label="Close accessibility panel"
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(251,251,249,0.5)',
              cursor: 'pointer',
              padding: '4px',
              lineHeight: 1,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Text size */}
          <ControlRow label="Text Size" icon="Aa">
            <SegmentedControl
              options={[
                { value: 'normal', label: 'A', title: 'Normal text size' },
                { value: 'large',  label: 'A+', title: 'Large text size' },
                { value: 'larger', label: 'A++', title: 'Larger text size' },
              ]}
              value={prefs.fontSize}
              onChange={v => update({ fontSize: v as A11yPrefs['fontSize'] })}
            />
          </ControlRow>

          {/* Contrast */}
          <ControlRow label="Contrast" icon="◑">
            <SegmentedControl
              options={[
                { value: 'normal', label: 'Normal', title: 'Normal contrast' },
                { value: 'high',   label: 'High',   title: 'High contrast mode' },
              ]}
              value={prefs.contrast}
              onChange={v => update({ contrast: v as A11yPrefs['contrast'] })}
            />
          </ControlRow>

          {/* Motion */}
          <ControlRow label="Motion" icon="◎">
            <SegmentedControl
              options={[
                { value: 'normal',  label: 'Normal',  title: 'Normal animations' },
                { value: 'reduced', label: 'Reduced', title: 'Reduce motion and animation' },
              ]}
              value={prefs.motion}
              onChange={v => update({ motion: v as A11yPrefs['motion'] })}
            />
          </ControlRow>

          {/* Spacing */}
          <ControlRow label="Text Spacing" icon="↔">
            <SegmentedControl
              options={[
                { value: 'normal', label: 'Normal', title: 'Normal text spacing' },
                { value: 'wide',   label: 'Wide',   title: 'Increased letter and word spacing' },
              ]}
              value={prefs.spacing}
              onChange={v => update({ spacing: v as A11yPrefs['spacing'] })}
            />
          </ControlRow>

        </div>

        {/* Reset */}
        {hasChanges && (
          <button
            onClick={resetAll}
            style={{
              marginTop: '16px',
              width: '100%',
              padding: '8px',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(251,251,249,0.5)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'border-color 0.15s, color 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--sand)'
              e.currentTarget.style.color = 'var(--sand-light)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'rgba(251,251,249,0.5)'
            }}
          >
            Reset to defaults
          </button>
        )}

        <p style={{ marginTop: '14px', fontSize: '10px', color: 'rgba(251,251,249,0.3)', lineHeight: 1.6 }}>
          Settings are saved in your browser and persist across visits.
        </p>
      </div>
    </>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function ControlRow({ label, icon, children }: { label: string; icon: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
        <span aria-hidden="true" style={{ fontSize: '13px', color: 'rgba(251,251,249,0.4)', width: '18px', textAlign: 'center' }}>
          {icon}
        </span>
        <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(251,251,249,0.55)' }}>
          {label}
        </span>
      </div>
      {children}
    </div>
  )
}

function SegmentedControl({
  options, value, onChange,
}: {
  options: { value: string; label: string; title: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div role="group" style={{ display: 'flex', gap: '4px' }}>
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          title={opt.title}
          aria-pressed={value === opt.value}
          style={{
            flex: 1,
            padding: '6px 4px',
            fontSize: '11px',
            fontFamily: 'var(--sans)',
            border: '1px solid',
            borderColor: value === opt.value ? 'var(--sand)' : 'rgba(255,255,255,0.15)',
            background: value === opt.value ? 'var(--sand)' : 'transparent',
            color: value === opt.value ? '#fff' : 'rgba(251,251,249,0.55)',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: 'all 0.15s',
            fontWeight: value === opt.value ? 500 : 300,
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
