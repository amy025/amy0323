function myGame (n) {
    const tsn = 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        console.log(i);

        const str = i + "";

        if 
    }
    return count;

    console.grounpEnd;
}

myGame(5);

/* SOLUTION

function myGame(n) {
    // 박수를 총 몇번 쳤는지에 대한 합계값
    let count = 0;

    for (let i=1; i<=n; i++) {
        //console.group(i);

        // 현재 숫자(i)를 문자열로 변환함.  33 --> "33"
        const str = i + "";

        // 이번 턴에 출력할 문자열(숫자인지 박수인지...)
        let say = "";

        // 이번 턴에 박수를 몇 번 치는가?
        let clap = 0;

        for (let s of str) {
            //console.log(s);

            if (s == "3" || s == "6" || s == "9") {
                // 박수
                say += "짝"
                clap++;
            }
        }

        // 박수를 친적이 없다면?
        if (clap == 0) {
            console.log(i);
        } else {
            console.log(`${say} (${i}) --> ${clap}`);
            count += clap;
        }

        //console.groupEnd();
    }

    return count;
}


console.log("박수를 종 %d번 쳤습니다.", myGame(35));

//*/