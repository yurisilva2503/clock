setInterval(getHours, 1000);

function getHours(){
    var clock = new Date();

    var hour = formatTimeUnit(clock.getHours());
    var minutes = formatTimeUnit(clock.getMinutes());
    var seconds = formatTimeUnit(clock.getSeconds());

    document.getElementById("hour").innerHTML = hour + ":";
    document.getElementById("minutes").innerHTML = minutes + ":";
    document.getElementById("seconds").innerHTML = seconds;
}

function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
}