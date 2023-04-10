import React from 'react'
import "./GetStarted.css"

const GetStarted = () => {
  return (
    <div className='get-started'>
        <div className='getstarted-text'>
            WE ARE <br/> <span className='text-blue'>FAST AND</span> <br/> <span className='text-green' >RELIABLE</span>
        </div>

        <div className='getstarted-signup'>
            <h2>Get Started in no time</h2>
            <p>Get the CardTrade app or 
                register on the website today and start 
                Trading gift cards. 😉</p>
            <button >ON THE WEB</button>
        </div>
    </div>
  )
}

export default GetStarted