class HelloWorld {
    message = null;

    sayHello() {
        console.log(this.message);
    }

    setEng() {
        this.message = "Hello JS";
    }

    setKor() {
        this.message = "안녕 자바스";
    }
}

const hello = new HelloWorld;

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();
