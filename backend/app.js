import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";
import signupRouter from "./routes/signupRoute.js";
import loginRouter from "./routes/loginRoute.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://feista-flavours.netlify.app",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/signup", signupRouter);
app.use("/api/v1/login", loginRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
