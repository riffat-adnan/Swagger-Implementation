module.exports = {
  get: {
    tags: ["Division"],
    description: "Get All Divisions",
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
