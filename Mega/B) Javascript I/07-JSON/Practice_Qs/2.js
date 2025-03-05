const exam = {
    "철수" : [ 89, 82, 79, 91 ],
    "민영" : [ 91, 95, 94, 89 ],
    "남철" : [ 65, 57, 71, 64 ],
    "혜진" : [ 82, 76, 81, 83 ]
}

/* SOLUTION #1
for (const key in exam) {
    let sum = 0;
    for (let i = 0; i < exam[key].length; i++) {
        sum += exam[key].length
    }
}
//*/


/* SOLUTION #2
let total = 0;
let student_count = 0;

for (const key in exam) {
    total += exam[key][2];
    student_count++;
}

let avg = total / student_count;

console.log(`모든 학생의 수학 총점은 ${total} 점이고 평균은 ${avg}입니다.`);
//*/