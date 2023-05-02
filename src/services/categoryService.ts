import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { ICategory } from '@/interfaces/API';

const getCategories = async () => {
  const data = await axios.get<ICategory[]>(ENDPOINTS.CATEGORIES.DATA);

  return data;
};

export default getCategories;
