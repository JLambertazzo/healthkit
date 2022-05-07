import React, { useEffect, useState } from 'react'
import Date from './Date'
import DateRange from './DateRange'
import Multi from './Multi'
import Select from './Select'
import Single from './Single'
import TextInput from './Text'
import Time from './Time'
import TimeRange from './TimeRange'

// general input, stuff specified by props
// expected props: props: { type: string, value: string, options: string[], label: string }
export default function Input(props) {
    return (
        <>
            <div><label>{props.label || '[no label]'}</label></div>
            <div>
                {props.type === "multiple" && <Multi {...props} />}
                {props.type === "single" && <Single {...props} />}
                {props.type === "select" && <Select {...props} />}
                {props.type === "date" && <Date {...props} />}
                {props.type === "time" && <Time {...props} />}
                {props.type === "date-range" && <DateRange {...props} />}
                {props.type === "time-range" && <TimeRange {...props} />}
                {props.type === "number" && <TextInput {...props} />}
                {props.type === "text" && <TextInput {...props} />}
            </div>
        </>
    )
}
