const takeAll = require("../takeAll");
const curry = require("./curry");
const mapL = require("./Lazy/mapL");
const pipe = require("./pipe");

const map = curry(pipe(mapL, takeAll));

module.exports = map;
