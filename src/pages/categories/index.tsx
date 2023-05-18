import { VStack, SimpleGrid, Flex, Box, Text, Image } from '@chakra-ui/react';
import { ICategoryQuiz } from '@/interfaces/API';
import { getCategories } from '@/services';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { CategoryCard } from '@/components';
import { useRouter } from 'next/router';
import ROUTES from '@/constants/routes';

export default function Home() {
  const router = useRouter();
  const [categoryQuizzes, setCategories] = useState<ICategoryQuiz[]>([]);

  const onCardClick = (category: ICategoryQuiz) => {
    router.push({
      pathname: ROUTES.QUIZ,
      query: { categoryId: category.id },
    });
  };

  const onRankClick = () => {
    router.push(ROUTES.RANK);
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
      <VStack
        w="full"
        h="100vh"
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
          <Box onClick={onRankClick}>
            <Image w={85} h={85} src="/Img/copa.png" alt="copa" />
          </Box>
        </Flex>

        <Flex w="full" h="full" justifyContent="center">
          <SimpleGrid columns={2} spacing={20} alignContent="center">
            {categoryQuizzes.map((categoryQuiz) => (
              <CategoryCard key={categoryQuiz.id} categoryDetail={categoryQuiz} onCardClick={onCardClick} />
            ))}
          </SimpleGrid>
        </Flex>
      </VStack>
    </>
  );
}
