const flattenL = require("./Lazy/flattenL");
const pipe = require("./pipe");
const takeAll = require("./takeAll");

const flatten = pipe(flattenL, takeAll);

module.exports = flattenL;
