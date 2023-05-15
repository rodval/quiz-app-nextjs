import { IAnswer } from '@/interfaces/API';
import { Button } from '@chakra-ui/react';

type AnswerButtonProps = {
  answerDetail: IAnswer;
  onButtonClick?: (isCorrect: boolean) => void;
};

const AnswerButton = (props: AnswerButtonProps) => {
  const { answerDetail, onButtonClick } = props;
  const { id, answerTitle, isCorrect } = answerDetail;

  const onClick = () => {
    if (onButtonClick) {
      onButtonClick(isCorrect);
    }
  };

  return (
    <Button
      backgroundColor={'white'}
      boxShadow="lg"
      rounded="lg"
      textAlign="center"
      h={55}
      border={2}
      borderColor={'gray.500'}
      textColor={'blue.400'}
      fontWeight="bold"
      fontSize={22}
      key={id}
      onClick={onClick}>
      {answerTitle}
    </Button>
  );
};

export default AnswerButton;
