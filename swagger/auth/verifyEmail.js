module.exports = {
  post: {
    tags: ["Auth"],
    description: "Verify OTP",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/verifyEmail",
          },
        },
      },
    },
    // expected responses
    responses: {
      200: {
        description: "Otp verified Successfully",
      },
      404: {
        description: "Invalid otp!",
      },
    },
  },
};
