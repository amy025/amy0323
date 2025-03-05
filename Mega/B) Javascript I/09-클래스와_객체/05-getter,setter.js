class UserClass {
    #userName;
    #email;

    constructor(userName, email) {
        this.#userName = userName;
        this.#email = email;
    }

    set userName(value) {
        if (!value) {
            console.log("PLEASE enter userName");
            return;
        }

        this.#userName = value;
    }

    get userName() {
        return this.#userName;
    }

    set email(value) {
        if (!value) {
            console.log("PLEASE enter an email");
            return;
        }
        this.#email = value;
    }

    get email() {
        return this.#email;
    }

    login() {
        if (!this.userName || !this.#email) {
            console.log("PLAESE check userName or email");
            return;
        }

        console.log("logged in >> userName : " + this.userName + ", email : " + this.email);
    }
}

const user = new UserClass("KIM", "Kim@naver.com");
user.login();

user.userName = "";
user.email = "";

user.userName = "helloworld";
user.email = "hello@world.com";
user.login();