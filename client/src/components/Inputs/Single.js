import React from 'react'
import { Radio, RadioGroup, FormControlLabel } from '@mui/material'

export default function Single(props) {
  return (
    <RadioGroup name="single-select-group" value={props.value} onChange={props.onChange}>
        {props.options.map(option => (
            <FormControlLabel value={option} label={option} control={<Radio />} />
        ))}
    </RadioGroup>
  )
}
