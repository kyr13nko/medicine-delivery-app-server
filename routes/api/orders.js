const express = require("express");

const validateBody = require("../../middlewares/validateBody");

const ctrl = require("../../controllers/orders");
const { schemas } = require("../../models/order");

const router = express.Router();

router.get("/", ctrl.listOrders);
router.post("/", validateBody(schemas.addSchema), ctrl.addOrder);

module.exports = router;
