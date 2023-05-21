import React from 'react'
import './Benefits.css'

import { FiCheck } from 'react-icons/fi'
import CycleBanner from '../../assets/img/BenefitsBanner.webp'

const Benefits = () => {
    return (
        <div className=' min-h-[90px] bg-black'>
            <div className="container mx-auto">
                <div className="flex flex-col flex-1 xl:flex-row md:flex-row gap-2 justify-center items-center">
                    {/* info */}
                    <div className=" min-h-[90px] w-[50%]">
                        {/* <h1 className='title textwhite mt-10 font-extrabold text-3xl'>Join a ride</h1>
                        <p className='mt-5'>join and take part in solo <span className='text-xl'>rides.</span></p>
                        <h3 className='mt-2'>Benefits</h3>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Increase your physical activity </span></p>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Join a social network</span></p>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Gain confidence and competence </span></p>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Free insurance cover for your ride </span></p>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Earn rewards </span></p>
                        <div className="flex mt-10 gap-x-7">
                            <button style={{background:"var(--red"}}  className='btn btn-md  hover:bg-accent-hover'>Join Today</button>
                            <button style={{background:"var(--red"}}  className='btn btn-md  hover:bg-accent-hover'>Find A Ride</button>
                        </div> */}

                        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter ">

                            <img className='h-[450px] w-full opacity-50' src={CycleBanner} alt="" />
                            <figcaption class="absolute px-4 text-lg text-white top-6 pl-10">
                                <h1 className='title textwhite mt-10 font-extrabold text-3xl'>Join a ride</h1>
                                <p className='mt-5'>join and take part in solo <span className='text-xl'>rides.</span></p>
                                <h3 className='mt-2'>Benefits</h3>
                                <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Increase your physical activity </span></p>
                                <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Join a social network</span></p>
                                <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Gain confidence and competence </span></p>
                                <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Free insurance cover for your ride </span></p>
                                <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Earn rewards </span></p>
                                <div className="flex mt-3 gap-x-7">
                                    <button style={{ background: "var(--red" }} className='btn btn-md  hover:bg-accent-hover'>Join Today</button>
                                    <button style={{ background: "var(--red" }} className='btn btn-md  hover:bg-accent-hover'>Find A Ride</button>
                                </div>
                            </figcaption>
                        </figure>
                        
                        


                    </div>

                    {/* form */}
                    <div className=" min-h-[90px] w-[50%] ">
                        <h1 className='title textwhite mt-10 font-extrabold text-3xl'>Load a ride</h1>
                        <p className='mt-5'>aet-up and lead free, social rides in your community<span className='text-xl'>rides.</span></p>
                        <h3 className='mt-2'>Benefits</h3>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Free training</span></p>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Free insurance cover for your ride</span></p>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Free gilet </span></p>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Earn rewards</span></p>
                        <p className='flex gap-3 items-center mt-2'><FiCheck></FiCheck> <span>Contribute to your local community</span></p>
                        <div className="flex mt-10 gap-x-10">
                            <button style={{ background: "var(--red" }} className='btn btn-md  hover:bg-accent-hover'>Register Your Internet</button>
                            <button style={{ background: "var(--red" }} className='btn btn-md  hover:bg-accent-hover'>Learn More</button>
                        </div>
                        {/* <button style={{background:"var(--red"}} className='btn btn-lg  hover:bg-accent-hover'>Send Message</button> */}
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Benefits