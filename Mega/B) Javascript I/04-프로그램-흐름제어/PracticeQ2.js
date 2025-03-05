let A = 1;
let num = 2;

while ( A < 11  ) {
    console.log("이진수 %d개는 %d개의 정보를 표시가능", A, num);
    A++;
    num *= 2;

}

/* Solution
let bit = 1; // 누적된 곱셈에 대한 초기값은 1부터 시작.
let i = 1

while (i <= 10) {
    bit *= 2;
    console.log("이진수 %d개는 %d개의 정보를 표시가능", i, bit);
    i++;
}
*/