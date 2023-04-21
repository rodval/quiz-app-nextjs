import { Heading, HStack, Stack, FormControl, Flex, FormLabel, Input, Image, Button, Link } from '@chakra-ui/react';

export default function Login() {
  return (
    <>
      <HStack w="full" h="100vh">
        <Flex w="full" h="full" borderRightWidth={1}>
          <Image
            objectFit="cover"
            w="full"
            h="full"
            src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </Flex>
        <Flex w="full" h="full" alignItems="center" justifyContent="center">
          <Stack w="full" maxW="md" spacing={4} p={6}>
            <Heading fontSize="2xl" color="purple.500">
              Sign in to your account
            </Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Email address</FormLabel>
              <Input type="password" placeholder="*****" />
            </FormControl>
            <Link color="purple.500" href="/signin">
              Register
            </Link>
            <Button colorScheme="purple">Sign in</Button>
          </Stack>
        </Flex>
      </HStack>
    </>
  );
}
