const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


setInterval(() => {
    const now = new Date();
    let sec=now.getSeconds();
    let secDeg=((sec/60)*360) + 90;
    secondHand.style.transform='rotate('+secDeg+'deg)';

    let min=now.getMinutes();
    let minDeg=((min/60)*360) + 90;
    minHand.style.transform='rotate('+minDeg+'deg)';

    let hour=now.getHours();
    let hourDeg=((hour/12)*360) + 90;
    hourHand.style.transform='rotate('+hourDeg+'deg)';

}, 1000);

// const minuteHand = document.querySelector('.min-hand');
// let min=90;
// setInterval(() => {
//     let temp=min+"deg";
//     min+=6;
//     minuteHand.style.transform='rotate('+min+'deg)';
// }, 60000);