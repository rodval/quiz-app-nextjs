import { HStack, SimpleGrid, Flex, Card, CardBody, Stack, Text, Box, Center } from '@chakra-ui/react';
import { AnswerButton } from '@/components';
import { IAnswer, IQuestion } from '@/interfaces/API';
import { useState } from 'react';
import { relative } from 'path';
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';

type QuestionsProps = {
  questions: IQuestion[];
  finishTest: (result: number) => void;
};

const Questions = (props: QuestionsProps) => {
  const { questions, finishTest } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const question = questions[currentQuestion];

  const validateAnswer = (answer: IAnswer) => {
    if (answer.isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestion === questions.length - 1) {
      finishTest(correctAnswers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <>
      <Stack>
        <Center w="full" h="100vh">
          <Stack>
            <Text fontWeight={'bold'} fontSize={35}>
              Trivia de Matematicas.
            </Text>
            <Text>Elige sabiamente la opcion correcta. Mucha suerte!</Text>
            <Text fontWeight={'bold'} fontSize={16}>
              {' '}
              Nivel 1
            </Text>
            <Text>
              {questions.length}/{currentQuestion + 1}
            </Text>
            <Card overflow="hidden" variant="outline" flexDirection="column" boxShadow="none" border="none">
              <Stack>
                <Flex>
                  <Center>
                    <Box
                      w={400}
                      h={200}
                      marginRight={50}
                      marginLeft={50}
                      border="8px solid #4299E1"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius={20}>
                      <Center>
                        <Text textAlign="center" padding={50} fontWeight="bold" fontSize={17}>
                          {question?.questionTitle}
                        </Text>
                      </Center>
                    </Box>
                  </Center>

                  <CardBody>
                    <SimpleGrid columns={1} spacing={10} alignContent="center">
                      {question?.answers.map((answers) => (
                        <AnswerButton key={answers.id} answerDetail={answers} onButtonClick={validateAnswer}></AnswerButton>
                      ))}
                    </SimpleGrid>
                  </CardBody>
                </Flex>
              </Stack>
            </Card>
          </Stack>
        </Center>
      </Stack>
    </>
  );
};

export default Questions;
