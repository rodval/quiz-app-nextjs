import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { ISignIn, IApiResponse } from '@/interfaces/API';

const SignInService = async ({ user, password }: ISignIn) => {
  const data = await axios.post<IApiResponse>(ENDPOINTS.AUTH.SIGNIN, {
    user,
    password,
  });

  return data;
};

export default SignInService;
