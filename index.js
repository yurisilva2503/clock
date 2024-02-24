setInterval(getHours, 1000);

function getHours(){
    var clock = new Date();

    var hour = formatTimeUnit(clock.getHours());
    var minutes = formatTimeUnit(clock.getMinutes());
    var seconds = formatTimeUnit(clock.getSeconds());

    var time = dayPeriod(hour);

    switch (time){
        case "day":
            document.getElementById("body").style.backgroundImage = "url('./images/background-day.jpg')";
            document.getElementById("title").style.color = "#e6e200"
            break;
        case "afternoon":
            document.getElementById("body").style.backgroundImage = "url('./images/background-afternoon.jpg')";
            document.getElementById("title").style.color = "#ff9100"
            break;
        case "night":
            document.getElementById("body").style.backgroundImage = "url('./images/background-night.jpg')";
            document.getElementById("title").style.color = "#ff004c"
            break;
        default:
            break;
    }

    document.getElementById("hour").innerHTML = hour + ":";
    document.getElementById("minutes").innerHTML = minutes + ":";
    document.getElementById("seconds").innerHTML = seconds;
}

function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
}

function dayPeriod(value){
    if (value >= 5 && value < 12){
        return "day";
    } else if (value >= 12 && value < 18){
        return "afternoon"
    } else {
        return "night";
    }
}
