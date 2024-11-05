const birthday=document.getElementById("Birthday");
const button1=document.getElementById("btn");
const result=document.getElementById("Result");

function ageCheck()
{
    const birthdayValue=birthday.value;
    if(birthdayValue==="")
    {
        alert("Please Enter your Birthday Date ");
    }
    else{
        const ageCal=getAge(birthdayValue);
        result.innerText=`Your age is ${ageCal}`;

    }
}
-+
    function getAge(birthdayValue)
    {
        const currentDate=new Date();
        const birthdayDate=new Date(birthdayValue);
        let age=currentDate.getFullYear()-birthdayDate.getFullYear();
        const month=currentDate.getMonth()-birthdayDate.getMonth();
        if(month<0 || month===0 && currentDate.getDate < birthdayDate.getDate())
        {
            age--;
        }
        return age;

    }




button1.addEventListener("click",ageCheck);