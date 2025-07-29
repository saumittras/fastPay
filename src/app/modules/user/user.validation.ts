import z from "zod";
import { IUser } from "./user.interface";

export const createUserZodSchema = z.object<IUser>({
  name: z
    .string({ invalid_type_error: "Name must be string" })
    .min(2, { message: "Name too short" })
    .max(50, { message: "Name too long" }),
  email: z.string().email(),
  pinNumber: z
    .number({ invalid_type_error: "Name must be string" })
    .min(6, { message: "Pin Number Must be 6 Digit" })
    .max(6, { message: "Pin Number Must be 6 Digit" }),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])/, {
      message: "Password must contain at least 1 uppercase letter",
    })
    .regex(/^(?=.*[!@#$%^&*])/, {
      message: "Password must contain at least 1 special character.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password must contain at least 1 number",
    }),
  phone: z
    .string({ invalid_type_error: "Address must be String" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh, Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  address: z
    .string({ invalid_type_error: "Address must be string" })
    .max(200, { message: "Address can notexceed 200 characters" })
    .optional(),
});
