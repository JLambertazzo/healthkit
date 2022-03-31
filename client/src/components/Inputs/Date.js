import React from 'react'
// import { LocalizationProvider, StaticDatePicker } from '@mui/lab'
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from '@mui/material'
import { useState } from 'react'

export default function Date(props) {
  return (
      // <LocalizationProvider dateAdapter={AdapterDateFns}> USE THIS LATER - issues with mui date picker
      //     <StaticDatePicker value={v} onChange={sV} renderInput={(params) => <TextField {...params} />} />
      // </LocalizationProvider>
      <input type="date" value={props.value} onChange={props.onChange} />
  )
}
