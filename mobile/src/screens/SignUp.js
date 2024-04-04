import React from 'react'
// import { Text } from 'react-native'
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, Image } from "native-base";

const SignUp = () => {
  return (
         <Center w="100%" h="100%" >
    <Box safeArea p="2" w="90%" maxW="290" py="8">
    <Center >
    <Image  justifyContent="center" alignItems="center" w="100%" size={200} borderRadius={70} source={{
      uri: "https://img.freepik.com/free-photo/front-view-cup-cappuccino-with-cookies-book-table_141793-2825.jpg?w=740&t=st=1712223836~exp=1712224436~hmac=f3708f8b91af2de31bb16ea08ebd212a672292842ee919fc926c670ba03f604d"
    }} alt="Alternate Text" />
    </Center>
 
      <Heading size="lg" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }} fontWeight="semibold">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.600" _dark={{
      color: "warmGray.200"
    }} fontWeight="medium" size="xs">
        Sign up to continue!
      </Heading>
      <VStack space={2} mt="5">
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <FormControl>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo " backgroundColor="brown"
        >
          Sign up
        </Button>
      </VStack>
     
    </Box>
  </Center> 
  )
}

export default SignUp