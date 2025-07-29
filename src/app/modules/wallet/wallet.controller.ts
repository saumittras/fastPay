import { Types } from "mongoose";

export enum WalletStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface IWallet {
  user: Types.ObjectId;
  balance: number;
  currency: "BDT" | "USD";
  status: WalletStatus;
  blockedReason?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
