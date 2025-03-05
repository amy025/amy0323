
/* SOLUTION
const b = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (const k of b) {
    result[k]++;
}

console.log(result);

//*/