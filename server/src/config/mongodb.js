import mongoose from "mongoose";
import "dotenv/config";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
