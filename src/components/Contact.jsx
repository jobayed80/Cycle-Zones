import React, { useState } from 'react'
import { contact } from '../data'

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import AlertTitle from '@mui/material/AlertTitle';
import { TextField } from '@mui/material';



const Contact = () => {


    const [open, setOpen] = React.useState(true);

    let [name, setName] = useState("")
    let [nameErr, setNameErr] = useState("")
    let [email, setEmail] = useState("")
    let [emailErr, setEmailErr] = useState("")
    let [subject, setSubject] = useState("")
    let [subjectErr, setSubjectErr] = useState("")
    let [message, setMessage] = useState("")
    let [messageErr, setMessageErr] = useState("")


    let handleSendMessage = () => {
        if (!name) {
            setNameErr("please enter your full name")
        } else if (!email) {
            setEmailErr("please enter your email")
        }
    }



    return (
        <section id='contact' className='section bg-primary relative'>


            <div
                className="blur"
                style={{
                    background: "#C1F5FF",
                    top: "15rem",
                    width: "212rem",
                    height: "12rem",
                    right: "110rem",
                }}
            >

            </div>


            <div className="container mx-auto">

                <div className="container mx-auto" data-aos="fade-up" data-aos-duration="2000">
                    <div className="flex flex-col items-center text-center">
                        <h2 style={{ color: "var(--red" }} className='section-title  before:content-contact relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                            Contact me
                        </h2>
                        <p className='subtitle text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab porro exercitationem totam quisquam nulla dignissimos asperiores labore, inventore, perferendis at placeat eaque voluptate, neque distinctio suscipit accusamus repellat aut!  </p>
                    </div>


                </div>

                <div className="flex flex-col lg:gap-x-8 lg:flex-row mt-6">

                    {/* info */}
                    <div className="flex flex-col flex-1 items-start space-y-8 mn-12 lg:mb-0 lg:mt-2" data-aos="fade-right" data-aos-duration="2000">
                        {
                            contact.map((item, index) => {
                                const { icon, title, subtitle, description } = item
                                return (
                                    <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                                        <div style={{ color: "var(--red" }} className="text-accent rounded-md w-14 h-14 flex items-center justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                                            {icon}
                                        </div>
                                        <h4 className='font-body text-xl mb-1'>{title}</h4>
                                        <p className='mb-1'>{subtitle}</p>
                                        <p className='font-normal text-accent'>{description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* form */}
                    <div className="space-y-8 w-full max-w-[780px]" data-aos="fade-left" data-aos-duration="2500">
                        {/* notice error */}

                        {

                        }


                        <div className="flex gap-8">

                            <input onChange={(e) => setName(e.target.value)} className='input' type="text" placeholder='Your Full Name' />
                            <input onChange={(e) => setEmail(e.target.value)} className='input' type="email" placeholder='Your Email' />
                        </div>


                        <input onChange={(e) => setSubject(e.target.value)} className='input' type="text" placeholder='Subject' />
                        <textarea onChange={(e) => setMessage(e.target.value)} className='textarea' placeholder='your message'></textarea>
                        <button style={{ background: "var(--red" }} onClick={handleSendMessage} className='btn btn-lg  hover:bg-accent-hover'>Send Message</button>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Contact