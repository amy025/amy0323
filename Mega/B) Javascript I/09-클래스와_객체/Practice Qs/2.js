/* SOLUTION
class Rectangle {
    #width;
    #height;

    get width() { return this.#width; }
    set width(width) { this.#width = width; }

    get height() { return this.#height; }
    set height(height) { this.#height = height; }

    getAround() {
        return this.width * 2 + this.height * 2;
    }

    getArea() {
        return this.width * this.#height;
    }
}

const rect = new Rectangle();
rect.width = 10;
rect.height = 5;
console.log('둘레의 길이는 %d이고 넓이는 %d입니다.', 
                rect.getAround(), rect.getArea());
//*/