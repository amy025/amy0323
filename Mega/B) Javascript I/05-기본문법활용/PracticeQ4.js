let str = 0;

for ( let y = 1; y < 7; y++) {

    for ( let x = 1; x < 7; x++) {
        
        if ( y + x == 6) {
            console.log( " [ %d, %d ] ", y, x);
            str++;
        }
    }

}

console.log("경우의 수는 %d개 입니다.", str);

/* SOLUTION 1
let count =0;
for (let i = 1; i < 7; i++) {
    for ( let j = 1; j < 7; j++) {
        if ( i + j == 6) {
            console.log("[ %d, %d ]", i, j);
            count++;
        }
    }
}

console.log("경우의 수는 %d개 입니다.", count);
*/