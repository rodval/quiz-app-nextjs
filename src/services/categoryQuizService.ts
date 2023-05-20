import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { ICategoryQuiz } from '@/interfaces/API';

const getCategories = async () => {
  const token = localStorage.getItem('result');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = await axios.get<ICategoryQuiz[]>(ENDPOINTS.CATEGORIES.DATA, config);

  return data;
};

export default getCategories;
