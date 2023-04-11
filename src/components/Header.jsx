import React, { useEffect, useState } from 'react';

import Logo from '../assets/img/cycle.gif'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import Socials from '../components/Socials'

import { Wave } from 'react-animated-text';

const Header = () => {
  const [bgc, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })


  return (
    <header className={` h-20 bg-black flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
      <div className="container  mx-auto h-full flex items-center justify-between">
        
        {/* Logo */}
        <div className='w-12 h-12'>
          <a className='' href="#">
            <img className='w-auto h-auto rounded-full' src={Logo} alt="logo"/>
          </a>
        </div>

        {/* Navbar */}
        <div className="hidden lg:block">
          <Nav></Nav>
        </div>
        {/* Social */}
        <div className="hidden lg:block">
          <Socials></Socials>
        </div>
        {/* NavMile */}
        <div className="lg:hidden">
          <NavMobile></NavMobile>
        </div>
      </div>
    </header>
  )
}

export default Header