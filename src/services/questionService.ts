import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { IQuestion, IQuestionRequest } from '@/interfaces/API';

const getQuestions = async (params: IQuestionRequest) => {
  const data = await axios.get<IQuestion[]>(ENDPOINTS.QUESTIONS.DATA, { params });

  return data;
};

export default getQuestions;
