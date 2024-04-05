import { View, Text   } from 'react-native'
import { Box, Heading, VStack, HStack ,FormControl, Input, Button, Center, Image , Link ,NativeBaseProvider} from "native-base";
import React from 'react'

export default function Login({navigation}) {
  return (
  
  <Center w="100%" h="100%">
  <Box safeArea p="2" py="8" w="90%" maxW="290">
    <Center>
    <Image size={250} borderRadius={80} source={{
  uri: "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg?w=1060 "
}} alt="Alternate Text" />
</Center>
  <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
  color: "warmGray.50"
}}>
    Welcome
  </Heading>
  <Heading mt="1" _dark={{
  color: "warmGray.200"
}} color="coolGray.600" fontWeight="medium" size="xs">
    Sign in to continue!
  </Heading>
  

  <VStack space={3} mt="5">
    <FormControl>
      <FormControl.Label>Email ID</FormControl.Label>
      <Input />
    </FormControl>
    <FormControl>
      <FormControl.Label>Password</FormControl.Label>
      <Input type="password" />
      <Link _text={{
      fontSize: "xs",
      fontWeight: "500",
      color: "indigo.500"
    }} alignSelf="flex-end" mt="1">
        Forget Password?
      </Link>
    </FormControl>
    <Button mt="2" colorScheme="indigo"  backgroundColor="#D7A870">
      Sign in 
    </Button>
    <HStack mt="6" justifyContent="center">
      <Text fontSize="sm" color="coolGray.600" _dark={{
      color: "warmGray.200"
    }}>
        I'm a new user.{" "}
      </Text>
      <Link _text={{
      color: "indigo.500",
      fontWeight: "medium",
      fontSize: "sm"
    }} 
    onPress={()=>navigation.navigate("signup")}
    >
        Sign Up
      </Link>
    </HStack>
  </VStack>
  
</Box>;
</Center>


  )
}
