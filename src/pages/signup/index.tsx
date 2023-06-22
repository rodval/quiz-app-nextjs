import { Heading, HStack, Stack, FormControl, Flex, Input, Button, Link, Divider, Box, Text, useToast } from '@chakra-ui/react';
import { ISignUp } from '@/interfaces/API';
import { signUpService } from '@/services';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import ROUTES from '@/constants/routes';

export default function SignUp() {
  const router = useRouter();
  const toast = useToast();
  const { register, handleSubmit } = useForm<ISignUp>();
  const { mutate: signUpUser } = useMutation(signUpService, {
    onSuccess: () => {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 2000,
        isClosable: false,
        onCloseComplete: () => {
          router.push(ROUTES.HOME);
        },
      });
    },
  });
  const onSubmit = (data: ISignUp) => {
    signUpUser(data);
  };

  return (
    <>
      <HStack w="full" h="100vh">
        <Box
          w="100%"
          h="100%"
          bgGradient={[
            'linear(to-tr, teal.300, yellow.400)',
            'linear(to-t, blue.200, teal.500)',
            'linear(to-b, orange.100, purple.300)',
          ]}>
          <Flex w="full" h="full" alignItems="center" justifyContent="center">
            <Stack w="full" maxW="md" spacing={6} p={8} backgroundColor={'white'} borderRadius="20px">
              <Heading fontSize="2xl" color="purple.500" fontWeight={700} textAlign="center" marginTop="40px">
                Welcome! Log in to your account to continue
              </Heading>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <Input
                    placeholder="First Name"
                    size="lg"
                    variant="filled"
                    backgroundColor="white"
                    borderColor="gray.100"
                    borderRadius={10}
                    id="firstName"
                    type="name"
                    {...register('firstName', {
                      required: 'This is required',
                    })}
                    marginBottom="20px"
                  />
                  <Input
                    placeholder="Last Name"
                    size="lg"
                    variant="filled"
                    backgroundColor="white"
                    borderColor="gray.100"
                    borderRadius={10}
                    id="lastName"
                    type="name"
                    {...register('lastName', {
                      required: 'This is required',
                    })}
                    marginBottom="20px"
                  />
                  <Input
                    placeholder="User Name"
                    size="lg"
                    variant="filled"
                    backgroundColor="white"
                    borderColor="gray.100"
                    borderRadius={10}
                    id="userName"
                    type="name"
                    {...register('userName', {
                      required: 'This is required',
                    })}
                    marginBottom="20px"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    size="lg"
                    variant="filled"
                    backgroundColor="white"
                    borderColor="gray.100"
                    borderRadius={10}
                    id="password"
                    {...register('password', {
                      required: 'This is required',
                    })}
                  />
                </FormControl>
                <Flex justifyContent="center" marginTop={30}>
                  <Button
                    mt={4}
                    px={165}
                    py={6}
                    colorScheme="teal"
                    backgroundColor={'purple.300'}
                    _hover={{ bg: 'purple.200' }}
                    borderRadius={15}
                    type="submit">
                    SignUp
                  </Button>
                </Flex>
              </form>
              <Divider />
              <Flex flexDirection={'column'} alignItems="center">
                <Text color="gray.500" marginTop={30} marginBottom={2}>
                  Dont have an account yet?
                </Text>
                <Link color="purple.500" fontWeight={500} href={ROUTES.AUTH.SIGNIN}>
                  Join Here
                </Link>
              </Flex>
            </Stack>
          </Flex>
        </Box>
      </HStack>
    </>
  );
}
