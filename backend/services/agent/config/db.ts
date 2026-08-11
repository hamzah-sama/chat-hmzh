import mongoose from "mongoose";

const connectDb = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is required");
  }

  try {
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (error) {
    console.error(`Error connecting to database: ${error}`);
    throw error;
  }
};

export default connectDb;
