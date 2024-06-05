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

    // console.log("Order created:", order);

    res.status(201).json(order);
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
 * @routes          PUT /api/orders/:id/pay
 * @access          Private
 *
 */
const updatOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

/**
 * @description     Update order to deliverd
 * @routes          PUT /api/orders/:id/deliver
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
  const orders = await Order.find({}).populate("user", "id name");
  res.status(200).json(orders);
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
