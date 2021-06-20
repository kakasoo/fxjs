const filterL = function* (f, iter) {
    for (const a of iter) {
        if (f(a)) {
            yield a;
        }
    }
};

module.exports = filterL;
