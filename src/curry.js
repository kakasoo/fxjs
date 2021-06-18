const curry =
    (f) =>
    (a, ...rest) =>
        rest.length ? f(a, ...rest) : (...rest) => f(a, ...rest);

module.exports = curry;
