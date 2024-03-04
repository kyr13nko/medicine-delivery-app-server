const { Schema, model } = require("mongoose");
const Joi = require("joi");

const handleMongooseError = require("../helpers/handleMongooseError");

const orderSchema = new Schema(
  {
    user: {
      name: { type: String, required: [true, "Set name for order"] },
      email: { type: String, required: [true, "Set name for email"] },
      phone: { type: String, required: [true, "Set name for phone"] },
      address: { type: String, required: [true, "Set name for address"] },
    },
    medicines: [
      {
        _id: String,
        name: String,
        description: String,
        price: Number,
      },
    ],
  },
  { versionKey: false }
);

orderSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  user: Joi.object({
    name: Joi.string().required().messages({
      "any.required": "Name for order is required",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "Valid email is required",
      "any.required": "Email for order is required",
    }),
    phone: Joi.string().required().messages({
      "any.required": "Phone for order is required",
    }),
    address: Joi.string().required().messages({
      "any.required": "Address for order is required",
    }),
  }),
  medicines: Joi.array().items(
    Joi.object({
      _id: Joi.string(),
      name: Joi.string(),
      description: Joi.string(),
      price: Joi.number(),
    })
  ),
});

const schemas = {
  addSchema,
};

const Order = model("order", orderSchema);

module.exports = { Order, schemas };
