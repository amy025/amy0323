const foo = {
    name: "JS",
    age: 19
};

console.log(foo.email);

const nextAge = foo.age + 1;
console.log(nextAge);

foo.email = "hello@world.com";
console.log(foo);

const myJason = {};
console.log(myJason);

for (let i = 0; i < 10; i++) {
    const key = "value" + i;
    myJason[key] = i * 100;
}
console.log(myJason)