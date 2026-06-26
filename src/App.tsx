import { useMemo, useState } from "react"
import { mockCompanies } from "./data/mockCompanies"
import { mockEvents } from "./data/mockEvents"
import { mockMemos } from "./data/mockMemos"
import { AppLayout } from "./components/layout/AppLayout"
import type { NavKey } from "./components/layout/BottomNav"
import { PageHeader } from "./components/layout/PageHeader"
import { Badge } from "./components/ui/Badge"
import { Button } from "./components/ui/Button"
import { Card } from "./components/ui/Card"
import { companyStatusLabels } from "./types/company"
import { eventPriorityLabels, eventTypeLabels } from "./types/event"

function App() {
  const [activeNav, setActiveNav] = useState<NavKey>("dashboard")

  const nextEvent = useMemo(
    () =>
      [...mockEvents]
        .filter((event) => !event.completed)
        .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())[0],
    [],
  )

  const nextEventCompany = mockCompanies.find((company) => company.id === nextEvent?.companyId)
  const inProgressCount = mockCompanies.filter((company) => company.status === "inProgress").length

  return (
    <AppLayout activeNav={activeNav} onNavChange={setActiveNav}>
      <PageHeader
        title="career-board"
        dateLabel="2026年6月26日"
        description="Task 2では、画面移植で使う型定義とモックデータを用意しました。"
        action={
          <Button aria-label="通知を確認する" variant="ghost">
            通知
          </Button>
        }
      />

      <section className="content-stack" aria-label="型定義とモックデータの確認">
        <div className="summary-grid">
          <Card className="summary-card">
            <p className="summary-card__value">{mockCompanies.length}</p>
            <p className="summary-card__label">登録企業</p>
          </Card>
          <Card className="summary-card">
            <p className="summary-card__value">{mockEvents.length}</p>
            <p className="summary-card__label">予定</p>
          </Card>
          <Card className="summary-card">
            <p className="summary-card__value">{mockMemos.length}</p>
            <p className="summary-card__label">メモ</p>
          </Card>
        </div>

        <Card>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Task 2</p>
              <h2>型定義・モックデータ</h2>
            </div>
            <Badge tone="green">実装中</Badge>
          </div>
          <p className="lead">
            Company、ApplicationEvent、Memoの型を定義し、Figmaモックに近いサンプルデータを
            TypeScriptで安全に扱える形にしました。
          </p>
        </Card>

        {nextEvent && nextEventCompany ? (
          <Card>
            <div className="section-heading">
              <div>
                <p className="eyebrow">次の予定</p>
                <h2>{nextEventCompany.name}</h2>
              </div>
              <Badge tone="orange">{eventTypeLabels[nextEvent.type]}</Badge>
            </div>
            <p className="lead">{nextEvent.title}</p>
            <div className="data-list">
              <span>{formatDateTime(nextEvent.startsAt)}</span>
              <span>優先度: {eventPriorityLabels[nextEvent.priority]}</span>
              <span>ステータス: {companyStatusLabels[nextEventCompany.status]}</span>
            </div>
          </Card>
        ) : null}

        <Card className="checklist-card">
          <h2>モックデータの内訳</h2>
          <ul className="task-list">
            <li>選考中の企業: {inProgressCount}社</li>
            <li>関連リンク: {mockCompanies.reduce((total, company) => total + company.links.length, 0)}件</li>
            <li>タグ付きメモ: {mockMemos.filter((memo) => memo.tags.length > 0).length}件</li>
          </ul>
        </Card>
      </section>
    </AppLayout>
  )
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value))
}

export default App
