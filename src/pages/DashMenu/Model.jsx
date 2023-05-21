import React, { useState, CSSProperties,  useEffect} from 'react'
import BarLoader from "react-spinners/BarLoader";
import './Model.css'


import { Grid } from '@mui/material';

import NavMenuDash from './NavMenuDash'
import HeaderMenu from './HeaderMenu'
import { MdQrCodeScanner } from 'react-icons/md'
import { FaTachometerAlt } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { GiWantedReward } from 'react-icons/gi'
import { GiRefinery } from 'react-icons/gi'

import BarChart from '../../components/BarChart'
import Pie from '../../components/PieChart'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


// qrcode
import QrCodeReader, { QRCode } from 'react-qrcode-reader';


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


// Modal Multiple
import { ModalProvider, ModalContext, ModalRoot } from 'react-multi-modal';


// used for timer
import { getPadTime } from '../Timer/getPadTime'

import dutchBangla from '../../assets/img/dutch-bangla.jpg'
import surecash from '../../assets/img/surecash.jpg'
import rocket from '../../assets/img/rocket.png'
import bkash from '../../assets/img/bkash.webp'
import bkashGateway from '../../assets/img/bkash-payment.png'
import {AiOutlineStar} from 'react-icons/ai'





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #38D39F',
    boxShadow: 24,
    p: 4,
    width: 500,
    height: 500
};



const Model: React.FC = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    // used for QR reader
    const [val, setVal] = React.useState('');

    const handleRead = (code: QRCode) => {
        setVal(code.data);
    };


    // used for spinner
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    // used for Nav Tabs
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    // used for time start
    let [timeleft, setTimeleft] = useState(2 * 450)
    let [isCounting, setIsCounting] = useState(true)
    let minutes = getPadTime(Math.floor(timeleft / 60))
    let seconds = getPadTime(timeleft - minutes * 60)
 


    useEffect(() => {

        const interval = setInterval(() => {
            isCounting &&
                setTimeleft((timeleft) => (timeleft >= 1 ? timeleft - 1 : 0))
        }, 1000);
        return () => {
            clearInterval(interval)
        };
    }, [isCounting])


    return (
        <div className=''>

            <HeaderMenu></HeaderMenu>
            <section className='section bg-white min-h-[900px] relative'>
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row gap-x-48  items-center justify-center ">

                        <div className='top space-y-4'>
                            <h2 className='text-black text-[2.5rem] font-semibold'>Quick Rides Now</h2>
                            <h4 className='text-black text-[2.5rem] font-semibold'>Scanning to Riding</h4>

                        </div>

                        <div onClick={handleOpen} style={{ background: "var(--green" }} className="cursor-pointer scanner-btn flex items-center space-x-3 text-white rounded-full pt-4 pb-4 pl-10 pr-10">
                            <MdQrCodeScanner className='text-[2rem]'></MdQrCodeScanner>
                            <button className='text-[2rem]'>Scan QR</button>
                        </div>

                    </div>




                    <div className="flex flex-col lg:gap-x-8 lg:flex-row mt-12 bg-slate-400 min-h-[600px] rounded-xl">

                        {/* <div className="left bg-slate-500 w-[50%] min-h-[600px] p-9">
                <div className="text flex items-center space-x-5">
                  <p ><FaTachometerAlt className='text-[2.2rem]' style={{ color: 'var(--green)' }}></FaTachometerAlt></p>
                  <h1 className='text-[1.8rem]'>DASHBOARD</h1>
                  <div className="box">

                  </div>

                </div>
              </div> */}

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <div className="  min-h-[600px] p-9">

                                        <div className="title flex items-center space-x-6">
                                            <p ><FaTachometerAlt className='text-[2.2rem]' style={{ color: 'var(--green)' }}></FaTachometerAlt></p>
                                            <h1 className='text-[1.8rem] text-white'>DASHBOARD</h1>

                                        </div>

                                        <Box sx={{}} className='mt-7 border-2 h-[370px] p-5 rounded-xl'>
                                            <div className="flex items-center space-x-2">
                                                <RiDashboardFill className='text-[1.5rem]' style={{ color: 'var(--green)' }}></RiDashboardFill>
                                                <p className='text-[1.2rem] font-semibold text-white'>My Rides States</p>
                                            </div>

                                            <div className="borderBox flex mt-10 items-center justify-center space-x-14 text-white">
                                                <div className='flex-col border-[4px] rounded-[50%] p-7 space-y-4'>
                                                    <p className='text-[2rem]'>0</p>
                                                    <p className='text-[1.7rem]'>Rides</p>
                                                </div>

                                                <div className='flex-col border-[4px] rounded-[50%] p-7 space-y-4'>
                                                    <p className='text-[2rem]'>0</p>
                                                    <p className='text-[1.7rem]'>Costs</p>
                                                </div>

                                            </div>
                                            <div className="mt-8 flex justify-center space-x-16 text-white">
                                                <div className="rounded-xl border-2 p-4">
                                                    <div className="flex space-x-1 items-center">
                                                        <GiWantedReward></GiWantedReward>
                                                        <p className='text-[1.8rem]'>Reward</p>
                                                    </div>
                                                    <div className="flex space-x-2 mt-3">
                                                        <p className='text-[1.5rem]'>200</p>
                                                        <p>Point</p>
                                                    </div>
                                                </div>
                                                <div className="rounded-xl border-2 p-4">
                                                    <div className="flex items-center space-x-1">
                                                        <GiRefinery></GiRefinery>
                                                        <p className='text-[1.8rem]'>Fine</p>
                                                    </div>
                                                    <div className="flex space-x-2 mt-3">
                                                        <p className='text-[1.5rem]'>200</p>
                                                        <p>Tk</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Box>

                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    {/* <BarChart></BarChart> */}
                                    <Pie></Pie>
                                </Grid>
                            </Grid>
                        </Box>



                    </div>



                    {/* Used for open model 1 */}
                    <Modal


                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className='m-auto rounded-2xl bg-slate-500 '>
                            {/*                             
                            <div id="modal-modal-title" className='text-center text-[2rem] text-white'>
                                Scanning Cycle few take a moments
                            </div>


                            <div className="flex items-center justify-center  mt-5 rounded-full">
                                <QrCodeReader delay={100} width={400} height={400} onRead={handleRead} />
                                <p>{val}</p>

                            </div>

                            <div className="flex justify-between mt-6 items-center">
                                <h2 className='text-[2rem]'>Cycle ID: JD15</h2>
                                <button style={{ background: "var(--green)" }} className='text-[1.8rem] text-white border-2 pt-3 pb-3 pl-7 pr-7 rounded-2xl'>Confirm</button>
                            </div> */}

                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Scanning" value="1" />
                                        <Tab label="Rides" value="2" />
                                        <Tab label="payment" value="3" />
                                        <Tab label="Gateway" value="4" />
                                        <Tab label="feadback" value="5" />

                                    </TabList>
                                </Box>


                                <TabPanel value="1" >
                                    <div id="modal-modal-title" className='text-center text-[2rem] text-white'>
                                        Scanning Cycle few take a moments
                                    </div>


                                    <div className="flex items-center justify-center  mt-5 rounded-full">
                                        <QrCodeReader delay={100} width={400} height={400} onRead={handleRead} />
                                        <p>{val}</p>

                                    </div>

                                    <div className="flex justify-between mt-6 items-center">
                                        <h2 className='text-[2rem]'>Cycle ID: JD15</h2>
                                        <button  style={{ background: "var(--green)" }} className='text-[1.8rem] text-white border-2 pt-3 pb-3 pl-7 pr-7 rounded-2xl' onChange={handleChange}>Confirm</button>
                                    </div>

                                </TabPanel>

                                <TabPanel value='2' className='w-full'>

                                    <div id="modal-modal-title" className='text-left text-[2rem] text-white'>
                                        Riding Live Status:
                                    </div>


                                    <div className="flex flex-col  mt-12 bg-pink-100 w-full h-[138px] rounded-lg">

                                        <div className="box">
                                            <h2 className='text-black p-2 font-semibold'>Time Remainder <sub className='font-normal italic'>( limit 15 minutes )</sub></h2>
                                            <h2 className='text-black text-center font-extrabold text-[1.8rem] mt-2'>
                                            <span >{minutes}</span>
                                              <span>:</span>
                                              <span>{seconds}</span><sub className='font-normal'>Minutes</sub></h2>
                                            <p className='text-red-500 text-center mt-4'>Limit time before check out then get Fine per 1 Minutes 5 Tk.</p>
                                        </div>


                                    </div>

                                    <div className="details flex text-black mt-10 justify-between">
                                        <div className="left">
                                            <h2>Start Time : <span>11:10 am</span></h2>
                                            <h2>Cycle Id : <span>DH101</span></h2>
                                            <h2>Add Fine : <span>00.0 Tk</span></h2>
                                            <h2>Total Cost : <span>5:00 Tk</span></h2>
                                        </div>
                                        <div className="right flex items-end">
                                            <button style={{ background: "var(--green)" }} className='text-[1.8rem] text-white border-2 pt-3 pb-3 pl-7 pr-7 rounded-2xl'>Checkout</button>
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel value='3'>
                                    <h1 className='-mt-4 mb-3 font-semibold text-[1.5rem]'>Choose Payments</h1>
                                    <div className="flex flex-col w-full h-[350px]">
                                        <div className="top flex justify-around">
                                            <img className='object-contain w-[160px] h-[160px] rounded-lg' src={dutchBangla} alt="" /> 
                                            <img className='object-contain w-[160px] h-[160px] rounded-lg' src={surecash} alt="" /> 
                                        </div>
                                        <div className="bottom mt-4 flex justify-around">
                                            <img className='object-contain w-[160px] h-[160px] rounded-lg' src={bkash} alt="" /> 
                                            <img className='object-contain w-[160px] h-[160px] rounded-lg' src={rocket} alt="" /> 
                                        </div>
                                    </div>
                                </TabPanel>

                                <TabPanel value='4'>
                                   
                                    <div className="flex flex-col w-full h-[350px]">
                                        <img className='object-contain w-full h-[370px] rounded-lg' src={bkashGateway} alt="" />
                                    </div>

                                </TabPanel>


                                <TabPanel value='5'>
                                    <div className="flex flex-col items-center justify-center w-full h-[350px] bg-gray-600 rounded-lg">
                                        <h1 className='text-[2rem] font-bold text-center'>Pleae rate us</h1>
                                        <p className='text-center mt-4 text-[1.2rem]'>We value your feedback</p>
                                        <p className='text-center mt-4 text-[1.2rem]'>How do you feel about (your business)</p>
                                        <div className="icons flex gap-4 items-center justify-center mt-10 text-[2.5rem]">
                                            <AiOutlineStar></AiOutlineStar>
                                            <AiOutlineStar></AiOutlineStar>
                                            <AiOutlineStar></AiOutlineStar>
                                            <AiOutlineStar></AiOutlineStar>
                                            <AiOutlineStar></AiOutlineStar>
                                        </div>
                                    </div>
                                </TabPanel>



                            </TabContext>



                        </Box>
                    </Modal>

                    {/* Used for open model 2 */}
                    {/* <Modal


                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className='m-auto rounded-2xl bg-slate-500 '>
                            <div id="modal-modal-title" className='text-left text-[2rem] text-white'>
                                Riding Live Status:
                            </div>


                            <div className="flex flex-col  mt-12 bg-pink-100 w-full h-[120px] rounded-lg">

                                <div className="box ">
                                    <h2 className='text-black p-2 font-semibold'>Time Remainder <sub className='font-normal italic'>( limit 15 minutes )</sub></h2>
                                    <h2 className='text-black text-center font-extrabold text-[1.8rem] mt-2'>15:55  <sub className='font-normal'>Minutes</sub></h2>
                                    <p className='text-red-500 text-center mt-4'>Limit time before check out then get Fine per 1 Minutes 5 Tk.</p>
                                </div>


                            </div>

                            <div className="details flex text-black mt-10 justify-between">
                                <div className="left">
                                    <h2>Start Time : <span>11:10 am</span></h2>
                                    <h2>Cycle Id : <span>DH101</span></h2>
                                    <h2>Add Fine : <span>00.0 Tk</span></h2>
                                    <h2>Total Cost : <span>5:00 Tk</span></h2>
                                </div>
                                <div className="right flex items-end">
                                    <button style={{ background: "var(--green)" }} className='text-[1.8rem] text-white border-2 pt-3 pb-3 pl-7 pr-7 rounded-2xl'>Checkout</button>
                                </div>
                            </div>

                            



                        </Box>
                    </Modal> */}




                </div>

            </section>


        </div>
    )
}

export default Model    