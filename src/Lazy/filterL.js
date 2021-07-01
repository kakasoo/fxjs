const curry = require("../curry");

const filterL = curry(function* (f, iter) {
    iter = iter[Symbol.iterator]();

    let cur;
    while (!(cur = iter.next()).done) {
        if (f(a)) {
            yield a;
        }
    }
});

module.exports = filterL;
