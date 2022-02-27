import React from "react";
import SetTimer from "../SetTimer/SetTimer";
import './Timer.css';

function Timer (props) {

    const {parsedTime, timerStart, isBreak, changeTimer, toggleStart, togglePause
    } = props;

    return (
        <div className={props.className}>
            <p>{!isBreak ? parsedTime : 'Time for a break!'}</p>
            { !timerStart && <SetTimer onChange={changeTimer} onClick={toggleStart} />}
            { (!isBreak && timerStart) &&
                <button onClick={togglePause} id='pauseTimerBtn'>Loading...</button>}
            {timerStart &&
            <button onClick={toggleStart}>Reset Timer</button>}
        </div>
    );
}

export default Timer;