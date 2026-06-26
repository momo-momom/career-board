export const eventTypes = ["es", "interview", "webTest", "briefing", "other"] as const

export type EventType = (typeof eventTypes)[number]

export const eventPriorities = ["low", "medium", "high"] as const

export type EventPriority = (typeof eventPriorities)[number]

export const reminderTimings = ["none", "oneDayBefore", "threeDaysBefore", "oneWeekBefore"] as const

export type ReminderTiming = (typeof reminderTimings)[number]

export type ApplicationEvent = {
  id: string
  companyId: string
  type: EventType
  title: string
  startsAt: string
  endsAt?: string
  location?: string
  reminder: ReminderTiming
  priority: EventPriority
  completed: boolean
  memo?: string
}

export const eventTypeLabels: Record<EventType, string> = {
  es: "ES",
  interview: "面接",
  webTest: "Webテスト",
  briefing: "説明会",
  other: "その他",
}

export const eventPriorityLabels: Record<EventPriority, string> = {
  low: "低",
  medium: "中",
  high: "高",
}
