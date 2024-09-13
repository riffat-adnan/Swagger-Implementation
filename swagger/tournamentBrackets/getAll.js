module.exports = {
  get: {
    tags: ["Tournament Bracket"],
    description: "Get All Tournament Brackets",
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
