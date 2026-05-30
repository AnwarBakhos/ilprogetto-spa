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

export const AVAILABILITY: DayAvailability[] = [
  // Weekdays available — weekends intentionally excluded
  openDay(dateString(1)),
  openDay(dateString(2)),
  partialDay(dateString(3), ['09:00'], ['13:30']),  // morning blocked, 1:30pm booked
  openDay(dateString(4)),
  openDay(dateString(5)),
  // Skip weekend (6, 7)
  openDay(dateString(8)),
  partialDay(dateString(9), [], ['09:00', '10:30']),  // two booked
  openDay(dateString(10)),
  openDay(dateString(11)),
  openDay(dateString(12)),
  // Skip weekend (13, 14)
  openDay(dateString(15)),
  openDay(dateString(16)),
  openDay(dateString(17)),
  openDay(dateString(18)),
  partialDay(dateString(19), ['15:00', '16:30']),   // late afternoon blocked
  // Skip weekend (20, 21)
  openDay(dateString(22)),
  openDay(dateString(23)),
  openDay(dateString(24)),
  openDay(dateString(25)),
  openDay(dateString(26)),
]

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
