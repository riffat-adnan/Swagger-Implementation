module.exports = {
  post: {
    tags: ["Tournament Bracket"],
    description: "Add Bracket Presets",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/bracketPresets",
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
