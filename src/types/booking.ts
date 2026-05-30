// ─── Booking System Types ─────────────────────────────────────────────────────

export type SlotStatus = 'available' | 'booked' | 'blocked' | 'pending'

export interface TimeSlot {
  time: string        // "09:00" — 24-hour, display as 12-hour in UI
  status: SlotStatus
  bookedBy?: string   // booking ID token once taken
}

export interface DayAvailability {
  date: string        // "YYYY-MM-DD"
  slots: TimeSlot[]
}

export interface BookingFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  service: string     // product id from catalog or 'general'
  notes: string
  date: string        // "YYYY-MM-DD"
  time: string        // "09:00"
}

export type BookingStatus =
  | 'idle'
  | 'selecting-date'
  | 'selecting-time'
  | 'filling-form'
  | 'submitting'
  | 'confirmed'
  | 'conflict'
  | 'error'

export interface BookingConfirmation extends BookingFormData {
  id: string
  confirmedAt: string  // ISO 8601
}

export interface BookingApiRequest {
  booking: BookingFormData
}

export interface BookingApiResponse {
  ok: boolean
  id?: string
  error?: string
  conflictedSlot?: string
}
