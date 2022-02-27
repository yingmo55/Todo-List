import React, {useState, useEffect} from "react";
import Timer from "../Timer/Timer";
import TomatoButton from "../TomatoButton/TomatoButton";
import './TimerDisplay.css';

function TimerDisplay(props) {
    const [time, setTime] = useState(0);
    const [ timerPopup, setTimerPopup ] = useState(false);
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

    const toggleTimer = () => {
        setTimerPopup(!timerPopup)
    }

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
    }, [time, timerStart])

    useEffect(()=> {
        if (toggleTimerButton){
            toggleTimerButton.innerHTML = !pauseTimer ?  'Pause Timer' : 'Unpause Timer';
            } 
    }, [toggleTimerButton, pauseTimer])

    return (
    <div className={props.className} >
        {timerPopup && <Timer className='timer'  
                              time = {time}
                              parsedTime={parsedTime}
                              pauseTimer = {pauseTimer}
                              timerStart = {timerStart}
                              isBreak = {isBreak}
                              changeTimer={changeTimer}
                              toggleStart = {toggleStart}
                              togglePause={togglePause}/> 
        }
        <TomatoButton className='tomatoTimer'
                      toggleTimer={toggleTimer}
                      timerStart = {timerStart}
                      parsedTime={parsedTime}
                      isBreak = {isBreak}
                      timerPopup={timerPopup}
                      pauseTimer={pauseTimer} />
    </div>)
}

export default TimerDisplay;