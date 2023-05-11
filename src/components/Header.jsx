import { useEffect } from 'react'

import logoExample from '../assets/logo-example.svg'

const Header = () => {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = document.documentElement.scrollTop
      if (scroll >= 10) {
        document.querySelector(".header").classList.add("scrolled")
      } else {
        document.querySelector(".header").classList.remove("scrolled")
      }
    })
  })
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="#">
            <img src={logoExample} alt="" />
          </a>
        </div>
        <div className="header__menu">
          <ul className='header__menu-items'>
            <li><a href="#" data-replace="HOME"><span>HOME</span></a></li>
            <li><a href="#" data-replace="ABOUT US"><span>ABOUT US</span></a></li>
            <li><a href="#" data-replace="OUR SERVICES"><span>OUR SERVICES</span></a></li>
            <li><a href="#" data-replace="CONTACT US"><span>CONTACT US</span></a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header