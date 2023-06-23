import { HStack, SimpleGrid, Flex, Text } from '@chakra-ui/react';
import { IQuestion } from '@/interfaces/API';
import { GetQuestions, UseTokenStore } from '@/services';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { QuestionCard } from '@/components';

export default function Quiz() {
  const router = useRouter();
  const { categoryId, title } = router.query;
  const { token } = UseTokenStore((tokenStore) => tokenStore);
  const [numberOfQuestions] = useState(5);
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const { isError } = useQuery({
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
            {isError ? (
              <Text>error</Text>
            ) : (
              <QuestionCard categoryId={Number(categoryId)} categoryTitle={String(title)} questions={questions} />
            )}
          </SimpleGrid>
        </Flex>
      </HStack>
    </>
  );
}
