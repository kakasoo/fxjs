class Stream {
    constructor(value) {
        this.value = value;
        // this.next = new Stream(value + 1);
    }

    get next() {
        return new Stream(this.value + 1);
    }

    takeUntil(n, accumulator) {
        accumulator = accumulator || [];

        if (n < this.value) {
            return;
        }

        if (n === this.value) {
            return accumulator;
        }

        accumulator.push(this.value);
        return this.next.takeUntil(n, accumulator);
    }
}

module.exports = Stream;

// const stream = new Stream(10);

// console.log(stream);
// console.log(stream.takeUntil(14));
// console.log(stream.next.next.next.next.next.next);
