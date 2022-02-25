import React, {useState, useEffect} from "react";
import SetTimer from "../SetTimer/SetTimer";
import './Timer.css';

function Timer (props) {
const [time, setTime] = useState(0);
const [pauseTimer, setPauseTimer] = useState(true);
const [timerStart, setTimerStart] = useState(false);
const [isBreak, setIsBreak] = useState(false);

const toggleTimerButton = document.getElementById('pauseTimerBtn');


const countdown = () => {
    setTime((prev)=> prev - 1);
}

const togglePause = () => {
    setPauseTimer(!pauseTimer);
}

const parseTime = () => {
    const min = Math.floor(time / 60) >= 10 ? Math.floor(time / 60) : "0" + Math.floor(time / 60);
    const sec = time % 60 >= 10 ? time % 60 : "0" + time % 60;
    return `${min}:${sec}`;
}
const parsedTime = parseTime();

useEffect(() => {
    if (!pauseTimer && time > 0) {
        const timeInterval = setInterval(countdown, 1000);
    return () => {
        clearInterval(timeInterval);
    };
}
}, [time, pauseTimer])

useEffect(()=> {
    if (time === 0 && timerStart){
        setIsBreak(true)
        return;
    } else {
        setIsBreak(false);
    }
}, [time])

useEffect(()=> {
    if (toggleTimerButton){
        toggleTimerButton.innerHTML = !pauseTimer ?  'Pause Timer' : 'Unpause Timer';
        } 
}, [toggleTimerButton, pauseTimer])

const toggleStart = () => {
    if (!timerStart && time !== 0) {
    setPauseTimer(false);
    setTimerStart(true);
    return;
    }
    setTime(0);
    setPauseTimer(true);
    setTimerStart(false);
    setIsBreak(false);
}

const changeTimer = e => {
    e.preventDefault();
    setTime(e.target.value * 60);
    setPauseTimer(true);
}

    return (
        <div className={props.className}>
            <p>{!isBreak ? parsedTime : 'Congrats! Take a break and come back to work'}</p>
            { !timerStart && <SetTimer onChange={changeTimer} onClick={toggleStart} />}
            { (!isBreak && timerStart) &&
                <button onClick={togglePause} id='pauseTimerBtn'>Loading...</button>}
            {timerStart &&
            <button onClick={toggleStart}>Reset Timer</button>}
        </div>
    );
}

export default Timer;