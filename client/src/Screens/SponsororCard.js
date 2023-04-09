import React from 'react'

function sponsororCard(sponsoror) {
//  console.log(sponsoror)
const {companyName,companyType,discription,email,phoneNo}=sponsoror.sponsoror
    return (
      <div className='mainContainer'>    <div className='card'>
      <div className='front' >
        <div className={` ${companyType} type`}>{companyType}</div>
        <div className='company'>{companyName}</div>
        <div className='email'>Contact via mail-{email}</div>
         <div className="phone">Contact via phone-{phoneNo}</div>
         </div>


         <div className='back'>

         <div className='discription'>{discription}</div>
       <div className={`${companyType} connect `} > <a href={`mailto:${email}`}>connect</a></div>

         </div>
        {/* <div onClick={sendMail(email)}>Connect</div> */}
    </div>
    </div>

  )
}
// function sendMail(email){
// var link=`mailto:${email}`
// window.location.href=link;
// }

export default sponsororCard