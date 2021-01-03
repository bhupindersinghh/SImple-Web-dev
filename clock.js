const secondshand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds/60)*360;
    secondshand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minuteDegrees = (minutes*6);
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    // hourHand.style.transform = `rotate(${})`
    const hours = now.getHours();
    const hoursDegree = (hours*30);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    console.log(hours);

}
setInterval(setDate,1000);