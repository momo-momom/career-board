import type { ReactNode } from "react"

type PageHeaderProps = {
  title: string
  description?: string
  dateLabel?: string
  action?: ReactNode
}

export function PageHeader({ title, description, dateLabel, action }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header__top">
        {dateLabel ? <p className="page-header__date">{dateLabel}</p> : null}
        {action}
      </div>
      <h1 className="page-header__title">{title}</h1>
      {description ? <p className="page-header__description">{description}</p> : null}
    </header>
  )
}
