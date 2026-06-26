import type { HTMLAttributes, ReactNode } from "react"

type BadgeTone = "blue" | "red" | "orange" | "green" | "gray"

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  tone?: BadgeTone
}

export function Badge({ children, className = "", tone = "blue", ...props }: BadgeProps) {
  return (
    <span className={`badge badge--${tone} ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}
