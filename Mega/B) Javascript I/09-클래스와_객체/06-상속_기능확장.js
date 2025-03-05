class Sayhello {
    eng() {
        console.log("Hello JS");
    }
}

class SayhelloWorld extends Sayhello {
    kor() {
        console.log("안녕하세요 자바스");
    }
}

const say = new SayhelloWorld();
say.eng();
say.kor();