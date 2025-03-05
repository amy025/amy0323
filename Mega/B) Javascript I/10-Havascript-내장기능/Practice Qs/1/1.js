/* SOLUTIONS
email = "helloworld@megait.com";

// 풀이1
let p = email.indexOf("@")
let id = email.substring(0, p);
let domain = email.substring(p+1);
console.log(id);
console.log(domain);

// 풀이2
emailSplit = email.split("@");
console.log(emailSplit[0]);
console.log(emailSplit[1]);
//*/