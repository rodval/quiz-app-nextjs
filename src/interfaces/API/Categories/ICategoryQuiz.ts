import { ICategory } from './ICategory';
import { IUserQuiz } from '../UserQuiz/IUserQuiz';

export interface ICategoryQuiz {
  id: number;
  level: number;
  category: ICategory;
  userQuizzes: IUserQuiz[];
}
