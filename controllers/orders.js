const { Order } = require("../models/order");

const ctrlWrapper = require("../helpers/ctrlWrapper");

const listOrders = async (req, res) => {
  const allOrders = await Order.find();
  res.status(200).json(allOrders);
};

const addOrder = async (req, res) => {
  const newOrder = await Order.create(req.body);
  res.status(201).json(newOrder);
};

module.exports = {
  listOrders: ctrlWrapper(listOrders),
  addOrder: ctrlWrapper(addOrder),
};
