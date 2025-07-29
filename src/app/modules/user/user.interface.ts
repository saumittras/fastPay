import { ObjectId } from "mongoose";

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  AGENT = "AGENT",
}

export enum createdBy {
  ADMIN = "ADMIN",
  USER = "USER",
  AGENT = "AGENT",
}

export enum IsActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface IUser {
  _id?: ObjectId;
  accountNo: string;
  name: string;
  email?: string;
  phone: string;
  password: string;
  pinNumber: number;
  picture?: string;
  address: string;
  isDeleted?: string;
  isActive?: IsActive;
  isVerified?: boolean;
  role: Role;
  createdBy: createdBy[];
}
