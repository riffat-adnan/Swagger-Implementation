module.exports = {
  post: {
    tags: ["Tai Breaker"],
    description: "Add Tai Breaker",
    parameters: [],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/taiBreaker",
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
