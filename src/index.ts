import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { productRouter } from "./routes/product";

// CREATE AN EXPRESS APP
const app = express();
dotenv.config();

// MIDDLEWARE
app.use("/api/products", productRouter);

// DEFINE THE PORT AND MONGODB URI FROM .ENV FILE
const PORT = process.env.PORT || 4000;
const MONGOURI = process.env.MONGO_URI || "";

// CONNECT TO MONGODB AND START THE SERVER
mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
