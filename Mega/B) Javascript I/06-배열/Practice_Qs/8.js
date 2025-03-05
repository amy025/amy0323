const arr = [5,3,2,8,9];

const min = arr[0];
const max = arr[arr.length];

for (let i = 1; i < arr.length; i++) {
    arr[i] = arr.length-1;

}

console.log(arr);

/* SOLUTION

const arr = [ 5, 3, 2, 8, 9];
console.log("BF ===> "+ arr);

1. When the length is Odd # = length / 2 -> repeat
2. When the length is Even # = lenfth -1 / 2 -> repeat

3. i length and length -i -1

for (let i=0; i < (arr.length-1)/2; i++) {
    const p = arr.length -i -1;
    const tmp = arr[i];

    arr[i] = arr[p];
    arr[p] = tmp
}

console.log("AF ===> "+ arr);
//*/