import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(cookieParser());
app.use("/auth", proxy(process.env.AUTH_SERVICE));

app.get("/", (req, res) => {
  res.json({ message: "Gateaway is running" });
});

app.listen(port, () => {
  console.log(`Gateaway is running on ${port}`);
});
