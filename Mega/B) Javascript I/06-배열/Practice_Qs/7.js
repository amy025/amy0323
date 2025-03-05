const money = [ 209000, 109000, 119000, 109000, 94000 ];

for (let min = 0; min < money.length-1; min++) {
    for (let i = min+1; i < money.length; i++) {
        if (money[min] > money[i]) {
            const m = money[min];
            money[min] = money[i];
            money[i] = m;
        }
    }

}

console.log(money);


/* SOLUTION
const price = [ 209000, 109000, 119000, 109000, 94000 ];

for (let i = 0; i < price.length-1; i++) {
    for (let j = i+1; j < price.length; j++) {
        if (price[i] > price[j]) {
            const tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }
}

console.log(price);

Repeating Lines
==============================
First line => i = 0, length-1
2nd Line => j = i+1, length


//*/