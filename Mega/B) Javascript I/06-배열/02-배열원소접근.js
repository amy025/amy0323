let myArr1 = [1, 3.14, true, "hello"];
console.log("[0] = %d, [1] = %d, [2] = %s, [3] = %s", myArr1[0], myArr1[1], myArr1[2], myArr1[3]);

let myArr2 = [100, 200, 300];
const [a,b,c] = myArr2;
console.log("a=%d, b=%d, c=%d", a,b,c);

let [b1, b2, ...rest_b] = [1,2,3,4,5,6,7,8,9];
console.log(b1);
console.log(b2);
console.log(rest_b);

let myArr = [100];
console.log(myArr);

let item1 = myArr[0];
console.log(item1);

let item2 = myArr[1];
console.log(item2);

if (item2 !== undefined) {
    console.log("1번째 원소 존재함");
} else {
    console.log("1번째 원소 존재하지 않음");
}

let [x, y] = myArr;
console.log(x);
console.log(y);