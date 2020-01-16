var question1 = {
    id: 1,
    questiontitle: 'who is indian currant cricket team caption?',
    opection: ["Dhoni", "virat", "rohit", "schine"],
    correctans: "virat",
    checkedans: function (selectedAns) {
        if (selectedAns == this.correctans) {
            return true;
        }
        else {
            return false;
        }
    }
};

var question2 = {
    id: 1,
    questiontitle: 'what is indian national game?',
    opection: ["Cricket", "Hockey", "Football", "kabbdi"],
    correctans: "Hockey",
    checkedans: function (selectedAns) {
        if (selectedAns == this.correctans) {
            return true;
        }
        else {
            return false;
        }
    }
};

var question3 = {
    id: 1,
    questiontitle: 'capital of india?',
    opection: ["delhi", "Mumbai", "Ahemdabad", "Kolkata"],
    correctans: "delhi",
    checkedans: function (selectedAns) {
        if (selectedAns == this.correctans) {
            return true;
        }
        else {
            return false;
        }
    }
};



var currentquestion = 0;
var question = [question1, question2, question3];
var opection = document.querySelector("#dynamcradio");
var marks=0;


document.getElementById("question").innerHTML = question1.questiontitle;

for (var i = 0; i < 4; i++) {
    document.getElementById("dynamcradio").innerHTML += '<li><input type="radio" name="question1" value=' +
        question1.opection[i] + ">" + question1.opection[i] + "</li>";
}



function next() {
    opection.innerHTML = '';
    if(currentquestion>=3){
        alert('last question');
        document.getElementById("question").innerHTML = '';    
    }else{
    document.getElementById("question").innerHTML = question[currentquestion].questiontitle;
    for (var i = 0; i < 4; i++) {
    
        document.getElementById("dynamcradio").innerHTML += '<li><input type="radio" name= question'+(currentquestion+1) + ' value=' +
            question[currentquestion].opection[i] + ">" + question[currentquestion].opection[i] + "</li>";
           
    }
}

}

function anscheck()
{
    if(currentquestion>=3){
        alert('last question');
        document.getElementById("question").innerHTML = '';    
    }else{
    var data=document.getElementsByName("question"+ (currentquestion+1));
    for(var i=0;i<4;i++)
    {
        if(data[i].checked)
        {            
            var result=question[currentquestion].checkedans(data[i].value); 
            if(result===true)
            {
            
              marks+=1; 
              console.log(marks);  
            }
        }
    }
}
    currentquestion+=1;
    next();
}
