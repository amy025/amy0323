/* SOLUTION
const time = [ 7, 5, 5, 5, 5, 10, 7];

let pay = 0;

for (let i = 0; i < time.length; i++) {
    
    1.x
    if (i < 4) {
        pay += time[i] * 4500;
    } else {
        pay += time[i] * 5200;
    }

    2.
    let money = i < 4 ? 4500 : 5200;
    pay += time[i] * money

}

console.log(pay);

//*/