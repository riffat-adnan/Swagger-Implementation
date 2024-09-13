module.exports = {
  delete: {
    tags: ["Skin Fold Test"],
    description: "Delete Skin Fold Test",
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
