module.exports = {
  delete: {
    tags: ["Tournament"],
    description: "Delete Tournament",
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
