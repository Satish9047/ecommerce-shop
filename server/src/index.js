import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectMongoDB from "./config/mongoDB.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import { notFound, errorHandler } from "./middlewares/error.js";
import orderRoutes from "./routes/order.js";

dotenv.config();

connectMongoDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(morgan("dev"));

const PORT = Number(process.env.PORT) || 8000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on  port ${PORT}`);
});
