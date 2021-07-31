const takeAllC = require("./takeAllC");
const curry = require("./curry");
const pipe = require("./pipe");
const filterL = require("./Lazy/filterL");

const filterC = curry(pipe(filterL, takeAllC));

module.exports = filterC;
