import { User } from 'src/app/models/user.model';

export interface UserByIDResponse {
  ok: boolean;
  user: User;
}

export interface Task {
  _id: string;
  title: string;
  description: string;
  tags: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  assignedTo: string;
}
export interface Tag {
  _id: string;
  name: string;
  tasks: string[];
  __v: number;
}
