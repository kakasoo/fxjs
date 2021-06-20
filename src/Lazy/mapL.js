const mapL = function* (f, iter) {
    for (const a of iter) {
        yield f(a);
    }
};

module.exports = L.map;
