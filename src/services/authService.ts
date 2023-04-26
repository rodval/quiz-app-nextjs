import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { ILogin, IApiResponse } from '@/interfaces/API';

const login = async ({ email, password }: ILogin) => {
  const data = await axios.post<IApiResponse>(ENDPOINTS.AUTH.LOGIN, {
    email,
    password,
  });

  return data;
};

export default login;
