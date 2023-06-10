import { HStack, SimpleGrid, Flex, Text, Link } from '@chakra-ui/react';
import { IQuestion } from '@/interfaces/API';
import { GetQuestions, UseTokenStore } from '@/services';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import Questions from './questions';

export default function Quiz() {
  const router = useRouter();
  const { categoryId } = router.query;
  const { token } = UseTokenStore((tokenStore) => tokenStore);
  const [numberOfQuestions] = useState(5);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const { isFetching, isIdle, isError, status } = useQuery({
    queryKey: 'questions',
    queryFn: () => GetQuestions({ categoryQuizId: Number(categoryId), numberOfQuestions, token }),
    onSuccess: (response) => {
      setQuestions(response.data);
    },
  });

  return (
    <>
      <HStack w="full" h="100vh">
        <Flex
          w="full"
          h="full"
          alignItems="center"
          justifyContent="center"
          bgImage="url('/Img/BG.png')" // Reemplaza '/path/to/your/image.jpg' con la ruta de tu imagen
          bgSize="cover"
          bgPosition="center"
          id="fuck">
          <SimpleGrid columns={1} spacing={10} alignContent="center">
            <Questions categoryId={Number(categoryId)} questions={questions} />
          </SimpleGrid>
        </Flex>
      </HStack>
    </>
  );
}
