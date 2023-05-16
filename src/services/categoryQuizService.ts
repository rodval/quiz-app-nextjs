import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { ICategoryQuiz } from '@/interfaces/API';

const getCategories = async () => {
  const data = await axios.get<ICategoryQuiz[]>(ENDPOINTS.CATEGORIES.DATA);

  return data;
};

export default getCategories;
