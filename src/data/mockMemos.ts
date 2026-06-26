import type { Memo } from "../types/memo"

export const mockMemos: Memo[] = [
  {
    id: "memo-interview-prep",
    companyId: "mirai-shoji",
    title: "面接対策まとめ",
    body: "自己紹介、志望動機、学生時代に力を入れたことを1分で話せるようにする。",
    tags: ["面接", "準備"],
    updatedAt: "2026-06-24T18:00:00+09:00",
  },
  {
    id: "memo-it-research",
    companyId: "sample-tech",
    title: "業界研究ノート（IT）",
    body: "SaaS、受託開発、自社サービスの違いを整理する。",
    tags: ["IT", "企業研究"],
    updatedAt: "2026-06-22T20:00:00+09:00",
  },
  {
    id: "memo-self-pr",
    title: "自己PR草稿",
    body: "課題発見から改善まで動いた経験を、結論から説明する。",
    tags: ["ES"],
    updatedAt: "2026-06-21T09:00:00+09:00",
  },
]
