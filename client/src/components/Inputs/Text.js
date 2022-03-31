import React from 'react'
import {
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react"

export default function TextInput(props) {
    return (
        props.type === "text" ?
            <Input value={props.value} onChange={props.onChange} /> :
            <NumberInput value={props.value} onChange={props.onChange}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
    )
}
