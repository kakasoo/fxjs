const limit = require("./limit");
const infinity = require("./infinity");

function* odds(l) {
    for (const a of limit(l, infinity(1))) {
        if (a % 2) {
            yield a;
        }
    }
}

module.exports = odds;
