let str = 0;
for ( let i = 1; i < 20; i++) {
    
    if ( i % 2 == 0 || i % 3 == 0) {
        str += i;
    }

}
    console.log(str);


/*
SOLUTION 1

let sum = 0;
for (let i = 1; i < 20; i++) {
    if ( i % 2 == 0 || i % 3 == 0) {
        sum += i;
    }
    console.log(sum);
}
 */