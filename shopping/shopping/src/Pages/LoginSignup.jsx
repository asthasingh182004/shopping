import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <p>Name</p>
          <input type="text" placeholder='Enter Your Name'/>
          <p>Email ID</p>
          <input type='email' placeholder='Enter Your Email Address'/>
          <p>Password</p>
          <input type='password' placeholder='Enter Password'/>
          </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' /> <p> By continuing, i agree to the terms of use & privacy policy </p>
         
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
