/* SOLUTIONS
const ssn = '020517-3******';

const date = new Date();
const nowYear = date.getFullYear();

let yy = ssn.substring(0, 2);
let mm = ssn.substring(2, 4);
let dd = ssn.substring(4, 6);
let gen = ssn.substring(7, 8);
console.log("%s, %s, %s, %s", yy, mm, dd, gen);

// 2000년도 이전 출생자의 주빈번호 뒷자리 -> 1,2
// 2000년도 이후 출생자의 주민번호 뒷자리 -> 3,4
// if (parseInt(gen) > 2) {
//     yy = parseInt(yy) + 2000;
// } else {
//     yy = parseInt(yy) + 1900;
// }
yy = parseInt(gen) > 2 ? parseInt(yy) + 2000 : parseInt(yy) + 1900;
console.log(yy);
console.log(typeof yy);

// 나이계산
const age = nowYear - yy + 1;

// 성별확인
const sex = parseInt(gen) % 2 ? "남자" : "여자";

console.log("%d년 %d월 %d일에 태어난 %d세 %s 입니다.", yy, mm, dd, age, sex);
//*/