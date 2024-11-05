const hour=document.querySelector(".hour");
hour.className='hourDesign';
const minute=document.querySelector(".minute");
minute.className='minuteDesign';
const second=document.querySelector(".second");
second.className='secondDesign';

function setDate()
{
    const date=new Date();
    const getHour=date.getHours();
    const getMinute=date.getMinutes();
    const getSecond=date.getSeconds();

    const hourDegree=(getHour/60)*360;
    hourDegree.className="hourValue"
    const minuteDegree=(getMinute/60)*360;
    minuteDegree.className="minuteValue"
    const secondDegree=(getSecond/12)*360;
    secondDegree.className="secondValue"
    // second.style.transform=`rotate(${secondDegree}deg)`;
    // minute.style.transform=`rotate(${minuteDegree}deg)`;
    // hour.style.transform=`rotate(${hourDegree}deg)`

}
setInterval(setDate, 1000)