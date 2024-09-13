const postTaiBreaker = require("./postTieBreaker");
const post = require("./post");
const patch = require("./patch");
const get = require("./get");
const getAll = require("./getAll");
const getAllTieBreaker = require("./getAllTieBreaker");
const del = require("./delete");

module.exports = {
  "/tie-breaker": {
    ...postTaiBreaker,
    ...getAllTieBreaker,
  },
  "/tournament-tie-breaker": {
    ...post,
    ...getAll,
  },
  "/tournament-tie-breaker/{id}": {
    ...patch,
    ...del,
    ...get,
  },

};
