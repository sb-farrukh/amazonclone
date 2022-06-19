import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AmazonLogo from "../../images/Amazon_Logo.png";
import "./login.css"


const Login = () => {
  const [email ,setEmail]=useState("");
  const [password , setPassword]=useState("");
  const SignIn =(e)=>{
    e.preventDefault()
  };
  return (
    <div className='login'>
      <Link to="/">
        <img src={AmazonLogo} alt="logo" className='login-logo' />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
<h5>Email</h5>
<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
<h5>Password</h5>
<input type="password" value={password} onChange ={(e)=> setPassword(e.target.value)}/>
<button type='submit'className='login-signIn' onClick={SignIn}>Sign In</button>
<p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notic</p>
        </form>
      </div>
      <p>New to Amazon ?</p>
      <Link to="/ragister">
        <button className='login-register' >Create Your Amazon Account</button>
      </Link>
    </div>
  )
}

export default Login