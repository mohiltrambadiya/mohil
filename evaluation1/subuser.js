var username = document.getElementById("username1");
var useremail = document.getElementById("useremail1");
var userpassword = document.getElementById("userpassword1");
var userbirthdate = document.getElementById("birthdate1");

var userdetail = [];
var user = function (username, useremail, userpassword, userbirthdate, age) {
    this.username = username,
        this.useremail = useremail,
        this.userpassword = userpassword,
        this.userbirthdate = userbirthdate,
        this.age = age;
}

if (localStorage.getItem("user") == null) {
    localStorage.setItem("user", userdetail);
}
else {
    userdetail = JSON.parse(localStorage.getItem("user"));
    displaydata();
}

function onadduser() {
    if (username.value == "" || useremail.value == "" || userpassword.value == "" || userbirthdate.value == "") {
        alert("all firld are requried");
    }
    else {
        insertdata();
    }
}
function insertdata() {
    var temp = user.userbirthdate;
    var year = parseInt(temp.substring(0, 4));
    var age = 2020 - year;
    userdetail.push(new user(username.value, useremail.value, userpassword.value, userbirthdate.value, age.value));

    localStorage.setItem("user", JSON.stringify(userdetail));
    JSON.parse(localStorage.getItem("user"));
    displaydata();
}
function displaydata() {
    for (var i = 0; i < userdetail.length; i++) {
        document.getElementById("dynamictable").innerHTML += "<tr><td>" + (i + 1) + "</td><td>" +
            userdetail[i].username + "</td><td>"
            + userdetail[i].useremail + "</td><td>" +
            userdetail[i].userpassword + "</td><td>" +
            userdetail[i].userbirthdate + "</td><td>" + userdetail[i].age + "</td><td><a href='edit'>Edit</a><a href='delete'>delete</a></td></tr>";
    }

}
