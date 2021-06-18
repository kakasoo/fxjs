// suspended 상태인 iterable을 배열 형태로 변환해주는 함수

const curry = require("./curry");

const take = curry((l, iter) => {
    const res = [];
    for (const item of iter) {
        res.push(item);
        if (res.length === l) return res;
    }
    return res;
});

module.export = take;
