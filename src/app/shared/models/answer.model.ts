import { User } from './user.model';

export interface Answer {
  id: number;
  content: string;
  creationTime: string;
  userId: number;
  questionId: number;
  user: User;
}
