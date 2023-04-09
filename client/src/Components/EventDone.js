import React, {useState}from 'react'
import EventInput from './EventInput'
function EventDone() {
    const [deregistered,setDeregister]=useState(false)
    const deregister=async(e)=>{
        e.preventDefault()
        const response=await fetch("http://localhost:5021/api/deregister",{
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify({email:global.userData.email})
        
        })
        setDeregister(true)
        console.log( await response.json())
      }
  return (
    <>
    {!deregistered?
    <div>    <div>Your Last event is-</div>
    <div>{global.userData.event}</div>
    <div>Met the Sponsoring Reqirement?<br></br>
    click below in order to Deregister the event and become eligible to host a new event</div>
    <button className="submit" onClick={deregister}>Deregister Your Event</button>
    </div>:<div>
        Your event has beeen Successfully deregistered
        <EventInput></EventInput></div>

  }
    </>
  )
}

export default EventDone