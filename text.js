
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

console.log(hour)
setInterval(()=>{
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(minute)
    second.style.transform='rotate('+sec*6+'deg)'
    hour.style.transform ='rotate('+hrs*30+'deg)'
    minute.style.transform ='rotate('+min*6+'deg)'



},1000)