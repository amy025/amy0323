let number = 1;

if (number == 1) {
    for ( let i = 1; i < 10; i++) {
            for ( let j = 1; j < 10; j++) {
                if (i % 2 != 0) {
                console.log("[ %d x %d = %d ]", i, j, i*j);
                }
            }
    }
} else {
    for ( let i = 1; i < 10; i++) {
            for ( let j = 1; j < 10; j++) {
                if (i % 2 == 0) {
                console.log("{ %d x %d = %d }", i, j, i * j);
                }            
            }
    }
}

/*
let number = 2;

// case 1 - if-for
if (number == 1) {
    for (let i=3; i<10; i+=2) {
        for (let j=1; j<10; j++) {
            console.log("%d x %d = %d", i, j, i*j);
        }
    }
} else {
    for (let i=2; i<10; i+=2) {
        for (let j=1; j<10; j++) {
            console.log("%d x %d = %d", i, j, i*j);
        }
    }
}

// case 2 - for - if
for (let i=2; i<10; i++) {
    if (number == 1) {
        if (i % 2 == 1) {
            for (let j=1; j<10; j++) {
                console.log("%d x %d = %d", i, j, i*j);
            }
        }
    } else {
        if (i % 2 == 0) {
            for (let j=1; j<10; j++) {
                console.log("%d x %d = %d", i, j, i*j);
            }
        }
    }
}

// case 3
let start = number == 2 ? 2 : 3;

for (let i=start; i<10; i+=2) {
    for (let j=1; j<10; j++) {
        console.log("%d x %d = %d", i, j, i*j);
    }
}

// case 4
for (let i=4-number; i<10; i+=2) {
    for (let j=1; j<10; j++) {
        console.log("%d x %d = %d", i, j, i*j);
    }
}

//*/