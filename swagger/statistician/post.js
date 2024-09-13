module.exports = {
  post: {
    tags: ["Statistician"],
    description: "Add Statistician",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/statistician",
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
      201: {
        description: "Record Created Successfully",
      },
    },
  },
};
