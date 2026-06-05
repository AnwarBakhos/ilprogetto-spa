import type { DayAvailability } from '@/types/booking'

// ─── Standard business hours ───────────────────────────────────────────────────
// Consultations are 90 minutes. Slots at :00 and :30 give buffer.
const STANDARD_SLOTS = ['09:00', '10:30', '12:00', '13:30', '15:00', '16:30']

// ─── Helper: build a day with all slots available ─────────────────────────────
function openDay(date: string): DayAvailability {
  return {
    date,
    slots: STANDARD_SLOTS.map((time) => ({ time, status: 'available' })),
  }
}

// ─── Helper: build a day with specific slots blocked ─────────────────────────
function partialDay(
  date: string,
  blocked: string[] = [],
  booked: string[] = []
): DayAvailability {
  return {
    date,
    slots: STANDARD_SLOTS.map((time) => ({
      time,
      status: booked.includes(time)
        ? 'booked'
        : blocked.includes(time)
          ? 'blocked'
          : 'available',
    })),
  }
}

// ─── Availability calendar ────────────────────────────────────────────────────
// Rolling 30-day window. In production, replace this with a database query.
// The shape is intentionally identical to what a REST endpoint would return,
// so swapping to a live source requires only changing the data-fetching layer.
//
// OWNER INSTRUCTIONS: To block a slot, change status to 'blocked'.
// To mark as booked (e.g., booked by phone), change to 'booked'.

const today = new Date()
function dateString(offset: number): string {
  const d = new Date(today)
  d.setDate(d.getDate() + offset)
  return d.toISOString().split('T')[0]!
}

// Generate a rolling 30-day window — all 7 days included.
// A few days are partially booked/blocked as realistic demo data.
// In production, replace this array with a live database/API query.
function buildCalendar(): DayAvailability[] {
  const days: DayAvailability[] = []
  for (let offset = 1; offset <= 30; offset++) {
    const date = dateString(offset)
    // Sprinkle in a few realistic partial bookings for demo purposes
    if (offset === 3)  { days.push(partialDay(date, ['09:00'], ['13:30'])); continue }
    if (offset === 9)  { days.push(partialDay(date, [], ['09:00', '10:30'])); continue }
    if (offset === 19) { days.push(partialDay(date, ['15:00', '16:30'])); continue }
    days.push(openDay(date))
  }
  return days
}

export const AVAILABILITY: DayAvailability[] = buildCalendar()

// ─── Lookup helpers ────────────────────────────────────────────────────────────
export function getDay(date: string): DayAvailability | undefined {
  return AVAILABILITY.find((d) => d.date === date)
}

export function isSlotAvailable(date: string, time: string): boolean {
  const day = getDay(date)
  if (!day) return false
  const slot = day.slots.find((s) => s.time === time)
  return slot?.status === 'available'
}

// ─── 12-hour display format ────────────────────────────────────────────────────
export function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h! >= 12 ? 'PM' : 'AM'
  const hour = h! > 12 ? h! - 12 : h === 0 ? 12 : h
  return `${hour}:${String(m).padStart(2, '0')} ${period}`
}

// ─── Available days for the calendar ─────────────────────────────────────────
export function getAvailableDates(): string[] {
  return AVAILABILITY.filter((d) =>
    d.slots.some((s) => s.status === 'available')
  ).map((d) => d.date)
}
