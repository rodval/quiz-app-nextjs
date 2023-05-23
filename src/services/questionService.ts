import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { IQuestion, IQuestionRequest } from '@/interfaces/API';

const GetQuestions = async (params: IQuestionRequest) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params.token}`,
    },
    params: {
      categoryQuizId: params.categoryQuizId,
      numberOfQuestions: params.numberOfQuestions,
    },
  };

  const data = await axios.get<IQuestion[]>(ENDPOINTS.QUESTIONS.DATA, config);

  return data;
};

export default GetQuestions;
