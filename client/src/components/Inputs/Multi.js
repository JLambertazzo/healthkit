import React from 'react'
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material'

export default function Multi(props) {
  return (
    <FormGroup>
        {props.options.map(option => (
            <FormControlLabel label={option} control={<Checkbox name={option} onChange={props.onChange} />} />
        ))}
    </FormGroup>
  )
}
