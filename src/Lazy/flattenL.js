const curry = require("../curry");

const isIterable = (a) => a && a[Symbol.iterator];

const flattenL = curry(function* (iter) {
    for (const a of iter) {
        if (isIterable(a)) {
            for (const b of a) yield b;
        } else {
            yield a;
        }
    }
});

module.exports = flattenL;
