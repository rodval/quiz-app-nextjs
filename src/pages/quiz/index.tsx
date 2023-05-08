import { HStack, SimpleGrid, Flex, Text, Link } from '@chakra-ui/react';
import { IQuestion } from '@/interfaces/API';
import { getQuestions } from '@/services';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import ROUTES from '@/constants/routes';
import Questions from './questions';

export default function Quiz() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [numberOfQuestions] = useState(5);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const initialState = {
    isQuizDone: false,
    score: 0,
  };

  const [state, setState] = useState(initialState);
  const { isQuizDone, score } = state;

  const finishTest = (result: number) => {
    setState({
      ...state,
      isQuizDone: true,
      score: result,
    });
  };

  const { isFetching, isIdle, isError, status } = useQuery({
    queryKey: 'questions',
    queryFn: () => getQuestions({ categoryId: Number(categoryId), numberOfQuestions }),
    onSuccess: (response) => {
      setQuestions(response.data);
    },
  });

  return (
    <>
      <HStack w="full" h="100vh">
        <Flex w="full" h="full" alignItems="center" justifyContent="center">
          <SimpleGrid columns={2} spacing={10} alignContent="center">
            {isQuizDone ? (
              <Link href={ROUTES.CATEGORIES}>
                <Text>Done! {score}</Text>
              </Link>
            ) : (
              <Questions questions={questions} finishTest={finishTest}></Questions>
            )}
          </SimpleGrid>
        </Flex>
      </HStack>
    </>
  );
}
