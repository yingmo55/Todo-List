import React, {useState, useEffect} from "react";

function Timer () {
const [time, setTime] = useState(100);
const [pauseTimer, setPauseTimer] = useState(false);
const toggleTimerButton = document.getElementById('toggleTimer');

const countdown = () => {
    setTime((prev)=> prev - 1);
}

const toggleTimer = () => {
    setPauseTimer(!pauseTimer);
}

const parseTime = () => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return `${min}: ${sec}`;
}

const parsedTime = parseTime();

useEffect(() => {
    if (!pauseTimer) {
        const timeInterval = setInterval(countdown, 1000);
        
    return () => {
        clearInterval(timeInterval);
    };
}
}, [time, pauseTimer])

useEffect(()=> {
    if (toggleTimerButton){
        toggleTimerButton.innerHTML = pauseTimer ?  'Currently: off' : 'Currently: on';
        }
}, [toggleTimerButton, pauseTimer])

    return (
        <>
        <p>{parsedTime}</p>
        <input type="text" name="timer" list="time" />
        <datalist id="time">
            <option value="5" />
            <option value="10" />
        </datalist>
        <button onClick={toggleTimer} id='toggleTimer'>Loading...</button>
        </>
    );
}

export default Timer;