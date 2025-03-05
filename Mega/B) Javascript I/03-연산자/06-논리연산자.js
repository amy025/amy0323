console.group("1) and");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.groupEnd;

console.group("2) and 연산 여러개 사용");
console.log(true && true && true );
console.log(true && true && false );
console.log(false && false && true );
console.log(false && true && true );
console.group();

console.group("3) or");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.groupEnd();

console.group("4) or 연산 여러개 사용");
console.log(true || true || true);
console.log(true || true || false);
console.log(false || false || true);
console.log(false || true || true);
console.group();

console.group("5) 복합사용");

console.log(true && true || true);

console.log(true && true || false);

console.log(false && false || true);

console.log(false && true || true);

console.log(true || true && true);

console.log(true || true && false);

console.log(false || false && true);

console.log(false || true && true);
console.groupEnd();

console.group("6) not");
let success = true;
let fail = !success;
console.log(fail);

let k = 1;
console.log(!k);

let l = 0;
console.log(!l);

let str1 = "Hello";
console.log(!str1);

let str2 = "";
console.log(!str2);
console.groupEnd();