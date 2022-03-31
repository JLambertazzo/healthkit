import React from 'react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

export default function Single(props) {
  return (
    <RadioGroup value={props.value} onChange={props.onChange}>
      <Stack direction="column">
        {props.options.map(option => (
            <Radio value={option} key={option}>{option}</Radio>
        ))}
      </Stack>
    </RadioGroup>
  )
}
