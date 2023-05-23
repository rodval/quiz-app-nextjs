import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { ISignIn, IApiResponse } from '@/interfaces/API';

const SignIn = async ({ email, password }: ISignIn) => {
  const data = await axios.post<IApiResponse>(ENDPOINTS.AUTH.LOGIN, {
    email,
    password,
  });

  return data;
};

export default SignIn;
