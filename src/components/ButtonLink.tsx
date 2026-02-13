import { Link } from 'react-router-dom'

type Props = {
  to: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function ButtonLink({ to, children, className, external }: Props) {
  const cls = `pill ${className || ''}`.trim()
  if (external) {
    return (
      <a className={cls} href={to} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link className={cls} to={to}>
      {children}
    </Link>
  )
}
