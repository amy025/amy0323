const student = {
    studno: 10101,
    grade: 1,
    name: "Jacob",
    phoneno: "010-7131-1604"
};


console.group("TYPE 1");
console.log("Student ID : " + student.studno);
console.log("Grade : " + student.grade);
console.log("Student Name : " + student.name);
console.log("Student Phone Number : " + student.phoneno);
console.groupEnd();


console.group("TYPE 2");
console.log("Student ID : " + student['studno']);
console.log("Grade : " + student['grade']);
console.log("Student Name : " + student['name']);
console.log("Student Phone Number : " + student['phoneno']);
console.groupEnd();


const keyName = "phoneno";
console.log(student[keyName]);

const keys = Object.getOwnPropertyNames(student);
console.log(keys);

for (const k of keys) {
    console.group(k);

    console.log(student[k]);
    console.groupEnd();
}


for (const k in student) {
    console.group(k);
    console.log(student[k]);
    console.groupEnd();
}