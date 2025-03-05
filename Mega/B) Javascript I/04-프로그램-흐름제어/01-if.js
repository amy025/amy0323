console.group("1) 논리값을 사용한 경우");

console.log("Hungry");

const have_money = true;

if ( have_money) {
    console.log("Let's eat");
}

console.log("eat");

console.groupEnd();
console.group("2) 숫자형 값을 사용한 경우");

const money1 = 10000;

if ( money1) {
    console.log("Take a Taxi");
}

console.log("Let's go home");

console.groupEnd();

console.group("3) 비교식을 사용한 조건문");

const money2 = 12000;

if ( money2 >= 5000) {
    const k = money2-5000;
    console.log("%d Left after buying a gift", k);
}

console.groupEnd();

console.group("4) 논리식을 사용한 조건문 (AND)");

const x1 = true;
const y1 = true;

if (x1 && y1) {
    console.log("x1 && y1 조건은 참 입니다.");
}

const x2 =true;
const y2 = false;

if(x2 && y2) {
    console.log("x2 && y2 조건은 참입니다");
}

console.groupEnd();

console.group("5) 논리식을 사용한 조건문");

const x3 = true;
const y3 = true;

if (x3 || y3){
    console.log("x3||y3 조건은 참 입니다.");
}

const x4 = true;
const y4 = false;

if(x4 || y4) {
    console.log("x4||y4 조건은 참입니다.");
}

console.groupEnd();

console.group("6) Not 연산");

const a = true;

if (!a){
    console.log("Hello World");
}

const b = false;

if(!b) {
    console.log("Hola Mundo");
}

console.groupEnd();
const x5 = true;
const y5 = false;

if(!(x5 && y5)) {
    console.log("!(x5&&y5) 조건은 참 입니다.");
}

const x6 = true;
const y6 = false;

if(!(x6 || y6)) {
    console.log("!(x6 || y6) 조건은 참 입니다.");
}