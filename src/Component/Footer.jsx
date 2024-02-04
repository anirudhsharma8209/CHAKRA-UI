import React, { Fragment } from 'react'
import {Box, Button, Heading, HStack, Stack, VStack, Input, Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Fragment>
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column','row']}> 
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Anirudh Sharma
                    </Heading>
                    <HStack borderBottom={"2px solid white"} py={'2px'}>
                        <Input placeholder='Enter Email Here...' border='none' borderRadius={"none"} focusBorderColor="none" />                        
                        <Button p="0" colorScheme={'purple'} variant='ghost' borderRadius={'0  20px 20px 0'} outline="none">
                            <AiOutlineSend size={'20'}/>
                        </Button>
                    </HStack>
                </VStack>

                <VStack w="full" borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                    <Heading size="md" textTransform={"uppercase"} textAlign="center">Video Hub</Heading>
                    <Text>All right reserved</Text>
                </VStack>
                <VStack w="full" >
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} colorScheme={'whiteAlpha.500'}>
                        <a href="https://facebook.com" target={'blank'}>Facebook</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha.500'}>
                        <a href="https://instagram.com/mr_anirudh_002" target={'blank'}>Instagram</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha.500'}>
                        <a href="https://github.com" target={'blank'}>Github</a>
                    </Button>
                </VStack>            
            </Stack>
        </Box>
    </Fragment>
  )
}

export default Footer