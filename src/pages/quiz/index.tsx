import { HStack, SimpleGrid, Flex, Text, Link } from '@chakra-ui/react';
import { IQuestion } from '@/interfaces/API';
import { getQuestions } from '@/services';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import Questions from './questions';

export default function Quiz() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [numberOfQuestions] = useState(5);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const { isFetching, isIdle, isError, status } = useQuery({
    queryKey: 'questions',
    queryFn: () => getQuestions({ categoryQuizId: Number(categoryId), numberOfQuestions }),
    onSuccess: (response) => {
      setQuestions(response.data);
    },
  });

  return (
    <>
      <HStack w="full" h="100vh">
        <Flex w="full" h="full" alignItems="center" justifyContent="center">
          <SimpleGrid columns={1} spacing={10} alignContent="center">
            <Questions questions={questions} />
          </SimpleGrid>
        </Flex>
      </HStack>
    </>
  );
}
