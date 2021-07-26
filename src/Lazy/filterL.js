const curry = require("../curry");
const go1 = require("../go1");

const nop = require("./nop");

const filterL = curry(function* (f, iter) {
    for (const a of iter) {
        const b = go1(a, f);
        if (b instanceof Promise) {
            yield b.then((b) => (b ? a : Promise.reject(nop)));
        } else if (b) {
            yield a;
        }
    }
});

module.exports = filterL;
