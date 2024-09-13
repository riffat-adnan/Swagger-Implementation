const post = require("./post");
const patch = require("./patch");
const get = require("./get");
const getAll = require("./getAll");
const del = require("./delete");

module.exports = {
  "/team": {
    ...post,
    ...getAll,
  },
  "/team/{id}": {
    ...patch,
    ...del,
    ...get,
  },

};
