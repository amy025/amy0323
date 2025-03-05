for ( let y = 0; y < 4; y++) {
    for ( let x = 0; x < 4; x++) {
        console.log("%d %d %d %d", x, x + 1, x + 2, x + 3 );
    }
}

/* SOLUTION
for ( let i = 0; i < 4; i++) {

    let str = "";

    for ( let j = 0; j < 4; j++) {

        str += i+j;

        if ( j + 1 < 4) {
            
            str += " ";

        }
    }

    console.log(str);
}
//*/