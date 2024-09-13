module.exports = {
  post: {
    tags: ["Auth"],
    description: "Login User",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/login",
          },
        },
      },
    },
    // expected responses
    responses: {
      200: {
        description: "Logged In Successfully",
      },
      404: {
        description: "Email or password is wrong",
      },
    },
  },
};
