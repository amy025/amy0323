const object = { a: 1, b: 2, c: 3 };

const { a, b, c} = object;

console.log(a);
console.log(b);
console.log(c);

const arr = [100, 200];

const [ x, y ] = arr;

console.log(x)
console.log(y);

const data = { name:'hello', age: 20, height:172, weight:85 };
const {name} = data;
console.log(name);

const { height: h, wight: w} = data;
console.log(h);
console.log(w);
console.log(data);


const dummy = { a1: 100, a2: 200, a3: 300, a4: 400 };
const {a1, a2, ...rest_b} = dummy;
console.log(a1);
console.log(a2);
console.log(rest_b);


const origin = {name: 'javascript', age: 25};
const newdata1 = {...origin, gender: 'M'};
console.log(newdata1);

const newdata2 = {...origin, age: 30, genser: 'F'};
console.log(newdata2);