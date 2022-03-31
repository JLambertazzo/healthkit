import React from 'react'
// import { Select as S, MenuItem } from '@mui/material'
import { Select as S } from '@chakra-ui/react'

export default function Select(props) {
  return (
    <S value={props.value} onChange={props.onChange}>
        {props.options.map(option => (
            <option value={option}>{option}</option>
        ))}
    </S>
  )
}
