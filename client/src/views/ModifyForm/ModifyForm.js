import './ModifyForm.css'
import {
    Flex, FormControl, FormLabel, Heading, HStack, Input, Box, Button, IconButton, Checkbox,
    Radio, Textarea, Divider, List, Select, Tooltip, useToast
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from 'react'
import { createForm, getForm, updateForm } from '../../actions/form'
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {FaPlus, FaArrowLeft, FaTrash} from "react-icons/fa";


const types = [
    "text",
    "multiple",
    "single",
    "date",
    "time",
    "date-range",
    "time-range",
    "number",
    // "address" // not implemented
]

// Page to create a new form
function CreateForm(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [fields, setFields] = useState([])
    const [focused, setFocused] = useState("")
    const [form, setForm] = useState(null) // need this for updates
    const history = useHistory()
    const { form_id } = useParams() // defined if we are editing a form
    const toast = useToast();

    useEffect(() => {
        if (form_id) {
            getForm(form_id)
                .then(({form}) => {
                    const { name, description, fields } = form
                    if (!name || !description || !fields) return
                    setTitle(name);
                    setDesc(description);
                    setFields(fields);
                    setForm(form);
                })
                .catch(console.error);
        }
    }, [form_id])

    const submitForm = () => {
        // validate then create
        if (!title) {
            toast({
                title: "Title Required",
                description: "Please enter a title for the form",
                status: "error",
                isClosable: true,
            })
            return
        }
        if (!desc) {
            toast({
                title: "Description Required",
                description: "Please enter a description for the form",
                status: "error",
                isClosable: true,
            })
            return
        }
        if (fields.length === 0) {
            toast({
                title: "Fields Required",
                description: "Please enter at least one field",
                status: "error",
                isClosable: true,
            })
            return
        }
        // validate each field
        for (let i = 0; i < fields.length; i++) {
            if (!fields[i].label) {
                toast({
                    title: "Question Missing",
                    description: `Please enter a question for question ${i + 1}`,
                    status: "error",
                    isClosable: true,
                })
                return
            }
            if (!fields[i].type) {
                toast({
                    title: "Type Missing",
                    description: `Please select a type for question ${i + 1}`,
                    status: "error",
                    isClosable: true,
                })
                return
            }
            if (["multiple", "single"].includes(fields[i].type) && fields[i].options.length === 0) {
                toast({
                    title: "Options Required",
                    description: `Please enter options for question ${i + 1}`,
                    status: "error",
                    isClosable: true,
                })
                return
            }
            if (fields[i].options.filter(opt => !opt).length > 0) {
                toast({
                    title: "Blank Option Found",
                    description: `Please delete or fill this option on question ${i + 1}`,
                    status: "error",
                    isClosable: true,
                })
                return
            }
        }
        createForm(title, desc, fields, props.user.username)
            .then(() => {
                toast({
                    title: "Form Created",
                    status: "success",
                    isClosable: true
                })
                history.push('/myforms')
            })
            .catch(console.error)
    }

    const update = () => {
        if (!form) return
        const newForm = {...form, name: title, description: desc, fields: fields}
        updateForm(newForm)
            .then(form => {
                history.push('/myforms')
            })
            .catch(console.error)
    }

    const newField = () => {
        setFields(prev => {
            return prev.concat({
                label: "",
                options: [],
                index: fields.length > 0 ? fields[fields.length - 1].index + 1 : 0
            })
        })
    }

    const newFieldAfter = (index) => {
        setFields(prev => {
            const copy = [...prev];
            copy.splice(index + 1, 0, {
                label: "",
                options: [],
                index: fields[fields.length - 1].index + 1
            });
            return copy;
        })
    }

    const setFieldLabel = (index, label) => {
        setFields(prev => {
            const copy = [...prev];
            copy[index].label = label;
            return copy;
        })
    }

    const setFieldType = (index, type) => {
        setFields(prev => {
            const copy = [...prev];
            copy[index].type = type;
            return copy;
        })
    }

    const removeField = (index) => {
        setFields(prev => prev.filter((_,i) => i !== index));
    }

    const addOpt = (questionIndex, option) => {
        setFields(prev => {
            const copy = [...prev]
            copy[questionIndex].options = copy[questionIndex].options.concat(option)
            return copy
        })
    }

    const setOpt = (questionIndex, optIndex, value) => {
        setFields(prev => {
            const copy = [...prev]
            copy[questionIndex].options[optIndex] = value
            return copy
        })
    }

    const delOpt = (questionIndex, optIndex) => {
        setFields(prev => {
            const copy = [...prev];
            copy[questionIndex].options = copy[questionIndex].options.filter((_,i) => i !== optIndex);
            return copy;
        })
    }

    const getOptions = (type, options, qindex) => {
        if (!["multiple", "single"].includes(type)) return
        let opts = []
        if (type === "multiple") {
            opts = options.map((opt, index) => <HStack
            mt={5}
            >

                <IconButton
                icon={ <FaTrash
                    color={'#a0aec0'}/>}
                onClick={() => delOpt(qindex, index)}/>

                    <Checkbox isDisabled bg={'gray.200'} borderRadius={'sm'}/>
                    <Input
                        color={'black'}
                        w={'40%'}
                        borderWidth={1}
                        borderColor={'gray.200'}
                        focusBorderColor={'#2f8886'}
                        _placeholder={{opacity: 0.4, color: 'black' }}
                        placeholder={"Option"}
                        autoFocus={focused === `${qindex}-${index}`} onFocus={() => setFocused(`${qindex}-${index}`)} variant="standard" value={opt} onChange={(e) => setOpt(qindex, index, e.target.value)} />
                </HStack>)

        } else {
            opts = options.map((opt, index) => <HStack
                mt={5}
                key={`${qindex}-${index}-${opt}`}
            ><IconButton  icon={ <FaTrash
                color={'#a0aec0'}/>} onClick={() => delOpt(qindex, index)}/>
                                            <Radio
                                                isDisabled
                                                outline={'solid 2px #a0aec0'}
                                                borderWidth={2}
                                                borderColor={'teal'}
                                                   colorScheme={'teal'}

                                            />
                                            <Input
                                                color={'black'}
                                                w={'40%'}
                                                borderWidth={1}
                                                borderColor={'gray.200'}
                                                focusBorderColor={'#2f8886'}
                                                _placeholder={{opacity: 0.4, color: 'black' }}
                                                placeholder={"Option"}
                                                autoFocus={focused === `${qindex}-${index}`} onFocus={() => setFocused(`${qindex}-${index}`)} variant="standard" value={opt} onChange={(e) => setOpt(qindex, index, e.target.value)}
                                            />


                                    </HStack>)
        }
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                {opts}
                <Button width={"max-content"}
                        borderColor={'#2f8886'}
                        borderWith={1}
                        color={'#2F8886'}
                        my={8}
                        variant={'outline'}
                        onClick={() => addOpt(qindex, "")}>Add Option</Button>
            </div>
        )
    }

    return (
        <Box bg={'white'} height={'100vh'}>
            <Navbar/>
            <div style={{display: "grid", gridTemplateColumns: "6fr 1fr", height: '100vh'}}>
                <FormControl isRequired className="createform-cont">
                    <Button my={10} leftIcon={<FaArrowLeft />}
                            onClick={() => history.goBack()}
                            colorScheme='teal' variant='solid'>
                        Go Back
                    </Button>
                        <Heading fontSize={30}>Create a Form</Heading>


                    <Divider
                    bg={'gray.300'}
                    mt={5}
                    w={'30%'}
                    />
                    <Box
                        mb={10}
                        className="form-info">
                        <FormLabel htmlFor={"outlined-basic"}
                                   color={'black'}
                        >Form Title</FormLabel>
                    <Input id="outlined-basic" className="form-field" label="Title"
                           color={'black'}
                           w={'40%'}
                           borderColor={'gray.200'}
                           focusBorderColor={'#2f8886'}
                           _hover={{borderColor:'gray.200'}}
                           _placeholder={{opacity: 0.4, color: 'black' }}
                           placeholder={"Title"}
                           mb={10}
                           value={title} onChange={(e) => setTitle(e.target.value)} />
                        <FormLabel htmlFor={"outlined-multiline-static"}
                        color={'black'}
                        >Form Description</FormLabel>
                        <Textarea
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            id="outlined-multiline-static"
                            name={"desc"}
                            label="Description"
                            placeholder={"Description"}
                            className={"form-field"}
                            _hover={{borderColor:'gray.200'}}
                            color={'black'}
                            w={'40%'}
                            borderColor={'gray.200'}
                            focusBorderColor={'#2f8886'}
                            _placeholder={{opacity: 0.4, color: 'black' }}
                        />
                    </Box>
                    <Flex w={'60%'} justify={'space-between'}>
                        <Heading
                            fontSize={30}>Questions</Heading>
                        <IconButton
                            onClick={() => newField()}
                            _hover={{bg: '#278280'}}
                            _active={{bg: '#278280'}}
                            bg={'#2f8886'}
                            icon={<FaPlus
                            color={'white'}
                            />}/>
                    </Flex>
                    <Divider
                        bg={'gray.300'}
                        mt={5}
                        w={'60%'}
                    />

                    <Box mb={15}>
                        <List>
                            {
                                fields.map((field, index) => (
                                    <Box key={`q${index}-${field.label}`} marginTop={'2rem'} boxShadow={'sm'}>
                                        <FormControl>
                                        <HStack boxShadow={'md'}
                                        p={5}
                                        >
                                            <Tooltip label={'Add after'}>
                                                <IconButton variant='ghost' color='gray.400' aria-label='add after' onClick={() => newFieldAfter(index)} icon={<FaPlus/>}/>
                                            </Tooltip>
                                            <IconButton variant='ghost' color='gray.400' aria-label='delete' onClick={() => removeField(index)} icon={<FaTrash/>}/>

                                                <Input
                                                    w={'40%'}
                                                    borderColor={'gray.200'}
                                                    focusBorderColor={'#2f8886'}
                                                    _hover={{borderColor:'gray.200'}}
                                                    _placeholder={{opacity: 0.4, color: 'black' }}
                                                    placeholder={"Type your question..."}
                                                    color={'black'}
                                                    autoFocus={focused === `${index}-`} onFocus={() => setFocused(`${index}-`)}
                                                    value={field.label} onChange={(e) => setFieldLabel(index, e.target.value)} />

                                                <Box>
                                                <Select
                                                    id={"select"}
                                                    placeholder={"Type of answer"}
                                                    w={'fit-content'}
                                                    labelId={"type-label-" + index}
                                                    value={field.type}
                                                    borderColor={'gray.200'}
                                                    focusBorderColor={'#2f8886'}
                                                    _hover={{borderColor:'gray.200'}}
                                                    color={'#2f8886'}
                                                    onChange={(e) => setFieldType(index, e.target.value)}
                                                >
                                                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                                                </Select>
                                                    {/*<FormHelperText color={"gray.300"}>We'll never share your email.</FormHelperText>*/}
                                                </Box>
                                        </HStack>
                                        </FormControl>
                                        {getOptions(field.type, field.options, index)}
                                    </Box>
                                ))
                            }
                        </List>
                    </Box>


                    <Button
                        bg={'#2f8886'}
                        color={'white'}
                        mb={'2rem'}
                        _hover={{bg: '#278280'}} onClick={form_id ? update : submitForm} sx={{marginTop: 2}}>{form_id ? "Update Form" : "Create Form"}</Button>
                </FormControl>

            </div>
        </Box>

    );
}

export default CreateForm;
