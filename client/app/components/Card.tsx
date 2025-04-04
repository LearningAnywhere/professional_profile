import type { JSX } from 'react'

interface ICardProps {
  children: React.ReactNode
  header?: string
}

export function Card(props: ICardProps): JSX.Element {
  const { children, header } = props
  return (
    <div className="grid grid-cols-1 bg-gradient-to-r from-slate-100 to-slate-200 m-5 rounded-lg">
      <div className="m-5">
        {header && (
          <div className="m-5">
            {' '}
            <h2 className="text-2xl font-bold mb-5">{header}</h2>{' '}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
