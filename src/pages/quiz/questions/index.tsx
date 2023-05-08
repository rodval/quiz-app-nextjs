import { HStack, SimpleGrid, Flex, Card, CardBody, Stack, Text } from '@chakra-ui/react';
import { AnswerButton } from '@/components';
import { IAnswer, IQuestion } from '@/interfaces/API';
import { useState } from 'react';

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
      <HStack w="full" h="100vh">
        <Flex w="full" h="full" alignItems="center" justifyContent="center">
          <Text>
            {questions.length}/{currentQuestion + 1}
          </Text>
          <Card overflow="hidden" variant="outline">
            <Stack>
              <Text>{question?.questionTitle}</Text>
              <CardBody>
                <SimpleGrid columns={2} spacing={10} alignContent="center">
                  {question?.answers.map((answers) => (
                    <AnswerButton key={answers.id} answerDetail={answers} onButtonClick={validateAnswer}></AnswerButton>
                  ))}
                </SimpleGrid>
              </CardBody>
            </Stack>
          </Card>
        </Flex>
      </HStack>
    </>
  );
};

export default Questions;
