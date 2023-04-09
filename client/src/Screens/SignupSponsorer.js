import React,{useState} from 'react'
import image from "./images/signUpBack.jpg"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
function SignupSponsorer() {
const [credentials,setCredentials]=useState({companyName:"",companyType:"",email:"",phoneNo:"",password:"",range:"",cPassword:"",discription:""})
const onChange=(event)=>{

  setCredentials({...credentials,[event.target.name]:event.target.value})
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  const response=await fetch("http://localhost:5021/api/signupsponsorors",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({companyName:credentials.companyName,companyType:credentials.companyType,password:credentials.password,email:credentials.email,phoneNo:credentials.phoneNo,range:credentials.range,discription:credentials.discription})
  
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
          <p className='signUpHead'>Hey Sponsoror! Register Yourself</p>
      <form onSubmit={handleSubmit}>
        <div className='inputBox'>
    <input name="companyName" type="text" required="required" value={credentials.companyName} onChange={onChange}></input>
    <label>COMPANY NAME</label>
    </div>
    <div className='inputBox'>
    <select required="required" name="companyType"placeholder='Choose Your Company type' className={credentials.companyType==""?'selection':"selection color"} value={credentials.companyType} onChange={onChange}>
      <option value="">Choose your Company type</option>
      {
        companyType.map((companyType)=><option key={companyType} >{companyType}</option>)
      }
    </select>
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
    <div className='inputBox'>
    <select required="required" name="range"placeholder='CHOOSE YOUR SPONSORING RANGE' className={credentials.range==""?'selection':"selection color"} value={credentials.range} onChange={onChange}>
      <option value="">CHOOSE YOUR SPONSORING RANGE</option>
      {
        range.map((range)=><option key={range} >{range}</option>)
      }
    </select>
    <div>
      <textarea name="discription" placeholder='Tell Us Something about your Company (Optional)' value={credentials.discription} className={credentials.discription==""?"notFilled":"filled"} onChange={onChange}></textarea>
    </div>
    </div>
    {/* <div><input type="submit" ></input></div> */}
    <div className="pt-1" align="center">
                 <button className="submit" type="submit">SignUp</button>
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