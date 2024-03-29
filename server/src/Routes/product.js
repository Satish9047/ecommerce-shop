import { Router } from "express";
import products from "../data/products.js";
const productRouter = Router();

productRouter.get("/", async (req, res) => {

    res.json(products);
});
productRouter.get("/:id", async (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

export default productRouter;