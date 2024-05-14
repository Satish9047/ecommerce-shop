import asyncHandler from "../middlewares/asyncHandler.js";
// import Order from "../models/order.js";

/**
 * @description     Create new order
 * @routes          GET /api/products
 * @access          Private
 *
 */
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

/**
 * @description     Get logged in user orders
 * @routes          GET /api/orders/myorders
 * @access          Private
 *
 */
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

/**
 * @description     Get order by ID
 * @routes          GET /api/orders/:id
 * @access          Private
 *
 */
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order my id");
});

/**
 * @description     Update order to paid
 * @routes          GET /api/orders/:id/pay
 * @access          Private
 *
 */
const updatOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update Order to paid");
});

/**
 * @description     Update order to deliverd
 * @routes          GET /api/orders/:id/deliver
 * @access          Private/admin
 *
 */
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

/**
 * @description     Get all order
 * @routes          GET /api/orders
 * @access          Private/admin
 *
 */
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updatOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
//
