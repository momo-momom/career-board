import { useState } from "react"
import { AppLayout } from "./components/layout/AppLayout"
import type { NavKey } from "./components/layout/BottomNav"
import { PageHeader } from "./components/layout/PageHeader"
import { Badge } from "./components/ui/Badge"
import { Button } from "./components/ui/Button"
import { Card } from "./components/ui/Card"

function App() {
  const [activeNav, setActiveNav] = useState<NavKey>("dashboard")

  return (
    <AppLayout activeNav={activeNav} onNavChange={setActiveNav}>
      <PageHeader
        title="career-board"
        dateLabel="2026年6月26日"
        description="Figmaモックを参考に、共通レイアウトから移植を始めます。"
        action={
          <Button aria-label="通知を確認する" variant="ghost">
            通知
          </Button>
        }
      />

      <section className="content-stack" aria-label="実装状況">
        <Card>
          <div className="section-heading">
            <div>
              <p className="eyebrow">Task 1</p>
              <h2>共通レイアウト</h2>
            </div>
            <Badge tone="green">実装中</Badge>
          </div>
          <p className="lead">
            画面移植の土台として、スマホ幅のアプリ枠、下部ナビゲーション、
            ヘッダー、カード、バッジ、ボタンを用意しました。
          </p>
        </Card>

        <Card className="checklist-card">
          <h2>次に移植する画面</h2>
          <ul className="task-list">
            <li>ダッシュボード</li>
            <li>企業一覧</li>
            <li>企業詳細</li>
          </ul>
        </Card>
      </section>
    </AppLayout>
  )
}

export default App
