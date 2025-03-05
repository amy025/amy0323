let i = 10;
while ( i > 0) {
    i--;

    if ( i % 2 != 0) {
        console.log("%d", i);
    }
} 


/*
SOLUTION 1
let i=9;
while (i > -1) {
    if ( i%2==1) {
        console.log(i);
    }

    i--;
}
 */

/*
SOLUTION 2

let i = 9;
while ( i > -1) {
    console.log(i);
    i-=2
}
 */

/*
SOLUTION 3

let i = 0;
for (i < 10) {
    if ( 9-i % 2 ==1) {
        console.log(9-i);
        i++
    }
}
 */

/*
SOLUTION 4

let i = 0;
for (i < 10) {
    if ( 9-i % 2 ==1) {
        console.log(9-i);
        i+=2
    }
}
 */

