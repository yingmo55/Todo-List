import React, {useState, useEffect} from "react";

function Timer () {
const [time, setTime] = useState(5000);

const countdown = () => {
    setTime((prev)=> prev - 1);
}

useEffect(() => {
    const timeInterval = setInterval(countdown, 1000);
    return () => {
        clearInterval(timeInterval);
    };
}, [time])


    return (
        <>
        <p>{time}</p>
        </>
    );
}

export default Timer;