module.exports = {
  get: {
    tags: ["Statistician"],
    description: "Get Statistician",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "Id to update the record",
        required: true,
        schema: {
          type: "string",
        },
      }
    ],
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
