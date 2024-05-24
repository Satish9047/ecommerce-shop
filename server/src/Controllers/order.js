import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/order.js";

/**
 * @description     Create new order
 * @routes          GET /api/products
 * @access          Private
 *
 */
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length == 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = await Order.create({
      orderItems: orderItems.map((item) => ({
        ...item,
        product: item._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

/**
 * @description     Get logged in user orders
 * @routes          GET /api/orders/myorders
 * @access          Private
 *
 */
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

/**
 * @description     Get order by ID
 * @routes          GET /api/orders/:id
 * @access          Private
 *
 */
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
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
