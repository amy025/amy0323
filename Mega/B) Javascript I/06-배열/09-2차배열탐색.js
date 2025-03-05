const myArr = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(myArr.length);

console.log(myArr[0].length);
console.log(myArr[1].length);

for (let i = 0; i < myArr.length; i++) {
    console.group(i+ "번째 행 ___________");
    console.log(myArr[i]);

    for (let j=0; j<myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
    console.groupEnd();
}

console.group("2차배열의 탐색");

const myArr1 = [
    [1,2,3],
    [4,5,6]
];

for (const item of myArr1) {
    console.log(item);

    for (const sub of item) {
        console.log(sub);
    }
}

console.groupEnd();