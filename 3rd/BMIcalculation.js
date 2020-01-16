var johnMass=prompt('enter the john mass in Kg.');
var johnHeight=prompt('enter the john Height in meater.');

var marksMass=prompt('enter the marks mass in Kg.');
var marksHeight=prompt('enter the marks Height in meater.');

var johnBmi=johnMass/(johnHeight*johnHeight);
var markBmi=marksMass/(marksHeight*marksHeight);
console.log(johnBmi);
console.log(markBmi);
var a=true;
var b=false;

if(markBmi>johnBmi)
{
    console.log('IS Marks bmi is higher than johns?' + a);
}
if (markBmi<johnBmi) {

    console.log('IS Marks bmi is higher than johns?' + a);
    
} else {
    console.log('IS Marks bmi is higher than johns?' + 'equal Bmi');
}




