import type { JSX } from 'react'
import * as React from 'react'
import Chip from '@mui/material/Chip'

interface ITagProps {
  title: string
}

export function Tag(props: ITagProps): JSX.Element {
  const { title } = props
  // TODO: Add some color variants
  return (
    <Chip
      label={title}
      className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1"
      sx={{
        fontSize: '1rem',
        padding: '0.2rem 0.5rem',
        maxWidth: '12rem',
        height: 'auto',
        '& .MuiChip-label': {
          display: 'block',
          whiteSpace: 'normal',
        },
      }}
    />
  )
}
