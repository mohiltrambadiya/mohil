var data=new Object();
function validateemail()
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email=document.getElementById('email').value))
  {
    return true;
  }
  else{
    alert("email is invalid");
  }
}
function phonenumber()
{
  var phoneno = /^\d{10}$/;
  if((data.phoneno.match(phoneno)))
  {
    return true;
  }
  else{
    alert("phone no. is invalid");
  }  
}

function onsend()
{
    data.fristname=document.getElementById('fristname').value; 
    data.lastname=document.getElementById('lastname').value;
    data.email=document.getElementById('email').value; 
    data.phoneno=document.getElementById('phoneno').value;
    data.password=document.getElementById('password').value;
  
    if(data.fristname=="" || data.lastname=="" || data.phoneno=="" || data.password==""  )
    {
      alert("all field requeied");
    } 
    validateemail();  
    phonenumber();
      document.getElementById('name1').innerHTML="Frist Name: "+data.fristname;
      document.getElementById('name2').innerHTML="Last Name: "+data.lastname;
      document.getElementById('email1').innerHTML="Email ID: "+data.email;
      document.getElementById('phoneno1').innerHTML="Phone no.: "+data.phoneno;
      document.getElementById('password1').innerHTML="Password: "+data.password;

    if(localStorage.getItem("email")==data.email)
    {
      alert("email is already exist");
    }
    else
    {
      localStorage.setItem("email",data.email);
    }

    var mypassword=localStorage;
    mypassword.setItem("password",data.password);
    console.log(mypassword.getItem("password"));
}

function onlogin()
{
  var logindata=new Object();
  if((data.email=document.getElementById('email').value) ==
  (logindata.loginemail=document.getElementById("loginemail").value) &&
  (data.password=document.getElementById('password').value) == 
  (logindata.loginpassword=document.getElementById("loginpassword").value))
    {
        alert("Login succesfully");
    }
  else
  {
    alert("please verify the email and password");
  }
}









