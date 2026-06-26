export const companyStatuses = ["planned", "inProgress", "offer", "rejected", "closed"] as const

export type CompanyStatus = (typeof companyStatuses)[number]

export type AspirationLevel = 1 | 2 | 3 | 4 | 5

export type CompanyLink = {
  id: string
  label: string
  url: string
}

export type Company = {
  id: string
  name: string
  industry: string
  status: CompanyStatus
  aspirationLevel: AspirationLevel
  nextEventId?: string
  links: CompanyLink[]
  createdAt: string
  updatedAt: string
}

export const companyStatusLabels: Record<CompanyStatus, string> = {
  planned: "応募予定",
  inProgress: "選考中",
  offer: "内定",
  rejected: "見送り",
  closed: "終了",
}
