const student1 = {
    studno: 10101,
    grade: 1,
    name: "학생1"
};

const student2 = {
    studno: 20202,
    grade: 2,
    name: "학생2"
};

const classRoom = {
    student: [student1, student2]
}

console.log(classRoom);


for (let i = 0; i < classRoom.student.length; i++) {
    console.group(i + "번째 학생");
    console.log(" >> 학번 : " + classRoom.student[i].studno);
    console.log(" >> 학년 : " + classRoom.student[i].grade);
    console.log(" >> 이름 : " + classRoom.student[i].name);
    console.groupEnd();
}

let i = 0;
for (const s of classRoom.student) {
    console.group(i + "번째 학생");
    console.log(" >> 학번 : " + s.studno);
    console.log(" >> 학년 : " + s.grade);
    console.log(" >> 이름 : " + s.name);
    console.groupEnd();
    i++;
}