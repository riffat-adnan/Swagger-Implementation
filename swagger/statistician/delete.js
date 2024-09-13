module.exports = {
  delete: {
    tags: ["Statistician"],
    description: "Delete Statistician",
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
        description: "Record Deleted Successfully",
      },
    },
  },
};
