const a = [1,2];
const b = [4,5,6,7];
const myArr1 = [a,b];
console.log(myArr1);

var myArr2 = [[1,2,3], [4,5,6]];
console.log(myArr2);

console.log(myArr2[0][0]);
console.log(myArr2[0][1]);
console.log(myArr2[0][2]);
console.log(myArr2[1][0]);
console.log(myArr2[1][1]);
console.log(myArr2[1][2]);

const c = new Array(10, 20, 30);
const d = new Array(50, 60, 70);
const myArr3 = new Array(c,d);
console.log(myArr3);

const myArr4 = new Array( new Array(10,20,30), new Array(50,60,70) );
console.log(myArr4);