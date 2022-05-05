import React from 'react'

export default function Time(props) {
  return (
    <div>
        <input type="time" value={props.value} onChange={(e) => props.handleChange(e.target.value)} />
    </div>
  )
}
