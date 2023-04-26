import { Heading, HStack, Stack, FormControl, Flex, FormLabel, Input, Image, Button, Link, Divider } from '@chakra-ui/react';
import { ILogin } from '@/interfaces/API';
import { login } from '@/services';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

export default function Login() {
  const { register, handleSubmit } = useForm<ILogin>();
  const { mutate: loginUser } = useMutation(login, {
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = (data: ILogin) => {
    loginUser(data);
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="name"
                  placeholder="email"
                  {...register('email', {
                    required: 'This is required',
                  })}
                />
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  {...register('password', {
                    required: 'This is required',
                  })}
                />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </form>
            <Divider />
            <Link color="purple.500" href="/categories">
              Register
            </Link>
          </Stack>
        </Flex>
      </HStack>
    </>
  );
}
