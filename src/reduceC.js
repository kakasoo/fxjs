const curry = require("./curry");
const reduce = require("./reduce");

function noop() {}

const catchNoop = (arr) => (
    arr.forEach((a) => (a instanceof Promise ? a.catch(noop) : a)), arr
);

const reduceC = curry((f, acc, iter) => {
    const iter2 = catchNoop(iter ? [...iter] : [...acc]);
    return iter ? reduce(f, acc, iter2) : reduce(f, iter2);
});

module.exports = reduceC;
