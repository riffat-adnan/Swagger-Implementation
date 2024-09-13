module.exports = {
  post: {
    tags: ["Auth"],
    description: "Send OTP",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/otp",
          },
        },
      },
    },
    // expected responses
    responses: {
      200: {
        description: "",
      },
      404: {
        description: "",
      },
    },
  },
};
