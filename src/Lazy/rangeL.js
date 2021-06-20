const rangeL = function* (l) {
    let i = -1;

    while (++i < l) {
        yield i;
    }
};

module.exports = rangeL;
