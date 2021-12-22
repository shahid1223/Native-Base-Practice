import React, { useState, useContext } from 'react'
import {
    NativeBaseProvider,
    Box,
    VStack,
    HStack,
    Button,
    Heading,
    Text,
    Input
} from 'native-base';
import Context from '../Context/context';

const Todo = () => {
    const ContextData = useContext(Context)
    const { data, setData } = ContextData

    return (
        <NativeBaseProvider>
            <Box
                bg="black"
                py="4"
                px="3"
                rounded="md"
                alignSelf="center"
                width={300}
                height={400}
                maxWidth="100%"
                mt="40"
            // alignItems="center"
            >
                <VStack alignItems="cente">
                    {/* <Center flex={1} px="3"> */}
                    <Heading color="white" mt="20" mb="3">Wednesday</Heading>
                    {/* </Center> */}
                    <HStack>
                        <Input
                            bg="white"
                            placeholder="Input"
                            w="80%"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                        <Button
                            ml="2"
                            width={10}
                            height={10}
                            onPress={() => console.log("hello world", data)}
                        >+</Button>
                    </HStack>
                    <HStack>

                    </HStack>
                    {data.map((val) => {
                        return (
                            <>
                                <HStack>
                                    <Text fontSize="md" mt="2" color="white">{val.text}</Text>
                                </HStack>
                            </>
                        )
                    })}
                </VStack>
            </Box>
        </NativeBaseProvider>
    )
}

export default Todo
