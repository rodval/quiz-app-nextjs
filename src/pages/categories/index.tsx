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
      <HStack w="full" h="100vh">
        <Flex w="full" h="full" alignItems="center" justifyContent="center">
          <SimpleGrid columns={2} spacing={10} alignContent="center">
            {categories.map((category) => (
              <CategoryCard key={category.id} categoryDetail={category} onCardClick={onCardClick} />
            ))}
          </SimpleGrid>
        </Flex>
      </HStack>
    </>
  );
}
