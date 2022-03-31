import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getForm } from '../../actions/form'
import { getReport } from "../../actions/report"
import Navbar from "../../components/Navbar/Navbar"
import {
    Flex, FormControl, FormLabel, Heading, HStack, Input, Box, Button, IconButton, Checkbox,
    Radio, Textarea, Divider, List, ListItem, Select, Tooltip, FormHelperText, Text, VStack
} from "@chakra-ui/react";

export default function Report() {
    const { form_id } = useParams()
    const [report, setReport] = useState(null)
    const [form, setForm] = useState(null)

    useEffect(() => {
        getReport(form_id)
            .then(res => {
                console.log("what", res)
                setReport(res.report)
            })
            .catch(console.error)
        getForm(form_id)
            .then(res => {
                setForm(res.form)
            })
            .catch(console.error)
    }, [])

    return (
        <Box>
            <Navbar />
            <Box position={'absolute'} top={'10rem'} ml={'5%'}>

                <Heading
                    fontSize={24}
                    mb={10}
                    color={'#2F8886'}> Report for form: { form ? form.name : "loading..." }

                </Heading>
            <div>
                {report && report.groups.map(g => {

                    return (<div><Text
                    color={'#2F8886'}
                    fontWeight='medium'
                    >{g}</Text>
                    <List mb={20}>
                    {report.questions.map(q => {
                        return (
                            <ListItem>
                                <Text>{q + ": " + report.questionMap[`${g}::${q}`]}</Text>
                            </ListItem>
                        )
                    })}
                    </List></div>)
                })}
            </div>
            </Box>
        </Box>
    )
}
