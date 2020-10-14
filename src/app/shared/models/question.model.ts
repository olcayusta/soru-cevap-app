import { User } from './user.model';
import { Tag } from './tag.model';
import { Answer } from '@shared/models/answer.model';

export interface Question {
  id: number;
  title: string;
  content: string;
  creationTime: Date;
  viewCount: number;
  userId: number;
  user: User;
  tags: Tag[];
  answer: Answer;
}
