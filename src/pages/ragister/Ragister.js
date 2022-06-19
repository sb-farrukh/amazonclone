import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Ragister.css"
import AmazonLogo from "../../images/Amazon_Logo.png";
const Ragister = () => {
const [email, setEmail]=useState("");
const [password ,setPasswoed]=useState("")
const ragister=(e)=>{
  e.preventDefault()
}
  return (
    <div className='register'>
      <Link to="/">
      <img src= {AmazonLogo} alt="lpgo" className='register-logo'/>
      </Link>
     
<div className='register-container'>
<h1>Create Account</h1>
  <form>
    <h5>Email</h5>
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <h5>password</h5>
    <input type="password" value={password} onChange={(e)=>setPasswoed(e.target.value)} />
     <button type='submit' className='continue' onClick={ragister}>Continue</button>
     <div className="detail">
       <p>Already have a account?</p>
       <Link to="/login" className='signin-link'>
         <p>Sign In</p>
       </Link>
     </div>
  </form>
</div>
    </div>
  )
}

export default Ragister