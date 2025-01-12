const offerEnds = "15 Jan 2025";

function countdown(){
    const offerDate= new Date(offerEnds);
    const curDate = new Date();

    const totalSeconds = (offerDate-curDate)/1000;
    
    const days= Math.floor(totalSeconds/(24*60*60));
    const hours= Math.floor(totalSeconds % (3600*24)/3600);
    const minutes= Math.floor(totalSeconds % 3600/60);
    const seconds= Math.floor(totalSeconds%60);

    console.log("Days : ",days,"Hours : ",hours, "Minutes : ", minutes, "Seconds : ",seconds);

    document.getElementById('days').innerText=format(days);
    document.getElementById('hours').innerText=format(hours);
    document.getElementById('minutes').innerText=format(minutes);
    document.getElementById('seconds').innerText=format(seconds);
}

function format(time){
    return time<10 ? (`0${time}`):time;
}

countdown();
setInterval(countdown,1000);