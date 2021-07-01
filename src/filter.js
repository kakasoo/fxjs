const curry = require("./curry");

const filter = curry((f, iter) => {
    const res = [];
    iter = iter[Symbol.iterator]();

    while (!(cur = iter.next()).done) {
        const a = cur.value;
        if (f(a)) {
            res.push(a);
        }
    }
    return res;
});

module.exports = filter;
