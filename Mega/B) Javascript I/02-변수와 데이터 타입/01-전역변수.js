/* 변수 선언 */
var myNumber1;

/* 할당 */
myNumber1 = 100;
console.log(myNumber1);

/* 변수 선언 + 할당 */
var muNumber2 = 123;
console.log(myNumber2);

/* 변수 값 변경 */
myNumber2 = 456;
console.log(myNumber2);

/* 변수 재선언 */
/* 원칙적으로는 한번 선언된 변수는 재선언이 불가함. */
/* JS의 전역변수는 재선언 가능 but nor recommended (var) */
var myNumber3 = 300;
console.log(myNumber3);

var myNumber3 = 789;
console.log(myNumber3);