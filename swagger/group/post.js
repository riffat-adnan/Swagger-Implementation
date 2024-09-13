module.exports = {
  post: {
    tags: ["Group"],
    description: "Add Group",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/group",
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
