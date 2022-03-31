import React from 'react'
import { Select as S, MenuItem } from '@mui/material'

export default function Select(props) {
  return (
    <S value={props.value} onChange={props.onChange}>
        {props.options.map(option => (
            <MenuItem value={option}>{option}</MenuItem>
        ))}
    </S>
  )
}
