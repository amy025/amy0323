const classRoom = {
    student: [{
        studno: 10101,
        grade: 1,
        name:"학생 1"
    }, {
        studno: 20202,
        grade: 2,
        name: "학생 2"
    }]
};

for (let i = 0; i < classRoom.student.length; i++) {
    console.group(i + "번째 학생");
    console.log(" >> 학번 : " + classRoom.student[i].studno);
    console.log(" >> 학년 : " + classRoom.student[i].grade);
    console.log(" >> 이름 : " + classRoom.student[i].name);
    console.groupEnd();
}