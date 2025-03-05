let myArr1 = [true, false, false, true, false];

console.log("Before -->" + myArr1);


for ( let i = 0; i < 5; i++) {
    if (myArr1[i] == true) {
        myArr1[i] = false;
    } else {
        myArr1[i] = true;
    }
}

console.log("After -->" + myArr1);

/* SOLUTION

const check_list = [true, false, false, true, false];
console.log("Before ---> " + check_list);

1.
for (let i=0; i<check_list.length; i++) {
    check_list[i] = !check_list[i];
}

2.
let i = 0;
for (let k of check_list) {
    check_list[i] = !k;
    i++;
}

console.log("After ---> " + check_list);

//*/