// const test = (name, times, fn) => {
//     console.time(name);
//     while (times--) fn();
//     console.timeEnd(name);
// };

// module.exports = test;

const go = require("./go");
const mapL = require("./Lazy/mapL");
const filterL = require("./Lazy/filterL");
const reduce = require("./reduce");

go(
    [1, 2, 3, 4, 5],
    mapL((a) => Promise.resolve(a * a)),
    filterL((a) => Promise.resolve(a % 2)),
    reduce((acc, cur) => acc + cur),
    console.log
);
