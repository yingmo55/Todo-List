import React, {useState, useEffect} from 'react';

function CurrentTime() {
    let date = new Date();
    const [time, setTime] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('')

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
        <>
        <time>{time}</time>
        <p>{dayOfWeek}</p>
        </>
    )
}

export default CurrentTime;