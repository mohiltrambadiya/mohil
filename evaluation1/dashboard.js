function onbirthday() {
    var date = new Date();
    var currentdate = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate();
    var userdata = JSON.parse(localStorage.getItem("user"));

    for (var i = 0; i < userdata.length; i++) {
        if (currentdate == userdata[i].userbirthdate) {
            alert("happy birthday "+userdata[i].username);
        }
    }
}