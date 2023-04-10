import React from 'react'
import "./Features.css"

const Features = () => {

    const feature = [
        {
            id: 1,
            img: "https://cdn-icons-png.flaticon.com/512/4310/4310234.png",
            h2: "Instant Deals",
            p: "Complete your transaction in minutes with Us"
        },
        
        {
            id: 2,
            img: "https://cdn-icons-png.flaticon.com/512/2806/2806393.png",
            h2: "Best Gift Card Rates",
            p: "Trade your gift cards at high rates "
        },

        {
            id: 3,
            img: "https://cdn-icons-png.flaticon.com/512/3179/3179668.png",
            h2: "Earn Rewards",
            p: "Get rewards every time you carry out a transaction with us."
        },

        {
            id: 4,
            img: "https://cdn-icons-png.flaticon.com/512/9095/9095875.png",
            h2: "24/7 Availabilty and Support",
            p: "We are available for all your requests"
        },
    ]
  return (
    <div className='feature'>

        {feature.map((feature) => {
            return (
        <div className='feature-div'>
            <img src={feature.img}/>
            <h2>{feature.h2}</h2>
            <p>{feature.p}</p>
        </div>
        )
        })}

    </div>
  )
}

export default Features