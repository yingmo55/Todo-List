import React from "react";
import './TomatoButton.css';

function TomatoButton(props) {
const {parsedTime, toggleTimer, timerStart, isBreak, timerPopup, pauseTimer} = props;
    return (
    <div className={props.className} >
        <button onClick={toggleTimer} id='timerIcon'> </button>
        <p>{!timerStart || timerPopup ? 
        'Pomodoro' : pauseTimer ? 'paused' : 
         !isBreak ? 
        parsedTime : 'Break time!'}</p>
    </div>)
}

export default TomatoButton;