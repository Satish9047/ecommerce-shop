import express from "express";
const productRouter = express.Router();
import { getProducts, getProductById } from "../Controllers/products.js";

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);

export default productRouter;