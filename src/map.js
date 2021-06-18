const curry = require("./curry");

const map = curry((f, iter) => {
    const newArr = [];
    for (const a of iter) {
        newArr.push(f(a));
    }
    return newArr;
});

module.exports = map;
