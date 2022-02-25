import React, {useState, useEffect} from 'react';
import './CurrentTime.css';

function CurrentTime(props) {
    let date = new Date();
    const [time, setTime] = useState(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [dayOfWeek, setDayOfWeek] = useState(Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date));

    function timeNow(){
        date = new Date();
        setTime(
            date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            );
        setDayOfWeek(Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date));
      }

      useEffect(()=>{
        let update = setInterval(timeNow, 1000);
        return () => {
            clearInterval(update);
        }
      })

    return (
        <div className={props.className}>
        <h2>{time}</h2>
        <h3>{dayOfWeek}</h3>
        </div>
    )
}

export default CurrentTime;