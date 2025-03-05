let a = 100;
let b = a;
console.log("a=" + a + ", b=" + b);

a++;
console.log("a=" + a + ", b=" + b);


const user = {
    name: "KIM"
};

const member = user;
console.log(user);
console.log(member);

member.name = "SUBIN";
console.log(user);
console.log(member);

const d1 = [1, 2, 3];
const d2 = d1;
console.log(d1);
console.log(d2);

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);
console.log(d2);

const a1 = [ 1, 2, 3 ];

const a2 = new Array(a1.length);

for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
}

const a3 = a1.slice();
console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;

console.log(a1);
console.log(a2);
console.log(a3);

const addr = {
    city: 'SEOUL',
    gu: 'SEOCHO'
};

const copy = {};

for (let key in addr) {
    copy[key] = addr[key];
}

console.log(addr);
console.log(copy);

addr.gu = 'GANGNAM';

console.log(addr);
console.log(copy);

const copy2 = {};

Object.assign(copy2, addr);
console.log(copy2)