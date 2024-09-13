module.exports = {
  post: {
    tags: ["Auth"],
    description: "Reset Password",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/resetPassword",
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
        description: "Password Reset Successfully",
      },
      404: {
        description: "Failed!",
      },
    },
  },
};
