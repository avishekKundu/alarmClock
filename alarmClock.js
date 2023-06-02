var time, setAlarm, activeAlarm = false,
    sound = new Audio("police-6007.mp3")
let shTme = document.getElementById(`clock`);

let setHrs = (hrs) => {
    let hr = 12;
    for (let i = 0; i <= hr; i++) {
        hrs.options[hrs.options.length] = new Option(i < 10 ? `0${i}` : i, i < 10 ? `0${i}` : i)
    }
}

let setMinSec = (mnSec) => {
    let minSec = 59;
    for (let i = 0; i <= minSec; i++) {
        mnSec.options[mnSec.options.length] = new Option(i < 10 ? `0${i}` : i, i < 10 ? `0${i}` : i)
    }
}

setHrs(hours);
setMinSec(minutes);
setMinSec(seconds);


let shwTime = () => {
    let dispTime = new Date();
    time = dispTime.toLocaleTimeString();
    shTme.innerText = time;
    if (time === setAlarm) {
        sound.play();
        sound.loop = true;
    }
    setTimeout(shwTime, 1);
}

shwTime();

startstop.onclick = () => {
    if (activeAlarm === false) {
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        ampm.disabled = true;

        setAlarm = `${hours.value}:${minutes.value}:${seconds.value} ${ampm.value}`;
        startstop.textContent = "Stop";
        console.log(this.textContent);
        activeAlarm = true;
    }
    else {
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;
        ampm.disabled = false;

        sound.pause();
        alarm = `00:00:00 AM`;
        startstop.textContent = `Set Alarm`;
        activeAlarm = false;
    }
}










