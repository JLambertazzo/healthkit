import React from 'react'
// import { Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

export default function Multi(props) {
  return (
    <CheckboxGroup>
      <Stack direction="column">
        {props.options.map(option => (
          // <FormControlLabel label={option} control={<Checkbox name={option} onChange={props.onChange} />} />
          <Checkbox value={option} key={option}>{option}</Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  )
}
