module.exports = {
  patch: {
    tags: ["Tournament"],
    description: "Update Tournament",
    parameters: [{
      name: "id",
      in: "path",
      description: "Id to update the record",
      required: true,
      schema: {
        type: "string",
      },
    }],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/tournament",
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    // expected responses
    responses: {
      200: {
        description: "Record Updated Successfully",
      },
    },
  },
};
