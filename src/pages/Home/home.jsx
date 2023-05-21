import React from 'react'
import HeaderNav from '../../components/HeaderNav'
import diu from '../../assets/img/diu.jpeg'
import diuLogo from '../../assets/img/diuLogo.png'
import { homeNav } from '../../data'
import { Link } from 'react-scroll'
import Benefits from './Benefits'



const home = () => {
  return (
    <div>

      <HeaderNav></HeaderNav>
      {/*  Banner Start */}
      <div id='home' className="banner relative mt-7 flex flex-col lg:gap-x-8 lg:flex-row">
        {/* <img className='object-contain max-w-full max-h-full opacity-60 relative' src={diu} alt="DIU Banner" />
        <div className="banner-text absolute left-[50%] right-[50%]">
          <h1 className='text-black font-[2rem]'>bhfighirjo;n kbn</h1>
        </div> */}
        {/* <img className='object-contain max-w-full max-h-full' src={diu} alt="DIU Banner" /> */}
        <img className=' object-cover h-[622px] w-full md:mx-auto lg:mx-0 sm:mx-auto xl:mt-4' src={diu} alt="" />

        <div class=" flex flex-col sm:flex-row absolute  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  gap-40  sm:mt-10">
          <div className="d flex-row flex-1">
            <h1 className='text-black text-3xl font-semibold mb-10'>Welcome to DIU <br />CYCLE ZONE</h1>
            <p className='text-justify text-white  font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores expedita earum iure minima repellendus ea! Itaque sit consequuntur quam numquam laborum culpa velit excepturi cupiditate pariatur earum fugiat quidem accusamus molestiae laboriosam ea natus, quia hic ipsa consectetur dolores modi.</p>
          </div>
          <div className="right flex flex-1 gap-2 items-center justify-center">
            <img className='object-contain  flex-1 flex ' src={diuLogo} alt="" />
            <div className='w-[4px] h-[2rem] bg-red-600'></div>
            <h2>Department of <br />Software Engineering</h2>
          </div>
        </div>

      </div>
      {/* Bnanner End */}


      <div className="mt-3">

        <Benefits></Benefits>

      </div>

    </div>
  )
}

export default home