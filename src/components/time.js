import React, {useState, useEffect} from 'react'
import moment from "moment"

const Time = () => {
    const[time, setTime] =useState(null)
    useEffect(()=>{
        setInterval(()=>{
            setTime(moment().format('YYYY, h:mm a'))
        },1000)
    })
    return (
        <span>

            {time}
        </span>
    
    )
}

export default Time
