import React, { Component, useEffect } from 'react'
import { useState } from 'react';

// etar connection library gula hoccce index.js theke
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber ,signOut} from "firebase/auth";
// Used for PhoneInput with Country
import 'react-phone-number-input/style.css'


import Header from '../../components/Header';


import {
    Button, Form, Box, Grid, Container, TextField, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput
    , Modal, Typography
} from '@mui/material'


// Used for PhoneInput with Country
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'
import { getPadTime } from '../Timer/getPadTime'
import { Tabs, Tab } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


import otp from '../../assets/img/otp.gif'
import logo from '../../assets/img/otp.gif'





// used for Phone Authentication Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 470,
    bgcolor: 'background.paper',

    boxShadow: 2,
    p: 4,
};







const PhoneAuthentication = () => {


    const auth = getAuth(); //Firebse
    console.log("Jobayed", auth)
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false); //this for alert notice
    const [key, setKey] = useState('home');





    const [value, setValue] = useState()






   // ------------------------------------- Used for Phone Authentication ------=========================== STart
   let [phone, setPhone] = useState("")
   let [otp, setOtp] = useState("")

   let configureCaptcha = () => {
        console.log("Recaptcha start")

       window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
           'size': 'normal',
           'callback': (response) => {
               onSignInSubmit();
               alert("Recaptcha verified")
               console.log("Recaptcha verified")


           },
           defaultCountry: "BD",
           'expired-callback': (response) => {
               // Response expired. Ask user to solve reCAPTCHA again.
               console.log("recaptcha expired...")
           }
       }, auth);
   }

   let onSignInSubmit = (e) => {
       e.preventDefault();
       configureCaptcha();
       console.log("kaj hoice")
       console.log(phone)
       const appVerifier = window.recaptchaVerifier;
       signInWithPhoneNumber(auth, phone, appVerifier)
           .then((confirmationResult) => {
               // SMS sent. Prompt user to type the code from the message, then sign the

               window.confirmationResult = confirmationResult;
               console.log("OTP has been sent")
               navigate('/otpVerification')


               // ...
           }).catch((error) => {
               // Error; SMS not sent
               console.log(error)
               console.log("Error; SMS not sent")
               // ...
           });
   }




   
   // ------------------------------------- Used for Phone Authentication ------=========================== STart



    return (




        <>

            <Header></Header>
            <section className='section bg-white min-h-[900px] relative'>

                {/* data-aos="fade-up" data-aos-duration="2000" */}
                <div className="container mx-auto">

                    <div className="flex flex-col  xl:mt-16 sm:mt-24 md:mt-24 mx-auto text-center ">
                        <img className='object-cover h-[210px] w-[190px] md:mx-auto lg:mx-auto sm:mx-auto flex items-center' src={logo} alt="" />

                        <Box className='mx-auto ' sx={{ flexGrow: 1 }}>

                            <form onSubmit={onSignInSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <h1 className='  text-black font-extrabold text-[2rem] mb-4 mt-2'>Add your Phone Number</h1>
                                        <p className='w-[21rem] flex items-center text-clip'> 3 Add your phone number. We'll send you a Verification code so we know you're all</p>
                                        <PhoneInput
                                            style={{ width: "100%" }}
                                            placeholder="Enter phone number"
                                            defaultCountry="BD"
                                            international={true}
                                            countryCallingCodeEditable={false}
                                            nableSearch={true}
                                            value={phone}
                                            onChange={setPhone}
                                            className='mt-9 w-auto py-4 px-6 font-light rounded-full border border-gray-300'
                                            error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        />
                                        <div className='validate mt-4 text-xl text-justify font-light text-teal-900'>
                                            <small className=' mr-8'>Exactly 11 numbers: {phone && isValidPhoneNumber(phone) ? 'true' : 'false'}</small>
                                            <small>National: {phone && formatPhoneNumber(phone)}</small> <br></br>
                                            <small>International: {phone && formatPhoneNumberIntl(phone)}</small> <br></br>
                                        </div>

                                        <button onClick={onSignInSubmit} style={{ background: 'var(--green' }} className='btn btn-md bg-accent hover:bg-accent-hover transition-all w-full rounded-full text-xl mt-12'  >
                                            Next Step
                                        </button>
                                        <p className='mt-2'>I accept the <a className='text-lg text-tertiary' href="">Terms and Conditions</a></p>
                                        <div className='mt-4 mx-auto rounded-lg border border-red-800' id="recaptcha-container"></div>

                                    </Grid>

                                </Grid>

                            </form>
                        </Box>


                        {/* 
                        <Box sx={{ ...style }} className="modalBox">
                           
                        
                            <form onSubmit={onSignInSubmit}>
                           


                                <Grid container spacing={2} >
                                    <div id="sign-in-button"></div>
                                    <Grid item xs={12} className="gird">

                                        <PhoneInput
                                            style={{ width: "100%" }}
                                            placeholder="Enter phone number"
                                            defaultCountry="BD"
                                            international={true}
                                            countryCallingCodeEditable={false}
                                            nableSearch={true}
                                            value={phone}
                                            onChange={setPhone}

                                            error={phone ? (isValidPhoneNumber(phone) ? undefined : 'Invalid phone number') : 'Phone number required'} />

                                    </Grid>

                                    <Grid item xs={12} className="gird">

                                        <Typography style={{ fontSize: "15px" }} id="modal-modal-description" sx={{ mt: -1 }}>
                                            <Grid container spacing={1}>

                                                <Grid item xs={5} className="gird">

                                                    <small>Is valid: {phone && isValidPhoneNumber(phone) ? 'true' : 'false'}</small>
                                                </Grid>
                                                <Grid item xs={7} className="gird">
                                                    <small>National: {phone && formatPhoneNumber(phone)}</small>
                                                </Grid>
                                                <Grid item xs={12} className="gird">
                                                    <small>International: {phone && formatPhoneNumberIntl(phone)}</small>
                                                </Grid>

                                            </Grid>
                                        </Typography>

                                    </Grid>

                                    <Grid item xs={12} className="gird">
                                        <input className='btnSUBMIT' style={{ width: "100%", padding: "10px", marginTop: '2px' }} type="submit" value="Submit"></input>
                                    </Grid>

                                    <div id="recaptcha-container"></div>


                                </Grid>

                            </form>

                        </Box> */}



                    </div>
                </div>
            </section>



            {/* <PhoneInput
                    defaultCountry="RU"
                    value={value}
                    onChange={setValue} /> */}



            {/* <h2>Login Form</h2>
                <form onSubmit={this.onSignInSubmit}>
                    
                    <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                    <div id="recaptcha-container"></div>
                </form>

                <h2>Enter OTP</h2>
                <form onSubmit={this.onSubmitOTP}>
                    <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form> */}
        </>

    )

}



export default PhoneAuthentication