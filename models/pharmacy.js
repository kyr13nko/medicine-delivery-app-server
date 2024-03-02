const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const handleMongooseError = require("../helpers/handleMongooseError");

const pharmacySchema = new Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
});

pharmacySchema.post("save", handleMongooseError);

const Pharmacy = model("pharmacy", pharmacySchema);

module.exports = { Pharmacy };
