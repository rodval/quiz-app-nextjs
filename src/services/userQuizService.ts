import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { IUserQuizRequest, IApiResponse } from '@/interfaces/API';

const SaveUserQuiz = async ({ score, categoryQuizId, token }: IUserQuizRequest) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post<IApiResponse>(
    ENDPOINTS.USERQUIZ.SAVEQUIZ,
    {
      score,
      categoryQuizId,
    },
    config
  );

  return response;
};

export default SaveUserQuiz;
