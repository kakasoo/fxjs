const go = require("./go");
const filterL = require("./Lazy/filterL");
const take = require("./take");

const find = (f, iter) => go(iter, filterL(f), take(1), ([a]) => a);

module.exports = find;
