// import { Console } from 'console'
import React from 'react'
import "./Css/cardStyling.css"
function SponseeCard(props) {
  console.log(props.info.data)
    const {name,eventDiscription,email,phoneNo}=props.info.data
    
    return (
      <div className='mainContainer'>    <div className='card'>
      <div className='front' >
        {/* <div className={` ${companyType} type`}>{name}</div> */}
        <div className='company'>{name}</div>
        <div className='email'>Contact via mail-{email}</div>
         <div className="phone">Contact via phone-{phoneNo}</div>
         </div>


         <div className='back'>

         <div className='discription'>{eventDiscription}</div>
       <div className={`connect `} > <a href={`mailto:${email}`}>connect</a></div>

         </div>
        {/* <div onClick={sendMail(email)}>Connect</div> */}
    </div>
    </div>
    )

  
}

export default SponseeCard