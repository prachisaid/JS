console.log("Clock js")

// Ste interval runs for each second and set time out runs after a specified interval

function updateClock(){
    let time = new Date();
    let currentHour = time.getHours();
    let currentMinutes = time.getMinutes();
    let currentSeconds = time.getSeconds();

    // console.log(currentHour, currentMinutes, currentSeconds)

    let timeOfDay = "";

    if(currentHour < 12){
        timeOfDay = "AM"
    }else{
        timeOfDay = "PM"
    }

    if(currentHour > 12){
        currentHour = currentHour - 12;
    }
    else if(currentHour == 0){
        currentHour = 12
    }

    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds

    let currentTimeStr = currentHour + " : " + currentMinutes + " : " + currentSeconds + " " + timeOfDay;
    document.getElementById('clock').innerHTML = currentTimeStr;
}

// updateClock()