const curry = require("./curry");
const flatten = require("./flatten");
const mapL = require("./Lazy/mapL");
const pipe = require("./pipe");

const flatMap = curry(pipe(mapL, flatten));

module.exports = flatMap;
