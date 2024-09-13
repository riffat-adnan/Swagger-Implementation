module.exports = {
  get: {
    tags: ["Mat"],
    description: "Get All Mats",
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
