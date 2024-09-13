module.exports = {
  get: {
    tags: ["Governing Sub Body"],
    description: "Get All Governing Sub Bodies",
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
