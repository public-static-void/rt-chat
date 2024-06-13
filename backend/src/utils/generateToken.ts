import jwt from "jsonwebtoken";
import { Response } from "express";

const DAY_IN_MS = 24 * 60 * 1000;

const generateToken = (userId: string, res: Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * DAY_IN_MS, // 15 days in ms
    httpOnly: true, // prevent XSS
    sameSite: "strict", // prevent CSRF
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
export default generateToken;
