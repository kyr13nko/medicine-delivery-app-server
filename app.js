const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const medicinesRouter = require("./routes/api/medicines");
const pharmaciesRouter = require("./routes/api/pharmacies");
const ordersRouter = require("./routes/api/orders");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/medicines", medicinesRouter);
app.use("/api/pharmacies", pharmaciesRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
