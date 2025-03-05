/* SOLUTION
const matrix = new Array(5);


for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(5);
}

for (let i = 0; i < matrix.length; i++) {
    for (let j=0; j < matrix[i].length; j++) {
        // if (i == j) {
        //     matrix[i][j] = 1;
        // } else {
        //     matrix[i][j] = 0;
        // }

        matrix[i][j] =i == j ? 1 : 0;
    }
}
console.log(matrix);


//*/