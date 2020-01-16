var john1= parseInt(prompt('Enter the match1 score of john team'));
var john2=parseInt(prompt('Enter the match2 score of john team'));
var john3=parseInt(prompt('Enter the match3 score of john team'));

var Mike1=parseInt(prompt('Enter the match1 score of mike team'));
var Mike2=parseInt(prompt('Enter the match2 score of mike team'));
var Mike3=parseInt(prompt('Enter the match3 score of mike team'));

var Mary1=parseInt(prompt('Enter the match1 score of mary team'));
var Mary2=parseInt(prompt('Enter the match1 score of mary team'));
var Mary3=parseInt(prompt('Enter the match1 score of mary team'));

var johnAverage=(john1+john2+john3)/3;
var MikeAverage=(Mike1+Mike2+Mike3)/3;
var maryAverage=(Mary1+Mary2+Mary3)/3;

if(johnAverage>MikeAverage && johnAverage>maryAverage)
{
    console.log('Team john is Winner' + johnAverage);
}
else if(MikeAverage>johnAverage && MikeAverage>maryAverage)
{
    console.log('Team Mike is Winner' + MikeAverage);
}
else if(maryAverage>johnAverage && maryAverage>MikeAverage)
{
    console.log('Team mary is winner' + maryAverage);
}
else
{
    console.log('match is draw');
}   
