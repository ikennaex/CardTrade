import React from 'react'
import "./Intro.css"

const Intro = () => {
  return (
    <div className='intro'>

        <div className="intro-text">
            <h1>CARD <span className='trade'>TRADE</span> </h1>
            <p>The best platform to <span className='intro-text-green'>Trade </span>your giftcards <br /> in <span className='intro-text-green'>Nigeria</span> and <span className='intro-text-yellow'>Ghana</span></p>
        </div>

        <div className='intro-image'>
           <img className='flag-ng' src='https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg' />
           <img className='flag-gh' src='https://cdn.britannica.com/54/5054-004-A09ABCDF/Flag-Ghana.jpg' />
        </div>

        <div className='below-text'><p>TESTED AND TRUSTED</p></div>

        <div className='gift-icons'>
          <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/387_Xbox_logo-512.png'/>
          <img src='https://cdn-icons-png.flaticon.com/512/217/217436.png'/>
          <img src='https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/steam-512.png'/>
          <img src='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/amazon-512.png'/>
          <img src='https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/256/itunes_256.png'/>
          <img src='https://www.freepnglogos.com/uploads/starbucks-logo-png-25.png'/>

        </div>
        
    </div>
  )
}

export default Intro