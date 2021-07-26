const curry = require("./curry");
const go1 = require("./go1");
const nop = require("./Lazy/nop");

const reduceF = (acc, a, f) =>
    a instanceof Promise
        ? a.then(f(acc, a), (e) => (e === nop ? acc : Promise.reject(e)))
        : f(acc, a);

const head = (iter) => go1(take(1, iter), ([h]) => h);

const reduce = curry((f, acc, iter) => {
    if (!iter) {
        return reduce(f, head((iter = acc[Symbol.iterator]())), iter);
    }

    iter = iter[Symbol.iterator]();

    return go1(acc, function recur() {
        let cur;
        while (!(cur = iter.next()).done) {
            acc = reduceF(acc, cur.value, f);
            if (acc instanceof Promise) {
                return acc.then(recur);
            }
        }
        return acc;
    });
});

module.exports = reduce;
