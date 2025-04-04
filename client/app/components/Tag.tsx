import type { JSX } from 'react'

interface ITagProps {
  title: string
}

export function Tag(props: ITagProps): JSX.Element {
  const { title } = props
  // TODO: Add some color variants
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1">
      {title}
    </div>
  )
}
