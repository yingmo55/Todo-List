import React from "react";
import './SetTimer.css';

function SetTimer (props) {
const changeTimer  = props.onChange;
const startTimer = props.onClick

    return (
        <div id='setTimerSelect'>
            <label htmlFor='timer'>Set timer here:</label>
            <select id="timer" list="time" onChange={changeTimer} >
                <option  value="">---select a time---</option>
                <option  value="0.1">test</option>
                <option  value="5">5 min - great for a kickstart!</option>
                <option value="10">10 min - for a short task</option>
                <option value="25">25 min- standard pomodoro</option>
            </select>
            <button type='button' onClick={startTimer}>Start Timer</button>
        </div>
    );
}

export default SetTimer;