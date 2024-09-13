const post = require("./post");
const patch = require("./patch");
const get = require("./get");
const getAll = require("./getAll");
const del = require("./delete");

module.exports = {
  "/mat": {
    ...post,
    ...getAll,
  },
  "/mat/{id}": {
    ...patch,
    ...del,
    ...get,
  },

};
