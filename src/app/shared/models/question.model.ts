import { User } from './user.model';
import { Tag } from './tag.model';

export interface Question {
  id: number;
  title: string;
  content: string;
  creationTime: Date;
  viewCount: number;
  userId: number;
  user: User;
  tags: Tag[];
}
