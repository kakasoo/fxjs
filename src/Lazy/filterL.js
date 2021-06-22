const curry = require("../curry");

const filterL = curry(function* (f, iter) {
    for (const a of iter) {
        if (f(a)) {
            yield a;
        }
    }
});

module.exports = filterL;
