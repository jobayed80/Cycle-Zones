import React, { Component, useEffect } from 'react'
import { useState } from 'react';

// etar connection library gula hoccce index.js theke
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber ,signOut} from "firebase/auth";
// Used for PhoneInput with Country
import 'react-phone-number-input/style.css'


import Header from '../../components/Header';


import {
    Button, Form, Box, Grid, Container, TextField, InputAdornment, FormControl, InputLabel, OutlinedInput
    , Modal, Typography
} from '@mui/material'


// Used for PhoneInput with Country
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'
import { getPadTime } from '../Timer/getPadTime'
import { Tabs, Tab } from 'react-bootstrap';
import { useNavigate , Link} from 'react-router-dom';


import otp from '../../assets/img/otp.gif'
import logo from '../../assets/img/verification.jpg'

//oto code

import OtpInput from 'react-otp-input';
import OTPInput, { ResendOTP } from "otp-input-react";

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { IoMdArrowBack } from "react-icons/io";






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






const OtpVerification = () => {

    const auth = getAuth(); //Firebse
    console.log("Jobayed", auth)
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false); //this for alert notice
    const [key, setKey] = useState('home');

    const [OTP, setOTP] = useState("");


    const [value, setValue] = useState()






   // ------------------------------------- Used for Phone Authentication ------=========================== STart
   let [phone, setPhone] = useState("")
   let [otp, setOtp] = useState("")
   let [otpEmptyErr , setOtpEmptyErr] = useState("")

 





  



   
   // ------------------------------------- Used for Phone Authentication ------=========================== STart


   let onSignInSubmit = (e) => {
    e.preventDefault();
    // configureCaptcha();
    console.log("kaj hoice")
    console.log(phone)
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the

            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent")


            // ...
        }).catch((error) => {
            // Error; SMS not sent
            console.log(error)
            console.log("Error; SMS not sent")
            // ...
        });
}



let onSubmitOTP = (e) => {
    e.preventDefault()
    console.log(otp + "OTP paichi")
    if(!otp){
        setOtpEmptyErr("please enter your verification code")
        
    }
    else{
        window.confirmationResult.confirm(otp).then((result) => {
            // User signed in successfully.
    
            const user = result.user;
            console.log(user)
            // console.log(JSON.stringify(user))
            // alert("User is verified")
            navigate('/dash')
    
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            console.log(error)
        });
    
    }
    

}











   // ------- This part for Resend OTP Code Start--------
   let configureCaptcha = () => {

    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
            onSignInSubmit();
            alert("Recaptcha verified")

        },
        defaultCountry: "BD",
        'expired-callback': (response) => {
            // Response expired. Ask user to solve reCAPTCHA again.
            console.log("recaptcha expired...")
        }
    }, auth);
}



   let [timeleft, setTimeleft] = useState(2 * 60)
   let [isCounting, setIsCounting] = useState(true)
   let minutes = getPadTime(Math.floor(timeleft / 60))
   let seconds = getPadTime(timeleft - minutes * 60)

   let resendOTP = (e) => {
       e.preventDefault()
       configureCaptcha()
       window.recaptchaVerifier.recaptcha.reset()
       window.recaptchaVerifier.clear()
       console.log("resend kaj hbe ")

       window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
           'size': 'normal',
           'callback': (response) => {
               // reCAPTCHA solved, allow signInWithPhoneNumber.
               // ...

               onSignInSubmit();
               alert("Recaptcha verified")

           },
           defaultCountry: "BD",
           'expired-callback': (response) => {
               // Response expired. Ask user to solve reCAPTCHA again.
               // ...
               console.log("recaptcha expired...")
           }
       }, auth);

       const appVerifier = window.recaptchaVerifier;
       signInWithPhoneNumber(auth, phone, appVerifier)
           .then((confirmationResult) => {
               // SMS sent. Prompt user to type the code from the message, then sign the

               window.confirmationResult = confirmationResult;
               console.log("OTP has been sent")


               // ...
           }).catch((error) => {
               // Error; SMS not sent
               console.log(error)
               console.log("Error; SMS not sent")
               // ...
           });
       // ------- This part for Resend OTP Code End--------


   }
   //  sconds start code
   useEffect(() => {

       const interval = setInterval(() => {
           isCounting &&
               setTimeleft((timeleft) => (timeleft >= 1 ? timeleft - 1 : 0))
       }, 1000);
       return () => {
           clearInterval(interval)
       };
   }, [isCounting])
   // ------- This part for Resend OTP Code ENd--------









  return (
    <>

    <Header></Header>
    <section className='section bg-white min-h-[900px] relative'>

        {/* data-aos="fade-up" data-aos-duration="2000" */}
        <div className="container mx-auto">


            <div className="flex flex-col  xl:mt-16 sm:mt-24 md:mt-24 mx-auto text-center ">
            
                {/* <img className='object-cover h-[210px] w-[190px] md:mx-auto lg:mx-auto sm:mx-auto flex items-center' src={logo} alt="" /> */}

                      {/* {
                          otpEmptyErr ?
                              
                          console.log("OTp empty")

                              : ""
                      } */}

                <Box className='mx-auto ' sx={{ flexGrow: 1 }}>

                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                      {/* <h1 className='  text-black font-extrabold text-[2rem] mb-4 mt-2'>Verify your Phone Number</h1> */}
                                      {/* <p className='w-[21rem] flex items-center text-clip text-center my-6'>Enter your OTP code here</p> */}
                                      <p className='text-left flex flex-row items-center gap-0 '><Link className='flex flex-row items-center' to={'/phoneAuthentication'}><IoMdArrowBack></IoMdArrowBack>Go Back</Link></p>
                                      <div className=' rounded-xl'>
                                        <form action="" className='py-10 px-4 shadow-2xl'>
                                        <p className='text-black font-extrabold text-[1.5rem] mb-10'>Enter Verification code</p>
                                          <OtpInput

                                              value={otp}
                                              onChange={setOtp}
                                              numInputs={6}
                                              inputStyle="inputStyle"
                                              shouldAutoFocus={true}
                                              renderSeparator={<span>-</span>}
                                              renderInput={(props) => <input {...props} />}
                                          />
                                        </form>
                                          {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}

                                      </div>

                                      <div >

                                      </div>

                                      {/* <div >
                                          <input autocomplete="off" maxlength="1" aria-label="Please enter OTP character 1" class="inputStyle" type="text" value="" style="width: 1em; text-align: center;"><span>-</span><input autocomplete="off" maxlength="1" aria-label="Please enter OTP character 2" class="inputStyle" type="text" value="" style="width: 1em; text-align: center;"><span>-</span><input autocomplete="off" maxlength="1" aria-label="Please enter OTP character 3" class="inputStyle" type="text" value="" style="width: 1em; text-align: center;"><span>-</span><input autocomplete="off" maxlength="1" aria-label="Please enter OTP character 4" class="inputStyle" type="text" value="" style="width: 1em; text-align: center;">

                                          </div> */}
                                      

                                <button onClick={onSubmitOTP} style={{ background: 'var(--green' }} className='btn btn-md bg-accent hover:bg-accent-hover transition-all w-full rounded-full text-xl mt-12 '  >
                                    Next Step
                                </button>
                                {/* <p className='mt-2'>Resend OTO in <small>jj</small></p>
                                <a onClick={resendOTP} href="">Resend OTP</a> */}
                                <form>
                                          <h1 className='text-red-500'>
                                              <span>Resend OTP in </span>
                                              <span >{minutes}</span>
                                              <span>:</span>
                                              <span>{seconds}</span>
                                          </h1>

                                          <button onClick={resendOTP}>Resends OTP</button>
                                          {/* <button onClick={hadleLogout}>Logout</button> */}
                                      </form>
                                {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                                {/* <div className='mt-4 mx-auto rounded-lg border border-red-800' id="recaptcha-container"></div> */}

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

export default OtpVerification



