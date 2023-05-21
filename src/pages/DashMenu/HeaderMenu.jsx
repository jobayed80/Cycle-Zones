import React from 'react'
import NavMenuDash from './NavMenuDash'
import Logo from '../../assets/img/cycle.gif'

import NavMobile from '../../components/NavMobile'

const HeaderMenu = () => {
  return (
    <header className={` h-16 bg-blue-400 flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
    <div className="container  mx-auto h-full flex items-center justify-center gap-64">
      
      {/* Logo */}
      <div className='w-12 h-12 flex items-center'>
        <a className='' href="#">
          <img className='w-auto h-auto rounded-full' src={Logo} alt="logo"/>
        </a>
      </div>

      {/* Navbar */}
      <div className="hidden lg:block">
        <NavMenuDash></NavMenuDash>
      </div>
      
      <div className="lg:hidden">
        <NavMobile></NavMobile>
      </div>
    </div>
  </header>
  )
}

export default HeaderMenu