import React,{useState} from 'react'

function SignupSponsorer() {
const [credentials,setCredentials]=useState({email:"",password:""})
const onChange=(event)=>{

  setCredentials({...credentials,[event.target.name]:event.target.value})
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  const response=await fetch("http://localhost:5021/api/loginsponsorors",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({password:credentials.password,email:credentials.email})
  
  })
}
const companyType=["Education","Finance","NGO","Business"]
const range=["5k to 10k","10k to 15k","15k to 20k","20k to 30k","30k to 50k","60k and above"]

  return (
    <div>
      <form onSubmit={handleSubmit}>
        

    <div className='inputBox'>
    <input name="email" type="text" required="required" value={credentials.email} onChange={onChange}></input>
    <label>EMAIL</label>
    </div>

    <div className='inputBox'>
    <input name="password" type="password" required="required" value={credentials.password} onChange={onChange}></input>
    <label>PASSWORD</label>
    </div>
    <div><input type="submit"></input>submit</div>
      </form>
    </div>
  )
}

export default SignupSponsorer