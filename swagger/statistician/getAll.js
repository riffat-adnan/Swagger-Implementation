module.exports = {
  get: {
    tags: ["Statistician"],
    description: "Get All Statisticians",
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
