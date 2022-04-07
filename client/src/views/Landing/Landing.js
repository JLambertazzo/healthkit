import {Flex, FormControl, FormLabel, Heading, HStack, Input, Box, Button, Center, Text} from "@chakra-ui/react";
import wave from './wave3.svg'
import { Link } from 'react-router-dom';
function Landing() {

    return (
        <Box
            height={'100vh'}
            w={'100%'}
            bgImage={wave}
            bgPosition="left"
            bgRepeat="no-repeat"
            bgColor={'white'}
            bgSize={'cover'}
        >
                <Box
                    position={'absolute'}
                    top={'40%'}
                    left={'35%'}
                    color={'black'}>
                    <Heading fontFamily={"DM Serif Text"}
                    fontWeight={400}
                             fontSize={'7xl'}
                             color={'#2F8886'}
                    >Health Kit</Heading>
                    <Text fontFamily={"Caveat"}
                          fontSize={'3xl'}
                          color={'#84BEBE'}
                    >Health forms, reimagined</Text>
                    <Link to='/home'>
                    <Button mt={10}
                    bg={'#2F8886'}
                    color={'white'}
                            _active={{bg: '#4ca8a6'}}
                            _hover={{bg: '#4ca8a6'}}
                    >Get Started</Button>
                    </Link>
                </Box>
        </Box>
    )
} export default Landing;
