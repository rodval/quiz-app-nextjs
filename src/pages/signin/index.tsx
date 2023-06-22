import { Heading, HStack, Stack, FormControl, Flex, Input, Button, Link, Divider, Box, Text } from '@chakra-ui/react';
import { ISignIn } from '@/interfaces/API';
import { SignInService, UseTokenStore } from '@/services';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import ROUTES from '@/constants/routes';

export default function SignIn() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<ISignIn>();
  const { setToken } = UseTokenStore((tokenStore) => tokenStore);
  const { mutate: signInUser } = useMutation(SignInService, {
    onSuccess: (response) => {
      setToken(response.data.result);

      router.push(ROUTES.CATEGORIES);
    },
  });
  const onSubmit = (data: ISignIn) => {
    signInUser(data);
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
                    placeholder="User Name"
                    size="lg"
                    variant="filled"
                    backgroundColor="white"
                    borderColor="gray.100"
                    borderRadius={10}
                    id="user"
                    type="name"
                    {...register('user', {
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
                    SignIn
                  </Button>
                </Flex>
              </form>
              <Divider />
              <Flex flexDirection={'column'} alignItems="center">
                <Text color="gray.500" marginTop={30} marginBottom={2}>
                  Dont have an account yet?
                </Text>
                <Link color="purple.500" fontWeight={500} href={ROUTES.AUTH.SIGNUP}>
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
