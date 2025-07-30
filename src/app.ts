import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { router } from "./app/routes";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api", router);
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to FastPay Backend",
  });
});

export default app;
