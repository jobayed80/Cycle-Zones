import React from 'react'

import { social } from '../data'
import Logo from '../assets/img/main-logo2.svg'
import diuLogo from '../assets/img/diu-cycle-footer.svg'
import {RxDotFilled} from 'react-icons/rx'

const Footer = () => {
    return (
        <footer className='bg-tertiary py-10'>
            <div className="container mx-auto"  >
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-start justify-between w-full">
                    {/* socila icon */}
                    <div className="flex flex-col w-[32%%]">
            
                        <img className='w-[200px] items-start justify-start bg-white rounded-lg py-2 object-contain' src={diuLogo} alt="" />
                        <h2 className='mt-4 font-semibold'>DIU Cycle Zone</h2>
                        <p className="mt-2">Daffodil International University</p>
                        <p className="mt-2">Daffodil Smart City, Birulia, Road-1200</p>
                        <a className='mt-1' target="_blank" href="https://daffodilvarsity.edu.bd/">--Go to Official Website--</a>
                        

                    </div>
                    {/* icon */}
                    <div className='w-[32%%]'>
                        {/* <img src={Logo} alt="" /> */}
                        <h1 className='text-[2rem]'>Useful Links</h1>
                        <p className='mt-5 flex items-center space-x-2'> <span><RxDotFilled></RxDotFilled></span>  <a href="#">Contact Us</a></p>
                        <p className='mt-3 flex items-center space-x-2'> <span><RxDotFilled></RxDotFilled></span>  <a href="#">Insurance Cover</a></p>
                        <p className='mt-3 flex items-center space-x-2'> <span><RxDotFilled></RxDotFilled></span>  <a href="#">Cookies Settings</a></p>
                        <p className='mt-3 flex items-center space-x-2'> <span><RxDotFilled></RxDotFilled></span>  <a href="#">Cookie Policy</a></p>
                    </div>
                    <div className='w-[32%%] flex-col space-y-9'>
                        {/* copyright */}
                        {/* <p>&copy; 2023 Md. Jobayed Hossain Rabbi. All rights reserved.</p> */}
                        {social.map((item, index) => {
                            const { href, icon , name } = item
                            return (
                                <div className=''>
                                    <a target='_blank' className='text-slate-400 text-base hover:text-pink-600 transition-all duration-500 gap-4 flex items-center justify-start' href={href} key={index} > <span className='text-[0.7rem] border border-1 rounded-lg p-1'>{icon}</span> <span className='text-[0.9rem] font-extrabold'>{name}</span></a>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer