import { ICategory } from './ICategory';
import { IUserQuiz } from './IUserQuiz';

export interface ICategoryQuiz {
  id: number;
  level: number;
  category: ICategory;
  userQuiz: IUserQuiz;
}
