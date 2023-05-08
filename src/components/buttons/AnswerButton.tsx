import { IAnswer } from '@/interfaces/API';
import { Button } from '@chakra-ui/react';

type AnswerButtonProps = {
  answerDetail: IAnswer;
  onButtonClick?: (answer: IAnswer) => void;
};

const AnswerButton = (props: AnswerButtonProps) => {
  const { answerDetail, onButtonClick } = props;
  const { id, answerTitle } = answerDetail;

  const onClick = () => {
    if (onButtonClick) {
      onButtonClick(answerDetail);
    }
  };

  return (
    <Button key={id} onClick={onClick}>
      {answerTitle}
    </Button>
  );
};

export default AnswerButton;
