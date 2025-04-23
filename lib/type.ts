import { Post } from "@prisma/client";

export type EmployeeState = unknown;

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface ActionResponse {
  message: string;
  post?: Post;
  errors?: string;
}
