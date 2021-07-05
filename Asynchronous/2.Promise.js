// Promise는 비동기 상황을 값으로 다룰 수 있다.

const test1 = (a, fn) => {
    fn(a);
};

const test2 = (a) => {
    return new Promise((resolve) => {
        resolve(a);
    });
};

const a = test1(10, (res) =>
    test1(res, (res) =>
        test1(res, (res) => {
            console.log("here. : ", res);
        })
    )
);

const b = test2(10)
    .then((res) => {
        console.log("inner Promise : ", res);
        return test2(res);
    })
    .then((res) => {
        console.log("inner Promise : ", res);
        return test2(res);
    });

console.log("result : ", a);
console.log("result : ", b);

b.then((res) => console.log("값을 계속 이어나갈 수 있다 : ", res - 10)); // 값을 계속 이어나갈 수 있다.
