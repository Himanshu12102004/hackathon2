import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function SignupSponsorer() {
  const navigate=useNavigate();
const [credentials,setCredentials]=useState({email:"",password:""})
const onChange=(event)=>{

  setCredentials({...credentials,[event.target.name]:event.target.value})
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  const response=await fetch("http://localhost:5021/api/loginsponsee",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({password:credentials.password,email:credentials.email})
  
  })
  const serverResponse=await response.json()
  // console.log(serverResponse)
   const {data,success,userData}=serverResponse
  global.userData=userData
  // console.log(global.userData)
  global.SponsororData=data
  console.log("sponsoror" ,global.SponsororData,global.userData)
if(!serverResponse.success)
console.log(serverResponse.error)
  if(success)
  {
    console.log("Logged in as sponsee")
    navigate("/HomeSponsee")
  }
  
  else{
    const response=await fetch("http://localhost:5021/api/loginsponsorors",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({password:credentials.password,email:credentials.email})
    
    })  
   const serverResponse= await response.json()
     const {data,success,userData}=serverResponse
     global.userData=userData
  
    global.SponseeData=data
    console.log("sponsee" ,global.SponseeData,global.userData)
    if(!serverResponse.success)
    console.log(serverResponse.error)
  if(success){
console.log("logged in as sponsoror")
navigate("/homeSponsoror")
  }
  }

}

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