import React from 'react'
import { TimePicker } from '@mui/lab'
import { TextField } from '@mui/material'

export default function Time(props) {
  return (
    <div>
        {/* figure out MUI thing */}
        <input type="time" value={props.value} onChange={props.onChange} />
    </div>
  )
}
