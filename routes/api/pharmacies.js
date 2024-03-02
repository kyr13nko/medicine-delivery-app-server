const express = require("express");

// const validateBody = require("../../middlewares/validateBody");
// const isValidId = require("../../middlewares/isValidId");

const ctrl = require("../../controllers/pharmacies");
// const { schemas } = require("../../models/pharmacies");

const router = express.Router();

router.get("/", ctrl.listPharmacies);

module.exports = router;
