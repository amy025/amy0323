/* SOLUTIONS 
// participant원소 중에서 completion에 포함되지 않은 하나의 원소를 찾아서 answer에 저장하는 것이 문제 내용.
// --> participant의 원소를 탐색하여 completion에 속하지 않음을 확인하면 그 순간 반복 중단
function solution(participant, completion) {
    var answer = '';

    // 풀이1
    /*for (let i=0; i<participant.length; i++) {
        const p = participant[i];
        
        // i번째 원소인 p가 completion에 포함되어 있다면?
        if (!completion.includes(p)) {
            answer = p;
            break;
        }
    }

    // 풀이2
    /*participant.some((v, i) => {
        if (!completion.includes(v)) {
            answer = v;
            return true;
        }
    });

    // 풀이3
    answer = participant.find((v, i) => !completion.includes(v));

    return answer;
}

// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "leo"가 출력
console.log(solution(["leo", "kiki", "eden"], 
                     ["eden", "kiki"]));

// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "vinko"가 출력
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
                     ["josipa", "filipa", "marina", "nikola"]));

// "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "steave"가 출력
console.log(solution(["mislav", "stanko", "steave", "ana"], 
                     ["stanko", "ana", "mislav"]));

//*/