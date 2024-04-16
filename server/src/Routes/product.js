import express from "express";
const productRoutes = express.Router();
import { getProducts, getProductById } from "../Controllers/products.js";

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProductById);

export default productRoutes;
