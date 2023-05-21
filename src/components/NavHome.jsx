import React from 'react'

// data 
import { homeNav, navigation } from '../data'

import { Link } from 'react-router-dom'

import LoadingScreen from 'react-loading-screen';

const Nav = () => {

    // const styles = {
    //     className:'text-gray-600 block px-2 py-1 hover:underline hover:text-gray-900',
    //     activeClassName: 'underline text-gray-900'
    // }    const links = [
    //     {
    //         className: styles.className,
    //         activeClassName: styles.activeClassName,
    //         to: '/projects',
    //         name: 'Projects'
    //     },
    //     {
    //         className: styles.className,
    //         activeClassName: styles.activeClassName,
    //         to: '/posts',
    //         name: 'Posts'
    //     },
    //     {
    //         className: styles.className,
    //         activeClassName: styles.activeClassName,
    //         to: '/contact',
    //         name: 'Contact'
    //     },    
    // ]    

   
    



    return (
        <nav>
            <ul className='flex space-x-14 capitalize text-[16px]'>
                {homeNav.map((item, index) => {
                    return (
                        <li className='text-white hover:text-pink-600 cursor-pointer text-lg ' key={index}>
                            <Link to={item.href} activeClass='active' spy={true} smooth={true}
                                duration={500} className='transition-all duration-500'>{item.name}
                            </Link>
                            
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav