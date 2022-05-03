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
    const { handleChange } = props
    // two types of values to store
    const [value, setValue] = useState(props.value || '')
    const [multiValue, setMultiValue] = useState((props.options || []).reduce(function (acc, curr){ 
        return { ...acc, [curr]: false }
    }, {}))
    const [multiList, setMultiList] = useState([])
    // different types of setter functions for input types
    const onEventChange = (e) => {
        setValue(e.target.value)
        props.handleChange(props.id, e.target.value)
    }
    const onDirectChange = (e) => {
        setValue(e)
        props.handleChange(props.id, e)
    }
    const onChangeFirst = (e) => {
        setValue(prev => [e.target.value, prev.split("_")[1]].join("_"));
        props.handleChange(props.id, value)
    }
    const onChangeSecond = (e) => {
        setValue(prev => [prev.split("_")[0], e.target.value].join("_"));
        props.handleChange(props.id, value)
    }
    const onMultiChange = (e) => {
        // setMultiValue(prev => ({...prev, [e.target.name]: e.target.checked}))
        const copy = {...multiValue};
        copy[e.target.value] = !copy[e.target.value];
        setMultiValue(copy);
        if (copy[e.target.value]) {
            var old = multiList;
            old.push(e.target.value)
            setMultiList(old);
        }
        else{
            var old = multiList;
            var i = old.indexOf(e.target.value);
            old.splice(i, 1)
            setMultiList(old);
        }
        handleChange(props.id, multiList.toString())
    }

    const getInput = (type) => {
        switch(type) {
            case "multiple":
                return (<Multi value={value} options={props.options} onChange={onMultiChange} />);
            case "single":
                return (<Single value={value} options={props.options} onChange={onDirectChange} />);
            case "select":
                return (<Select value={value} options={props.options} onChange={onEventChange} />);
            case "date":
                return (<Date value={value} onChange={onEventChange} />);
            case "time":
                return (<Time value={value} onChange={onDirectChange} />);
            case "date-range":
                return (<DateRange value={value} onChangeFirst={onChangeFirst} onChangeSecond={onChangeSecond} />);
            case "time-range":
                return (<TimeRange value={value} onChangeFirst={onChangeFirst} onChangeSecond={onChangeSecond} />);
            case "number":
                return (<TextInput onChange={onDirectChange} type="number" />);
            default: // text or anything else
                return (<TextInput onChange={onEventChange} type="text" />);

        }
    }

    return (
        <>
            <div><label>{props.label || '[no label]'}</label></div>
            <div>{getInput(props.type)}</div>
        </>
    )
}
