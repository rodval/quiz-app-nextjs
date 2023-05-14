import { HStack, SimpleGrid, Flex } from '@chakra-ui/react';
import { ICategory } from '@/interfaces/API';
import { getCategories } from '@/services';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { CategoryCard } from '@/components';
import { useRouter } from 'next/router';
import ROUTES from '@/constants/routes';

export default function Home() {
  const router = useRouter();
  const [categories, setCategories] = useState<ICategory[]>([]);

  const onCardClick = (category: ICategory) => {
    router.push({
      pathname: ROUTES.QUIZ,
      query: { categoryId: category.id },
    });
  };

  const { isFetching, isIdle, isError, status } = useQuery({
    queryKey: 'categories',
    queryFn: () => getCategories(),
    onSuccess: (response) => {
      setCategories(response.data);
    },
  });

  return (
    <>
<<<<<<< Updated upstream
      <HStack w="full" h="100vh">
        <Flex w="full" h="full" alignItems="center" justifyContent="center">
          <SimpleGrid columns={2} spacing={10} alignContent="center">
=======
      <HStack
        w="full"
        h="100vh"
        flexDirection="column"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}>
        <Flex justifyContent="space-around" alignItems="center" w="full" marginTop={75}>
          <Box>
            <Text fontSize={40} fontWeight={700} color="pink.300">
              ¡Vamos a jugar!
            </Text>
            <Text fontWeight={500}>Elige una opcion</Text>
          </Box>
          <Box>
            <Image
              w={85}
              h={85}
              src="https://scontent.fsal1-1.fna.fbcdn.net/v/t39.30808-6/346474483_2504800679684066_5016307938546877198_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=-gYviwNPi5UAX8RkKVu&_nc_ht=scontent.fsal1-1.fna&oh=00_AfAwccfQV4VdpX29cRyfmk0OiO7sT3oZrJq622NljIyhOQ&oe=6462AD79"
              alt="copa"
            />
          </Box>
        </Flex>

        <Flex w="full" h="full" justifyContent="center">
          <SimpleGrid columns={2} spacing={20} alignContent="center">
>>>>>>> Stashed changes
            {categories.map((category) => (
              <CategoryCard key={category.id} categoryDetail={category} onCardClick={onCardClick} />
            ))}
          </SimpleGrid>
        </Flex>
      </HStack>
    </>
  );
}
