const curry = require("../curry");

const mapL = curry(function* (f, iter) {
    for (const a of iter) {
        yield f(a);
    }
});

module.exports = mapL;
