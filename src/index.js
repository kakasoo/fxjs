const infinity = require("./infinity");
const limit = require("./limit");

const iter1 = limit(100, infinity(1));

console.time();
for (const item of iter1) {
    console.log();
}
console.timeEnd();

console.time();
for (let i = 0; i <= 100; i++) {
    console.log();
}
console.timeEnd();
