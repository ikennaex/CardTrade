import React from 'react'
import "./Loginpage.css"
import Navbar from '../../../components/Navbar/Navbar';

const LoginPage = () => {

  const signIn = (e) => {
    e.preventDefault();
  }
  return (
    <>
    <div className='login'>
        <div className='login-text'>
          <h2>Get right back in</h2>
          <p>SignIn to continue</p>
        </div>

        <div className='login-form-div'>
          <form className='login-form'>
            <input placeholder='Input Email Address' type='email' />
            <input placeholder='Password' type='password' />
            <button onClick={signIn} >Get me In</button>
          </form>

          <p>Not Registered? <span className='login-form-div-signup'>SignUp now!</span></p>
        </div>

    </div>
    </>
  )
}

export default LoginPage