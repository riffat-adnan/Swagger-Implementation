const postBracketPresets = require("./postBracketPresets");
const post = require("./post");
const patch = require("./patch");
const get = require("./get");
const getAll = require("./getAll");
const del = require("./delete");
const getAllPresets = require("./getAllPresets");

module.exports = {
  "/tournament-bracket": {
    ...post,
    ...getAll,
  },
  "/tournament-bracket/{id}": {
    ...patch,
    ...del,
    ...get,
  },
  "/bracket-presets":{
    ...getAllPresets,
    ...postBracketPresets
  }

};
