let x = 0;
let i = 1;

while (i<= 10) {
    x+= i;
    console.log("i%d, x=%d", i, x);
    i++
}

console.log("Sum of 1 to 10: " + x);