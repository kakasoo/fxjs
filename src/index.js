const go = require("./go");
const range = require("./range");
const map = require("./map");
const filter = require("./filter");
const take = require("./take");

const rangeL = require("./Lazy/rangeL");
const mapL = require("./Lazy/mapL");
const filterL = require("./Lazy/filterL");

go(
    range(10),
    map((n) => n + 10),
    filter((n) => n % 2),
    take(2),
    console.log
);

go(
    rangeL(10),
    mapL((n) => n + 10),
    filterL((n) => n % 2),
    take(2),
    console.log
);
