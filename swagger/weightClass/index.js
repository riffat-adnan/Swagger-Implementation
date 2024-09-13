const post = require("./post");
const patch = require("./patch");
const get = require("./get");
const getAll = require("./getAll");
const del = require("./delete");

module.exports = {
  "/weight-class": {
    ...post,
    ...getAll,
  },
  "/weight-class/{id}": {
    ...patch,
    ...del,
    ...get,
  },

};
