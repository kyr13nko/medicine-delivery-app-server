const express = require("express");

const ctrl = require("../../controllers/pharmacies");

const router = express.Router();

router.get("/", ctrl.listPharmacies);

module.exports = router;
