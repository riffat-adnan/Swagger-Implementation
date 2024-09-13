const info = require("./info");
const components = require("./components");
const servers = require("./servers");
const test = require("./test");
const state = require("./state");
const governingBody = require("./governingBody");
const governingSubBody = require("./governingSubBody");
const tags = require("./tags");
const auth = require("./auth");
const tournament = require("./tournament");
const team = require("./team");
const mat = require("./mat");
const group = require("./group");
const division = require("./division");
const statistician = require("./statistician");
const weightClass = require("./weightClass");
const tournamentBrackets = require("./tournamentBrackets");
const tournamentTieBreakers = require("./tournamentTieBreaker");
const athlete = require("./athlete");
const SkinFoldTest = require("./SkinFoldTest");

module.exports = {
  ...info,
  ...components,
  ...servers,
  ...tags,
  ...{
    paths: {
      ...test,
      ...state,
      ...governingBody,
      ...governingSubBody,
      ...auth,
      ...tournament,
      ...team,
      ...statistician,
      ...group,
      ...division,
      ...mat,
      ...weightClass,
      ...tournamentBrackets,
      ...tournamentTieBreakers,
      ...athlete,
      ...SkinFoldTest
    },
  },
};
