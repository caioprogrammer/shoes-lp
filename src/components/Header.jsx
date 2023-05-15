import { cloneElement } from 'react'
import { useEffect } from 'react'

import logoExample from '../assets/logo-example.svg'

const Header = () => {

  useEffect(() => {
    const menuOpener = document.querySelector('.toggle-menu');
    const menuList = document.querySelectorAll('.header__menu ul li a');

    window.addEventListener("scroll", () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll >= 10) {
        document.querySelector(".header").classList.add("scrolled");
      } else {
        document.querySelector(".header").classList.remove("scrolled");
      }
    })
    menuOpener.addEventListener('click', () => {
      menuOpener.classList.toggle("active");
      document.querySelector('.header__menu').classList.toggle("open")
    })

    menuList.forEach((item) => {
      item.addEventListener('click', () => {
        menuOpener.classList.remove("active");
        document.querySelector('.header__menu').classList.remove("open")
      })
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
        <div className='header__opener'>
        <a className="toggle-menu" href={void(0)}>
          <i></i>
          <i></i>
          <i></i>
        </a>
        </div>
        <div className="header__menu">
          <ul className='header__menu-items'>
            <li><a href="#home" data-replace="HOME"><span>HOME</span></a></li>
            <li><a href="#products" data-replace="OUR PRODUCTS"><span>OUR PRODUCTS</span></a></li>
            <li><a href="#about" data-replace="ABOUT US"><span>ABOUT US</span></a></li>
            <li><a href="#services" data-replace="OUR SERVICES"><span>OUR SERVICES</span></a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header