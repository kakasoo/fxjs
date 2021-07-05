const log = console.log;

const delay100 = (a) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a), 100);
    });
};

const go = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
const add5 = (a) => a + 5;

const a = go(10, add5);
const b = go(Promise.resolve(10), add5);
const c = go(delay100(10), add5);

b.then(log);
c.then(log);

go(b, log);
go(c, log);
