for ( let i = 1; i < 8; i++) {
    let str="";
    
    for (let y = 0; y < i; y++) {
        str+= i;
    }

    console.log(str);
}

/* SOLUTION

for (let i = 1; i < 8; i++) {

    let str = "";
    for ( let j = 1; j < i+1; j++) {
        str += j;
    }

    console.log(str);
}
//*/