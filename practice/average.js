var studentname = document.getElementById("name");
var mathsmark = document.getElementById("maths");
var englishmark = document.getElementById("english");
var passingyear = document.getElementById("passingyear");
var studentdetail = [];
var student = function (studentname, mathsmark, englishmark, passingyear, average, createddate) {
        this.studentname = studentname,
        this.mathsmark = mathsmark,
        this.englishmark = englishmark,
        this.passingyear = passingyear,
        this.average = average,
        this.createddate = createddate
}

if (localStorage.getItem("student") == null) {
    localStorage.setItem("student", studentdetail);
}
else {
    studentdetail = JSON.parse(localStorage.getItem("student"));
    displaydata();
}

function onSubmit() {
    if (studentname.value == "" || mathsmark.value == "" || englishmark.value == "" || passingyear.value == "") {
        alert("all field are requried");
    }
    else if (mathsmark.value > 100 || mathsmark.value < 0) {
        alert("enter valid maths mark");
    }
    else if (englishmark.value > 100 || englishmark.value < 0) {
        alert("enter valid english mark");
    }
    else if (passingyear.value > 2020 || passingyear.value < 2000) {
        alert("enter valid passing year");
    }
    else {
        insertdata();
    }
}

function insertdata() {
    var average = (parseInt(mathsmark.value) + parseInt(englishmark.value)) / 2;
    var date = new Date();
    var createddate = date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
    studentdetail.push(new student(studentname.value, mathsmark.value, englishmark.value, passingyear.value, average, createddate));
    localStorage.setItem("student", JSON.stringify(studentdetail));
    JSON.parse(localStorage.getItem("submit"));
    displaydata();

}

function displaydata() {

    for (var i = 0; i < studentdetail.length; i++) {

        document.getElementById("dynamictable").innerHTML += "<tr><td>" +
        studentdetail[i].studentname + "</td><td>"
        + studentdetail[i].mathsmark + "</td><td>" +
        studentdetail[i].englishmark + "</td><td>" +
        studentdetail[i].passingyear + "</td><td>"
        + studentdetail[i].average +
        "</td><td>" +
        studentdetail[i].createddate + "</td></tr>";

    }
   
}