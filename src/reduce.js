const curry = require("./curry");

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

const reduce = curry((f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    } else {
        iter = iter[Symbol.iterator]();
    }

    // for (const a of iter) {
    //     acc = acc instanceof Promise ? acc.then((acc) => f(acc, a)) : f(acc, a);
    // }
    // return acc;
    return go1(acc, function recur() {
        while (!(cur = iter.next()).done) {
            const a = cur.value;
            acc = f(acc, a);
            if (acc instanceof Promise) return acc.then(recur);
        }
        return acc;
    });
});

module.exports = reduce;
