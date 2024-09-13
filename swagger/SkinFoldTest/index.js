const post = require("./post");
const patch = require("./patch");
const get = require("./get");
const getAll = require("./getAll");
const del = require("./delete");

module.exports = {
  "/skin-fold-calculation": {
    ...post,
    ...getAll,
  },
  "/skin-fold-calculation/{id}": {
    ...patch,
    ...del,
  },
  "/skin-fold-calculation/{athleteId}": {
    ...get,
  },

};
