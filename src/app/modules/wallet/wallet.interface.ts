import { Types } from "mongoose";
import { AccountStatus } from "../user/user.interface";

export enum CurrencyType {
  BDT = "BDT",
  USD = "USD",
}

export interface IWallet {
  userId: Types.ObjectId;
  balance: number;
  currency: CurrencyType;
  status: AccountStatus;
  blockedReason?: string;
  isActive: boolean;
  isNIDVerified: boolean;
}
