/* SOLUTION

const inven = [
    [ 500, 291 ],
    [ 320, 586 ],
    [ 100, 460 ],
    [ 120, 558 ],
    [ 92, 18 ],
    [ 30, 72 ]
];

let total_price = 0;

for (let i = 0; i < inven.length; i++) {
    total_price += (inven[i][0]*0.9)*inven[i][1];
}

console.log(`아이템 총 판매가격${total_price} G`);
//*/