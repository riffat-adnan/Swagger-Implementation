require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const { authenticateSwagger } = require("./middlewares/swaggerMiddleware");
const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

const docs = require("./swagger");
const swaggerConfig = require("./config/swaggerConfig");

app.use(
  "/api/v1/api-docs",
  authenticateSwagger,
  swaggerUi.serve,
  swaggerUi.setup(docs, swaggerConfig)
);

app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ message: "Server is working fine!" });
});

app.all("*", (req, res) => {
  const err = new Error(`Can't find ${req.originalUrl} on the server!`);
  err.status = 404;
});

module.exports = app;
