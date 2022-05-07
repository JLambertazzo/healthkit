import React from 'react'
import Date from './Date'

export default function DateRange(props) {

  const handleChangeFirst = v => {
    props.handleChange(`${v}_${props.value.split("_")[1]}`)
  }

  const handleChangeSecond = v => {
    props.handleChange(`${props.value.split("_")[0]}_${v}`)
  }

  return (
    <div>
        <Date props={props.value.split("_")[0]} handleChange={handleChangeFirst} />
         to 
        <Date props={props.value.split("_")[1]} handleChange={handleChangeSecond} />
    </div>
  )
}
