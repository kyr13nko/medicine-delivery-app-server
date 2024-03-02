const express = require("express");

// const validateBody = require("../../middlewares/validateBody");
// const isValidId = require("../../middlewares/isValidId");

const ctrl = require("../../controllers/medicines");
// const { schemas } = require("../../models/medicine");

const router = express.Router();

router.get("/", ctrl.listMedicines);

module.exports = router;
