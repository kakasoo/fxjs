const entriesL = (obj) => {
    for (const k in obj) {
        yield[(k, obj[k])];
    }
};

module.exports = entriesL;
