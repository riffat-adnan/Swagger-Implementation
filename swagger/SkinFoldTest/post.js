module.exports = {
  post: {
    tags: ["Skin Fold Test"],
    description: "Add Skin Fold Test",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/skinFoldCalculation",
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
