import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import products from "./data/products.js";


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

app.get("/api/products", (req, res) => {
    res.json(products);
});
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server is running on  port ${PORT}`);
});