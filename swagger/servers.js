module.exports = {
  servers: [
    {
      url: process.env.SWAGGER_LOCAL_URL,
      description: "Local server",
    },
    {
      url: process.env.SWAGGER_LIVE_URL,
      description: "Live Server",
    },
    {
      url: process.env.SWAGGER_NGROK_URL,
      description: "NGROK",
    },
  ],
};
