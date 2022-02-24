import React, {useState, useEffect} from 'react';


const Task = (props) => {
    const {taskDescription, key} = props;
    return (
        <li key={key}>{taskDescription}</li>
    );
}

export default Task;