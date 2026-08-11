import "dotenv/config";
import express from "express";
import connectDb from "./config/db.js";
import { Request, Response } from "express";
import router from "./routes/agent.routes.ts";

const port = process.env.PORT

const app = express();
app.use(express.json());
app.use("/", router);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from agent" });
});

try {
  await connectDb();

  app.listen(port, () => {
    console.log(`agent is running on ${port}`);
  });
} catch (error) {
  process.exit(1);
}
