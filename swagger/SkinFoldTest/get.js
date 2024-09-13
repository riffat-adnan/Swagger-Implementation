module.exports = {
  get: {
    tags: ["Skin Fold Test"],
    description: "Get Skin Fold Test",
    parameters: [ {
      name: "athleteId",
      in: "path",
      description: "Id to update the record",
      required: true,
      schema: {
        type: "string",
      },
    }],
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
