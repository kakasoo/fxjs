const reduce = require("./reduce");

const go = (...args) => reduce((a, f) => f(a), args);

module.exports = go;
