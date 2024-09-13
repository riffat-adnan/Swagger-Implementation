const post = require("./post");
const patch = require("./patch");
const get = require("./get");
const getAll = require("./getAll");
const del = require("./delete");

module.exports = {
  "/state": {
    ...post,
    ...getAll,
  },
  "/state/{id}": {
    ...patch,
    ...del,
    ...get,
  },

};
