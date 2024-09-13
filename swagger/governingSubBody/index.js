const post = require("./post");
const getAll = require("./getAll");
const patch = require("./patch");
const get = require("./get");
const del = require("./delete");

module.exports = {
  "/governing-sub-body": {
    ...post,
    ...getAll,
  },
  "/governing-sub-body/{id}": {
    ...patch,
    ...del,
    ...get,
  },

};
