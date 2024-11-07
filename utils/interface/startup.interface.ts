import { IAuthor } from './author.interface';

export interface IStartup {
  _id: number;
  title: string;
  description: string;
  author: IAuthor;
  views: number;
  image: string;
  _createdAt: string;
}
