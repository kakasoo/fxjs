const pipe = require("./pipe");
const map = require("./map");
// const reduce = require("./reduce");
const join = require("./join");

const queryStr = pipe(
    Object.entries,
    map(([k, v]) => `${k}=${v}`),
    // reduce((a, b) => `${a}&${b}`),
    join("&")
);

module.exports = queryStr;
