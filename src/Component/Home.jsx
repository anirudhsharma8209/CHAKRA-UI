import { Box, Container, Heading, Image, Img, position, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import ReactDOM from 'react-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxWidth={'container.xl'} minH={'100vh'} p='16'>            
                <Heading m="auto" textTransform={"uppercase"} py='2' width={"fit-content"} borderBottom={'2px solid black'}>Services</Heading>
                <Stack h="full" p="4" alignItems={'center'} direction={['column','row']}>
                    <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} style={{width: '400px', height: '400px'}} />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus nemo esse impedit corrupti laboriosam corporis possimus ab, porro quia voluptatum at quis qui odit voluptas optio laborum vel ipsum omnis delectus. Odit voluptas, aliquam minima optio pariatur assumenda consectetur architecto fugit error, sit dicta, eos maxime cum incidunt dolores eum libero a eius corrupti debitis. Natus repudiandae ipsa minima vitae omnis ducimus eius aperiam quibusdam aliquam maxime voluptas excepturi earum quasi error unde obcaecati laborum dicta, laboriosam suscipit necessitatibus consequatur delectus et tempora accusantium. Praesentium ratione, quae perspiciatis autem, consequuntur doloribus minus sapiente rerum debitis vitae temporibus molestiae eligendi.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
};

const headingOption = {
    position : 'absolute',
    left : '50%',
    top : '50%',
    transform : 'translate(-50% , -50%)',
    textTransform : 'uppercase',
    p: '4',
    size : '4xl'
}

const MyCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={3000}>
            <Box w="full" h={'100vh'}>
                <Img src={img1}></Img>
                <Heading bgColor={'whiteAlpha.400'} color={'white'} {...headingOption}>Watch the Future</Heading>
            </Box>
            <Box w="full" h={'100vh'}>
                <Img src={img2}></Img>
                <Heading bgColor={'WhiteAplha.500'} color={'white'} {...headingOption}>Future is Gaming</Heading>
            </Box>    
            <Box w="full" h={'100vh'}>
                <Img src={img3}></Img>
                <Heading bgColor={'WhiteAplha.500'} color={'white'} {...headingOption}>Gaming with Console</Heading>
            </Box>    
            <Box w="full" h={'100vh'}>
                <Img src={img4}></Img>
                <Heading bgColor={'WhiteAplha.500'} color={'white'} {...headingOption}>night life is Cool</Heading>
            </Box>    
        </Carousel>
    )
}

export default Home