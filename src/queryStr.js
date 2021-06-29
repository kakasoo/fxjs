const pipe = require("./pipe");
const map = require("./map");
const reduce = require("./reduce");

const queryStr = pipe(
    Object.entries,
    map(([k, v]) => `${k}=${v}`),
    reduce((a, b) => `${a}&${b}`)
);

module.exports = queryStr;
