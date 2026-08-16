import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";
import { protect } from "./middleware/auth.middleware.js";
import { getCurrentUser } from "./controller/user.controller.js";
import { proxyWithHeader } from "./utils/proxy-with-header.js";
import morgan from "morgan";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());
app.use("/auth", proxy(process.env.AUTH_SERVICE));
app.use("/chat", protect, proxyWithHeader(process.env.CHAT_SERVICE));
app.use("/agent", protect, proxyWithHeader(process.env.AGENT_SERVICE));

app.get("/", (req, res) => {
  res.json({ message: "Gateaway is running" });
});

app.get("/getUserdata", protect, getCurrentUser);

app.listen(port, () => {
  console.log(`Gateaway is running on ${port}`);
});
