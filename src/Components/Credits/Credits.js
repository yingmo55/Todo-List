import React, { useState } from "react";
import './Credits.css';

function Credits() {
const [toggleCredits, setToggleCredits] = useState(false);

const credit = (
    <div id='creditWindow'>
        <p>Made with 🍵 by <a href="https://github.com/yingmo55">Ying</a> | 
        <a href="https://www.flaticon.com/free-icons/tomato" title="tomato icons">Tomato icons created by Freepik - Flaticon</a></p>
    </div>
)

const showCredits = () => {
    setToggleCredits(!toggleCredits)
}

    return (
        <>
        {toggleCredits && credit}
        <button id='credits'
                onClick={showCredits}>credits</button>
        </>
)
}

export default Credits;