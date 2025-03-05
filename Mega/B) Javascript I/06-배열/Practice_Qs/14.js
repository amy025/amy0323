//* SOLUTION

const cs = [ 1, 5, 7, 'J', 'Q', 'A' ];
const yh = [ 2, 3, 4, 5, 'Q', 'K', 'A'];


/* CASE 1
//case (1) - 철수의 카드를 먼저 탐색하는 경우
// 가져올 수 있는 카드 수 탐색


let count1 = 0;

for (let i = 0; i < cs.length; i++) {
    for (let j = 0; j < yh.length; j++) {
        if (cs[i] == yh[j]) {
            count1++;
        }
    }
}

console.log(`가져올 수 있는 카드 수: ${count1}장`);

for (let i=0; i<cs.length; i++) {
    for (let j=0; j<yh.length; j++) {
        if (cs[i] == yh[j]) {
            console.log(`${i}번째 >> ${cs[i]}`);
        }
    }
}
//*/


/* CASE 2

//case (2) - 영희의 카드를 먼저 탐색하는 경우
// 가져올 수 있는 카드 수 탐색
let count1 = 0;

for (let i=0; i<yh.length; i++) {
    for (let j=0; j<cs.length; j++) {
        if (yh[i] == cs[j]) {
            count1++;
        }
    }
}

console.log(`가져올 수 있는 카드 수: ${count1}장`);

for (let i=0; i<yh.length; i++) {
    for (let j=0; j<cs.length; j++) {
        if (yh[i] == cs[j]) {
            console.log(`${j}번째 >> ${cs[j]}`);
        }
    }
}
//*/


/* CASE 3
const target = new Array(cs.length);

console.log(target);

let count = 0;

for (let i = 0; i < cs.length; i++) {
    for (let j = 0; j < yh.length; j++) {
        if (cs[i] == yh[j]) {
            count++;
            target[i] = cs[i];
        }
    }
}

console.log(target);

for (let i = 0; i < target.length; i++) {
    if (target[i] !== undefined) {
        console.log(`${i}번째 >> ${cs[i]}`);
    }
}
//*/


//*/