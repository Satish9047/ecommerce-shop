import express from "express";
const orderRoutes = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updatOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../Controllers/order.js";
import { protect, admin } from "../middlewares/auth.js";

orderRoutes
  .route("/")
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders);
orderRoutes.route("/mine").get(protect, getMyOrders);
orderRoutes.route("/:id").get(protect, getOrderById);
orderRoutes.route("/:id/pay").put(protect, updatOrderToPaid);
orderRoutes.route("/:id/delivered").put(protect, admin, updateOrderToDelivered);

export default orderRoutes;
