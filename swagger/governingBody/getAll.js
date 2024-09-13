module.exports = {
  get: {
    tags: ["Governing Body"],
    description: "Get All Governing Bodies",
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
