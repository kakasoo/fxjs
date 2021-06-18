const test = (name, times, fn) => {
    console.time(name);
    while (times--) fn();
    console.timeEnd(name);
};

module.exports = test;
