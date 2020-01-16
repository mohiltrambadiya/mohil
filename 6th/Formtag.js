function onsend()
{
    var data=new Object();
    data.fristname=document.getElementById('fristname').value; 
    data.lastname=document.getElementById('lastname').value; 
    data.address=document.getElementById('address').value;
    data.city=document.getElementById('city').value;

    var gen=document.getElementsByName('gender');
    for(i=0;i<gen.length;i++)
    {
        if(gen[i].checked)
        {
            data.gender=gen[i].value;
            break;
        }
    }

    data.password=document.getElementById('password').value;

    var selectedhobby=document.getElementsByName('sport');
    data.hobbies=[];
    for(var i=0;i<selectedhobby.length;i++)
    {
        if(selectedhobby[i].checked)
        {
           data.hobbies.push(selectedhobby[i].value);
        }
    }
    data.upload=document.getElementById('upload').value;
    console.log(data); 
}