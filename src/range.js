const range = (l) => {
    const newArr = [];
    let i = -1;

    while (++i < l) {
        newArr.push(i);
    }
    return newArr;
};

module.exports = range;
