const covid19 = [
    { date: 'Jan. 25', active: 426 },
    { date: 'Jan. 26', active: 343 },
    { date: 'Jan. 27', active: 547 },
    { date: 'Jan. 28', active: 490 },
    { date: 'Jan. 29', active: 460 },
    { date: 'Jan. 30', active: 443 },
    { date: 'Jan. 29', active: 338 },
    { date: 'Jan. 30', active: 299 },
]

/* SOLUTION #1

let c19_sum = 0;

for (const c of covid19 ) {
    c19_sum += c.active;
}

console.log("누적 확진자 수 : ", c19_sum);
console.log("평균 확진자 수 : ", c19_sum / covid19.length);

//*/

/* SOLUTION #2
let max = covid19[0];

for (let i = 1; i < covid19.length; i++) {
    if (max.active < covid19[i].active) {
        max = covid19[i];
    }
}

console.log("확진자가 가장 많이 나타난 날: %s ", max.date);

//*/