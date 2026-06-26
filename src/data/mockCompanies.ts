import type { Company } from "../types/company"

export const mockCompanies: Company[] = [
  {
    id: "sample-tech",
    name: "株式会社サンプルテック",
    industry: "IT",
    status: "inProgress",
    aspirationLevel: 4,
    nextEventId: "sample-tech-es",
    links: [
      {
        id: "sample-tech-recruit",
        label: "採用ページ",
        url: "https://example.com/sample-tech/recruit",
      },
      {
        id: "sample-tech-ir",
        label: "IR資料",
        url: "https://example.com/sample-tech/ir",
      },
    ],
    createdAt: "2026-06-01T09:00:00+09:00",
    updatedAt: "2026-06-20T18:30:00+09:00",
  },
  {
    id: "mirai-shoji",
    name: "未来商事株式会社",
    industry: "商社",
    status: "inProgress",
    aspirationLevel: 5,
    nextEventId: "mirai-shoji-interview",
    links: [
      {
        id: "mirai-shoji-recruit",
        label: "採用ページ",
        url: "https://example.com/mirai-shoji/recruit",
      },
    ],
    createdAt: "2026-06-03T10:00:00+09:00",
    updatedAt: "2026-06-21T12:00:00+09:00",
  },
  {
    id: "greenworks",
    name: "GreenWorks株式会社",
    industry: "メーカー",
    status: "inProgress",
    aspirationLevel: 3,
    nextEventId: "greenworks-web-test",
    links: [
      {
        id: "greenworks-recruit",
        label: "採用ページ",
        url: "https://example.com/greenworks/recruit",
      },
      {
        id: "greenworks-video",
        label: "会社説明会動画",
        url: "https://example.com/greenworks/movie",
      },
    ],
    createdAt: "2026-06-05T14:00:00+09:00",
    updatedAt: "2026-06-22T20:00:00+09:00",
  },
  {
    id: "nova-finance",
    name: "Nova Finance",
    industry: "金融",
    status: "planned",
    aspirationLevel: 3,
    nextEventId: "nova-finance-briefing",
    links: [
      {
        id: "nova-finance-recruit",
        label: "採用ページ",
        url: "https://example.com/nova-finance/recruit",
      },
    ],
    createdAt: "2026-06-10T09:30:00+09:00",
    updatedAt: "2026-06-23T09:30:00+09:00",
  },
]
