import mongoose from "mongoose";

const username = "sanketsagarmuz111"
const db_password = "sanketsagarmuz111"

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${username}:${db_password}@cluster0.s5uqu.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("db connected"));
};
