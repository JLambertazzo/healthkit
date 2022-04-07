import './Navbar.css'
import { Button, Box, IconButton, Flex, Spacer, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";


function Navbar() {
    return (
        <Flex className="nav" paddingX={5}
              align={'center'}
              boxShadow={'lg'}
        >

            <Box className="navTitle"
                 w={'100%'}
            >
                <Center>
                <h2><Link to='/home' style={{textDecoration: 'none', color:"white"}}> Health Kit</Link></h2>
                </Center>
            </Box>
            <Spacer/>
            <Box className="navIcon">
                <Link to='/profile'>

                    <IconButton
                        variant={'ghost'}
                        w={'3rem'}
                        h={'3rem'}
                        _hover={{background: '#278280'}}
                    >

                        <FaUserCircle
                        size={30}
                        color={'white'}
                        />
                    </IconButton>

                </Link>
            </Box>

        </Flex>
    );
}

export default Navbar;
