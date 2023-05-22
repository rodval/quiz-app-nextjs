import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { ICategoryQuiz } from '@/interfaces/API';

export const GetCategories = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = await axios.get<ICategoryQuiz[]>(ENDPOINTS.CATEGORIES.DATA, config);

  return data;
};

export const GetUserCategories = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = await axios.get<ICategoryQuiz[]>(ENDPOINTS.CATEGORIES.USERCATEGORY, config);

  return data;
};
