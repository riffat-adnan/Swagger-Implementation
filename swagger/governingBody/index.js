const post = require("./post");
const getAll = require("./getAll");
// const patch = require("./patch");
// const get = require("./get");
// const del = require("./delete");

module.exports = {
  "/governing-body": {
    ...post,
    ...getAll,
  },
  // "/state/{id}": {
  //   ...patch,
  //   ...del,
  //   ...get,
  // },

};
