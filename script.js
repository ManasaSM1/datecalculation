var pdiv=document.createElement('div');
pdiv.setAttribute('style','padding-top:20px');

var dateelem=document.createElement('input');
dateelem.setAttribute('type','date');
dateelem.setAttribute('id','dob');
dateelem.setAttribute('name','dob');

pdiv.appendChild(dateelem);

var button=document.createElement('button');
button.innerHTML="display data";
button.setAttribute('class','btn btn-primary');
button.addEventListener('click',calculate);
pdiv.appendChild(button);


var dd=document.createElement('div');
dd.setAttribute('id','display');


function calculate(){
    var input=document.getElementById('dob').value;
    console.log(input);
    if(Date.parse(input))
    {
        var inputdate=new Date(input);
        console.log(inputdate);
        var currentdate=new Date();
        console.log(currentdate);
        var millisecondsdiff=parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
        console.log(millisecondsdiff);
        var secondsdiff=mathfloor(millisecondsdiff,1000);
        console.log(secondsdiff);
        var minutesdiff=mathfloor(secondsdiff,60);
        console.log(minutesdiff);
        var hourdiff=mathfloor(minutesdiff,60);
        console.log(hourdiff);
        var daydiff=mathfloor(hourdiff,24);
        console.log(daydiff);
        
        var yeardiff=getyear(inputdate,currentdate)
        console.log(yeardiff);
        var monthdiff=getmonth(inputdate,currentdate)
        console.log(monthdiff);
dd.innerHTML=`given date is :${inputdate}<br>
year:${yeardiff};<br>
months:${monthdiff};<br>
days:${daydiff};<br>
hours:${hourdiff};<br>
minutes:${minutesdiff};<br>
seconds:${secondsdiff};<br>
milliseconds:${millisecondsdiff}`;
    

}
else{
    dd.innerHTML="invalid date";
}

document.body.appendChild(dd);

}


function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}
function getyear(value1,value2)
{
    var date1=new Date(value1);
    var date2=new Date(value2);
    return date2.getFullYear()-date1.getFullYear();
}
function getmonth(value1,value2)
{
    var year=getyear(value1,value2);
    var month=(year*12)+(value2.getMonth()-value1.getMonth())
    return month;
}
document.body.append(pdiv);
