import { IUser } from '../IUser';

export interface IUserQuiz {
  id: number;
  score: number;
  user: IUser;
  categoryQuizId: number;
}
