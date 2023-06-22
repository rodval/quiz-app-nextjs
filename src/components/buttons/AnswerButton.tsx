import { IAnswer } from '@/interfaces/API';
import { Button } from '@chakra-ui/react';

type AnswerButtonProps = {
  answerDetail: IAnswer;
  showFeedback: boolean;
  onButtonClick?: (isCorrect: boolean) => void;
};

const AnswerButton = (props: AnswerButtonProps) => {
  const { answerDetail, showFeedback, onButtonClick } = props;
  const { id, answerTitle, isCorrect } = answerDetail;

  const onClick = () => {
    if (onButtonClick) {
      onButtonClick(isCorrect);
    }
  };

  return (
    <Button
      boxShadow="lg"
      rounded="lg"
      textAlign="center"
      h={55}
      w="lg"
      border={2}
      borderColor={'gray.500'}
      textColor={'blue.400'}
      fontWeight="bold"
      fontSize={22}
      backgroundColor={'white'}
      key={id}
      onClick={onClick}
      isDisabled={showFeedback}
      colorScheme={showFeedback ? (isCorrect ? 'green' : 'red') : 'none'}>
      {answerTitle}
    </Button>
  );
};

export default AnswerButton;
