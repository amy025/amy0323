for (let i = 0; i < 5; i++) {
    console.group("i에 대한 반복 수행 시작 >> i = " + i);

    for (let j = 0; j < i + 1; j++) {
        console.log("j = %d, j = %d", i, j);
    }

    console.groupEnd();
}