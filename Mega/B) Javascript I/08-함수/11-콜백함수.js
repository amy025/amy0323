function something (x, y, cb) {
    const result = cb(x, y);
    console.group(cb);
    console.log( x + "와 " + y + " 의 연산 결과는 " + result);
    console.groupEnd();
}

function plus(a,b) { return a + b; }
function minus(a,b) { return a - b; }

something(100, 50, plus);
something(100, 50, minus);

something(200, 100, function (a,b) {
    return a * b;
});

something (200, 100, function(a,b) {
    return a / b;
});

something(5, 7, (a,b) => {
    for (let i = a; i < b; i++) {
        console.log("7 x" + i + " = " + (i*7));
    }
});

something(5, 6, (a,b) => {
    console.log(a*b);
});

something(5,7, (a,b) => console.log(a * b));