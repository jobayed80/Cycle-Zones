import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bands from './components/Bands';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Services from './Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';


import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from './components/banner/Banner';
import  Login  from './components/Login/login';
import SignIn from './pages/Login/SignIn';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PhoneAuthentication from './pages/Login/PhoneAuthentication';
import OtpVerification from './pages/Login/OtpVerification';
import Home from './pages/Home/home';



// import components

const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  
  
  return(
    <div className='overflow-x-hidden '>

<BrowserRouter>
        <Routes>

          <Route path="/" element={<SignIn></SignIn>}> </Route>
          <Route path="/phoneAuthentication" element={<PhoneAuthentication></PhoneAuthentication>}> </Route>
          <Route path="/otpVerification" element={<OtpVerification></OtpVerification>}> </Route>
          <Route path="/home" element={<Home></Home>}> </Route>
          

        </Routes>

      </BrowserRouter>
       
       {/* <SignIn></SignIn> */}
        {/* <Login></Login> */}
        {/* <Header></Header> */}
        {/* <Banner></Banner> */}
        {/* <Hero></Hero>
        <Bands></Bands>
        <About></About>
         <Skills></Skills>
        <Portfolio></Portfolio>
        <Services></Services>
        <Testimonials></Testimonials> */}
        <Contact></Contact>
        <Footer></Footer>
        <BackToTopBtn></BackToTopBtn>
        <div style={{height:"auto"}}></div>
    </div>
  );
};

export default App;
