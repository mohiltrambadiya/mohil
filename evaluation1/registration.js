
function onregister() {

    var data = new Object();
    data.name = document.getElementById("adminname").value;
    data.email = document.getElementById("adminemail").value;
    data.password = document.getElementById("adminpassword").value;
    data.repassword = document.getElementById("adminrepassword").value;
    data.city = document.getElementById("admincity").value;
    data.state = document.getElementById("adminstate").value;
    data.condition = document.getElementById("term&condition").value;


    if (data.name == "" || data.email == "" || data.password == "" || data.repassword == "" || data.city == "" || data
        .state == "") {
        alert("all field are requried");
    }
    else {
        localStorage.setItem("registeremail",data.email);
        localStorage.setItem("registerpassword",data.password);
        localStorage.setItem("adminname",data.name);
    }
    redirect();

}
function redirect()
{
    window.location.href="login.html";
}
