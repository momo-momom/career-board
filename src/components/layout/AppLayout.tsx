import type { ReactNode } from "react"
import { BottomNav, type NavKey } from "./BottomNav"

type AppLayoutProps = {
  activeNav: NavKey
  children: ReactNode
  onNavChange: (key: NavKey) => void
}

export function AppLayout({ activeNav, children, onNavChange }: AppLayoutProps) {
  return (
    <div className="app-background">
      <div className="phone-shell">
        <main className="screen-content">{children}</main>
        <BottomNav active={activeNav} onChange={onNavChange} />
      </div>
    </div>
  )
}
