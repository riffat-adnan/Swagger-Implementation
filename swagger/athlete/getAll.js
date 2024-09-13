module.exports = {
  get: {
    tags: ["Athlete"],
    description: "Get All Athletes",
    parameters: [ {
      name: "teamId",
      in: "path",
      description: "temId to get the record",
      required: true,
      schema: {
        type: "string",
      },
    }],
    security: [
      {
        bearerAuth: [],
      },
    ],
    // expected responses
    responses: {
      200: {
        description: "Record Found Successfully",
      },
    },
  },
};
