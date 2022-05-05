import React from 'react'
import Time from './Time'

export default function TimeRange(props) {

  const handleChangeFirst = v => {
    props.handleChange(`${v}_${props.value.split("_")[1]}`)
  }

  const handleChangeSecond = v => {
    props.handleChange(`${props.value.split("_")[0]}_${v}`)
  }

  return (
    <div>
        <Time props={props.value.split("_")[0]} handleChange={handleChangeFirst} />
         to 
        <Time props={props.value.split("_")[1]} handleChange={handleChangeSecond} />
    </div>
  )
}
