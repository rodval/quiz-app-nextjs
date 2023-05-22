import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { ISignIn, IAuthResponse } from '@/interfaces/API';

const SignIn = async ({ email, password }: ISignIn) => {
  const data = await axios.post<IAuthResponse>(ENDPOINTS.AUTH.LOGIN, {
    email,
    password,
  });

  return data;
};

export default SignIn;
