import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import image from "./images/signUpBack.jpg"

import Navbar from '../Components/Navbar'
function SignupSponsorer() {
const [credentials,setCredentials]=useState({name:"",email:"",phoneNo:"",password:"",cPassword:""})
const onChange=(event)=>{

  setCredentials({...credentials,[event.target.name]:event.target.value})
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  const response=await fetch("http://localhost:5021/api/signupsponsee",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({name:credentials.name,password:credentials.password,email:credentials.email,phoneNo:credentials.phoneNo})
  
  })
  console.log( await response.json())
}
const companyType=["Education","Finance","NGO","Business"]
const range=["5k to 10k","10k to 15k","15k to 20k","20k to 30k","30k to 50k","60k and above"]

  return (
    <div>
      <Navbar from="signUp"></Navbar>
      <div className='container'>
        <div>
          <p className='signUpHead'>Hey Sponsee! Register Yourself</p>
      
      <form onSubmit={handleSubmit}>
        <div className='inputBox'>
    <input name="name" type="text" required="required" value={credentials.Name} onChange={onChange}></input>
    <label>YOUR NAME</label>
    </div>

    <div className='inputBox'>
    <input name="email" type="text" required="required" value={credentials.email} onChange={onChange}></input>
    <label>EMAIL</label>
    </div>

    <div className='inputBox'>
    <input name="password" type="password" required="required" value={credentials.password} onChange={onChange}></input>
    <label>PASSWORD</label>
    </div>
    <div className='inputBox'>
    <input name="cPassword" type="password" required="required" value={credentials.cPassword} onChange={onChange}></input>
    <label>CONFIRM PASSWORD</label>
    </div> 
    <div className='inputBox'>
    <input name="phoneNo" type="text" required="required" value={credentials.phoneNo} onChange={onChange}></input>
    <label>PHONE NUMBER</label>
    </div>
   
    <div><div className="pt-1" align="center">
                 <button className="submit" type="submit">SignUp</button>
               </div>
    </div>
      </form>
      </div><div>
    <img  className='backImage' src={image}></img>
<p className='img_box_item'>Already Registered?<br></br>
Login here
<br></br></p>
<Link to="/login" className='link signin'>SignIn</Link>

</div>
    </div>
    </div>
  )
}

export default SignupSponsorer