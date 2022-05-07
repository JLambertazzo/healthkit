import React from 'react'

export default function Date(props) {
  return (
      <input type="date" value={props.value} onChange={e => props.handleChange(e.target.value)} />
  )
}
