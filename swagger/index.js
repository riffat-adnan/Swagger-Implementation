const info = require("./info");
const components = require("./components");
const servers = require("./servers");
const tags = require("./tags");
const auth = require("./auth");

module.exports = {
  ...info,
  ...components,
  ...servers,
  ...tags,
  ...{
    paths: {
      ...auth,
    },
  },
};
