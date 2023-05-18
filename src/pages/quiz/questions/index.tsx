import { SimpleGrid, Flex, Card, CardBody, Stack, Text, Box, Center, Link } from '@chakra-ui/react';
import { AnswerButton } from '@/components';
import { IQuestion } from '@/interfaces/API';
import { useState, useEffect } from 'react';
import ROUTES from '@/constants/routes';

type QuestionsProps = {
  questions: IQuestion[];
};

const Questions = (props: QuestionsProps) => {
  const { questions } = props;
  const [seconds, setSeconds] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizDone, setIsQuizDone] = useState(false);
  const question = questions[currentQuestion];

  const restart = () => {
    setSeconds(10);
  };

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setIsQuizDone(true);
    } else {
      restart();
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds === 0) {
        clearInterval(timer);
        nextQuestion();
      } else {
        setSeconds((second) => second - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const validateAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers((correctAnswer) => correctAnswer + 1);
    }

    nextQuestion();
  };

  return (
    <>
      <Stack>
        <Center w="full" h="100vh">
          {isQuizDone ? (
            <Link href={ROUTES.CATEGORIES}>
              <Text>Done! {correctAnswers}</Text>
            </Link>
          ) : (
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
                        minW={400}
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
          )}
        </Center>
      </Stack>
    </>
  );
};

export default Questions;
