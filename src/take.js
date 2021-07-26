// suspended 상태인 iterable을 배열 형태로 변환해주는 함수

const curry = require("./curry");

const nop = require("./Lazy/nop");

const take = curry((l, iter) => {
    const res = [];

    iter = iter[Symbol.iterator]();

    return (function recur() {
        let cur;

        while (!(cur = iter.next()).done) {
            const a = cur.value;

            // NOTE : a가 promise일지 모르기 때문에 별도의 처리가 필요하다.
            if (a instanceof Promise) {
                return a
                    .then((a) => {
                        // NOTE : 이렇게 한 줄로 바꾸는 건 몰랐었다.
                        return (res.push(a), res).length === l ? res : recur();
                    })
                    .catch((e) => (e === nop ? recur() : Promise.reject(e)));
            }

            res.push(a);
            if (res.length === l) {
                return res;
            }
        }

        return res;
    })();
});

module.exports = take;
