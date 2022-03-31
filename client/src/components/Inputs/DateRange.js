import React from 'react'
import Date from './Date'

export default function DateRange(props) {
  return (
    <div>
        <Date props={props.value.split("_")[0]} onChange={props.onChangeFirst} />
         to 
        <Date props={props.value.split("_")[1]} onChange={props.onChangeSecond} />
    </div>
  )
}
