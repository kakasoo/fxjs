const curry = require("./curry");

const map = curry((f, iter) => {
    const res = [];
    iter = iter[Symbol.iterator]();
    let cur;
    while (!(cur = iter.next()).done) {
        const a = cur.value;
        res.push(f(a));
    }
    return res;
});

module.exports = map;
