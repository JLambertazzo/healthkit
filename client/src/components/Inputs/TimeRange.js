import React from 'react'
import Time from './Time'

export default function TimeRange(props) {
  return (
    <div>
        <Time props={props.value.split("_")[0]} onChange={props.onChangeFirst} />
         to 
        <Time props={props.value.split("_")[1]} onChange={props.onChangeSecond} />
    </div>
  )
}
