const go = require("./go");

const pipe =
    (fn, ...fns) =>
    (...args) =>
        go(fn(...args), ...fns);

module.exports = pipe;
