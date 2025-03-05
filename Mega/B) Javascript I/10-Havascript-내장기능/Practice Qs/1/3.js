/* SOLUTIONS
let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.";

const word = "수업시간";
const flen = word.length;
let count = 0;

while (true) {
    console.log(str);

    // 찾고자 하는 단어가 str에 포함되어 있는지 여부
    const p = str.indexOf(word);

    if (p > -1) {
        // 찾는 단어가 포함되어 있다는 것으므로 카운트 1증가
        count++;

        // 이미지 찾은 위치까지는 잘라내서 버린다.
        str = str.substring(p+flen);
    } else {
        // 찾는 단어가 문장에 포함되어 있지 않으므로 반복 중단
        break;
    }
}

console.log(count);

//*/