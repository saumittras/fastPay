/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const verifyWallet = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message:
        "User and Wallet Created Successfully. Please Verify the wallet by NID Card",
      data: null,
    });
  }
);
const changeCurrency = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message:
        "User and Wallet Created Successfully. Please Verify the wallet by NID Card",
      data: null,
    });
  }
);

const beAgent = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message:
        "User and Wallet Created Successfully. Please Verify the wallet by NID Card",
      data: null,
    });
  }
);

export const WalletControllers = {
  verifyWallet,
  changeCurrency,
  beAgent,
};
