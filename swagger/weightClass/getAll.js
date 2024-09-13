module.exports = {
  get: {
    tags: ["Weight Class"],
    description: "Get All Weight Classes",
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
