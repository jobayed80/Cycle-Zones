import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/Login/SignIn';
import PhoneAuthentication from './pages/Login/PhoneAuthentication';
import OtpVerification from './pages/Login/OtpVerification';
import Home from './pages/Home/home';
import loader from './components/loader';

export const AppAccess = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home></Home>}> </Route>
                    <Route path="/phoneAuthentication" element={<PhoneAuthentication></PhoneAuthentication>}> </Route>
                    <Route path="/otpVerification" element={<OtpVerification></OtpVerification>}> </Route>
                    <Route path="/signin" element={<SignIn></SignIn>}> </Route>
                    <Route path="/load" element={<loader></loader>}> </Route>


                </Routes>

            </BrowserRouter>
        </div>
    )
}
