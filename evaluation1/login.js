function onlogin() {
    var logindata = new Object();
    logindata.email = document.getElementById("loginemail").value;
    logindata.password = document.getElementById("loginpassword").value;
    var userdata=JSON.parse(localStorage.getItem("user"));

    if (logindata.email == "" || logindata.password == "") {
        alert("both field are requried");
    }
    else if ((logindata.email
        == localStorage.getItem("registeremail")) && 
        (logindata.password == localStorage.getItem("registerpassword"))) {

        window.location.href="dashboard.html"
    }
    if(userdata!=null)
    {
        for(var i=0;i<userdata.length;i++)
        {
            if((logindata.email==userdata[i].useremail)&&(logindata.password==userdata[i].userpassword))
            {
                window.location.href="dashboard.html";
            }
        }
    }
    else {
        alert("invalid email or password");
    }
}