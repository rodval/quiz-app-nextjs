import { IAnswer } from '../IAnswer';

export interface IQuestion {
  id: number;
  questionTitle: string;
  questionType: number;
  correctAnswer: string;
  answers: IAnswer[];
  categoryId: number;
}
