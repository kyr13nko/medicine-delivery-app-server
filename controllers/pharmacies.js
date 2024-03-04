const { Pharmacy } = require("../models/pharmacy");

const ctrlWrapper = require("../helpers/ctrlWrapper");

const listPharmacies = async (req, res) => {
  const allPharmacies = await Pharmacy.find().populate({
    path: "medicines._id",
    model: "medicine",
  });
  res.status(200).json(allPharmacies);
};

module.exports = {
  listPharmacies: ctrlWrapper(listPharmacies),
};
