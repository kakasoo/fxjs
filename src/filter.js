const takeAll = require("./takeAll");
const curry = require("./curry");
const filterL = require("./Lazy/filterL");
const pipe = require("./pipe");

const map = curry(pipe(filterL, takeAll));

module.exports = map;
