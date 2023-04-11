import React, { useEffect, useState } from 'react'
import Header from '../Header'
import image from '../../assets/img/login.svg'
import logo from '../../assets/img/cycle.gif'
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from 'react-icons/fc'
import { FcPhone } from 'react-icons/fc'

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


// data 
import { login_social } from '../../data'
//sweet alert
import Swal from 'sweetalert2'
//firebase
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";




const SignIn = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate

    let [email, setEmail] = useState("")
    let [emailErr, setEmailErr] = useState("")
    let [pass, setPass] = useState("")
    let [passErr, setPassErr] = useState("")
    let [passLengthErr, setPassLengthErr] = useState("")
    let [emailPatternErr, setEmailPatternErr] = useState("")

    const [open, setOpen] = useState(true);



    // Login Button
    let handleLogin = () => {
        const emailRege = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[diu.edu]+(?:\.[bd]+)*$/;
        if (!email) {
            setEmailErr("please enter your email")
        }
        else if (!pass) {
            setPassErr("please enter your password")
            setEmail("")
        }
        else if (!emailRege.test(email)) {
            setEmailErr("")
            setEmailPatternErr("please must be used 'diu' email")
          }
    }






    // Google signin Notice
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  // Google Authentication -----------------------------------
  let handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (user.email.includes("@diu.edu.bd")) {
          console.log(user)
          // Toast.fire({
          //   icon: 'success',
          //   title: 'Signed in successfully'
          // })

          navigate("/loading")





        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please must be used varsity email',

          })
        }

      }).catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  }






    return (
        <>

            <Header></Header>

            <section className='section bg-white min-h-[900px] relative'>

                {/* data-aos="fade-up" data-aos-duration="2000" */}
                <div className="container mx-auto">

                    <div className="flex flex-col xl:flex-row gap-24 xl:mt-36 sm:mt-24 md:mt-24 ">






                        <img className=' object-cover h-[450px] w-[666px] md:mx-auto lg:mx-0 sm:mx-auto xl:mt-4 rounded-2xl m-11' src={image} alt="" />

                        <div className="flex flex-col items-center text-center lg-items-start lg:text-left ">

                            <div className="flex flex-col" >
                                <img className='object-cover h-[150px] w-[160px] md:mx-auto lg:mx-auto sm:mx-auto flex items-center' src={logo} alt="" />

                                <div className="error-notice">
                                    {
                                        emailErr ?
                                            <Collapse in={open}>
                                                <Alert variant="outlined" severity="error"
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setOpen(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                    sx={{ mb: 2 }}
                                                >
                                                    {emailErr}
                                                </Alert>
                                            </Collapse>

                                            :

                                            passErr ?
                                                <Collapse in={open}>
                                                    <Alert variant="outlined" severity="error"
                                                        action={
                                                            <IconButton
                                                                aria-label="close"
                                                                color="inherit"
                                                                size="small"
                                                                onClick={() => {
                                                                    setOpen(false);
                                                                }}
                                                            >
                                                                <CloseIcon fontSize="inherit" />
                                                            </IconButton>
                                                        }
                                                        sx={{ mb: 2 }}
                                                    >
                                                        {passErr}
                                                    </Alert>
                                                </Collapse>
                                                : ""
                                    }


                                </div>



                                <h2 style={{ color: "var(--green" }} className='text-3xl lg:4xl font-medium lg:font-extrabold mb-3 before:content-login relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden
                        before:lg:block'>
                                    <small className='text-black '>Sign'In' to</small> DIU,Cycle Zone
                                </h2>
                                {/* <p  className='mb-4 text-accent'>Web Designing</p> */}
                                <hr className='mb-8 opacity-5' />
                                {/* <input onChange={(e) => setName(e.target.value)} className='input' type="text" placeholder='Your Full Name' /> */}
                                <input className='input mb-4 active' type="email" placeholder='Your Email' onChange={(e) => { setEmail(e.target.value) }} />
                                <input className='input' type="pass" placeholder='Your Password' onChange={(e) => { setEmail(e.target.value) }} />
                                <hr className='mt-2'></hr>
                                <div className='flex justify-between mt-4'>
                                    <p className='flex gap-2'> <input className='cursor-pointer' type="checkbox" /> Remeber me</p>
                                    <a href="">Forgot password</a>
                                </div>
                            </div>

                            <button onClick={handleLogin} style={{ background: 'var(--green' }} className='btn btn-md bg-accent hover:bg-accent-hover transition-all w-full rounded-lg text-xl mt-10 '>SignIn</button>
                            <div className="login-bootom-part">
                                <p className='mt-2 mb-2 text-center'> <small className='text-black'>Not a member yet?</small> <a href=""> Create an account</a></p>
                                <p className='text-center'>-or-</p>
                            </div>
                            <nav>
                                <ul className='flex space-x-1 capitalize text-[20px]  w-full '>
                                   
                                        
                                            <li onClick={handleGoogle} className="cursor-pointer m-4 items-center justify-center rounded-full p-2 transition duration-500 ease-in-out bg-teal-500 hover:bg-teal-200">
                                                <FcGoogle></FcGoogle>
                                            </li>
                                            <li className="cursor-pointer m-4 items-center justify-center rounded-full p-2 transition duration-500 ease-in-out bg-teal-500 hover:bg-teal-200">
                                                <FcPhone></FcPhone>
                                            </li>
                                       
                                   
                                </ul>
                            </nav>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default SignIn