const curry = require("./curry");
const take = require("./take");

const catchNoop = (arr) => (
    arr.forEach((a) => (a instanceof Promise ? a.catch(noop) : a)), arr
);

takeC = curry((l, iter) => take(l, catchNoop([...iter])));

module.exports = takeC;
