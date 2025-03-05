for ( let i = 10; i > 0; i-- ) {
    if ( i % 2 != 0) {
        console.log(i);
    }
}

/*
SOLUTION 1

for ( let i = 9; i > -1; i--) {
    if ( i%2==1) {
        console.log(i);
    }
}
 */

/*
SOLUTION 2

for ( let i = 9; i > -1; i-=2) {
    console.log(i);
}
 */

/*
SOLUTION 3

for ( let i = 0; i < 10; i++) {
    if ( 9-i % 2 ==1) {
        console.log(9-i);
    }
}
 */


/*
SOLUTION 4

for ( let i = 0; i < 10; i+=2) {
    if ( 9-i % 2 ==1) {
        console.log(9-i);
    }
}
 */