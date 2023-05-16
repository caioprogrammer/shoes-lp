import React from 'react';
import floatImage from '../assets/float-whatsapp.svg'

const FloatWhatsapp = () => {
  return (
    <div className="floating_btn">
      <a target="_blank" href="https://api.whatsapp.com/send?phone=5543988197274">
        <div className="contact_icon">
          <img src={floatImage} alt="" />
        </div>
      </a>
    </div>
  )
}

export default FloatWhatsapp;