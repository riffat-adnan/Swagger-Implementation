const post = require("./post");
const patch = require("./patch");
const get = require("./get");
const getAll = require("./getAll");
const del = require("./delete");
const patchCompliances = require("./patchCompliances");
module.exports = {
  "/athlete": {
    ...post,
  },
  "/athlete/{id}": {
    ...patch,
    ...del,
    ...get,
  },
  "/athlete-edit-compliance": {
    ...patchCompliances,
  },
  "/athlete-by-team/{teamId}": {
    ...getAll,
  },

};
