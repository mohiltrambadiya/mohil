var temp1=0;
var temp2=1;
var nextterm=0;
var limit=prompt("enter the positive number");
console.log(temp1);
console.log(temp2);
while(nextterm<=limit)
{
    temp1=temp2;
    temp2=nextterm;
    nextterm=temp1+temp2;
    console.log(nextterm);
}