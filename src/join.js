const curry = require("./curry");
const reduce = require("./reduce");

const join = curry((seq = ",", iter) =>
    reduce((a, b) => `${a}${seq}${b}`, iter)
);

module.exports = join;
