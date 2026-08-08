import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import router from "./routes/auth.routes.js";

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.json({ message: "Hello from auth" });
});

try {
  await connectDb();

  app.listen(port, () => {
    console.log(`auth is running on ${port}`);
  });
} catch (error) {
  process.exit(1);
}
