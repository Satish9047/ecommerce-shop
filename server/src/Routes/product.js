import express from "express";
const productRouter = express.Router();

import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/products.js";

productRouter.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({});
    console.log(products, "these are the product from database");
    res.json(products);

}));

productRouter.get("/:id", asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        return res.json(product);
    } else {
        res.status(404);
        throw new Error("Resource not Found");
    }
}));

export default productRouter;