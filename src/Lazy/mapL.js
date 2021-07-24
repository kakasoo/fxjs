const curry = require("../curry");
const go1 = require("../go1");

const mapL = curry(function* (f, iter) {
    for (const a of iter) yield go1(a, f);
});

module.exports = mapL;
