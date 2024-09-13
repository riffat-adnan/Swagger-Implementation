module.exports = {
  post: {
    tags: ["Auth"],
    description: "Signup User",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/signup",
          },
        },
      },
    },
    // expected responses
    responses: {
      200: {
        description: "Account Created Successfully",
      },
      409: {
        description: "Account already exist with this email",
      },
    },
  },
};
