function* infinity(i = 0) {
    while (true) {
        yield i++;
    }
}

module.exports = infinity;
