const curry = require("../curry");

const mapL = curry(function* (f, iter) {
    iter = iter[Symbol.iterator]();

    let cur;
    while (!(cur = iter.next()).done) {
        const a = cur.value;
        yield f(a);
    }
});

module.exports = mapL;
