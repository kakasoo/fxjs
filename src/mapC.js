const takeAllC = require("./takeAllC");
const curry = require("./curry");
const pipe = require("./pipe");
const mapL = require("./Lazy/mapL");

const mapC = curry(pipe(mapL, takeAllC));

module.exports = mapC;
