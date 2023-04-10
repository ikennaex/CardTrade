import React from 'react'
import "./Footer.css"

const Footer = () => {

    const today = new Date().getFullYear()
  return (
    <div className='footer-parent'>

        <div className='footer'>

        <div className='first-div'>
            <h1 className='logo'>CardTrade</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente nam exercitationem magnam autem vitae iure, vero beatae id aperiam.</p>
        </div>

        <div className='second-div'>
        <h3>Available Giftcards</h3>
        <p>Music Gift Cards</p>
        <p>Travel Gift Cards</p>
        <p>Gaming Gift Cards</p>
        <p>Supermarket Gift Cards</p>
        <p>Lifestyle Gift Cards</p>
        <p>Streaming Gift Cards</p>
        <p>Gift Cards Ghana</p>
        </div>
        </div>

        <div className="copyright">
        <p> &copy; {today} ALl Rights Reserved ❤Ik</p>
        </div>

    </div>
  )
}

export default Footer