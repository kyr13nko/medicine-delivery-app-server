const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const handleMongooseError = require("../helpers/handleMongooseError");

const medicineSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  // pharmacyIds: [{ type: Schema.Types.ObjectId, ref: "Pharmacy" }],
});

medicineSchema.post("save", handleMongooseError);

const Medicine = model("medicine", medicineSchema);

module.exports = { Medicine };
