/* SOLUTION

class Student {
    #kor;
    #eng;
    #math;

    constructor(kor, eng, math) {
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
    }

    get kor() { return this.#kor; }
    set kor(kor) { this.#kor = kor; }

    get eng() { return this.#eng; }
    set eng(eng) { this.#eng = eng; }

    get math() { return this.#math; }
    set math(math) { this.#math = math; }

    sum() {
        //return this.#kor + this.#eng + this.#math;
        return this.kor + this.eng + this.math;
    }

    avg() {
        //return (this.kor + this.eng + this.math) / 3;
        return this.sum() / 3;
    }
}

const s1 = new Student(92, 81, 77);
const s2 = new Student(72, 95, 98);
const s3 = new Student(80, 86, 84);
console.log("철수의 총점은 %d점 이고 평균은 %d점 입니다.", s1.sum(), s1.avg());
console.log("영희의 총점은 %d점 이고 평균은 %d점 입니다.", s2.sum(), s2.avg());
console.log("민혁의 총점은 %d점 이고 평균은 %d점 입니다.", s3.sum(), s3.avg());

//*/