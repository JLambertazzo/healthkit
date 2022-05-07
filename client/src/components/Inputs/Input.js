import React, { useEffect, useState } from 'react'
import Date from './Date'
import DateRange from './DateRange'
import Multi from './Multi'
import Select from './Select'
import Single from './Single'
import TextInput from './Text'
import Time from './Time'
import TimeRange from './TimeRange'
import { Box, IconButton, SlideFade } from '@chakra-ui/react'
import { FaCommentAlt } from 'react-icons/fa'
import { Input as CUIInput } from '@chakra-ui/react'

// general input, stuff specified by props
// expected props: props: { type: string, value: string, options: string[], label: string }
export default function Input(props) {
    const [comment, setComment] = useState('')
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(p => !p)

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
            {props.history.length > 0 && <div style={{display: 'flex', flexDirection: 'row'}}>
                <IconButton onClick={toggle} aria-label='toggle comment' icon={<FaCommentAlt />} />
                <SlideFade in={open} style={{zIndex: 10}}>
                    <Box>
                        <CUIInput
                            type="text"
                            value={comment}
                            placeholder='add comment here'
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </Box>
                </SlideFade>
            </div>}
        </>
    )
}
