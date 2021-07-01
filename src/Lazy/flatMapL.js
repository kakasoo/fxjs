const curry = require("../curry");
const pipe = require("../pipe");
const flattenL = require("./flattenL");
const mapL = require("./mapL");

const flatMapL = curry(pipe(mapL, flattenL));

module.exports = flatMapL;
