/* SOLUTION
const price = [ 38000, 20000, 17900, 17900];

const qty = [ 6, 4, 3, 5 ];
let max = price[0] * qty[0];

for (let i = 1; i < qty.length; i++) {
    if ( max < price[i] * qty[i]) {
        max = price[i] * qty[i];
    }
}

console.log(max);
//*/