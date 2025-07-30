import { ITransaction } from "./transaction.interface";
import { Transaction } from "./transaction.model";

const getTXId = () => {
  return `TX_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
};

// const sendMoney = async (payload: Partial<ITransaction>) => {
//   const transactionId = getTXId();
//   const session = await Transaction.startSession();

//   session.startTransaction();
//   try {
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     throw error;
//   }
// };

const sendMoney = async (payload: Partial<ITransaction>) => {
  const transactionId = getTXId();
  const transaction = await Transaction.create({ transactionId, ...payload });
  return transaction;
};

export const TransactionServices = {
  sendMoney,
};
