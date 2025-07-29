import { Types } from "mongoose";

export enum WalletStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
  FROZEN = "FROZEN",
  CLOSED = "CLOSED",
}

export enum CurrencyType {
  BDT = "BDT",
  USD = "USD",
}

export interface IWallet {
  userId: Types.ObjectId;
  balance: number;
  currency: CurrencyType;
  status: WalletStatus;
  blockedReason?: string;
  isActive: boolean;
  isNIDVerified: boolean;
}
