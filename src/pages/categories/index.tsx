import { VStack, SimpleGrid, Flex, Box, Text, Image } from '@chakra-ui/react';
import { ICategoryQuiz } from '@/interfaces/API';
import { GetUserCategories, UseTokenStore } from '@/services';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { CategoryCard, Navbar } from '@/components';
import { useRouter } from 'next/router';
import ROUTES from '@/constants/routes';

export default function Home() {
  const router = useRouter();
  const { token } = UseTokenStore((tokenStore) => tokenStore);
  const [userCategories, setUserCategories] = useState<ICategoryQuiz[]>([]);

  const onCardClick = (category: ICategoryQuiz) => {
    router.push(
      {
        pathname: ROUTES.QUIZ,
        query: {
          categoryId: category.id,
          title: category.category.title,
        },
      },
      ROUTES.CATEGORIES
    );
  };

  const onRankClick = () => {
    router.push(ROUTES.RANK);
  };

  const { isFetching, isIdle, isError, status } = useQuery({
    queryKey: 'userCategories',
    queryFn: () => GetUserCategories(token),
    onSuccess: (response) => {
      setUserCategories(response.data);
    },
  });

  return (
    <>
      <VStack
        w="full"
        h="100vh"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}>
        <Navbar />
        <Flex justifyContent="space-around" alignItems="center" w="full" marginTop={75}>
          <Box marginTop={50}>
            <Text fontSize={40} fontWeight={700} color="pink.300">
              ¡Vamos a jugar!
            </Text>
            <Text fontWeight={500}>Elige una opcion</Text>
          </Box>
          <Box marginTop={50} onClick={onRankClick}></Box>
        </Flex>
        <Flex w="full" h="full" justifyContent="center">
          <SimpleGrid columns={2} spacing={20} alignContent="center">
            {userCategories.map((userCategory) => (
              <CategoryCard key={userCategory.id} categoryDetail={userCategory} onCardClick={onCardClick} />
            ))}
          </SimpleGrid>
        </Flex>
      </VStack>
    </>
  );
}
