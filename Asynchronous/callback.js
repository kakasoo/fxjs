// callback과 Promise의 차이 비교

const add10 = (a, callback) => {
    setTimeout(() => callback(a), 100);
};

const add20 = (a) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + 20), 100);
    });
};

add10(3, (res) => console.log(res));
add10(5, (res) => {
    add10(res, (res) => {
        add10(res, (res) => {
            console.log(res);
        });
    });
});

add20(10).then(console.log);
add20(10).then(add20).then(add20).then(add20).then(console.log);
