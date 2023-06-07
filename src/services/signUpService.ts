import axios from 'axios';
import ENDPOINTS from '@/constants/endpoints';
import { IApiResponse, ISignUp } from '@/interfaces/API';

const SignUpService = async ({ firstName, lastName, userName, email = '', password }: ISignUp) => {
  const data = await axios.post<IApiResponse>(ENDPOINTS.AUTH.SIGNUP, {
    firstName,
    lastName,
    userName,
    email,
    password,
  });

  return data;
};

export default SignUpService;
