import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'
import React, { Fragment } from 'react'
import video1 from '../Assets/video1.mp4'
import video2 from '../Assets/video2.mp4'
import video3 from '../Assets/video3.mp4'
import video4 from '../Assets/video4.mp4'
import video5 from '../Assets/video5.mp4'
import video6 from '../Assets/video6.mp4'
const Videos = () => {
    const videoObj = [video1, video2, video3, video4, video5, video6];
    const [videoSrc, SetVideoSrc] = useState(videoObj[0]);    
    return (
        <Fragment>
            <Stack direction={['column','row']} h={'100vh'}>
                <VStack w={'full'}>
                    <video src={videoSrc} controls autoPlay controlsList='nodowload' style={{width: '100%'}}></video>
                <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}> 
                    <Heading>Sample Video</Heading>
                    <Text>This is a sample Video for testing and demo </Text>
                </VStack>
                </VStack>
                <VStack w={['full','xl']} alignItems={'stretch'} p="8" spacing={'8'} overflowY={'auto'}>                    
                    {videoObj.map((Val, Ind) => (                         
                        <Button variant={'ghost'} colorScheme={'purple'} onClick={()=> SetVideoSrc(Val)}>Lecture {Ind + 1} </Button>
                    ))}
                </VStack>
            </Stack>
        </Fragment>
  )
}

export default Videos