import React, { useEffect } from 'react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

export default function Multi(props) {

  const handleChange = e => {
    const arr = props.value.split(',')
    let asString = ""
    if (arr.includes(e)) {
      asString = arr.filter(opt => opt !== e).join(',')
    } else {
      asString = [...arr, e].join(',')
    }
    asString = asString.replace(/^,|,$/g, '')
    console.log('sending')
    props.handleChange(asString)
  }

  return (
    <CheckboxGroup value={props.value.split(',')}>
      <Stack direction="column">
        {props.options.map(option => (
          <Checkbox
            value={option}
            key={option}
            onChange={(e) => handleChange(e.target.value)}
          >
            {option}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  )
}
