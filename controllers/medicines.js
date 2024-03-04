const { Medicine } = require("../models/medicine");

const ctrlWrapper = require("../helpers/ctrlWrapper");

const listMedicines = async (req, res) => {
  const allMedicines = await Medicine.find();
  res.status(200).json(allMedicines);
};

module.exports = {
  listMedicines: ctrlWrapper(listMedicines),
};
