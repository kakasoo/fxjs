const go = require("./go");
const filter = require("./filter");
const take = require("./take");

const find = (f, iter) => go(iter, filter(f), take(1), ([a]) => a);

module.exports = find;
