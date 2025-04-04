import type { JSX } from 'react'

interface ICardProps {
  children: React.ReactNode
}

export function Card(props: ICardProps): JSX.Element {
  const { children } = props
  return (
    <div className="grid grid-cols-1 bg-gradient-to-r from-slate-100 to-slate-200 m-5 rounded-lg">
      <div className="m-5">{children}</div>
    </div>
  )
}
