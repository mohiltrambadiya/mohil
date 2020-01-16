var person1={
    name: prompt("enter the person1 name"),
    mass: prompt("enter the value of person1 mas in KG"),
    height: prompt("enter the value of person1 height in meter")
}
var person2={
   name: prompt("enter the person2 name"),
   mass: prompt("enter the value of person2 mass in KG"),
   height: prompt("enter the value of person2 height in meter")
}
function calculateBMI(mass,height)
{
   return mass/(height*height);
}
var person1BMI=calculateBMI(person1.mass,person1.height);
var person2BMI=calculateBMI(person2.mass,person2.height);

if(person1BMI>person2BMI)
{
   console.log(person1.name);
   console.log(person1BMI);
}
else if(person1BMI==person2BMI)
{
   console.log(person2.name+" and "+person1.name+" same BMI");
}
else
{
   console.log(person2.name);
   console.log(person2BMI);
}