import React from 'react'
import { Link } from 'react-router-dom'
import coin from "./images/coin.png"
import Typed from 'typed.js';
import './Css/choiceStyles.css'
import giving from "./images/giving fund.png"
import taking from "./images/taking fund.png"
import { useEffect,useRef } from 'react';
function Choice() {
  const el=useRef(null)
  useEffect(()=>{
    const typed=new Typed(el.current,{
      strings:["fund needs","advertising needs"],
    startDelay:200,

    typeSpeed:100,backSpeed:50,
  showCursor:false,loop:true
  })
  })
  return (
    <>
    <section id="home">
      <div className='outBox'>
    <div className='head'> <span >COSP</span>
      <img className='coin' src={coin}></img>
      <span >NSOR</span></div> 
< div className='what'>What we do?</ div>
<span className='static'>We help you to fulfill your<br></br> </span><span></span><span  className='type' ref={el}></span>
  </div>
    </section>
    <section className='content'>
      <div className='box'>
        <img className='img'  src={giving}></img>
        <p>I want advertisement</p>
        <div className='discription'>Connect with the people who want sponsorships. Sponsor their events and get advertised</div>
    <Link to="/signupsponsorer" className='link button'> Join as Sponsoror</Link>
    <br></br>
    {/* <div>Already Registered? <Link to="/loginsponsorer" className='link2'>Login</Link></div> */}
    </div>
    <div className='box'>
    <img  className='img' src={taking}></img>
    <p>I want funds </p>
    <div className='discription'>Connect to potential organizations who can sponsor your event</div>

    <Link to="/signupreceiver" className='link button'>Join as Sponsee</Link>
    <br></br>
    {/* <div>Already Registered? <Link to="/loginreceiver" className='link2'>Login</Link></div> */}
    </div></section>
    <div className='login'>Already a user? <Link to="/login">Login</Link> </div>
 </>
  )
}

export default Choice