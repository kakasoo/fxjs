// 모나드에 대해서 정리합니다.

const log = console.log;
const g = (a) => a + 1;
const f = (a) => a * a;

log(f(g(1))); // 정상적인 경우
log(f(g())); // 비정상적인 경우임에도 실행이 이루어진다.

[1]
    .map(g)
    .map(f)
    .forEach((res) => log(res)); // 모나드 형식으로 만들면 값이 없는 때에 강제 실행되지 않는다.

Promise.resolve(3).then(g).then(f).then(log);
