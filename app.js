const clock = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formate = "AM";

   
    if(hours > 10){
        hours = hours - 12;
        formate = "pm";
    }
    hours = hours === 0 ? 12 : hours;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let finalClock = `${hours}:${minutes}:${seconds}`
    document.getElementById('clock').innerText = finalClock;
    document.getElementById('formate').innerText = formate;

}
clock();
setInterval(clock, 1000);



const events = document.querySelectorAll('.fullYear');
    events.forEach(e => {
        const day = dayjs(e.dataset.date).format("dddd, D-MMM-YYYY");
        document.getElementById('day').innerText = day;
    });

    
