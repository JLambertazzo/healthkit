import Navbar from "../../components/Navbar/Navbar";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import OwnThumbnail from "../../components/Thumbnail/OwnThumbnail";
import SentThumbnail from "../../components/Thumbnail/SentThumbnail";
import Sidebar from "../../components/Sidebar/Sidebar";
import './MyForms.css'
import {FaPlus} from "react-icons/fa";
import { useHistory } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import { checkLoggedIn } from "../../actions/user";
import { deleteForm } from "../../actions/form";
import ShareForm from "../ShareForm/ShareForm";
import {Flex, FormControl, FormLabel, Heading, HStack, Input, Box, Button, Image, Text} from "@chakra-ui/react";
import empty from "../MyForms/emptycreated.svg";

function MyForms(props) {
    const history = useHistory();
    const [user, setUser] = useState(null) // seperate from user so it reloads every visit

    useEffect(() => {
        checkLoggedIn(setUser);
    }, [])

    useEffect(() => {
        if (!user) return;
        console.log('updated to user', user)
        console.log(
            'should see',
            user.sentForms.filter(f => f.parent && !f.group),
            user.sentForms.filter(f => f.sent)
        )
    }, [user])

    const handleDelete = (id) => {
        deleteForm(id)
            .then(_ => {
                setUser(prev => {
                    const copy = {...prev}
                    copy.sentForms = copy.sentForms.filter(form => form._id.toString() !== id.toString())
                    return copy;
                })
            })
            .catch(console.error)
    }

    const [open, setOpen] = useState(false);
    const [formName, setFormName] = useState(null);
    const [formId, setFormId] = useState(null);

    const handleClose = () => {
        setOpen(false);
        setFormName("");
        setFormId("");
    }
    const handleOpen = (form) => {
        setOpen(!open);
        setFormName(form.name);
        setFormId(form._id)
    }

    return (
        <div>
            <Navbar/>
            <div className="dashboard">

                <div className="dash-side">
                    <Sidebar
                    current="myforms"
                    />
                </div>
                <div className="dash-main myforms">
                    <ShareForm open={open} formId={formId} formName={formName} user={user} handleClose={handleClose}/>
                    <Heading
                        m={'5%'}
                        mt={'5rem'}
                        mb={'2rem'}
                        fontSize={'20px'} color={'#2f8886'}>Created Forms</Heading>
                    <div className="thumb-list myforms">
                        {user &&
                            user.sentForms.length > 0 && (

                            user.sentForms.map((form) => {
                            return (!form.sent && <OwnThumbnail
                                title={form.name}
                                date={"Dec. 28, 2021"}
                                onDelete={() => handleDelete(form._id)}
                                id={form._id}
                                handleOpen={handleOpen}
                                form={form}
                            />)
                        }))}
                        {user && user.sentForms.length === 0 && (
                            <HStack
                                w={'70%'}
                                my={'2rem'}
                            >
                                <Image
                                    src={empty}
                                    boxSize={'150px'}
                                />

                                <Text
                                    color={'#2F8886'}
                                    marginLeft={'2rem !important'}
                                    fontWeight={500}
                                >Nothing here yet! Get started by <Text
                                    display={'inline'}
                                    cursor={'pointer'}
                                    fontWeight={800}
                                    onClick={() => history.push('/createform')}>creating a form</Text>.
                                </Text>
                            </HStack>
                        )}

                    </div>
                    <Heading
                        m={'5%'}
                        mt={'5rem'}
                        mb={'2rem'}
                        fontSize={'20px'}
                             color={'#2f8886'}>Sent Forms</Heading>
                    <div className="thumb-list myforms">
                        {user && user.sentForms
                                    .filter(f => f.sent && f.parent && !f.group)
                                    .map((form) => {
                            return (<SentThumbnail
                                title={form.name}
                                org={""}
                                complete={form.isSubmitted}
                                id={form._id}
                            />)
                        })}
                    </div>
                    <div className="action-btn-cont">
                        <Button className="action-btn" leftIcon={<FaPlus />}
                                bg={'#2f8886'}
                                _hover={{background: '#278280'}}
                                onClick={() => history.push('/createform')}
                                variant='solid'>
                            Create Form
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyForms;
