import React from 'react'
import { TextField } from '@mui/material'

export default function TextInput(props) {
    return (
        <TextField value={props.value} onChange={props.onChange} />
    )
}
