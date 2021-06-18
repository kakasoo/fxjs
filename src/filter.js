const curry = require("./curry");

const filter = curry((f, iter) => {
    const newArr = [];
    for (const a of iter) {
        if (f(a)) {
            newArr.push(a);
        }
    }
    return newArr;
});

module.exports = filter;
