import mongoose from "mongoose";

const connectDb = async (url: string) => {
  await mongoose.connect(url)
  return mongoose.connection.db;
}

export default connectDb