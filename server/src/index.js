import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import connectMongoDB from "./config/mongoDB.js";
import productRouter from "./routes/product.js";
import { notFound, errorHandler } from "./middlewares/error.js";
connectMongoDB();
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(morgan("dev"));
dotenv.config();

const PORT = Number(process.env.PORT) || 8000;

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/products", productRouter);
app.use(notFound);
app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`Server is running on  port ${PORT}`);
});