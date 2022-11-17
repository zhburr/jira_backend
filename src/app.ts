import express from "express";
import cors from "cors";
import { ApiError } from "./utils/ApiError";
import httpStatus from "http-status";
const app = express();

app.use(express.json());
app.use(cors());

app.all("*", (req: any, res: any, next: any) => {
  next(
    new ApiError(
      httpStatus.NOT_FOUND,
      `Cannot find ${req.originalUrl} on this server!`
    )
  );
});

export default app;
