import React from 'react'
import profile from "../Screens/images/profilePic.png"
import EventInput from './EventInput'
import EventDone from './EventDone'
function Modal() {
  return (
    <>
    <div className='modal-wrapper'></div>
    <div className='modal'>
        <img src={profile} className ="bigImg">
        </img>
        <div className='infoBox'>       
         <div className='name'>{global.userData.name}</div>
        <div className='name'>{global.userData.email}</div>
        {global.userData.event!=""?<EventDone></EventDone>:<EventInput></EventInput>}
        </div>

    </div>
    </>
  )
}

export default Modal