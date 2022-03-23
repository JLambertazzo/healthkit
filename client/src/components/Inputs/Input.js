import { TextField } from '@mui/material'
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
    // two types of values to store
    const [value, setValue] = useState(props.value || '')
    const [multiValue, setMultiValue] = useState((props.options || []).reduce((acc, curr) => acc[curr] = false, {}))
    // different types of setter functions for input types
    const onEventChange = (e) => setValue(e.target.value)
    const onDirectChange = (e) => setValue(e)
    const onChangeFirst = (e) => setValue(prev => [e.target.value, prev.split("_")[1]].join("_"));
    const onChangeSecond = (e) => setValue(prev => [prev.split("_")[0], e.target.value].join("_"));
    const onMultiChange = (e) => setMultiValue(prev => ({...prev, [e.target.name]: e.target.checked}))

    const getInput = (type) => {
        switch(type) {
            case "multi":
                return (<Multi value={multiValue} options={props.options} onChange={onMultiChange} />);
            case "single":
                return (<Single value={value} options={props.options} onChange={onEventChange} />);
            case "select":
                return (<Select value={value} options={props.options} onChange={onEventChange} />);
            case "date":
                return (<Date value={value} onChange={onDirectChange} />);
            case "time":
                return (<Time value={value} onChange={onDirectChange} />);
            case "date-range":
                return (<DateRange value={value} onChangeFirst={onChangeFirst} onChangeSecond={onChangeSecond} />);
            case "time-range":
                return (<TimeRange value={value} onChangeFirst={onChangeFirst} onChangeSecond={onChangeSecond} />);
            case "number":
                return (<TextField value={value} onChange={onEventChange} type="number" />);
            default: // text or anything else
                return (<TextInput value={value} onChange={onEventChange} />);

        }
    }

    return (
        <>
            <div><label>{props.label || '[no label]'}</label></div>
            <div>{getInput(props.type)}</div>
        </>
    )
}
