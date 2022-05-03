import React from 'react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

export default function Multi(props) {
  return (
    <CheckboxGroup>
      <Stack direction="column">
        {props.options.map(option => (
          <Checkbox value={option} key={option} onChange={props.onChange}>{option}</Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  )
}
