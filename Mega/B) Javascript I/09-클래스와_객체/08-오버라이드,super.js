class Terran {
    #name;
    #hp;
    #dps;

    constructor (name, hp, dps) {
        this.#name = name;
        this.#hp = hp;
        this.#dps = dps;
        console.log("[%s] 체력: %d, 공격력 : %d", this.name, this.hp, this.dps);
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get hp() {
        return this.#hp;
    }

    set hp(value) {
        this.#hp = value;
    }

    get dps() {
        return this.#dps;
    }

    set dps(value) {
        this.#dps = value;
    }

    move(position) {
        console.log(this.name + "(이)가" + position + "까지 이동합니다.");
    }

    attack(target) {
        console.log(this.name + "(이)가" + target + "(을)를 공격합니다. 데미지:" + this.dps);
    }
}

class Marine extends Terran {
    attack(target) {
        console.log(this.name + "(이)가" + target + " 에게 사격을 게시합니다. 데미지 : " + this.dps);
    }
}

class Tank extends Terran {
    attack(target) {
        super.attack+++(target);
        console.log('>>>>>> 탱크 포격');
    } 
}

class Firebat extends Terran {
    constructor(name) {
        super(name, 500, 50);
    }
}

const m = new Marine("해병1", 120, 30);
m.attack("질럿");

const t = new Tank("탱크", 120, 30);
t.attack('드라군');

const f = new Firebat("화염방사병");
f.attack("적");