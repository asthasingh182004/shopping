import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='Offers'>
        <div className="Offers-left">
            <h1>Exclusive Offers for you</h1>
            <p> Only on best sellers product </p>
            <hr/>
            <button>Check Now</button>

        </div>
      <div className="Offers-right">
        <img src={exclusive_image} alt=""/>

      </div>
    </div>
  )
}

export default Offers
