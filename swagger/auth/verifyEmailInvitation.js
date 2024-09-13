module.exports = {
  get: {
    tags: ["Auth"],
    description: "Verify Email Invitation",
    parameters: [
      {
        name: "id",
        in: "query",
        description: "userId to verify the email",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
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
