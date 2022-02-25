import React, {useState} from "react";
import './TomatoButton.css';

function TomatoButton(props) {

const [timerPopup, setTimerPopup] = useState(false);

    return (
    <div className={props.className} >
        <button id='timerIcon'> </button>
        <p>Pomodoro timer</p>
    </div>)

}

export default TomatoButton;

 //Attribution for icon
 //<a href="https://www.flaticon.com/free-icons/tomato" title="tomato icons">Tomato icons created by Freepik - Flaticon</a>