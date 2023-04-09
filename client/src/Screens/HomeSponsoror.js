import React from 'react'
import Navbar from '../Components/Navbar'
import SponseeCard from './SponseeCard'
function Home() {
  console.log(global.SponseeData)
  return (
    <div>
        <Navbar></Navbar>
        <div className='welcome'>Welcome {global.userData.companyName}</div>
        {global.SponseeData.map(data=>{
          <SponseeCard info={data}></SponseeCard>
        }

        )}
    </div>
  )
}

export default Home