import React, {useState} from "react";
import Timer from "../Timer/Timer";
import './TomatoButton.css';

function TomatoButton(props) {

const [timerPopup, setTimerPopup] = useState(false);

const toggleTimer = () => {
    setTimerPopup(!timerPopup)
}

    return (
    <div className={props.className} >
        {timerPopup && <Timer className='timer'/> }
        <button onClick={toggleTimer} id='timerIcon'> </button>
        <p>Pomodoro timer</p>
    </div>)

}

export default TomatoButton;

 //Attribution for icon
 //<a href="https://www.flaticon.com/free-icons/tomato" title="tomato icons">Tomato icons created by Freepik - Flaticon</a>