import React, {useState, useEffect} from "react";

function Timer () {
const [time, setTime] = useState(5);
const [pauseTimer, setPauseTimer] = useState(true);
const toggleTimerButton = document.getElementById('toggleTimer');
const [timerStart, setTimerStart] = useState(false);
const setTimerSelect = document.getElementById('setTimerSelect');

const countdown = () => {
    setTime((prev)=> prev - 1);
}

const toggleTimer = () => {
    setPauseTimer(!pauseTimer);
    if (time === 0) {
        console.log('times up. Take a break!')
    }
}

const parseTime = () => {
    let min = Math.floor(time / 60) >= 10 ? Math.floor(time / 60) : "0" + Math.floor(time / 60);
    let sec = time % 60 >= 10 ? time % 60 : "0" + time % 60;
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

useEffect(()=>{
    if (time <= 0) {
        console.log('times up. Take a break!')
        setPauseTimer(true);
        setTimerStart(false);
    }
}, [time])

useEffect(()=> {
    if (toggleTimerButton){
        toggleTimerButton.innerHTML = pauseTimer ?  'Currently: off' : 'Currently: on';
        } 
}, [toggleTimerButton, pauseTimer])

const startTimer = () => {
    console.log('timer start!')
    setPauseTimer(false);
    setTimerStart(true);
}

const changeTimer = e => {
    e.preventDefault();
    setTime(e.target.value * 60);
    setPauseTimer(true);
}

    return (
        <>
        <p>🍅</p>
        <p>{parsedTime}</p>
        { !timerStart &&
        (<div id='setTimerSelect'>
        <label htmlFor='timer'>Set timer here:</label>
        <select id="timer" list="time" onChange={changeTimer} >
            <option  value="">---select a time---</option>
            <option  value="0.1">test</option>
            <option  value="5">5 min - great for a kickstart!</option>
            <option value="10">10 min - for a short task</option>
            <option value="25">25 min- standard pomodoro</option>
        </select>
        <button type='button' onClick={startTimer}>Start Timer</button>
        </div>)}
        <button onClick={toggleTimer} id='toggleTimer'>Loading...</button>
        </>
    );
}

export default Timer;