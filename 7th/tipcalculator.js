var bill=[124,48,268]
var tip=[];
var totalbill=[];

for(var i=0;i<bill.length;i++)
{
    if(bill[i]<50)
    {
        tip.push(bill[i]*0.2);
    }
    else if(bill[i]>=50 && bill[i]<=200)
    {
        tip.push(bill[i]*0.15);
    }
    else
    {
        tip.push(bill[i]*0.1);
    }
}
console.log("tip "+tip);
for(var j=0;j<tip.length;j++)
{
    totalbill.push(tip[j]+bill[j]);
}
console.log("totalbill "+totalbill);

