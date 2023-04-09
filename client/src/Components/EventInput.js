import React ,{useState} from 'react'
import EventDone from './EventDone'
function EventInput() {
const [credentials,setCredentials]=useState({event:"",eventDiscription:""})
const [registered, setRegistered]=useState(false)
const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await fetch("http://localhost:5021/api/event",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({eventDiscription:credentials.eventDiscription,event:credentials.event,email:global.userData.email})
    
    })
    setRegistered(true)
    console.log( await response.json())
  }
const onChange=(event)=>{

    setCredentials({...credentials,[event.target.name]:event.target.value})
    console.log(credentials)
  }
  return (
    <>
    {!registered?
    <div>
    <div>Want an event to be sponsored?</div>
<form onSubmit={handleSubmit}>
    <div>Enter The Name of the event here-</div>
    <input name="event" value={credentials.event} onChange={onChange}></input>
    <textarea name="eventDiscription" placeholder='Enter a brief discription of you event so that we can find the right sponsorer for your event' value={credentials.discription} className={credentials.discription==""?"notFilled":"filled"} onChange={onChange}></textarea>
    <button className="submit" type="submit">Register Your Event</button>
       
    
    </form>
    </div>:<div>Your event has been Successfully Registered
        <EventDone></EventDone></div>}

    </>
  )
}

export default EventInput