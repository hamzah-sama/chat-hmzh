import express from "express";
import "dotenv/config";
import connectDb from "./config/db.ts";
import router from "./routes/chat.routes.ts";
import { Request, Response } from "express";

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/", router);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from chat" });
});

try {
  await connectDb();

  app.listen(port, () => {
    console.log(`chat is running on ${port}`);
  });
} catch (error) {
  process.exit(1);
}
