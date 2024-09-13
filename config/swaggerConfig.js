const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "PinTv API",
    description: "",
    version: "1.0.0",
    contact: {
      email: "info@theappguys.com",
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

module.exports = {
  swaggerDefinition,
  basePath: "BASE_PATH",
  apis: ["src/routes/*.js"],
};
