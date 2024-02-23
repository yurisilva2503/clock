setInterval(getHours, 1000);

function getHours(){
    var clock = new Date();

    var hour = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();

    const p_hour = document.getElementById("hour");
    p_hour.innerHTML = hour + ":";
    const p_minutes = document.getElementById("minutes");
    p_minutes.innerHTML = minutes + ":";

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    const p_seconds = document.getElementById("seconds");
    p_seconds.innerHTML = seconds;
}

