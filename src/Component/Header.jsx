import React, { Fragment } from 'react'
import {Drawer, DrawerBody, DrawerOverlay, DrawerHeader, DrawerCloseButton, DrawerContent, Button, useDisclosure, VStack, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi';
const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Button pos={'fixed'} zIndex={"overlay"} top={'4'} colorScheme={'purple'} left={'4'} h={'10'} w={'10'} p={'0'} borderRadius="full" onClick={onOpen}>
                <BiMenuAltLeft size={'20'}/>
            </Button>

            <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}> 
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader>VIDEO HUB</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                                <Link to="/">Home</Link> 
                            </Button>

                            <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                                <Link to="/videos">Videos</Link> 
                            </Button>

                            <Button onClick={onClose } variant={"ghost"} colorScheme={'purple'}>
                                <Link to="/video?category=free">Free Vedios</Link> 
                            </Button>

                            <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                                <Link to="/upload">Upload Video</Link> 
                            </Button>
                        </VStack>

                        <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly '}>
                            <Button onClick={onClose} colorScheme={'purple'}>
                                <Link to={'login'}>Log In</Link>
                            </Button>
                            <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                                <Link to={'signup'}>Sign Up </Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
  )
}

export default Header;

