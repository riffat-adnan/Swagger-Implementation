module.exports = {
  get: {
    tags: ["Skin Fold Test"],
    description: "Get All Skin Fold Tests",
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
