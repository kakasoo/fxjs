const pipe = require("./pipe");
const mapL = require("./Lazy/mapL");
const join = require("./join");
const entriesL = require("./Lazy/entriesL");

const queryStr = pipe(
    entriesL,
    mapL(([k, v]) => `${k}=${v}`),
    join("&")
);

module.exports = queryStr;
