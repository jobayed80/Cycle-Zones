import React, { useEffect, useState } from 'react'
import Header from '../Header'
import image from '../../assets/img/login.svg'
import logo from '../../assets/img/cycle.gif'
import { Link } from "react-router-dom";


// data 
import { login_social } from '../../data'


const login = () => {

    // const [email,setEmail] = useState("")

   

    return (
        <>
            
            <Header></Header>

            <section className='section bg-white min-h-[900px] relative'>

                {/* data-aos="fade-up" data-aos-duration="2000" */}
                <div className="container mx-auto">

                    <div className="flex flex-col xl:flex-row gap-24 xl:mt-36 sm:mt-24 md:mt-24 bg-red-500 relative">


                        {/* <div className="blur" style={{ background: "rgb(238 210 255)" }}></div> */}
                        {/* <div
                            className="blur"
                            style={{
                                background: "#C1F5FF",
                                top: "17rem",
                                width: "21rem",
                                height: "12rem",
                                left: "-9rem",
                            }}
                        >

                        </div>
 */}



                        <img className=' object-cover h-[450px] w-[666px] md:mx-auto lg:mx-0 sm:mx-auto xl:mt-4 rounded-2xl m-11' src={image} alt="" />

                        <div className="flex flex-col items-center text-center lg-items-start lg:text-left ">

                            <div className="flex flex-col" >
                                <img className='object-cover h-[150px] w-[160px] md:mx-auto lg:mx-auto sm:mx-auto flex items-center' src={logo} alt="" />
                                <h2 style={{ color: "var(--green" }} className='text-3xl lg:4xl font-medium lg:font-extrabold mb-3 before:content-login relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden
                                before:lg:block'>
                                    <small className='text-black '>Sign'In' to</small> DIU,Cycle Zone
                                </h2>
                                {/* <p  className='mb-4 text-accent'>Web Designing</p> */}
                                <hr className='mb-8 opacity-5' />
                                {/* <input onChange={(e) => setName(e.target.value)} className='input' type="text" placeholder='Your Full Name' /> */}
                                <input className='input mb-4 active' type="email" placeholder='Your Email' />
                                <input className='input' type="pass" placeholder='Your Password' />
                                <hr className='mt-2'></hr>
                                <div className='flex justify-between mt-4'>
                                    <p className='flex gap-2'> <input className='cursor-pointer' type="checkbox" /> Remeber me</p>
                                    <a href="">Forgot password</a>
                                </div>
                            </div>

                            <button style={{ background: 'var(--green' }} className='btn btn-md bg-accent hover:bg-accent-hover transition-all w-full rounded-lg text-xl mt-10 '><a href="">Contact</a></button>
                            <div className="login-bootom-part">
                                <p className='mt-2 mb-2 text-center'> <small className='text-black'>Not a member yet?</small> <a href=""> Create an account</a></p>
                                <p className='text-center'>-or-</p>
                            </div>
                            <nav>
                                <ul className='flex space-x-1 capitalize text-[20px]  w-full '>
                                    {login_social.map((item) => {
                                        return (
                                            <li className="cursor-pointer m-4 items-center justify-center rounded-full p-2 transition duration-500 ease-in-out bg-teal-500 hover:bg-teal-200">
                                                {item.icon}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default login