export type NavKey = "dashboard" | "companies" | "calendar" | "memos" | "settings"

type NavItem = {
  key: NavKey
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { key: "dashboard", label: "ホーム", icon: "⌂" },
  { key: "companies", label: "企業", icon: "□" },
  { key: "calendar", label: "カレンダー", icon: "◇" },
  { key: "memos", label: "メモ", icon: "▤" },
  { key: "settings", label: "設定", icon: "⚙" },
]

type BottomNavProps = {
  active: NavKey
  onChange: (key: NavKey) => void
}

export function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="メインナビゲーション">
      {navItems.map((item) => {
        const isActive = item.key === active

        return (
          <button
            key={item.key}
            type="button"
            className={`bottom-nav__item${isActive ? " bottom-nav__item--active" : ""}`}
            aria-current={isActive ? "page" : undefined}
            onClick={() => onChange(item.key)}
          >
            <span className="bottom-nav__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
