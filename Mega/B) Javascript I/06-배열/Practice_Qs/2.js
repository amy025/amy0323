let grade = ["HTML", "CSS", "Javascript", 75,  82, 91];

let sum = 0;
let avg = 0;

for (let j = 3; j < 6; j++) {
    sum += grade[j];

    for (let i = 0; i < 3; i++) {
        console.log("%s의 점수는 %d", grade[i], grade[j]);
    }

}

avg = sum /  (grade.length - 2);


console.log("총합은 %d, 평균은 %d", sum, avg);


/* SOLUTION

const grade = [ 75, 82, 91 ];

let sum = 0;
let avg = 0;

for (let g of grade) {
    sum += g;
}

avg = sum / grade.length;

console.log(`총점: ${sum}, 평균: ${avg}`);

//*/