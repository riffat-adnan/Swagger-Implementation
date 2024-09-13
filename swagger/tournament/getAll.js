module.exports = {
  get: {
    tags: ["Tournament"],
    description: "Get All Tournaments",
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
