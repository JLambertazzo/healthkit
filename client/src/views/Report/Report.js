import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getForm } from '../../actions/form'
import { getReport } from "../../actions/report"
import { List, ListItem, ListItemText, Typography } from '@mui/material'

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
        <div>
            Report for form: { form ? form.name : "loading..." }
            <div>
                {report && report.groups.map(g => {
                    
                    return (<div><Typography>{g}</Typography>
                    <List>
                    {report.questions.map(q => {
                        return (
                            <ListItem>
                                <ListItemText>{q + ": " + report.questionMap[`${g}::${q}`]}</ListItemText>
                            </ListItem>    
                        )
                    })}
                    </List></div>)
                })}
            </div>
        </div>
    )
}
