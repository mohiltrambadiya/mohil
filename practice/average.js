var studentname = document.getElementById("name");
var mathsmark = document.getElementById("maths");
var englishmark = document.getElementById("english");
var passingyear = document.getElementById("passingyear");

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

        document.getElementById("dynamictable").innerHTML += "<tr><td>" +
            studentname.value + "</td><td>"
            + mathsmark.value + "</td><td>" +
            englishmark.value + "</td><td>" +
            passingyear.value + "</td><td>"
            + (parseInt(mathsmark.value) + parseInt(englishmark.value)) / 2 +
            "</td><td>" +
            new Date().getDate() + "/" + new Date().getMonth() + 1 + "/" + new Date().getFullYear() + "</td></tr>";

    }
}