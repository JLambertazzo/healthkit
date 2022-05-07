import React, { useEffect } from 'react'
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
            <Input value={props.value} onChange={(e) => props.handleChange(e.target.value)} /> :
            <NumberInput value={props.value} onChange={(e) => props.handleChange(e.target.value)}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
    )
}
