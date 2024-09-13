module.exports = {
  get: {
    tags: ["Tai Breaker"],
    description: "Get All Tai Breakers",
    parameters: [],
    security: [
      {
        bearerAuth: [],
      },
    ],
    // expected responses
    responses: {
      200: {
        description: "Record Found Successfully",
      },
    },
  },
};
