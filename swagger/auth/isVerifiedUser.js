module.exports = {
  post: {
    tags: ["Auth"],
    description: "Verify user",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                example: "example@email.com",
              },
            },
          },
        },
      },
    },
    // expected responses
    responses: {
      200: {
        description: "User is verified!",
      },
      404: {
        description: "User not verified!",
      },
    },
  },
};
