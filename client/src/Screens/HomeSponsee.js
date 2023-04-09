import React from 'react'
import Navbar from '../Components/Navbar'
import SponsororCard from './SponsororCard'
import "./Css/cardStyling.css"
function HomeSponsee() {
    console.log(global.SponsororData)
  return (
    <div>
        <Navbar></Navbar>
        <div className='welcome'>Welcome {global.userData.name}</div>
        <div className='heading'>Education Related Companies</div>
        <div className='categoryBlock'>

        { global.SponsororData.map(data=>{
        if(data.companyType==="Education")
        return<SponsororCard sponsoror={data}></SponsororCard>})
}

</div>
<hr></hr>
<div className='heading'>Finance Related Companies</div>
<div className='categoryBlock'>
{ global.SponsororData.map(data=>{
        if(data.companyType==="Finance")
        return<SponsororCard sponsoror={data}></SponsororCard>})
}
</div>
<hr></hr>

<div className='heading'>Business Related Companies</div>
<div className='categoryBlock'>
{ global.SponsororData.map(data=>{
        if(data.companyType==="Business")
        return<SponsororCard sponsoror={data}></SponsororCard>})
}
</div>
<hr></hr>

<div className='heading'>NGO Related Companies</div>
<div className='categoryBlock'>
{ global.SponsororData.map(data=>{
        if(data.companyType==="NGO")
        return<SponsororCard sponsoror={data}></SponsororCard>})
}
</div></div>
  )
}
export default HomeSponsee