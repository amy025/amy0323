console.group("1) Switch 기본 구문");

const Lan = "B";

switch (Lan) {
    case 'A':
        console.log("A");
        break;

    case 'B':
    console.log("B");
    break;

    case 'C':
        console.log("C");
        break;

    default:
        console.log("Lower than C");
        break;
}

console.groupEnd();

console.group("2) With break");

const Eng = "B";

switch (Eng) {
    case 'A':
        console.log("A");
    
    case 'B':
        console.log("B");
    
    case 'C':
        console.log("C");

    default:
        console.log("Less than C");
}

console.groupEnd();

console.group("3) 의도적으로 beak 조절");

const Math = "B";

switch (Math) {
    case 'A':
    case 'B':
    case 'C':
        console.log("이 과목을 PASS 했씁니다.")
        break;
    default:
        console.log("이 과목을 Pass 하지 못했스빈다.");
        break;
}

console.groupEnd();

console.group("4) break의 조건을 식으로 설정하는 경우");

const sci = 72;

switch (sci > 70) {
    case true:
        console.log("이 과목을 PASS 했습니다.");
        break;
    default:
        console.log("미 과목을 PASS하 ㅘ지 못헸습니다.");
        break;
}

console.groupEnd();