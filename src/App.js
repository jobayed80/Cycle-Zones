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
import Login from './components/Login/login';
import SignIn from './pages/Login/SignIn';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PhoneAuthentication from './pages/Login/PhoneAuthentication';
import OtpVerification from './pages/Login/OtpVerification';
import Home from './pages/Home/home';


// dashboard and thems start-------------
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from './scenes/global/TopBar';
import Dashboard from './scenes/dashboard'
import SideBar from './scenes/global/SideBar'
import Team from './scenes/team'
import Invoices from './scenes/invoices'
import Contacts from './scenes/contacts'
import Bar from './scenes/bar'
import Form from './scenes/form'
import Line from './scenes/line'
import Pie from './scenes/pie'
import FAQ from './scenes/faq'
import Geography from './scenes/geography'
import Calendar from "./scenes/calendar";
import { AppAccess } from './AppAccess';




import AppMenu from './AppMenu';

// dashboard and thems end-------------




// import components

const App = () => {



  


  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);




  return (
    <div className='overflow-x-hidden '>
      
    
      
      <AppAccess></AppAccess>
      <AppMenu></AppMenu>
       {/* <BrowserRouter>
        <Routes>

          <Route path="/dash" element={<AppDashboard></AppDashboard>}> </Route>
          

        </Routes>

      </BrowserRouter>
        */}

      {/* <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          

          <div className="app">
            
            <SideBar isSidebar={isSidebar}></SideBar>

            <div style={{ height: "100%", width: "100%" }}>

              <main className="content">
                <TopBar setIsSidebar={setIsSidebar} />
                <BrowserRouter>
                  <Routes>

                    <Route path="/" element={<Dashboard />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/geography" element={<Geography />} />
                    

                  </Routes>
                </BrowserRouter>

              </main>
            </div>

          </div>
        </ThemeProvider>
      </ColorModeContext.Provider> */}

      {/* <BrowserRouter>
        <Routes>

          <Route path="/" element={<SignIn></SignIn>}> </Route>
          <Route path="/phoneAuthentication" element={<PhoneAuthentication></PhoneAuthentication>}> </Route>
          <Route path="/otpVerification" element={<OtpVerification></OtpVerification>}> </Route>
          <Route path="/home" element={<Home></Home>}> </Route>


        </Routes>

      </BrowserRouter> */}

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
      {/* <Contact></Contact> */}
      <Footer ></Footer>
      <BackToTopBtn></BackToTopBtn>
      <div style={{ height: "auto" }}></div>
    </div>
  );
};

export default App;
