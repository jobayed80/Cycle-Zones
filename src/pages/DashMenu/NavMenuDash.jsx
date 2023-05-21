import React from 'react'

// data 
import { dashMenu } from '../../data'
import {Link} from 'react-router-dom'



const NavMenuDash = () => {

    

  return (
    <div>
         <nav>
            <ul className='flex space-x-14 capitalize text-[16px]'>
                {dashMenu.map((item, index) => {
                    return (
                        <li className='text-black hover:text-pink-600 cursor-pointer text-[1.2rem] font-bold' key={index}>
                            <Link to={item.href} activeClass='active' spy={true} smooth={true}
                                duration={500} className='transition-all duration-500'>{item.name}
                            </Link>
                            
                        </li>
                    )
                })}
            </ul>
        </nav>
    </div>
  )
}

export default NavMenuDash