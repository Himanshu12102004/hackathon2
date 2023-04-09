import React ,{useState} from 'react'
import profile from "../Screens/images/profilePic.png"
import coin from "../Screens/images/coin.png"
import "../Screens/Css/navStyling.css"
import company from "../Screens/images/company.png"
import ModalOpen from './ModalFunction'
import Modal from './Modal'

function Navbar(props) {
  const [modal,setModal]=useState(false)
  return (
    <div>
        <div className='nav'>
      <img className='coin2 coin3' src={company}></img>
        
        <div className='head2'> <span >COSP</span>
      <img className='coin coin2' src={coin}></img>
      <span >NSOR</span></div> 
      {props.from==="signUp"?
      <div className='options'><ul>
        <li className='hover-underline-animation'>What we do?</li>
        <li className='hover-underline-animation'>Contact Us</li>
        <li className='hover-underline-animation'>Sponsee?</li></ul></div>:<img src={profile} onClick={()=>setModal(true)} className="profile options"></img>}
        {modal?<Modal></Modal>:""}
    </div>
    <hr></hr>
    </div>
  )
}

export default Navbar