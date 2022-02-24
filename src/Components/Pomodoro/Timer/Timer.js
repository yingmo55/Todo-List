import React, {useState, useEffect} from "react";

function Timer () {
const [time, setTime] = useState(5000);
const [pauseTimer, setPauseTimer] = useState(false);

const toggleTimerButton = document.getElementById('toggleTimer');

const countdown = () => {
    setTime((prev)=> prev - 1);
}

useEffect(() => {
    if (!pauseTimer) {
        const timeInterval = setInterval(countdown, 1000);
    return () => {
        clearInterval(timeInterval);
    };
}
}, [time, pauseTimer])

const toggleTimer = () => {
    setPauseTimer(!pauseTimer);
    toggleTimerButton.innerHTML = pauseTimer ?  'Currently: on' : 'Currently: off';
}


    return (
        <>
        <p>{time}</p>
        <input type="text" name="timer" list="time" />
        <datalist id="time">
            <option value="5" />
            <option value="10" />
        </datalist>
        <button onClick={toggleTimer} id='toggleTimer'>Pause</button>
        </>
    );
}

export default Timer;