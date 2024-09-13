module.exports = {
  delete: {
    tags: ["Mat"],
    description: "Delete Mat",
    parameters: [ {
      name: "id",
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
    responses: {
      200: {
        description: "Record Found Successfully",
      },
    },
  },
};
