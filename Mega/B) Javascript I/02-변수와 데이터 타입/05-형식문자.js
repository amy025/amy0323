/* 기본 데이터 타입 */
const num=123.45;
const str="hello";
const bool= true;

/* 후에 나눌 데이터 타입 */
const obj=new Date(); // 객체
const arr=[1,2,3]; // 배열 객체의 일종
const json = { "a" : 123, "b" : 234 } // jason 객체의 일종

/* 숫자 표현을 위한 문자 */
console.group("숫자값 출력하기")
console.log("숫자값 출력하기=%d", num); // Good
console.log("숫자값 출력하기=%d", str); // Not a number so NaN
console.log("숫자값 출력하기=%d", bool); // 1 (0=false, other than 0 every number are true.)
console.log("숫자값 출력하기=%d", obj); // hash 값 출력
console.log("숫자값 출력하기=%d", arr); // Not a number so NaN
console.log("숫자값 출력하기=%d", json); // Not a number so NaN
console.groupEnd();

/* 숫자 표현을 위한 문자 */
console.group("문자열 출력하기")
console.log("문자열 출력하기=%d", num); // Good
console.log("문자열 출력하기=%d", str); // Good 
console.log("문자열 출력하기=%d", bool); // Good
console.log("문자열 출력하기=%d", obj); // Good
console.log("문자열 출력하기=%d", arr); // Good
console.log("문자열 출력하기=%d", json); // Good
console.groupEnd();

/* 숫자 표현을 위한 문자 */
console.group("객체 출력하기")
console.log("객체 출력하기=%d", num); // Good
console.log("객체 출력하기=%d", str); // Good (but with "")
console.log("객체 출력하기=%d", bool); // Good
console.log("객체 출력하기=%d", obj); // Good
console.log("객체 출력하기=%d", arr); // Good
console.log("객체 출력하기=%d", json); // Good
console.groupEnd();


/* 숫자 표현을 위한 문자 */
console.group("JSON 출력하기")
console.log("JSON 출력하기=%d", num); // Good
console.log("JSON 출력하기=%d", str); // Good (but with "")
console.log("JSON 출력하기=%d", bool); // Good
console.log("JSON 출력하기=%d", obj); // Good
console.log("JSON 출력하기=%d", arr); // Good
console.log("JSON 출력하기=%d", json); // Good
console.groupEnd();

const student = "JSstudent";
const age=20;
console.group("복합사용")
console.log("%s님의 나이는 %d세입니다.", student, age);
console.groupEnd();