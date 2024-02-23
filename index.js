setInterval(getHours, 1000);

function getHours(){
    var clock = new Date();

    var hour = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();

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